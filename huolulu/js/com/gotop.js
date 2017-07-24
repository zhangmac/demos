define(['jquery'],function($){
	function GoTop($ct) {
		this.ct = $ct
		this.target = $("<button class='btn'>回到顶部</button>")
		this.target.css({
			position: 'fixed',
			right: '50px',
			bottom: '50px'
		})
		this.bindEvent()
		this.creatNode()
	}
	GoTop.prototype.creatNode = function() {
        this.ct.append(this.target)
		}
	GoTop.prototype.bindEvent = function () {
         this.target.on('click', function(){
         	$(window).scrollTop(0)
         })
		}
		return GoTop
})