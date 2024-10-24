$(function(){
	
//	 future visual 단축표현 실패
//	var num = 0;
//	
//	function countNum(){
//		if(num > 41) {	return; };
//	};
//
//
//$(".future_visual p:eq(0) img").css({opacity:"0"});
//	if(num < 42){
//		num++;
//		$(".future_visual p:eq(0) img").attr("src", "img/test/test"+num+".png");
//		$(".future_visual p:eq(0) img").animate({opacity:"1"},1000);
//
//	}else if(num <= 42){
//		num == finish;
//	}else{};
//
//	$(".future_visual p:eq(0) img").css({opacity:"0"}).attr("src", "img/test/test"+num+".png");
//	$(".future_visual p:eq(0) img").animate({opacity:"1"},1000,function(){
//		num++;
//		$(".future_visual p:eq(0) img").attr("src", "img/test/test"+num+".png");
//		$(this).animate({opacity:"1"},1000, function(){
//			num++;
//			$(".future_visual p:eq(0) img").attr("src", "img/test/test"+num+".png");
//			$(this).animate({opacity:"1"},1000);
//		});
//	});
	

	
	
//			$(".future_visual p:eq(0) img").css({opacity:"0"}).attr("src", "img/test/test1.png").animate({opacity:"1"},60,function(){
//				$(".future_visual p:eq(0) img").attr("src", "img/test/test2.png").animate({opacity:"1"},60, function(){
//					$(".future_visual p:eq(0) img").attr("src", "img/test/test3.png").animate({opacity:"1"},60, function(){
//						$(".future_visual p:eq(0) img").attr("src", "img/test/test4.png").animate({opacity:"1"},60, function(){
//							$(".future_visual p:eq(0) img").attr("src", "img/test/test5.png").animate({opacity:"1"},60, function(){
//								$(".future_visual p:eq(0) img").attr("src", "img/test/test6.png").animate({opacity:"1"},60, function(){
//									$(".future_visual p:eq(0) img").attr("src", "img/test/test7.png").animate({opacity:"1"},60, function(){
//										$(".future_visual p:eq(0) img").attr("src", "img/test/test8.png").animate({opacity:"1"},60, function(){
//											$(".future_visual p:eq(0) img").attr("src", "img/test/test9.png").animate({opacity:"1"},60, function(){
//												$(".future_visual p:eq(0) img").attr("src", "img/test/test10.png").animate({opacity:"1"},60, function(){
//													$(".future_visual p:eq(0) img").attr("src", "img/test/test11.png").animate({opacity:"1"},60, function(){
//														$(".future_visual p:eq(0) img").attr("src", "img/test/test12.png").animate({opacity:"1"},60, function(){
//															$(".future_visual p:eq(0) img").attr("src", "img/test/test13.png").animate({opacity:"1"},60, function(){
//																$(".future_visual p:eq(0) img").attr("src", "img/test/test14.png").animate({opacity:"1"},60, function(){
//																	$(".future_visual p:eq(0) img").attr("src", "img/test/test15.png").animate({opacity:"1"},60, function(){
//																		$(".future_visual p:eq(0) img").attr("src", "img/test/test16.png").animate({opacity:"1"},60, function(){
//																			$(".future_visual p:eq(0) img").attr("src", "img/test/test17.png").animate({opacity:"1"},60, function(){
//																				$(".future_visual p:eq(0) img").attr("src", "img/test/test18.png").animate({opacity:"1"},60, function(){
//																					$(".future_visual p:eq(0) img").attr("src", "img/test/test19.png").animate({opacity:"1"},60, function(){
//																						$(".future_visual p:eq(0) img").attr("src", "img/test/test20.png").animate({opacity:"1"},60, function(){
//																							$(".future_visual p:eq(0) img").attr("src", "img/test/test21.png").animate({opacity:"1"},60, function(){
//																								$(".future_visual p:eq(0) img").attr("src", "img/test/test22.png").animate({opacity:"1"},60, function(){
//																									$(".future_visual p:eq(0) img").attr("src", "img/test/test23.png").animate({opacity:"1"},60, function(){
//																										$(".future_visual p:eq(0) img").attr("src", "img/test/test24.png").animate({opacity:"1"},60, function(){
//																											$(".future_visual p:eq(0) img").attr("src", "img/test/test25.png").animate({opacity:"1"},60, function(){
//																												$(".future_visual p:eq(0) img").attr("src", "img/test/test26.png").animate({opacity:"1"},60, function(){
//																													$(".future_visual p:eq(0) img").attr("src", "img/test/test27.png").animate({opacity:"1"},60, function(){
//																														$(".future_visual p:eq(0) img").attr("src", "img/test/test28.png").animate({opacity:"1"},60, function(){
//																															$(".future_visual p:eq(0) img").attr("src", "img/test/test29.png").animate({opacity:"1"},60, function(){
//																																$(".future_visual p:eq(0) img").attr("src", "img/test/test30.png").animate({opacity:"1"},60, function(){
//																																	$(".future_visual p:eq(0) img").attr("src", "img/test/test31.png").animate({opacity:"1"},60, function(){
//																																		$(".future_visual p:eq(0) img").attr("src", "img/test/test32.png").animate({opacity:"1"},60, function(){
//																																			$(".future_visual p:eq(0) img").attr("src", "img/test/test33.png").animate({opacity:"1"},60, function(){
//																																				$(".future_visual p:eq(0) img").attr("src", "img/test/test34.png").animate({opacity:"1"},60, function(){
//																																					$(".future_visual p:eq(0) img").attr("src", "img/test/test35.png").animate({opacity:"1"},60, function(){
//																																						$(".future_visual p:eq(0) img").attr("src", "img/test/test36.png").animate({opacity:"1"},60, function(){
//																																							$(".future_visual p:eq(0) img").attr("src", "img/test/test37.png").animate({opacity:"1"},60, function(){
//																																								$(".future_visual p:eq(0) img").attr("src", "img/test/test38.png").animate({opacity:"1"},60, function(){
//																																									$(".future_visual p:eq(0) img").attr("src", "img/test/test39.png").animate({opacity:"1"},60, function(){
//																																										$(".future_visual p:eq(0) img").attr("src", "img/test/test40.png").animate({opacity:"1"},60, function(){
//																																											$(".future_visual p:eq(0) img").attr("src", "img/test/test41.png").animate({opacity:"1"},60, function(){
//																																												$(this).animate({opacity:"0"},1500, function(){});
//																																												$(".future_visual p:eq(0) img").attr("src", "img/3.png").animate({opacity:"1"},60);
//																																											});
//																																										});
//																																									});
//																																								});
//																																							});
//																																						});
//																																					});
//																																				});
//																																			});
//																																		});
//																																	});
//																																});
//																															});
//																														});
//																													});
//																												});
//																											});
//																										});
//																									});
//																								});
//																							});
//																						});
//																					});
//																				});
//																			});
//																		});
//																	});
//																});
//															});
//														});
//													});
//												});
//											});
//										});
//									});
//								});
//							});
//						});
//					});
//				});
//			});
	
	
	
//			$(".future_visual p:eq(0) img").css({opacity:"0"}).attr("src", "img/1.png").animate({opacity:"1"}, 1500,function(){
//				$(".future_visual p:eq(0) img").animate({opacity:"0"}, 1000,function(){
//					$(this).attr("src", "img/2.png").animate({opacity:"1"}, 1500);
//
//				});
//			});			

//-------------------------------------------------------------------------- 체크
//		$(".check").text($(".h4_line").parent().next().html());
	
	
//	$("<div class='sc_num'>1<div>").prependTo("body");
//	$(".sc_num").css({position:"fixed", top:"0", left: "300px", width:"100px", height:"100px", background:"rgba(0,0,0,0.5)"})
//	$("<div class='check'>1<div>").prependTo("body");
//	$(".check").css({position:"fixed", top:"0", left: "0", width:"200px", height:"200px", background:"rgba(0,0,0,0.5)"})
//-------------------------------------------------------------------------- 체크	
	
	
	$(".btn_top").hide();
	
	$(".btn_top button").click(function(){
		$("html,body").stop().animate({scrollTop:"0"},400);
	});
	
	$("h1").hide();
	$("h1").fadeIn(2500);
	
	$(".gnb button").css({width:"0", opacity:"0"});
	
	// gnb 조작 및 동작
	$(".gnb li:eq(3) button").animate({width: "110px", opacity:"1"},1500);
	$(".gnb li:eq(2) button").animate({width: "110px", opacity:"1"},1800);
	$(".gnb li:eq(1) button").animate({width: "110px", opacity:"1"},2000);
	$(".gnb li:eq(0) button").animate({width: "110px", opacity:"1"},2200);
	
	$(".gnb li").mouseover(function(){
		$("li").not(this).stop().animate({marginTop:"-15px"});
	});
	$(".gnb li").mouseleave(function(){
		$("li").not(this).stop().animate({marginTop:"0px"});
	});
	

	$(".visual_a p:eq(0)").css({marginTop:"100px", height: "0", opacity:"0"});
	$(".visual_a p:eq(0)").animate({marginTop:"0px", height: "150px", opacity:"1"},1500);	
	$(".visual_a p:eq(1)").css({opacity:"0"});
	$(".visual_a p:eq(1)").delay(1500).animate({opacity:"1"},1500);
	
	$(".visual_b").css({opacity:"0"});
	$(".visual_b").delay(2500).animate({opacity:"1"},1500)
	
	
    // 히스토리 하위 아코디언패널
	$(".history_title").css("cursor","pointer");
    $(".history_info:not(:eq(0))").hide();
    $(".history_title").click(function(){
        $(".history_info").stop().slideUp();
        $(this).next().stop().slideDown();
    });
	
    // 히스토리2 하위 버튼
    $(".CS h5").click(function(){
        $(".CS p").hide();
        $(this).next().show();
    });
    
    // Now portfolio 마우스 오버 & 리브
    $(".portfolio>ul>li:eq(0) p img").mouseover(function(){
        $(this).attr("src", "img/kcc_mockup_over.png" );
    });
    $(".portfolio>ul>li:eq(0) p img").mouseleave(function(){
        $(this).attr("src", "img/kcc_mockup.png" );
    });
    $(".portfolio>ul>li:eq(1) p img").mouseover(function(){
        $(this).attr("src", "img/kyobo_mockup_over.png" );
    });
    $(".portfolio>ul>li:eq(1) p img").mouseleave(function(){
        $(this).attr("src", "img/kyobo_mockup.png" );
    });
    $(".portfolio>ul>li:eq(2) p img").mouseover(function(){
        $(this).attr("src", "img/kakao_mockup_over.png" );
    });
    $(".portfolio>ul>li:eq(2) p img").mouseleave(function(){
        $(this).attr("src", "img/kakao_mockup.png" );
    });
    


    
    // 초기 제어
        // past main
        $(".past .main").css({paddingTop:"200px",opacity:"0"});
        $(".past .main h3").css({paddingTop:"100px",opacity:"0"});
        $(".past .main p").css({marginTop:"100px",opacity:"0"});
        // now main
        $(".now").css({opacity:"0"});
        $(".now .main h3").css({paddingLeft:"0",paddingTop:"0", opacity:"0"});
        $(".now .main p").css({ marginTop:"250px", opacity:"0"});
        // future main
        $(".future").css({opacity:"0"});    
        $(".future .main h3").css({paddingLeft:"0",paddingTop:"0", opacity:"0"});   
        $(".future .main p").css({ marginTop:"220px", opacity:"0"});    
    
        //  past career
        $(".career > div").css({opacity:"0"});
    
        // now portfolio
        $(".portfolio>ul>li").css({opacity:"0", marginTop:"50px"});
	
   	  // future_visual
			$(".future_visual img").css({opacity:"0"});
			$(".future_visual q:eq(0)").css({marginTop:"50px",opacity:"0"});
			$(".future_visual q:eq(1)").css({opacity:"0"});
			$(".future_visual cite").css({opacity:"0"});
			$(".future_visual .picto li").css({opacity:"0"});
   
   
   
	// .past main 모션 기능
	function mainMotion1_1(){
        $(".past .main").animate({paddingTop:"70px",opacity:"1"},1500);};
	function mainMotion1_2(){
        $(".past .main h3").animate({paddingTop:"50px",opacity:"1"},1500,function(){
            $(".past .main p").animate({marginTop:"55px",opacity:"1"},1500);
        });
    };
	//  .now main 모션 기능
    function mainMotion2_1(){
        $(".now").animate({opacity:"1"},1000,function(){
            $(".now .main h3").animate({paddingLeft:"80px", opacity:"1"},1000,function(){
                $(".now .main h3").animate({paddingTop:"50px"},1500,function(){
                    $(".now .main p").animate({marginTop:"190px",opacity:"1"},1500);
                });
            });
        });
    };
	//  .future main 모션 기능    
    function mainMotion3_1(){
        $(".future").animate({opacity:"1"},1500,function(){
            $(".future .main h3").animate({paddingLeft:"40px", opacity:"1"},1500,function(){
                $(".future .main h3").animate({paddingTop:"95px"},1500,function(){
                    $(".future .main p").animate({marginTop:"170px",opacity:"1"},1500);
                });
            });
        });
    };
    
    // career 변수
    var careerState1 = 1;
	 var careerState2 = 1;
	 var careerState3 = 1;
    var careerH = 1;
    var careerS = 1;
    var careerC = 1;
    var careerA = 1;
	 // future 변수
	 var futureV = 1;
    
    // career history 동작
    function careerH_Motion(){
        if( careerH == 1 ){    
            careerH = 2;
            
            $(".history").css({opacity:"1"});
            $(".history .h4_line").css({opacity:"0"});
            $(".history h4").css({width:"0"});
            $(".history ol>li").css({opacity:"0"});
            
            $(".history .h4_line").stop().animate({opacity:"1"}, 500,function(){
                $(".history h4").stop().animate({width: "100%"},1500,function(){
                    $(".history ol>li:eq(0)").animate({opacity:"1"},1000);
                    $(".history ol>li:eq(1)").delay(1000).animate({opacity:"1"},1000);
                    $(".history ol>li:eq(2)").delay(1500).animate({opacity:"1"},1000);
                    $(".history ol>li:eq(3)").delay(2000).animate({opacity:"1"},1000);
                });
            });
        };
    };    
    // career skill 동작
    function careerS_Motion(){
        if( careerS == 1 ){    
            careerS = 2;
            
            $(".skill").css({opacity:"1"});
            $(".skill .h4_line").css({opacity:"0"});
            $(".skill h4").css({width:"0"});
            $(".skill ul").css({opacity:"0"});
            $(".skill ul li").css({opacity:"0"});
            $(".skill ul li p").css({opacity:"0", marginTop:""});
            
            $(".skill .h4_line").stop().animate({opacity:"1"}, 500,function(){
                $(".skill h4").stop().animate({width: "100%"},1500,function(){
                    $(".skill ul").stop().animate({opacity:"1"},function(){
                        $(".skill ul li").stop().animate({opacity:"1"},function(){
                            $(".skill ul li p").stop().animate({opacity:"1"});
                        });
                    });
                });
            });
        };
    };    
    // career certificate 동작
    function careerC_Motion(){
        if( careerC == 1 ){    
            careerC = 2;
            
            $(".certificate").css({opacity:"1"});
            $(".certificate .h4_line").css({opacity:"0"});
            $(".certificate h4").css({width:"0"});
            $(".certificate ul").css({opacity:"0"});
            
            $(".certificate .h4_line").stop().animate({opacity:"1"}, 500,function(){
                $(".certificate h4").stop().animate({width: "100%"},1500,function(){
                    $(".certificate ul").stop().animate({opacity:"1"});
                });
            });
        };
    };    
    // career certificate 동작
    function careerA_Motion(){
        if( careerA == 1 ){    
            careerA = 2;
            
            $(".awards").css({opacity:"1"});
            $(".awards .h4_line").css({opacity:"0"});
            $(".awards h4").css({width:"0"});
            $(".awards>ol>li").css({opacity:"0"});
            
            $(".awards .h4_line").stop().animate({opacity:"1"}, 500,function(){
                $(".awards h4").stop().animate({width: "100%"},1500,function(){
                    $(".awards>ol>li:eq(0)").stop().animate({opacity:"1"},function(){
                        $(".awards>ol>li:eq(1)").stop().animate({opacity:"1"});
                    });
                });
            });
        };
    };
	
	// future_visual 동작
	function futureV_Motion(){
		if(futureV == 1){
			futureV = 2;
			// ↓ future visual 동작 부분
			$(".future_visual p:eq(0) img").css({opacity:"0"}).attr("src", "img/signature_motion.gif").animate({opacity:"1"}, 2100,function(){
				$(this).animate({opacity:"0"}, function(){
					$(this).attr("src", "img/signature_ready.png").delay(500).animate({opacity:"1"},1500, function(){
						$(this).css({opacity:"0.5"}).attr("src", "img/signature.png").animate({opacity:"1"},function(){ 
							$(".future_visual p:eq(1) img").animate({opacity:"1"},1000, function(){
								// ↓ future visual 명언 동작 부분
								$(".future_visual q:eq(0)").animate({marginTop:"0px",opacity:"1"},1500);							  									
								$(".future_visual q:eq(1)").delay(1000).animate({opacity:"1"},2000);
								$(".future_visual cite").delay(1500).animate({opacity:"1"},1000, function(){
									// ↓ future visual 프로필 동작 부분
									$(".future_visual li:eq(0)").animate({opacity:"1"},1500);											 									 
									$(".future_visual li:eq(1)").delay(500).animate({opacity:"1"},1500);
									$(".future_visual li:eq(2)").delay(1000).animate({opacity:"1"},1500);
									$(".future_visual li:eq(3)").delay(1500).animate({opacity:"1"},1500);
								});	
							});
						});
					});
				});
			});
		};	
	};



	// 원페이지 스크롤탑 메뉴 슬라이드
	$(".gnb li:eq(0)").click(function(){
      $("html,body").stop().animate({scrollTop: 0 });
   });
	$(".gnb li:eq(1)").click(function(){
      $("html,body").stop().animate({scrollTop: 900 });
   });
	$(".gnb li:eq(2)").click(function(){
      $("html,body").stop().animate({scrollTop: 3700 });
   });
	$(".gnb li:eq(3)").click(function(){
      $("html,body").stop().animate({scrollTop: 5700 });
   });
	
	// 스크롤
	$(window).scroll(function(){
		var sc_num = $("html,body").scrollTop();
		$(".sc_num").text(sc_num);
		
		// Top버튼 제공
		if ($( this ).scrollTop() > 500 ){
			$(".btn_top").fadeIn();
		}else{
			$(".btn_top").fadeOut();
		}
		
        // past about + ws motion
		if(sc_num > 300){
				$(".past .about").animate({opacity:"1"},1500);
				$(".past .ws q:eq(0)").animate({marginRight:"0px",opacity:"1"},1500);
				$(".past .ws q:eq(1)").delay(1000).animate({opacity:"1"},2000);
				$(".past .ws cite").delay(1500).animate({opacity:"1"},2000);
			}else{
				$(".past .about").css({opacity:"0"});
				$(".past .ws q:eq(0)").css({marginRight:"-100px",opacity:"0"});
				$(".past .ws q:eq(1)").css({opacity:"0"});
				$(".past .ws cite").css({opacity:"0"});
			};
        // now about + ws motion
		if(sc_num > 4160){
				$(".now .about").animate({opacity:"1"},1500);
				$(".now .ws q:eq(0)").animate({marginRight:"0px",opacity:"1"},1500);
				$(".now .ws q:eq(1)").delay(1000).animate({opacity:"1"},2000);
				$(".now .ws cite").delay(1500).animate({opacity:"1"},1000,function(){
                    $(".portfolio>ul>li:eq(0)").animate({opacity:"1", marginTop:"0"},1000);
                    $(".portfolio>ul>li:eq(1)").delay(300).animate({opacity:"1", marginTop:"0"},1000);
                    $(".portfolio>ul>li:eq(2)").delay(600).animate({opacity:"1", marginTop:"0"},1000);
                });
			}else{
				$(".now .about").css({opacity:"0"});
				$(".now .ws q:eq(0)").css({marginRight:"-100px",opacity:"0"});
				$(".now .ws q:eq(1)").css({opacity:"0"});
				$(".now .ws cite").css({opacity:"0"});
        };
        // future about + ws motion
        if(sc_num > 5750){
				$(".future .about").animate({opacity:"1"},1500,function(){
					$(".future .ws q:eq(0)").animate({marginRight:"0px",opacity:"1"},1500);
					$(".future .ws q:eq(1)").delay(1000).animate({opacity:"1"},2000);
					$(".future .ws cite").delay(1500).animate({opacity:"1"},1000);
				});
			}else{
				$(".future .about").css({opacity:"0"});
				$(".future .ws q:eq(0)").css({marginRight:"-100px",opacity:"0"});
				$(".future .ws q:eq(1)").css({opacity:"0"});
				$(".future .ws cite").css({opacity:"0"});
        };
        
        
		// past main motion
		if(sc_num > 700 && sc_num <= 800){
				mainMotion1_1();
			}else if(sc_num > 800){
				mainMotion1_2();
			}else{
		};				
        // now main motion
		if(sc_num > 3200){
			mainMotion2_1();
		};
        // future main motion
		if(sc_num > 5200){
            mainMotion3_1();
        };

		// history
		if(sc_num > 1200){ careerH_Motion() };
		// skill
		if(sc_num > 1800){ careerS_Motion() };
		// certificate
		if(sc_num > 2200){ careerC_Motion() };
		// awards
		if(sc_num > 2500){ careerA_Motion() };
		

		//future_Motion() 
      if(sc_num > 6400){ futureV_Motion()	};  
        
        
	}); // 윈도우 스크롤 마무리
});	// 전체 function 마무리