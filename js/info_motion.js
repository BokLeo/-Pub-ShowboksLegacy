$(function(){
//                                        var abc = $("html,body").scrollTop();

//                                        $("<p class='num'>111</p>").prependTo("body");
//                                        $(".num").css({position:"fixed", width:"100px", height:"100px", left:"0", top:"0", background:"rgba(0,0,0,0.5)"});
    
    $(".btn_back").mouseover(function(){
        $(".btn_back").stop().animate({paddingLeft:"10px"},function(){
            $(".btn_back").stop().animate({paddingLeft:"0"},function(){
                $(".btn_back").stop().animate({paddingLeft:"10px"},function(){
                    $(".btn_back").stop().animate({paddingLeft:"0"});
                });
            });
        });
    });


    $(".btn_top button").click(function(){ $("html,body").stop().animate({scrollTop:"0"},400) });
    
//    
    $(window).scroll(function(){

        // 작동 됨.
        if ( $(this).scrollTop() > 200){
            $(".btn_top").fadeIn("fast");
        }else{
            $(".btn_top").fadeOut("fast");
        };
//        
//                                        // 작동 안됨 > 변수 처리 시
//                                        abc = $("html,body").scrollTop();
//
//                                        $(".num").text( abc );
//
//                                        if ( abc > 200){
//                                            $(".btn_top").fadeIn("fast");
//                                        }else{
//                                            $(".btn_top").fadeOut("fast");
//                                        };    
    
    });  
});