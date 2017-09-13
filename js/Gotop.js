/**
 * Created by leon on 9/13/17.
 */
function GoTop($ct,$target) {
    this.ct = $ct
    this.target = $target
    this.createNode()
    this.blindEvent()
}
GoTop.prototype = {
    createNode: function(){
        this.target.html('<button>回到顶部</button>')
    },
    blindEvent: function(){
        $(window).scroll(()=>{
            if($(window).scrollTop() > $(window).height()){
            this.target.css({display: "block"})
        }
    })
        this.target.click(()=>{
            $(window).scrollTop(0)
        this.target.css({display: "none"})
    })
    }
}
// let goTop = new GoTop($('.ct'),$('.top'))

