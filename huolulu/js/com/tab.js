 function TabSwitch(ct) {
  this.ct = ct
  this.init()
  this.bind() 
 }
 TabSwitch.prototype = {
  init: function() {
    this.tabList = this.ct.querySelectorAll('.headers>li')
    this.contentsLi = this.ct.querySelectorAll('.contents>li')
  },
  
  bind: function() {
    var _this = this
    this.tabList.forEach(function(tabs){
    tabs.onclick = function(e) {
      var target = e.target
      var index = [].indexOf.call(_this.tabList,target)
      _this.tabList.forEach(function(li){
         li.classList.remove('active')
         target.classList.add('active')
      })
      _this.contentsLi.forEach(function(li){
        li.classList.remove('active')
      })
      _this.contentsLi[index].classList.add('active')
    }
  })
  }
 
 }