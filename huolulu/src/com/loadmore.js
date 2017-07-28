var $ = require('./jquery')

	function Loadmore($ct) {
     this.$ct = $ct
     this.init()
     this.showNew()
     var _this =this
     $(window).on('resize',function() {
    _this.waterfall()
  })

	}

	Loadmore.prototype = {
     init: function() {
     	 this.page = 1
     	 this.isDataArrived = true
     },

     showNew: function() {
     	var _this =this
     	if (this.isVisible($('.btn'))) {
              this.isDataArrived = false
              $.ajax({
     		url:'https://api.tianapi.com/it/?key=e0fdaae9ecc05a190d08d32b9e4c8991',
     		method:'get',
     		data: {
     		num: 20,
     		page: _this.page
           }
        }).done(function(res){
             _this.display(res)
             _this.waterfall()
           }).fail(function() {
              alert('服务器出故障了，请稍后再试')
           })
            _this.page++
        $('.waterfall .btn').on('click',function(){
        $.ajax({
     		url:'https://api.tianapi.com/it/?key=e0fdaae9ecc05a190d08d32b9e4c8991',
     		method:'get',
     		data: {
     		num: 20,
     		page: _this.page
           }
        }).done(function(res){
             _this.display(res)
             _this.waterfall()
           }).fail(function() {
              alert('服务器出故障了，请稍后再试')
           })
          _this.page++
        })
        }
     },

     isVisible: function(node) {
     	 if(node.offset().top < $(window).scrollTop()+$(window).height())     //检测页面尾部的元素是否可见
           return true
     },
     display: function(res) {
         this.isDataArrived =false
         var data=res.newslist
    for (var i = 0; i < data.length; i++) {
      var newTitle= data[i].title,
          newDes = data[i].description,
          newPicUrl = data[i].picUrl,
          newUrl = data[i].url                                                     //将请求来的数据创建DOM节点

      var html=''
          html+='<li>'
          html+='<a href='+newUrl+'>'+'<img src='+newPicUrl+' alt="图片加载失败" >'
          html+='<h3>'+newTitle+'</h3></a>'
          html+='<p>'+newDes+'</p></li>'
      this.$ct.append(html)
    }
  this.isDataArrived = true
     },

    waterfall: function() {
      var $imgs = this.$ct.find('li')
      var imgWidth = $imgs.width()
      var colLength = parseInt(this.$ct.width()/imgWidth)
      var arr = []
      for (var i = 0; i < colLength; i++) {
      arr[i] = 0
      }
      
      $imgs.each(function() {
      var minvalue = Math.min.apply(null,arr)
      var minIndex = arr.indexOf(minvalue)      
      $(this).css({
      top:arr[minIndex], 
      left:$(this).outerWidth(true) * minIndex
      })
      arr[minIndex] += $(this).outerHeight(true)
      })
      var maxvalue = Math.max.apply(null,arr)
      $('.news').height(maxvalue)	
    } 
   }
 module.exports = Loadmore
