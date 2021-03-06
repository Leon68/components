<!doctype html>
<head>
    <title>dialog demo</title>
    <meta charset="UTF-8">
    <script src="http://apps.bdimg.com/libs/jquery/1.9.1/jquery.min.js"></script>
    <style>

        .dialog .dialog-overlay {
            width: 100%;
            height: 100%;
            opacity: 0.5;
            background: #000;

            position: absolute;
            top: 0;
            left: 0;
            z-index: 3000;
        }

        .dialog .dialog-box {
            position: absolute;
            z-index: 5000;
            left: 50%;
            top: 30%;
            margin-left: -164px;
            font-size: 14px;
            padding-bottom: 10px;
            border-radius: 5px;
            background: #eee;
            width: 328px;
        }

        .dialog .dialog-header {
            padding: 10px 19px;
            color: #fff;
            background: #676666;
        }

        .dialog .dialog-header h3 {
            margin: 0;
            font-size: 14px;
        }

        .dialog .dialog-header .btn-close {
            position: absolute;
            right: 10px;
            top: 8px;
            font-family: fantasy;
            cursor: pointer;
        }

        .dialog .dialog-content {
            padding: 10px;
            margin: 13px;
            color: #666;
            font-size: 11px;
        }

        .dialog .dialog-footer {
            text-align: center;
        }

        a.btn {
            position: relative;
            text-align: center;
            background-color: #e33100;
            display: inline-block;
            width: 50px;
            padding: 5px 0 6px;
            margin: 2px;
            color: #fff;
            text-decoration: none;
            border-radius: 3px;
        }

        a.btn:hover {
            background-color: #c33100;
        }

    </style>

</head>
<body>

<button id="open1"> æ‰“å¼€1</button>
<button id="open2"> æ‰“å¼€2</button>
<button id="open3"> æ‰“å¼€3</button>
<button id="open4"> æ‰“å¼€4</button>
<button id="open5"> æ‰“å¼€5</button>
<button id="close">å…³é—­</button>

<script>


    /*
     ç”¨æ¨¡å—å®šä¹‰çš„æ–¹å¼å°è£…åˆ›å»ºäº†ä¸€ä¸ªå¯¹è±¡ï¼ŒæŠŠ new Modal çš„è¿‡ç¨‹å°è£…åˆ°æ¨¡å—é‡Œï¼Œè¿™æ ·ä½¿ç”¨è€…å¯ä»¥ç›´æŽ¥é€šè¿‡
     Dialog.open()åŽ»è°ƒç”¨å³å¯
     */


    var Dialog = (function () {

        function Modal() {
            this.createDialog();
            this.bindEvent();
        }

        Modal.prototype = {
            defaultOpts: {
                title: '',
                message: '',
                isShowCloseBtn: true,
                isShowConfirmBtn: false,
                onClose: function () {
                },
                onConfirm: function () {
                }
            },

            open: function (opts) {
                this.setOpts(opts);
                console.log(this.opts);
                this.setDialog();
                this.showDialog();
            },

            close: function () {
                this.hideDialog();
            },

            setOpts: function (opts) {
                if (typeof opts === 'string') {
                    this.opts = $.extend({}, this.defaultOpts, {message: opts});
                } else if (typeof opts === 'object') {
                    this.opts = $.extend({}, this.defaultOpts, opts);
                }
            },

            bindEvent: function () {
                var _this = this;
                _this.$dialog.find('.btn-close').on('click', function (e) {
                    e.preventDefault();
                    _this.opts.onClose();
                    _this.hideDialog();
                });
                _this.$dialog.find('.btn-confirm').on('click', function (e) {
                    e.preventDefault();
                    _this.opts.onConfirm();
                    _this.hideDialog();
                });
            },


            //åˆ›å»ºDialog
            createDialog: function () {
                var tpl = '<div class="dialog" style="display:none">'
                    + '<div class="dialog-overlay"></div>'
                    + '<div class="dialog-box">'
                    + '<div class="dialog-header"><h3></h3><span class="btn-close">x</span></div>'
                    + '<div class="dialog-content">'
                    + '</div>'
                    + '<div class="dialog-footer">'
                    + '  <a href="#" class="btn btn-close">å–æ¶ˆ</a>'
                    + '  <a href="#" class="btn btn-confirm">ç¡®å®š</a>'
                    + '</div>'
                    + '</div>'
                    + '</div>';
                this.$dialog = $(tpl);
                $('body').append(this.$dialog);
            },

            //æ ¹æ®å‚æ•°è®¾ç½® Dialog æ ·å¼å’Œå†…å®¹
            setDialog: function () {
                var $dialog = this.$dialog;
                if (!this.opts.title) {
                    $dialog.find('.dialog-header').hide();
                } else {
                    $dialog.find('.dialog-header').show();
                }
                if (!this.opts.isShowCloseBtn) {
                    $dialog.find('.dialog-footer .btn-close').hide();
                } else {
                    $dialog.find('.dialog-footer .btn-close').show();
                }
                if (!this.opts.isShowConfirmBtn) {
                    $dialog.find('.btn-confirm').hide();
                } else {
                    $dialog.find('.btn-confirm').show();
                }
                $dialog.find('.dialog-header h3').text(this.opts.title);
                $dialog.find('.dialog-content').html(this.opts.message);
            },

            showDialog: function () {
                this.$dialog.show();
            },

            hideDialog: function () {
                this.$dialog.hide();
            }
        };
        return new Modal();
    })();


    $('#open1').on('click', function () {
        Dialog.open('hello, è¿™é‡Œæ˜¯é¥¥äººè°·');
    });

    $('#open2').on('click', function () {
        Dialog.open('<a href="http://jirengu.com">é¥¥äººè°·</a>');
    });

    $('#open3').on('click', function () {
        Dialog.open({
            title: 'æ¬¢è¿Žæ¥åˆ°é¥¥äººè°·',
            message: 'hello',
            isShowCloseBtn: true,
            isShowConfirmBtn: true,
            onClose: function () {
                alert('close')
            },
            onConfirm: function () {
                alert('ç¡®å®š');
            }
        });
    });

    var tpl = '<ul><li>åˆ—è¡¨1</li><li>åˆ—è¡¨2</li><li>åˆ—è¡¨1</li><li>åˆ—è¡¨1</li></ul>';
    $('#open4').on('click', function () {
        Dialog.open({
            title: 'æ¬¢è¿Žæ¥åˆ°é¥¥äººè°·',
            message: tpl,
            isShowCloseBtn: true,
            isShowConfirmBtn: true,
            onClose: function () {
                alert('close')
            },
            onConfirm: function () {
                alert('ç¡®å®š');
            }
        });
    });
    $('#open5').on('click', function () {
        Dialog.open({
            title: 'æ¬¢è¿Žæ¥åˆ°é¥¥äººè°·',
            message: 'hello',
            isShowCloseBtn: false,
            isShowConfirmBtn: false
        });
    });


    $('#close').on('click', function () {
        Dialog.close();
    });


    //Dialog.open('hello');


</script>

</body>
