var express = require('express');
var router = express.Router();
var path = require('path');
var fs = require('fs');
var util = require('util');

const fileInfo = util.promisify(fs.stat);

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Example');
});

router.get('/show-video/:videoName', function(req, res, next) {
  const videoName = req.params.videoName
  if(!videoName){
    res.send("The name of the video needs to be defined /example/show-video/{videoName}")
    return next()
  }

  const fileName = path.join(__dirname,'..', "videos", videoName)
  
  if(fs.existsSync(fileName)){
    console.log(path.extname(fileName))
    if(path.extname(fileName) == '.mp4'){
      res.type('video/mp4')
      res.sendFile(fileName)
    }
  }else{
    res.send(`${videoName}: Does not exists`)
  }
});

router.get('/stream-video/:videoName', function(req, res, next) {
  const videoName = req.params.videoName
  if(!videoName){
    res.send("The name of the video needs to be defined /example/show-video/{videoName}")
    return next()
  }

  const fileName = path.join(__dirname,'..', "videos", videoName)
  
  if(fs.existsSync(fileName)){
    console.log(path.extname(fileName))
    if(path.extname(fileName) == '.mp4'){
      res.writeHead(200, {
        'Content-Type': 'video/mp4'
      })
      fs.createReadStream(fileName).pipe(res)
    }
  }else{
    res.send(`${videoName}: Does not exists`)
  }
});

router.get('/vod-video/:videoName', async function(req, res, next) {
  const videoName = req.params.videoName

  if(!videoName){
    res.send("The name of the video needs to be defined /example/show-video/{videoName}")
    return next()
  }

  const fileName = path.join(__dirname,'..', "videos", videoName);
  
  
  if(fs.existsSync(fileName)){ // Validating if file exists
    if(path.extname(fileName) == '.mp4'){ // Validating video format
      
      const { size } = await fileInfo(fileName)
      const range = req.headers.range

      if(range){

        let [start, end] = range.replace(/bytes=/, '').split('-')
        start = parseInt(start, 10)
        end = end ? parseInt(end, 10) : size - 1
        
        res.writeHead(206, {
          'Content-Type': 'video/mp4',
          'Content-Length': end - start + 1,
          'Accept-Ranges': 'bytes',
          'Content-Range': `bytes ${start}-${end}/${size}`
        })
        
        fs.createReadStream(fileName, {start, end}).pipe(res)
      }else{
        res.writeHead(200, {
          'Content-Type': 'video/mp4',
          'Content-Length': size
        })
        
        fs.createReadStream(fileName).pipe(res)
      }

    }else{
      res.send(`${fileName} has a wrong format`)
    }
  }else{
    res.send(`${videoName}: Does not exists`)
  }
});

module.exports = router;