$(function(){
	//	------------------------------------------------------------------------- 체크
		$("<div class='sc_num'>1<div>").prependTo("body");
		$(".sc_num").css({position:"fixed", top:"0", left: "300px", width:"100px", height:"100px", background:"rgba(0,0,0,0.5)", color:"#fff", zIndex:"100"})
		$("<div class='check'>1<div>").prependTo("body");
		$(".check").css({position:"fixed", top:"0", left: "0", width:"200px", height:"200px", background:"rgba(0,0,0,0.5)", color:"#fff", zIndex:"100"});
	
		$(window).scroll(function(){
			$(".check").text($("html,body").scrollTop());
		});
	//-------------------------------------------------------------------------- 체크		
	
	//-------------------------------------------------------------- PC 함수
	//★전역변수 선언구역
	var bwWidth = $(window).width();	//(1) 브라우저의 너비값 기록 변수(리사이즈  이벤트 발생시 추가 기록 필요)
	var scNum = $("html,body").scrollTop();  //(2) 브라우저의 스크롤바 위치값 기록변수(스크롤 이벤트 발생시 추가 기록필요)
	var sectionH1 = $("section:eq(0)").css("height"); //(ex) 섹션별 높이값 CSS가져오기(기록)
	var sectionH2 = $("section:eq(1)").css("height"); //(ex) 섹션별 높이값 CSS가져오기(기록)
	var sectionH3 = $("section:eq(2)").css("height"); //(ex) 섹션별 높이값 CSS가져오기(기록)
	
	function a(){
		//------------------------------------------------------ PC 조작 <<<< 정상으로 돌린다음 모바일쪽에 붙여넣기
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
		//------------------------------------------------------ Mobil 원위치 <<<< 정상으로 돌린 모바일 조작 붙여넣기
				$(".test2_4").css({opacity:"1"});
				$("#test3").css({marginTop:"0px"});
		//------------------------------------------------------

		//------------------------------------------------ PC 동작 함수

			// .past main 모션 기능
			function mainMotion1_1(){ 
				$(".past .main").animate({paddingTop:"70px",opacity:"1"},1500)
			};
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
						$(".skill ul li p").css({opacity:"0", paddingTop:"50px"});

						$(".skill .h4_line").stop().animate({opacity:"1"}, 500,function(){
							 $(".skill h4").stop().animate({width: "100%"},1500,function(){
								  $(".skill ul").stop().animate({opacity:"1"},function(){
										$(".skill ul li").stop().animate({opacity:"1"},function(){
											 $(".skill ul li p:eq(0)").stop().animate({opacity:"1", paddingTop:"0"},1000,"easeOutBounce");
											 $(".skill ul li p:eq(1)").delay(300).stop().animate({opacity:"1", paddingTop:"0"},1000,"easeOutBounce");
											 $(".skill ul li p:eq(2)").delay(600).stop().animate({opacity:"1", paddingTop:"0"},1000,"easeOutBounce");
											 $(".skill ul li p:eq(3)").delay(900).stop().animate({opacity:"1", paddingTop:"0"},1000,"easeOutBounce");
											 $(".skill ul li p:eq(4)").delay(1200).stop().animate({opacity:"1", paddingTop:"0"},1000,"easeOutBounce");
											 $(".skill ul li p:eq(5)").delay(1500).stop().animate({opacity:"1", paddingTop:"0"},1000,"easeOutBounce");
											 $(".skill ul li p:eq(6)").delay(1800).stop().animate({opacity:"1", paddingTop:"0"},1000,"easeOutBounce");
											 $(".skill ul li p:eq(7)").delay(2100).stop().animate({opacity:"1", paddingTop:"0"},1000,"easeOutBounce");
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
			// career awards 동작
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
						$(this).delay(1000).animate({opacity:"0"}, function(){
							$(this).attr("src", "img/signature_ready.png").animate({opacity:"1"},1500, function(){
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


		//------------------------------------------------- PC 너비 관계(O) & 스크롤 관계(O) 동작 실행 함수
				var pcMotionState = 1;
				function pcMotion(){
					if(pcMotionState == 1){
						pcMotionState = 2;
		//------------------------------------------------- PC 너비 관계(O) & 스크롤 관계(O) 실행 목록
						$(window).scroll(function(){

							var sc_num = $("html,body").scrollTop();
							$(".sc_num").text(sc_num);

							// Top버튼 제공
							if ($( this ).scrollTop() > 500 ){
								$(".btn_top").fadeIn();
							}else{
								$(".btn_top").fadeOut();
							};

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
							  if(sc_num > 6150){
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
							if(sc_num > 5400){
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
							if(sc_num > 6500){ futureV_Motion()	};  

						}); // 윈도우 스크롤 마무리
					};
				};


		//------------------------------------------------- PC 너비 관계(O) & 스크롤 관계(X) 동작 실행 ※시작
			$(".btn_top").hide();

			$(".btn_top button").click(function(){ $("html,body").stop().animate({scrollTop:"0"},400); });

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
			$(".visual_b").delay(2500).animate({opacity:"1"},1500);

			 // Now portfolio 마우스 오버 & 리브
			$(".portfolio>ul>li:eq(0) p").mouseover(function(){
				$(this).children().children().attr("src", "img/kcc_mockup_over.png" ).stop().animate({ width: "102%", height: "102%", margin: "-1% 0 0 -1%"},300);
			});
			$(".portfolio>ul>li:eq(0) p").mouseleave(function(){
				$(this).children().children().attr("src", "img/kcc_mockup.png" ).stop().animate({width: "100%", height: "100%", margin: "0 0 0 0"},300);
			});
			$(".portfolio>ul>li:eq(1) p").mouseover(function(){
				$(this).children().children().attr("src", "img/kyobo_mockup_over.png" ).stop().animate({ width: "102%", height: "102%", margin: "-1% 0 0 -1%"},300);;
			});
			$(".portfolio>ul>li:eq(1) p").mouseleave(function(){
				$(this).children().children().attr("src", "img/kyobo_mockup.png" ).stop().animate({width: "100%", height: "100%", margin: "0 0 0 0"},300);;
			});
			$(".portfolio>ul>li:eq(2) p").mouseover(function(){
				$(this).children().children().attr("src", "img/kakao_mockup_over.png" ).stop().animate({ width: "102%", height: "102%", margin: "-1% 0 0 -1%"},300);;
			});
			$(".portfolio>ul>li:eq(2) p").mouseleave(function(){
				$(this).children().children().attr("src", "img/kakao_mockup.png" ).stop().animate({width: "100%", height: "100%", margin: "0 0 0 0"},300);;
			});
		
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
		//------------------------------------------------- PC 너비 관계(O) & 스크롤 관계(X) 동작 실행 ※끝     

				

				$(window).scroll(function(){
					scNum = $("html,body").scrollTop();

					if(scNum > 300 ){ pcMotion() };
				});
	
			};
	
	
	
	
	
	
	
	
	
	
	if(bwWidth > 1100){
		(function(){
			$("*").stop(true);
			a();
		}());
	};
		
	
	

	$(window).resize(function(){
		//★전역변수 선언구역
		var bwWidth = $(window).width();	//(1) 브라우저의 너비값 기록 변수(리사이즈  이벤트 발생시 추가 기록 필요)
		var scNum = $("html,body").scrollTop();  //(2) 브라우저의 스크롤바 위치값 기록변수(스크롤 이벤트 발생시 추가 기록필요)
		var sectionH1 = $("section:eq(0)").css("height"); //(ex) 섹션별 높이값 CSS가져오기(기록)
		var sectionH2 = $("section:eq(1)").css("height"); //(ex) 섹션별 높이값 CSS가져오기(기록)
		var sectionH3 = $("section:eq(2)").css("height"); //(ex) 섹션별 높이값 CSS가져오기(기록)
		
		if(bwWidth > 1100){
			(function(){
				$("*").stop(true);
				a();
			}());	
		};
	});
	
	
	
});