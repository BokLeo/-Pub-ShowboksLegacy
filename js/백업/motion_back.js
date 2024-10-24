$(function(){
	//	------------------------------------------------------------------------- 체크
		$("<div class='header_num'>1<div>").prependTo("body");
		$("<div class='ss1_num'>1<div>").prependTo("body");
		$("<div class='ss2_num'>1<div>").prependTo("body");
		$("<div class='ss3_num'>1<div>").prependTo("body");
		$("<div class='ss4_num'>1<div>").prependTo("body");
		$("<div class='skill_num'>1<div>").prependTo("body");
		$(".header_num").css({position:"fixed", top:"0", right:"0", width:"100px", height:"50px", background:"rgba(0,0,0,0.5)", color:"#fff", zIndex:"100"})
		$(".ss1_num").css({position:"fixed", top:"50px", right:"0", width:"100px", height:"50px", background:"rgba(0,0,0,0.5)", color:"#fff", zIndex:"100"})
		$(".ss2_num").css({position:"fixed", top:"100px", right:"0", width:"100px", height:"50px", background:"rgba(0,0,0,0.5)", color:"#fff", zIndex:"100"})
		$(".ss3_num").css({position:"fixed", top:"150px", right:"0", width:"100px", height:"50px", background:"rgba(0,0,0,0.5)", color:"#fff", zIndex:"100"})
		$(".ss4_num").css({position:"fixed", top:"200px", right:"0", width:"100px", height:"50px", background:"rgba(0,0,0,0.5)", color:"#fff", zIndex:"100"})
		$(".skill_num").css({position:"fixed", top:"250px", right:"0", width:"100px", height:"50px", background:"rgba(50,1,255,1)", color:"#fff", zIndex:"100"})
		$("<div class='check'>1<div>").prependTo("body");
		$(".check").css({position:"fixed", top:"0", left: "0", width:"100px", height:"50px", background:"rgba(0,0,0,0.5)", color:"#fff", zIndex:"100"});
	
		$(window).scroll(function(){$(".check").text($("html,body").scrollTop());});


	
	//-------------------------------------------------------------------------- 체크		
	
	//-------------------------------------------------------------- PC 함수
	//★전역변수 선언구역
	var bwWidth = $(window).width();	//(1) 브라우저의 너비값 기록 변수(리사이즈  이벤트 발생시 추가 기록 필요)
	var scNum = $("html,body").scrollTop();  //(2) 브라우저의 스크롤바 위치값 기록변수(스크롤 이벤트 발생시 추가 기록필요)
	var headerH = parseInt($("header").css("height")); //(ex) 섹션별 높이값 CSS가져오기(기록)
	var sectionH1 = parseInt($("section:eq(0)").css("height")); //(ex) 섹션별 높이값 CSS가져오기(기록)
	var sectionH2 = parseInt($("section:eq(1)").css("height")); //(ex) 섹션별 높이값 CSS가져오기(기록)
	var sectionH3 = parseInt($("section:eq(2)").css("height")); //(ex) 섹션별 높이값 CSS가져오기(기록)
	var sectionH4 = parseInt($("section:eq(3)").css("height")); //(ex) 섹션별 높이값 CSS가져오기(기록)
	var sectionH4 = parseInt($("section:eq(3)").css("height")); //(ex) 섹션별 높이값 CSS가져오기(기록)
	var ss1H = headerH
	var ss2H = headerH + sectionH1
	var ss3H = headerH + sectionH1 + sectionH2
	var ss4H = headerH + sectionH1 + sectionH2 + sectionH3
	var skillH = $(".past .skill").offset().top;
	

//	------------------------------------------------------------------------- 체크
		// 각 시작점 확인용 ※ 전역변수를 이용하기때문에 전역변수 이후에 두어야 한다.
//		$(".header_num").text(0);
//		$(".ss1_num").text(headerH);
//		$(".ss2_num").text(headerH + sectionH1);
//		$(".ss3_num").text(headerH + sectionH1 + sectionH2);
//		$(".ss4_num").text(headerH + sectionH1 + sectionH2 + sectionH3);
//		$(".skill_num").text(skillH);
//	------------------------------------------------------------------------- 체크
	
//-------------------------------------------------------------------------------------------- 전체 공통 함수 ※시작

	function allMotion(){

			$(".btn_top").animate({opacity:"0"});
			$(".btn_top button").click(function(){ $("html,body").stop().animate({scrollTop:"0"},400); });				 
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
        
	headerH = parseInt($("header").css("height")); //(ex) 섹션별 높이값 CSS가져오기(기록)
	sectionH1 = parseInt($("section:eq(0)").css("height")); //(ex) 섹션별 높이값 CSS가져오기(기록)
	sectionH2 = parseInt($("section:eq(1)").css("height")); //(ex) 섹션별 높이값 CSS가져오기(기록)
	sectionH3 = parseInt($("section:eq(2)").css("height")); //(ex) 섹션별 높이값 CSS가져오기(기록)
	sectionH4 = parseInt($("section:eq(3)").css("height")); //(ex) 섹션별 높이값 CSS가져오기(기록)
	ss1H = headerH                                     // 헤더 높이
	ss2H = headerH + sectionH1                         // 과거 시작점
	ss3H = headerH + sectionH1 + sectionH2             // 현재 시작점
	ss4H = headerH + sectionH1 + sectionH2 + sectionH3 // 미래 시작점        
			// 원페이지 스크롤탑 메뉴 슬라이드
			$(".gnb li:eq(0)").click(function(){$("html,body").stop().animate({scrollTop: 0});});
			$(".gnb li:eq(1)").click(function(){$("html,body").stop().animate({scrollTop: ss2H });});
			$(".gnb li:eq(2)").click(function(){$("html,body").stop().animate({scrollTop: ss3H - 100 });});
			$(".gnb li:eq(3)").click(function(){$("html,body").stop().animate({scrollTop: ss4H - 100 });});
        
        
			$(window).scroll(function(){
				 scNum = $("html,body").scrollTop();
				 bwWidth = $(window).width();
				// Top버튼 제공
				if (scNum > 500){
					$(".btn_top").animate({opacity:"1"});

				};
			});

	};
//-------------------------------------------------------------------------------------------- 전체 공통 함수 ※끝
	
	
	
	
//-------------------------------------------------------------------------------------------- Mobile 함수 ※시작
	function mobile(){	
		
// ★ 모든 동작에 들어가는 조작 중 '공통 동작을 위한 조작'이 아닌 단일 플랫폼(pc or mobil)을 위한 조작은 이곳에 기입되어야 한다.
		//------------------------------------------------------ Moblie 조작 ※시작 <<<< 정상으로 돌린다음 ★PC쪽에★ 붙여넣기

			var M_VMS = 1;
			function M_visualMotion(){
				if(M_VMS == 1){
					M_VMS = 2;
					$(".visual_a p:eq(0)").css({opacity:"0"});
					$(".visual_a p:eq(1)").css({opacity:"0"});				

					$(".visual_a p:eq(0)").animate({opacity:"1"},3000);
					$(".visual_a p:eq(1)").delay(1500).animate({opacity:"1"},1500);
				};
			};
			M_visualMotion();		
		
		
			// 스크롤 함수 조작

				$(".future_visual img").css({opacity:"0"});
				$(".future_visual q:eq(0)").css({marginTop:"50px",opacity:"0"});
				$(".future_visual q:eq(1)").css({opacity:"0"});
				$(".future_visual cite").css({opacity:"0"});
				$(".future_visual .picto li").css({opacity:"0"});
		


		
		//------------------------------------------------------ Moblie 조작 ※끝
		
		
		//------------------------------------------------------ PC 원위치 ※시작 <<<< ★정상으로 돌린 PC조작을★ 붙여넣기
			$("h1").css({opacity:"1"});
			$(".gnb button").css({width:"110px", opacity:"1"});
			$(".visual_a p:eq(0)").css({marginTop:"0px", height: ""}); //----------------★ pc조작은 height: 150px > 모바일은 height속성없음 ※저렇게 비워놓으니 height속성 사라짐
			$(".visual_b").css({opacity:"1"});
		
		
		
			$(".past .about").css({opacity:"1"});
			$(".past .ws q:eq(0)").css({marginRight:"0px",opacity:"1"});
			$(".past .ws q:eq(1)").css({opacity:"1"});
			$(".past .ws cite").css({opacity:"1"});
			$(".now .about").css({opacity:"1"});
			$(".now .ws q:eq(0)").css({marginRight:"0px",opacity:"1"});
			$(".now .ws q:eq(1)").css({opacity:"1"});
			$(".now .ws cite").css({opacity:"1"});
			$(".portfolio>ul>li:eq(0)").css({opacity:"1", marginTop:"0"});
			$(".portfolio>ul>li:eq(1)").css({opacity:"1", marginTop:"0"});
			$(".portfolio>ul>li:eq(2)").css({opacity:"1", marginTop:"0"});
			$(".future .about").css({opacity:"1"});
			$(".future .ws q:eq(0)").css({marginRight:"0px",opacity:"1"});
			$(".future .ws q:eq(1)").css({opacity:"1"});
			$(".future .ws cite").animate({opacity:"1"});	

				
			  // past main
			  $(".past .main").css({paddingTop:"0px",opacity:"1"});
			  $(".past .main h3").css({paddingTop:"30px",opacity:"1"});
			  $(".past .main p").css({marginTop:"30px",opacity:"1"});
			  // now main
			  $(".now").css({opacity:"1"});
			  $(".now .main h3").css({paddingLeft:"5px",paddingTop:"30px", opacity:"1"});
			  $(".now .main p").css({ marginTop:"30px", opacity:"1"});
			  // future main
			  $(".future").css({opacity:"1"});    
			  $(".future .main h3").css({paddingLeft:"5px",paddingTop:"30px", opacity:"1"});   
			  $(".future .main p").css({ marginTop:"30px", opacity:"1"});    

			  //  past career
			  $(".career > div").css({opacity:"1"});

			  // now portfolio
			  $(".portfolio>ul>li").css({opacity:"1", marginTop:"0"});

			  // future_visual

		
				// 함수 애니메이션 값 초기화
				$(".history .h4_line").css({opacity:"1"});
				$(".history h4").css({width: "100%"});
				$(".history ol>li:eq(0)").css({opacity:"1"});
				$(".history ol>li:eq(1)").css({opacity:"1"});
				$(".history ol>li:eq(2)").css({opacity:"1"});
				$(".history ol>li:eq(3)").css({opacity:"1"});
				$(".skill .h4_line").css({opacity:"1"});
				$(".skill h4").css({width: "100%"});
				$(".skill ul").css({opacity:"1"});
				$(".skill ul li").css({opacity:"1"});
				$(".certificate .h4_line").css({opacity:"1"});
				$(".certificate h4").css({width: "100%"});
				$(".certificate ul").css({opacity:"1"});
				$(".awards .h4_line").css({opacity:"1"});
				$(".awards h4").css({width: "100%"});
				$(".awards>ol>li:eq(0)").css({opacity:"1"});
				$(".awards>ol>li:eq(1)").css({opacity:"1"});
		
			$(".gnb li").mouseover(function(){$("li").not(this).stop().css({marginTop:"0px"});});
			$(".gnb li").mouseleave(function(){$("li").not(this).stop().css({marginTop:"0px"});});

		//------------------------------------------------------ PC 원위치 ※끝

        $(".header_wrap>p").click(function(){
            $(".header_wrap>p").stop().animate({marginLeft:"30px" ,opacity:"0"});
            $("nav").stop().animate({left:"0"});
        });
        
        $(".header_wrap nav>p").click(function(){
            $("nav").stop().animate({left:"-180px", opacity:"1"});
            $(".header_wrap>p").stop().animate({marginLeft:"0", opacity:"1"});
        });
        

		//------------------------------------------------- 플랫폼 관계(O) & 너비 관계(X) & 스크롤 관계(X) 동작 실행 ※시작

			$(".skill li p").css({opacity:"0", paddingTop:"50px"});
		
		
		
		

		//------------------------------------------------- 플랫폼 관계(O) & 너비 관계(X) & 스크롤 관계(X) 동작 실행 ※끝 

		//------------------------------------------------ Moblie 동작을 위한 함수 목록 ※시작 << pcMotion()속 스크롤에 적용 되어짐
       
        
            var M_careerS = 1;
				function M_careerS_Motion(){
					if(M_careerS == 1 ){
						M_careerS = 2;
						
					$(".skill li:eq(0) p").animate({opacity:"1", paddingTop:"0"},1500,"easeOutBounce");
					$(".skill li:eq(1) p").delay(300).animate({opacity:"1", paddingTop:"0"},1500,"easeOutBounce");
					$(".skill li:eq(2) p").delay(600).animate({opacity:"1", paddingTop:"0"},1500,"easeOutBounce");
					$(".skill li:eq(3) p").delay(900).animate({opacity:"1", paddingTop:"0"},1500,"easeOutBounce");
					$(".skill li:eq(4) p").delay(1200).animate({opacity:"1", paddingTop:"0"},1500,"easeOutBounce");
					$(".skill li:eq(5) p").delay(1500).animate({opacity:"1", paddingTop:"0"},1500,"easeOutBounce");
					$(".skill li:eq(6) p").delay(1800).animate({opacity:"1", paddingTop:"0"},1500,"easeOutBounce");
					$(".skill li:eq(7) p").delay(2100).animate({opacity:"1", paddingTop:"0"},1500,"easeOutBounce");
					};

				};
		
				var M_futureV = 1;
				function M_futureV_Motion(){
				if(M_futureV == 1){
					M_futureV = 2;
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
		//------------------------------------------------ Moblie 동작을 위한 함수 목록 ※끝
			
			$("h1").css({border:"2px solid green"});
		
		
		//------------------------------------------------- 플랫폼 관계(O) & 너비 관계(O) & 스크롤 관계(O) 동작 실행 함수 ※시작
				var mMotionState = 1;
				function mMotion(){
					if(mMotionState == 1){
						mMotionState = 2;		
			//------------------------------------------------- 플랫폼 관계(O) & 너비 관계(O) & 스크롤 관계(O) 실행 목록
							$(window).scroll(function(){

								bwWidth = $(window).width();
								scNum = $("html,body").scrollTop();
								headerH = parseInt($("header").css("height"));
								sectionH1 = parseInt($("section:eq(0)").css("height"));
								sectionH2 = parseInt($("section:eq(1)").css("height"));
								sectionH3 = parseInt($("section:eq(2)").css("height"));
								sectionH4 = parseInt($("section:eq(3)").css("height"));
								ss1H = headerH
								ss2H = headerH + sectionH1
								ss3H = headerH + sectionH1 + sectionH2
								ss4H = headerH + sectionH1 + sectionH2 + sectionH3
								skillH = $(".past .skill").offset().top;

								var M_slideMotion = 1;
								if(scNum > ss2H-400 && M_slideMotion == 1){
									M_slideMotion = 2;
											$(".past_wrap").css({marginTop:"50px", opacity:"0"});
											$(".past_wrap").animate({marginTop:"0", opacity:"1"},1500);
								};
								
								if(scNum > ss3H-500){
									M_slideMotion = 1;
									if(M_slideMotion == 1){
										M_slideMotion = 2;
											$(".now_wrap").css({marginTop:"50px", opacity:"0"});
											$(".now_wrap").animate({marginTop:"0", opacity:"1"},1500);
									};
								}else{
											$(".now_wrap").css({marginTop:"50px", opacity:"0"});
								};
								
								if(scNum > ss4H-500){
									M_slideMotion = 1;
									if(M_slideMotion == 1){
										M_slideMotion = 2;
											$(".future_wrap").css({marginTop:"50px", opacity:"0"});
											$(".future_wrap").animate({marginTop:"0", opacity:"1"},1500);
									};
								}else{
											$(".future_wrap").css({marginTop:"50px", opacity:"0"});
								};
								
								if(scNum > skillH-600 ){
									M_careerS_Motion();
								};
								
								if(scNum > ss4H+400){
									M_futureV_Motion();
								};
							});
					};
				};		
		//------------------------------------------------- 플랫폼 관계(O) & 너비 관계(O) & 스크롤 관계(O) 동작 실행 함수 ※끝
		
		//------------------------------------------------------	
		mMotion();																//최초 실행 시 적용
		//------------------------------------------------------	
	};
//-------------------------------------------------------------------------------------------- Mobile 함수 ※끝
	
	
	
	
//-------------------------------------------------------------------------------------------- Desktop 함수 ※시작	
	function pc(){
// ★ 모든 동작에 들어가는 조작 중 '공통 동작을 위한 조작'이 아닌 단일 플랫폼(pc or mobil)을 위한 조작은 이곳에 기입되어야 한다.
		//------------------------------------------------------ PC 조작 ※시작 <<<< 정상으로 돌린다음 ★Mobile쪽에★ 붙여넣기
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
		
				$(".past .about").css({opacity:"0"});
				$(".past .ws q:eq(0)").css({marginRight:"-100px",opacity:"0"});
				$(".past .ws q:eq(1)").css({opacity:"0"});
				$(".past .ws cite").css({opacity:"0"});
				$(".now .about").css({opacity:"0"});
				$(".now .ws q:eq(0)").css({marginRight:"-100px",opacity:"0"});
				$(".now .ws q:eq(1)").css({opacity:"0"});
				$(".now .ws cite").css({opacity:"0"});
				$(".future .about").css({opacity:"0"});
				$(".future .ws q:eq(0)").css({marginRight:"-100px",opacity:"0"});
				$(".future .ws q:eq(1)").css({opacity:"0"});
				$(".future .ws cite").css({opacity:"0"});		
		//------------------------------------------------------ PC 조작 ※끝
			
		//------------------------------------------------------ Mobile 원위치 ※시작 <<<< ★정상으로 돌린 Mobile조작을★ 붙여넣기
				$(".visual_a p:eq(0)").css({opacity:"1"});
				$(".visual_a p:eq(1)").css({opacity:"1"});
				$(".past_wrap").css({marginTop:"0", opacity:"1"});
				$(".now_wrap").css({marginTop:"0", opacity:"1"});
				$(".future_wrap").css({marginTop:"0", opacity:"1"});	
				
				$(".header_wrap nav").css({marginRight:"0"},1000);

		
		//------------------------------------------------------ Mobile 원위치 ※끝

		//------------------------------------------------ PC 동작을 위한 함수 목록 ※시작 << pcMotion()속 스크롤에 적용 되어짐.
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
		//------------------------------------------------ PC 동작을 위한 함수 목록 ※끝

				//------------------------------------------------- 플랫폼 관계(O) & 너비 관계(O) & 스크롤 관계(O) 동작 실행 함수 ※시작
				var pcMotionState = 1;
				function pcMotion(){
					if(pcMotionState == 1){
						pcMotionState = 2;
				//------------------------------------------------- 플랫폼 관계(O) & 너비 관계(O) & 스크롤 관계(O) 동작 실행 함수 목록
						
						// 스크롤
						$(window).scroll(function(){


							  // past about + ws motion
							if(scNum > 300 && bwWidth > 1100){
									$(".past .about").animate({opacity:"1"},1500);
									$(".past .ws q:eq(0)").animate({marginRight:"0px",opacity:"1"},1500);
									$(".past .ws q:eq(1)").delay(1000).animate({opacity:"1"},2000);
									$(".past .ws cite").delay(1500).animate({opacity:"1"},2000);

								};
							  // now about + ws motion
							if(scNum > 4160 && bwWidth > 1100){
									$(".now .about").animate({opacity:"1"},1500);
									$(".now .ws q:eq(0)").animate({marginRight:"0px",opacity:"1"},1500);
									$(".now .ws q:eq(1)").delay(1000).animate({opacity:"1"},2000);
									$(".now .ws cite").delay(1500).animate({opacity:"1"},1000,function(){
											  $(".portfolio>ul>li:eq(0)").animate({opacity:"1", marginTop:"0"},1000);
											  $(".portfolio>ul>li:eq(1)").delay(300).animate({opacity:"1", marginTop:"0"},1000);
											  $(".portfolio>ul>li:eq(2)").delay(600).animate({opacity:"1", marginTop:"0"},1000);
										 });

							  };
							  // future about + ws motion
							  if(scNum > 6150 && bwWidth > 1100){
									$(".future .about").animate({opacity:"1"},1500,function(){
										$(".future .ws q:eq(0)").animate({marginRight:"0px",opacity:"1"},1500);
										$(".future .ws q:eq(1)").delay(1000).animate({opacity:"1"},2000);
										$(".future .ws cite").delay(1500).animate({opacity:"1"},1000);
									});

							  };


							// past main motion
							if(scNum > 700 && scNum <= 800 && bwWidth > 1100){
									mainMotion1_1();
								}else if(scNum > 800 && bwWidth > 1100){
									mainMotion1_2();
								}else{
							};				
							  // now main motion
							if(scNum > 3200 && bwWidth > 1100){
								mainMotion2_1();
							};
							  // future main motion
							if(scNum > 5400 && bwWidth > 1100){
								mainMotion3_1();
							};

							// history
							if(scNum > 1200 && bwWidth > 1100){ careerH_Motion() };
							// skill
							if(scNum > 1800 && bwWidth > 1100){ careerS_Motion() };
							// certificate
							if(scNum > 2200 && bwWidth > 1100){ careerC_Motion() };
							// awards
							if(scNum > 2500 && bwWidth > 1100){ careerA_Motion() };


							//future_Motion() 
							if(scNum > 6500 && bwWidth > 1100){ futureV_Motion()	};  

						});
					};
				};
				//------------------------------------------------- 플랫폼 관계(O) & 너비 관계(O) & 스크롤 관계(O) 동작 실행 함수 ※끝

		//------------------------------------------------- 플랫폼 관계(O) & 너비 관계(X) & 스크롤 관계(X) 동작 실행 ※시작

			$("h1").hide();
			$(".gnb button").css({width:"0", opacity:"0"});
			$(".visual_a p:eq(0)").css({marginTop:"100px", height: "0", opacity:"0"});
			$(".visual_a p:eq(1)").css({opacity:"0"});
			$(".visual_b").css({opacity:"0"});		
			
			$("h1").fadeIn(2500);
			// gnb 조작 및 동작
			$(".gnb li:eq(3) button").animate({width: "110px", opacity:"1"},1500);
			$(".gnb li:eq(2) button").animate({width: "110px", opacity:"1"},1800);
			$(".gnb li:eq(1) button").animate({width: "110px", opacity:"1"},2000);
			$(".gnb li:eq(0) button").animate({width: "110px", opacity:"1"},2200);
			$(".gnb li").mouseover(function(){$("li").not(this).stop().animate({marginTop:"-15px"});});
			$(".gnb li").mouseleave(function(){$("li").not(this).stop().animate({marginTop:"0px"});});
			$(".visual_a p:eq(0)").animate({marginTop:"0px", height: "150px", opacity:"1"},1500);	
			$(".visual_a p:eq(1)").delay(1500).animate({opacity:"1"},1500);
			$(".visual_b").delay(2500).animate({opacity:"1"},1500);
			 // Now portfolio 마우스 오버 & 리브
			$(".portfolio>ul>li:eq(0) p").mouseover(function(){$(this).children().children().attr("src", "img/kcc_mockup_over.png" ).stop().animate({ width: "102%", height: "102%", margin: "-1% 0 0 -1%"},300);});
			$(".portfolio>ul>li:eq(0) p").mouseleave(function(){$(this).children().children().attr("src", "img/kcc_mockup.png" ).stop().animate({width: "100%", height: "100%", margin: "0 0 0 0"},300);});
			$(".portfolio>ul>li:eq(1) p").mouseover(function(){$(this).children().children().attr("src", "img/kyobo_mockup_over.png" ).stop().animate({ width: "102%", height: "102%", margin: "-1% 0 0 -1%"},300);});
			$(".portfolio>ul>li:eq(1) p").mouseleave(function(){$(this).children().children().attr("src", "img/kyobo_mockup.png" ).stop().animate({width: "100%", height: "100%", margin: "0 0 0 0"},300);});
			$(".portfolio>ul>li:eq(2) p").mouseover(function(){$(this).children().children().attr("src", "img/kakao_mockup_over.png" ).stop().animate({ width: "102%", height: "102%", margin: "-1% 0 0 -1%"},300);});
			$(".portfolio>ul>li:eq(2) p").mouseleave(function(){$(this).children().children().attr("src", "img/kakao_mockup.png" ).stop().animate({width: "100%", height: "100%", margin: "0 0 0 0"},300);});
		
		//------------------------------------------------- 플랫폼 관계(O) & 너비 관계(X) & 스크롤 관계(X) 동작 실행 ※끝     
		
		//------------------------------------------------------	
			pcMotion();															// 최초 실행 시 적용
		//------------------------------------------------------	
	};
//-------------------------------------------------------------------------------------------- Desktop 함수 ※끝	
	
	
	
	
	
	
// ----------------------------------------------------------------------------넓이에 따른 동작 ※시작
	if(bwWidth > 1100){
		(function(){ //------------------------------------------------------ 코드 최우선 실행
			$("*").stop(true);	//-------------------------------- 모든 동작 정지 코드
			allMotion();			//-------------------------------- 공통 동작 코드
			pc();						//-------------------------------- Desktop용 코드 재생
		}());
	}else{
		(function(){
			$("*").stop(true);	//-------------------------------- 모든 동작 정지 코드
			allMotion();			//-------------------------------- 공통 동작 코드
			mobile();				//-------------------------------- Mobile용 코드 재생
		}());
	};
// ----------------------------------------------------------------------------넓이에 따른 동작 ※끝		
	
	
// ----------------------------------------------------------------------------리사이즈 감지에 따른 동작 ※시작
	$(window).resize(function(){

		 bwWidth = $(window).width();	//(1) 브라우저의 너비값 기록 변수(리사이즈 이벤트 발생시 추가 기록 필요)
		 scNum = $("html,body").scrollTop();  //(2) 브라우저의 스크롤바 위치값 기록변수(스크롤 이벤트 발생시 추가 기록필요)
		 headerH = parseInt($("header").css("height")); //(ex) 섹션별 높이값 CSS가져오기(기록)
		 sectionH1 = parseInt($("section:eq(0)").css("height")); //(ex) 섹션별 높이값 CSS가져오기(기록)
		 sectionH2 = parseInt($("section:eq(1)").css("height")); //(ex) 섹션별 높이값 CSS가져오기(기록)
		 sectionH3 = parseInt($("section:eq(2)").css("height")); //(ex) 섹션별 높이값 CSS가져오기(기록)
		 sectionH4 = parseInt($("section:eq(3)").css("height")); //(ex) 섹션별 높이값 CSS가져오기(기록)
		 ss1H = headerH
		 ss2H = headerH + sectionH1
		 ss3H = headerH + sectionH1 + sectionH2
		 ss4H = headerH + sectionH1 + sectionH2 + sectionH3
		
		if(bwWidth > 1100){
			(function(){
				$("*").stop(true);
				allMotion();
				pc();
			}());	
		}else{
			(function(){
				$("*").stop(true);
				allMotion();
				mobile();
			}());
		};
	});
// ----------------------------------------------------------------------------리사이즈 감지에 따른 동작 ※끝	
	
	
});