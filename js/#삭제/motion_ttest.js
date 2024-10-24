$(function(){

	//-------------------------------------------------------------- PC 함수
	//★전역변수 선언구역
	var bwWidth = $(window).width();	//(1) 브라우저의 너비값 기록 변수(리사이즈  이벤트 발생시 추가 기록 필요)
	var scNum = $("html,body").scrollTop();  //(2) 브라우저의 스크롤바 위치값 기록변수(스크롤 이벤트 발생시 추가 기록필요)
	var headerH = parseInt($("header").css("height")); //(ex) 섹션별 높이값 CSS가져오기(기록)
	var sectionH1 = parseInt($("section:eq(0)").css("height")); //(ex) 섹션별 높이값 CSS가져오기(기록)
	var sectionH2 = parseInt($("section:eq(1)").css("height")); //(ex) 섹션별 높이값 CSS가져오기(기록)
	var sectionH3 = parseInt($("section:eq(2)").css("height")); //(ex) 섹션별 높이값 CSS가져오기(기록)
	var sectionH4 = parseInt($("section:eq(3)").css("height")); //(ex) 섹션별 높이값 CSS가져오기(기록)
	var ss1H = headerH
	var ss2H = headerH + sectionH1
	var ss3H = headerH + sectionH1 + sectionH2
	var ss3H = headerH + sectionH1 + sectionH2 + sectionH3
	

	
	
// ★ 모든 동작에 들어가는 조작 중 '공통 동작을 위한 조작'이 아닌 단일 플랫폼(pc or mobil)을 위한 조작은 이곳에 기입되어야 한다.
		//------------------------------------------------------ Moblie 조작 ※시작 <<<< 정상으로 돌린다음 ★PC쪽에★ 붙여넣기
			$(".visual_a p:eq(0)").css({opacity:"0"});
			$(".visual_a p:eq(1)").css({opacity:"0"});
			// 스크롤 함수 조작
			$(".past_wrap").css({marginTop:"50px", opacity:"0"});
			$(".now_wrap").css({marginTop:"50px", opacity:"0"});
			$(".future_wrap").css({marginTop:"50px", opacity:"0"});
		//------------------------------------------------------ Moblie 조작 ※끝
		
		
		//------------------------------------------------------ PC 원위치 ※시작 <<<< ★정상으로 돌린 PC조작을★ 붙여넣기
			$(".btn_top").show();
			$("h1").css({opacity:"1"});
			$(".gnb button").css({width:"110px", opacity:"1"});
			$(".visual_a p:eq(0)").css({marginTop:"0px", height: "", opacity:"1"}); //----------------★ pc조작은 height: 150px > 모바일은 height속성없음 ※저렇게 비워놓으니 height속성 사라짐
			$(".visual_a p:eq(1)").css({opacity:"1"});
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
				$(".future_visual img").css({opacity:"1"});
				$(".future_visual q:eq(0)").css({marginTop:"0px",opacity:"1"});
				$(".future_visual q:eq(1)").css({opacity:"1"});
				$(".future_visual cite").css({opacity:"1"});
				$(".future_visual .picto li").css({opacity:"1"});		
		
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
				$(".future_visual p:eq(0) img").css({opacity:"1"}); 
				$(".future_visual p:eq(1) img").css({opacity:"1"});
				$(".future_visual q:eq(0)").css({marginTop:"0px",opacity:"1"});							  									
				$(".future_visual q:eq(1)").css({opacity:"1"});
				$(".future_visual cite").css({opacity:"1"});
				$(".future_visual li:eq(0)").css({opacity:"1"});											 									 
				$(".future_visual li:eq(1)").css({opacity:"1"});
				$(".future_visual li:eq(2)").css({opacity:"1"});
				$(".future_visual li:eq(3)").css({opacity:"1"});
		//------------------------------------------------------ PC 원위치 ※끝


		//------------------------------------------------- 플랫폼 관계(O) & 너비 관계(X) & 스크롤 관계(X) 동작 실행 ※시작
				$(".visual_a p:eq(0)").animate({opacity:"1"},3000);
				$(".visual_a p:eq(1)").delay(1500).animate({opacity:"1"},1500);
		//------------------------------------------------- 플랫폼 관계(O) & 너비 관계(X) & 스크롤 관계(X) 동작 실행 ※끝 

		//------------------------------------------------ Moblie 동작을 위한 함수 목록 ※시작 << pcMotion()속 스크롤에 적용 되어짐
					// ※ 최초 1회만 실행하기위한 준비단계 미필요로 내용無
		//------------------------------------------------ Moblie 동작을 위한 함수 목록 ※끝
		
		//------------------------------------------------- 플랫폼 관계(O) & 너비 관계(O) & 스크롤 관계(O) 동작 실행 함수 ※시작
				var mMotionState = 1;
				function mMotion(){
					if(mMotionState == 1){
						mMotionState = 2;		
			//------------------------------------------------- 플랫폼 관계(O) & 너비 관계(O) & 스크롤 관계(O) 실행 목록
							$(window).scroll(function(){


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

								if(scNum > ss2H-400){
									$(".past_wrap").animate({marginTop:"0", opacity:"1"},1500);
								};
								if(scNum > ss3H-500){
									$(".now_wrap").animate({marginTop:"0", opacity:"1"},1500);
								};
								if(scNum > ss4H-500){
									$(".future_wrap").animate({marginTop:"0", opacity:"1"},1500);
								};
							});
					};
				};		
		//------------------------------------------------- 플랫폼 관계(O) & 너비 관계(O) & 스크롤 관계(O) 동작 실행 함수 ※끝
		
		//------------------------------------------------------	
														//최초 실행 시 적용
		//------------------------------------------------------	
	
	
	
});