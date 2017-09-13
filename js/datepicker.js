
<!doctype html>
<html>

<head>
    <meta charset="utf-8">
    <title>datepicker</title>
    <style>
        .ui-date-picker {
            position: absolute;
            width: 240px;
            border: 1px solid #ccc;
            font-size: 14px;
            font-family: serif, cursive, fantasy
        }

        .ui-date-picker > .header {
            height: 30px;
            line-height: 30px;
            text-align: center;
            background-color: #CA2B2B;
            color: #fff;
        }

        .ui-date-picker .caret-left {
            display: block;
            float: left;
            margin-left: 10px;
            margin-top: 6px;
            border-right: 7px solid #fff;
            border-top: 7px solid transparent;
            border-bottom: 7px solid transparent;
            width: 0;
            height: 0;
            cursor: pointer;
        }

        .ui-date-picker .caret-right {
            display: block;
            float: right;
            margin-right: 10px;
            margin-top: 6px;
            border-left: 7px solid #fff;
            border-top: 7px solid transparent;
            border-bottom: 7px solid transparent;
            width: 0;
            height: 0;
            cursor: pointer;
        }

        .ui-date-picker .panel {
            width: 100%;
            text-align: center;
            background-color: #fff;
        }

        .ui-date-picker .panel th {
            line-height: 2;
        }

        .ui-date-picker .panel td {
            line-height: 1.2
        }

        .ui-date-picker .pre-month,
        .ui-date-picker .next-month {
            color: #eee;
        }

        .ui-date-picker .cur-month {
            cursor: pointer;
        }

        .ui-date-picker .cur-month:hover {
            background-color: #ccc;
            color: #fff;
        }

        .ui-date-picker .cur-date {
            color: #CA2B2B;
        }
    </style>
</head>

<body>

<input class="date-ipt" type="text" placeholder="有初始值" date-init="2016/05/31" />
<input class="date-ipt" type="text" placeholder="无初始值"  />

<!-- <div class="ui-date-picker">
  <div class="header">
    <span class="pre caret-left"></span>
    <span class="cur">2016年7月</span>
    <span class="next caret-right"></span>
  </div>
  <table class="panel">
    <thead>
      <tr>
        <th>日</th>
        <th>一</th>
        <th>二</th>
        <th>三</th>
        <th>四</th>
        <th>五</th>
        <th>六</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="pre-month">28</td>
        <td class="pre-month">29</td>
        <td class="pre-month">30</td>
        <td class="pre-month">31</td>
        <td class="cur-month cur-date">01</td>
        <td class="cur-month">02</td>
        <td class="cur-month">03</td>
      </tr>
      <tr>
        <td class="cur-month">04</td>
        <td class="cur-month">05</td>
        <td class="cur-month">06</td>
        <td class="cur-month">07</td>
        <td class="cur-month">08</td>
        <td class="cur-month">09</td>
        <td class="cur-month">10</td>
      </tr>
      <tr>
        <td class="cur-month">11</td>
        <td class="cur-month">12</td>
        <td class="cur-month">13</td>
        <td class="cur-month">14</td>
        <td class="cur-month">15</td>
        <td class="cur-month">16</td>
        <td class="cur-month">17</td>
      </tr>
      <tr>
        <td class="cur-month">18</td>
        <td class="cur-month">19</td>
        <td class="cur-month">20</td>
        <td class="cur-month">21</td>
        <td class="cur-month">22</td>
        <td class="cur-month">23</td>
        <td class="cur-month">24</td>
      </tr>
      <tr>
        <td class="cur-month">25</td>
        <td class="cur-month">26</td>
        <td class="cur-month">27</td>
        <td class="cur-month">28</td>
        <td class="cur-month">29</td>
        <td class="cur-month">30</td>
        <td class="next-month">01</td>
      </tr>
    </tbody>
</div> -->






<script src="http://apps.bdimg.com/libs/jquery/1.9.1/jquery.min.js"></script>
<script>
    function DatePicker($target) {
        //初始化当前日期
        this.init($target);

        //渲染日历模板
        this.render();

        //设置模板里面的数据
        this.setData();

        //绑定事件
        this.bind();
    }

    DatePicker.prototype = {

        init: function($target) {
            this.$target = $target;
            if (this.isValidDate($target.attr('date-init'))) {
                this.date = new Date($target.attr('date-init'));   //当前日期或者指定的要展示的日期
                this.watchDate = new Date($target.attr('date-init'));  //用户在切换月份时所看到的日期,初始为当前日期
            } else {
                this.date = new Date();
                this.watchDate = new Date();
            }

        },

        render: function() {
            var tpl = '<div class="ui-date-picker" style="display:none">'
                +    '<div class="header"><span class="pre caret-left"></span><span class="cur header-date"></span><span class="next caret-right"></span></div>'
                +    '<table class="panel">'
                +      '<thead> <tr> <th>日</th> <th>一</th> <th>二</th> <th>三</th> <th>四</th> <th>五</th> <th>六</th> </tr> </thead>'
                +      '<tbody></tbody>'
                +   '</div>';
            this.$datepicker = $(tpl);
            this.$datepicker.insertAfter(this.$target)
                .css({
                    'position': 'absolute',
                    'left': this.$target.offset().left,
                    'top': this.$target.offset().top + this.$target.height(true)
                });
        },


        setData: function() {
            this.$datepicker.find('tbody').html('');

            var firstDay = this.getFirstDay(this.watchDate),
                lastDay = this.getLastDay(this.watchDate);

            var dateArr = [];

            for(var i = firstDay.getDay(); i>0; i--){
                var d = new Date( firstDay.getTime() - i*24*60*60*1000 );
                dateArr.push( {type:'pre', date:d} );
            }

            for(var j = 0; j< lastDay.getDate() - firstDay.getDate() + 1; j++){
                var d = new Date( firstDay.getTime() + j*24*60*60*1000 );
                dateArr.push( {type:'cur', date: d} );
            }

            for(var k = 1; k < 7 - lastDay.getDay(); k++ ){
                var d = new Date( lastDay.getTime() + k*24*60*60*1000 );
                dateArr.push( {type:'next', date: d}  )
            }

            this.$datepicker.find('.header-date').text(this.watchDate.getFullYear()+'年'+(this.watchDate.getMonth()+1)+'月');

            var tpl = '';
            for(var i=0;i<dateArr.length;i++){
                if(i%7 === 0){
                    tpl = '<tr>' + tpl;
                }

                tpl += '<td class="';

                if(dateArr[i].type === 'pre'){
                    tpl += 'pre-month';
                }else if(dateArr[i].type === 'cur'){
                    tpl += 'cur-month';
                }else{
                    tpl += 'next-month'
                }

                if(this.getYYMMDD(this.date) === this.getYYMMDD(dateArr[i].date)){
                    tpl += ' cur-date';
                }
                tpl += '"';

                tpl += ' data-date="'+ this.getYYMMDD(dateArr[i].date) + '">';
                tpl += this.toFixed( dateArr[i].date.getDate()) + '</td>';


                if(i%7===6){
                    tpl = tpl + '</tr>'
                }
            }

            this.$datepicker.find('tbody').html(tpl);
        },

        bind: function() {
            var self = this;
            this.$datepicker.find('.pre').on('click', function(){
                self.watchDate = self.getPreMonth(self.watchDate);
                self.setData();
            });
            this.$datepicker.find('.next').on('click', function(){
                self.watchDate = self.getNextMonth(self.watchDate);
                self.setData();
            });
            this.$datepicker.on('click', '.cur-month', function(){
                self.$target.val($(this).attr('data-date'))
                self.$datepicker.hide();
            });

            this.$target.on('click', function(e){
                e.stopPropagation();
                self.$datepicker.show();
            });

            //下面设置点击页面其他部分隐藏 datepicker
            this.$datepicker.on('click', function(e){
                e.stopPropagation();
            });
            $(window).on('click', function(e){
                self.$datepicker.hide();
            })
        },

        isValidDate: function(dateStr) {
            return new Date(dateStr).toString() !== 'Invalid Date';
        },

        //获取 date 所在月份的第一天的时间对象
        getFirstDay: function(date) {
            var year = date.getFullYear(),
                month = date.getMonth();

            return newDate = new Date(year, month, 1);
        },


        //获取 date 所在月份最后一天的时间对象
        getLastDay: function(date) {
            var year = date.getFullYear(),
                month = date.getMonth();
            month++;

            if (month > 11) {
                month = 0;
                year++;
            }
            var newDate = new Date(year, month, 1);
            return new Date(newDate.getTime() - 1000 * 60 * 60 * 24);
        },


        //获取date 上月1号时间对象
        getPreMonth: function(date){
            var year = date.getFullYear(),
                month = date.getMonth();

            month--;
            if (month < 0) {
                month = 11;
                year--;
            }
            return new Date(year, month, 1);
        },

        //获取date 下月1号时间对象
        getNextMonth: function(date){
            var year = date.getFullYear(),
                month = date.getMonth();

            month++;
            if (month > 11) {
                month = 0;
                year++;
            }
            return new Date(year, month, 1);
        },


        getYYMMDD: function(date){
            var yy = date.getFullYear(),
                mm = date.getMonth()+1
            return date.getFullYear() + "/" + this.toFixed(date.getMonth() + 1) + "/" + this.toFixed(date.getDate());
        },

        //eg:  1 -> "01"  11 -> "11"
        toFixed: function(n){
            return (n+'').length === 1 ? ('0'+ n+'') : (n+'');
        }


    }



    // 创建对象的方式
    // $('.date-ipt').each(function(){
    //   new DatePicker($(this));
    // })




    //变成 jquery 插件
    $.fn.datePicker = function() {
        this.each(function(){
            new DatePicker($(this));
        });
    };

    $('.date-ipt').datePicker();
</script>
</body>

</html>
