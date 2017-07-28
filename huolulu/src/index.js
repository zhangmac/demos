
var $ = require("./com/jquery")
var goTop = require("./com/goTop")
var carousel = require("./com/Carousel")
var loadMore = require("./com/Loadmore")

new goTop($('.container'))
new carousel($('.slider'))
new loadMore($('.waterfall .news'))