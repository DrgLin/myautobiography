$(document).ready(function() {

    var num_li = $(".anchor").length;
    
    var n = 1;
    var moving = 0;
    $(window).mousewheel(function(e) {
        $("html, body").stop();
        if (moving == 0) {
            moving = 1;
            if (e.deltaY == -1) {
                if (n < num_li) {
                    n++;
                }
            } else {
                if (n > 1) {
                    n--;
                }
            }
        }
        console.log(n);
        $("html, body").animate({        
            "scrollTop": $( $.attr($(".p0" + n), 'href') ).offset().top

        }, function(){
            moving = 0;
        })
    })
    
})