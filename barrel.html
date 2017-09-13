<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Barrel</title>
    <script src="https://cdn.staticfile.org/jquery/3.2.1/jquery.min.js"></script>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        #inp-city {
        }

        main {
            width: 1600px;
            margin: 0 auto;
            border: 1px solid red;
        }

        .clearfix:after {
            content: '';
            display: block;
            clear: both;

        }

        #img-ct figure {
            float: leftready;
            padding: 4px;
        }
    </style>
</head>
<body>
<main id="img-ct" class="clearfix"></main>

<script>
    function Barrel($ct) {
        this.$ct = $ct
        this.ctWidth = $ct.width()
        this.basicHeight = 200
        this.ajaxImages()
    }

    Barrel.prototype = {
        ajaxImages: function () {
            var _this = this
            $.get(`https://pixabay.com/api/?key=6282825-2a9cefbe1dbed27ba005a2747&q='狗'&image_type=photo&per_page=40`)
                .done(function (data) {
                    _this.render(data)
                })
        },
        render: function (data) {
            console.log(data)
            let imgArray = []
            let rowTotalWidth = 0
            data.hits.forEach(imgInfo => {
                imgInfo.rate = imgInfo.webformatWidth / imgInfo.webformatHeight
                let imgWidthBasic = imgInfo.rate * this.basicHeight
                if ((rowTotalWidth + imgWidthBasic) < this.ctWidth) {
                    rowTotalWidth += imgWidthBasic
                    imgArray.push(imgInfo)
                } else {
                    let figureHeight = (this.ctWidth) / rowTotalWidth * this.basicHeight
                    console.log(figureHeight + '--' + this.ctWidth + '--' + rowTotalWidth)
                    this.layout(figureHeight, imgArray)
                    imgArray = [imgInfo]
                    rowTotalWidth = imgWidthBasic
                }
            })

        },
        layout: function (figureHeight, imgArray) {
            let $imgFigure = $('<figure></figure>')
            imgArray.forEach((imgInfo) => {
                let $img = $('<img>')
                $img.attr('src', imgInfo.webformatURL)
                $img.height(figureHeight + 'px')
                $imgFigure.append($img)
                // var imgNode = document.createElement('img')
                // imgNode.src = imgInfo.webformatURL
                // imgNode.style.height = figureHeight + 'px'
                // imgNode.style.width = figureHeight * imgInfo.rate + 'px'
                // $aside.append(imgNode)
            })
                this.$ct.append($imgFigure)
        }
    }
    let barrel = new Barrel($('#img-ct'), $('#inp-city'))
</script>
</body>
</html>