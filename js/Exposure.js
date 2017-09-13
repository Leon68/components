<!DOCTYPE html>
<html lang="en">
<head>
    <script src="http://kejian.jirengu.com/static/js/jquery-1.11.1.min.js"></script>

    <meta charset="utf-8">
    <title>图片懒加载-简单</title>
    <style>
        ul, li {
            list-style: none;
        }

        .container {
            max-width: 800px;
            margin: 0 auto;
        }

        .container:after {
            content: '';
            display: block;
            clear: both;
        }

        .container li {
            float: left;
            margin: 10px 10px;
        }

        .container li img {
            width: 380px;
            height: 380px;
        }

        p {
            float: left;
        }
    </style>

</head>
<body>
<ul class="container">
    <li><a href="#"><img
            src="http://kejian.jirengu.com/data/fe/%E8%AF%BE%E4%BB%B6/32-%E6%87%92%E5%8A%A0%E8%BD%BD/code/blank.jpg"
            data-src="http://cdn.jirengu.com/book.jirengu.com/img/1.jpg"/></a></li>
    <li><a href="#"><img
            src="http://kejian.jirengu.com/data/fe/%E8%AF%BE%E4%BB%B6/32-%E6%87%92%E5%8A%A0%E8%BD%BD/code/blank.jpg"
            data-src="http://cdn.jirengu.com/book.jirengu.com/img/18.jpg"/></a></li>
    <li><a href="#"><img
            src="http://kejian.jirengu.com/data/fe/%E8%AF%BE%E4%BB%B6/32-%E6%87%92%E5%8A%A0%E8%BD%BD/code/blank.jpg"
            data-src="http://cdn.jirengu.com/book.jirengu.com/img/2.jpg"/></a></li>
    <li><a href="#"><img
            src="http://kejian.jirengu.com/data/fe/%E8%AF%BE%E4%BB%B6/32-%E6%87%92%E5%8A%A0%E8%BD%BD/code/blank.jpg"
            data-src="http://cdn.jirengu.com/book.jirengu.com/img/3.jpg"/></a></li>
    <li><a href="#"><img
            src="http://kejian.jirengu.com/data/fe/%E8%AF%BE%E4%BB%B6/32-%E6%87%92%E5%8A%A0%E8%BD%BD/code/blank.jpg"
            data-src="http://cdn.jirengu.com/book.jirengu.com/img/4.jpg"/></a></li>
    <li><a href="#"><img
            src="http://kejian.jirengu.com/data/fe/%E8%AF%BE%E4%BB%B6/32-%E6%87%92%E5%8A%A0%E8%BD%BD/code/blank.jpg"
            data-src="http://cdn.jirengu.com/book.jirengu.com/img/5.jpg"/></a></li>
    <li><a href="#"><img
            src="http://kejian.jirengu.com/data/fe/%E8%AF%BE%E4%BB%B6/32-%E6%87%92%E5%8A%A0%E8%BD%BD/code/blank.jpg"
            data-src="http://cdn.jirengu.com/book.jirengu.com/img/6.jpg"/></a></li>
    <li><a href="#"><img
            src="http://kejian.jirengu.com/data/fe/%E8%AF%BE%E4%BB%B6/32-%E6%87%92%E5%8A%A0%E8%BD%BD/code/blank.jpg"
            data-src="http://cdn.jirengu.com/book.jirengu.com/img/7.jpg"/></a></li>
    <li><a href="#"><img
            src="http://kejian.jirengu.com/data/fe/%E8%AF%BE%E4%BB%B6/32-%E6%87%92%E5%8A%A0%E8%BD%BD/code/blank.jpg"
            data-src="http://cdn.jirengu.com/book.jirengu.com/img/8.jpg"/></a></li>
    <li><a href="#"><img
            src="http://kejian.jirengu.com/data/fe/%E8%AF%BE%E4%BB%B6/32-%E6%87%92%E5%8A%A0%E8%BD%BD/code/blank.jpg"
            data-src="http://cdn.jirengu.com/book.jirengu.com/img/9.jpg"/></a></li>
    <li><a href="#"><img
            src="http://kejian.jirengu.com/data/fe/%E8%AF%BE%E4%BB%B6/32-%E6%87%92%E5%8A%A0%E8%BD%BD/code/blank.jpg"
            data-src="http://cdn.jirengu.com/book.jirengu.com/img/10.jpg"/></a></li>
    <li><a href="#"><img
            src="http://kejian.jirengu.com/data/fe/%E8%AF%BE%E4%BB%B6/32-%E6%87%92%E5%8A%A0%E8%BD%BD/code/blank.jpg"
            data-src="http://cdn.jirengu.com/book.jirengu.com/img/11.jpg"/></a></li>
    <li><a href="#"><img
            src="http://kejian.jirengu.com/data/fe/%E8%AF%BE%E4%BB%B6/32-%E6%87%92%E5%8A%A0%E8%BD%BD/code/blank.jpg"
            data-src="http://cdn.jirengu.com/book.jirengu.com/img/12.jpg"/></a></li>
    <li><a href="#"><img
            src="http://kejian.jirengu.com/data/fe/%E8%AF%BE%E4%BB%B6/32-%E6%87%92%E5%8A%A0%E8%BD%BD/code/blank.jpg"
            data-src="http://cdn.jirengu.com/book.jirengu.com/img/13.jpg"/></a></li>
    <li><a href="#"><img
            src="http://kejian.jirengu.com/data/fe/%E8%AF%BE%E4%BB%B6/32-%E6%87%92%E5%8A%A0%E8%BD%BD/code/blank.jpg"
            data-src="http://cdn.jirengu.com/book.jirengu.com/img/14.jpg"/></a></li>
    <li><a href="#"><img
            src="http://kejian.jirengu.com/data/fe/%E8%AF%BE%E4%BB%B6/32-%E6%87%92%E5%8A%A0%E8%BD%BD/code/blank.jpg"
            data-src="http://cdn.jirengu.com/book.jirengu.com/img/15.jpg"/></a></li>
    <li><a href="#"><img
            src="http://kejian.jirengu.com/data/fe/%E8%AF%BE%E4%BB%B6/32-%E6%87%92%E5%8A%A0%E8%BD%BD/code/blank.jpg"
            data-src="http://cdn.jirengu.com/book.jirengu.com/img/16.jpg"/></a></li>
    <li><a href="#"><img
            src="http://kejian.jirengu.com/data/fe/%E8%AF%BE%E4%BB%B6/32-%E6%87%92%E5%8A%A0%E8%BD%BD/code/blank.jpg"
            data-src="http://cdn.jirengu.com/book.jirengu.com/img/17.jpg"/></a></li>
    <p id="hello">hello</p>
    <p id="world">world</p>

</ul>
<script>
    let Exposure = (function () {
        function _Exposure(elem,method){
            this.$elem = $(elem)
            this.method = method
            this.isView()
            this.isScroll()
        }
        _Exposure.prototype = {
            isView: function(){
                let windowHeight = $(window).height()
                let scrollTop = $(window).scrollTop()
                let offsetTop = this.$elem.offset().top
                let nodeTop = this.$elem.height()
                   if(windowHeight + scrollTop > offsetTop && offsetTop + nodeTop > scrollTop){
                       this.method(this.$elem)
                   }
            },
            isScroll: function(){
                $(window).on('scroll',()=> {
                    this.isView()
                })
            }
        }
        return {
            init: function ($ct,method){
                $ct.each(function(index,elem){
                    new _Exposure(elem,method)
                })

            }
        }

    })()
    Exposure.init($('.container img'),imgView)
    Exposure.init($('p'),function($elem){
       $elem.text($elem.text() + '123')
    })
    function imgView($elem) {
            let dataSrc = $elem.attr('data-src')
            $elem.attr('src',dataSrc)
    }
</script>
<!--<script type="text/javascript">-->


<!--function Exposure($target, callback){-->
<!--this.$target = $target;-->
<!--this.callback = callback;-->
<!--this.bind();-->
<!--this.check();-->
<!--}-->

<!--// Exposure.prototype.init = function(){-->

<!--// }-->

<!--Exposure.prototype.bind = function(){-->
<!--var _this = this;-->
<!--$(window).on('scroll', function(){-->
<!--_this.check();-->
<!--})-->
<!--}-->

<!--Exposure.prototype.check = function(){-->
<!--if(this.isShow(this.$target)){-->
<!--this.callback(this.$target);-->
<!--}-->
<!--}-->
<!--Exposure.prototype.isShow = function(){-->
<!--var windowHeight = $(window).height(),-->
<!--scrollTop = $(window).scrollTop(),-->
<!--offsetTop = this.$target.offset().top,-->
<!--nodeHeight = this.$target.height();-->
<!--if(windowHeight + scrollTop > offsetTop && scrollTop < offsetTop + nodeHeight){-->
<!--return true;-->
<!--}else{-->
<!--return false;-->
<!--}-->
<!--}-->

<!--// new Exposure($('#hello'), function($node){-->
<!--//     $node.text( $node.text() + $node.text());-->
<!--// })-->

<!--// new Exposure($('#world'), function(){-->
<!--//   $('#world').text( 'hello ' + $('#world').text() );-->
<!--// })-->

<!--// $('.container img').each(function(idx, img){-->
<!--//   new Exposure($(img), function($img){-->
<!--//       showImg($img)-->
<!--//   })-->
<!--// })-->

<!--var Lazy = (function(){-->

<!--return {-->
<!--init: function($targets, callback){-->
<!--$targets.each(function(idx, target){-->
<!--new Exposure($(target), callback);-->
<!--})-->

<!--},-->
<!--one: function($targets, callback){-->

<!--}-->

<!--}-->
<!--})();-->

<!--Lazy.init($('#hello'), function($node){-->
<!--$node.text( $node.text() + '123');-->
<!--});-->
<!--Lazy.init($('#world'), function($node){-->
<!--$node.text( $node.text() + '456');-->
<!--});-->
<!--Lazy.init($('.container img'), function($node){-->
<!--showImg($node);-->
<!--});-->


<!--function showImg($img){-->
<!--var imgUrl = $img.attr('data-src');-->
<!--$img.attr('src', imgUrl);-->
<!--}-->


<!--</script>-->
</body>
</html>