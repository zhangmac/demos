router.get('/getMusic',function(req,res) {
	var musicList = [
      '在人间',
      'All of me',
      '途中',
      '如果的事',
      '再见',
      '理想三旬',
      'I am you',
      '梵高先生',
      'because of you',
      '问',
      '七里香',
      'good time',
      '下雨',
      'Fade',
      '丑八怪'
	]
  	var data =[];
  	for (var i = 0; i < 5; i++) {
  		var index = parseInt(Math.random()*musicList.length)
  		data.push(musicList[index])
  		musicList.splice(index,1)
  	}
  	res.header("Access-Control-Allow-Origin", "*")
    res.send(data);

})