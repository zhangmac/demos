
define(['jquery'],function($){

  function Carousel(ct) {
    this.ct = ct
    this.init()
    this.bind()   
  }

  Carousel.prototype = {
    init: function() {
      var _this=this
      var $imgCt = this.$imgCt = this.ct.find('.img-ct'),
          $arrow =  this.$arrow = this.ct.find('.arrow'),
          $imgs = this.$imgs = this.ct.find('.img-ct>li'),
          imgWidth =this.imgWidth = $imgs.width(),
          $preBtn = this.$preBtn = this.ct.find('.pre'),
          $nextBtn = this.$nextBtn = this.ct.find('.next'),
          $bar = this.$bar = this.ct.find('.sliderbar>li')
      
          this.count = 0
          this.isAnimate = false
          this.clock = setInterval(function() {
          _this.autoplay()
      },2000) 
                console.log(imgWidth)
        this.$imgCt.append(this.$imgs.eq(0).clone())
        this.$imgCt.prepend(this.$imgs.eq(3).clone())
        this.$imgCt.width((this.$imgs.length+2)*imgWidth)
        this.$imgCt.css({left:-imgWidth})
    },

    bind: function() {
    var _this = this
    function showArrow() {
      _this.ct.on('mouseenter',function(){
      if (_this.clock) clearInterval(_this.clock)
      _this.$arrow.show();
      })
      _this.ct.on('mouseleave',function(){
      _this.$arrow.hide();
      _this.clock = setInterval(function() {
      _this.autoplay()
      },2000) 
      })
    }

    function playPre() {
      if (_this.isAnimate) return;
      _this.isAnimate = true
      _this.$imgCt.animate({left:'+='+_this.imgWidth},function(){
      _this.count--
      if (_this.count < 0) {
      _this.$imgCt.css({left:-_this.imgWidth*_this.$imgs.length})
      _this.count= _this.$imgs.length-1
      }
      barMove(_this.count)
      _this.isAnimate = false
      })
      _this.$imgs.eq(_this.count-1).hide().fadeIn(1000)   
    }

    function playNext() {
      if (_this.isAnimate) return;
      _this.isAnimate = true
      _this.$imgCt.animate({left:'-='+_this.imgWidth},function(){
      _this.count++
      if (_this.count===_this.$imgs.length) {
      _this.$imgCt.css({left:-_this.imgWidth})
      _this.count=0    
      }
      barMove(_this.count)
      _this.isAnimate = false
      })
      _this.$imgs.eq(_this.count+1).hide().fadeIn(1000)  
      }
      
      _this.$preBtn.on('click',function() {
      playPre()
      })
      _this.$nextBtn.on('click',function() {
      playNext()
      }) 
      function barMove(count) {
      _this.$bar.eq(count).addClass('active')
      _this.$bar.eq(count).siblings().removeClass('active')
      }    
      
      _this.$bar.each(function() {
      $(this).on('click',function() {
      var pageIndex = $(this).index()
      _this.$imgCt.animate({left:- _this.imgWidth*(pageIndex+1)})
      barMove(pageIndex)
      })
      })
      
      showArrow()
  
  },
  autoplay: function() {
       var _this =this
    function playNext() {
     if (_this.isAnimate) return;
     _this.isAnimate = true
     _this.$imgCt.animate({left:'-='+_this.imgWidth},function(){
      _this.count++
      if (_this.count===_this.$imgs.length) {
      _this.$imgCt.css({left:-_this.imgWidth})
      _this.count=0    
    }
    barMove(_this.count)
    _this.isAnimate = false
    })
    _this.$imgs.eq(_this.count+1).hide().fadeIn(1000)  
  }

  function barMove(count) {
    _this.$bar.eq(count).addClass('active')
    _this.$bar.eq(count).siblings().removeClass('active')
  }  
   playNext()
  }
  
  } 
  return Carousel

})
