define(['jquery','com/carousel','com/gotop','com/loadmore'],function($,Carousel,GoTop,Loadmore){
	new Carousel($('.slider'))
	new GoTop($('.container'))
	new Loadmore($('.waterfall .news'))
})