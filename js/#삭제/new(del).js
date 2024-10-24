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
	function a(){
		//------------------------------------------------------ PC조작
				$("#test1").css({marginTop:"-50px"});
				$(".test1_6").css({opacity:"0"});
		//------------------------------------------------------ Mobil 원위치
				$(".test2_4").css({opacity:"1"});
				$("#test3").css({marginTop:"0px"});
		//------------------------------------------------------
		
		//★전역변수 선언구역
		var bwWidth = $(window).width();	//(1) 브라우저의 너비값 기록 변수(리사이즈  이벤트 발생시 추가 기록 필요)
		var scNum = $("html,body").scrollTop();  //(2) 브라우저의 스크롤바 위치값 기록변수(스크롤 이벤트 발생시 추가 기록필요)
		var sectionH1 = $("section:eq(0)").css("height"); //(ex) 섹션별 높이값 CSS가져오기(기록)
		var sectionH2 = $("section:eq(1)").css("height"); //(ex) 섹션별 높이값 CSS가져오기(기록)
		var sectionH3 = $("section:eq(2)").css("height"); //(ex) 섹션별 높이값 CSS가져오기(기록)
		


				//------------------------------------------------ PC 동작 함수
				var idtest1MotionState = 1;
				function idtest1Motion(){
					if(idtest1MotionState == 1){
						idtest1MotionState = 2;
						$("#test1").animate({marginTop:"0px"},1500);
					};
				};


				var test6MotionState = 1;
				function test6Motion(){
					if(test6MotionState == 1){
						test6MotionState = 2;
						$(".test1_6").stop().animate({opacity:"1"},1500);
					};
				};				

				//-------------------------------------------------PC 너비 관계(O) & 스크롤 관계(O) 동작 실행 함수
				var pcMotionState = 1;
				function pcMotion(){
					if(pcMotionState == 1){
						pcMotionState = 2;
					//-------------------------------------- PC 너비 관계(O) & 스크롤 관계(O) 길행 함수 목록
						test6Motion();
					};
				};

				
		
				//-------------------------------------------------PC 너비 관계(O) & 스크롤 관계(X) 동작 실행 
				idtest1Motion();


				$(window).scroll(function(){
					scNum = $("html,body").scrollTop();

					if(scNum > 300 ){ pcMotion() };
				});
	
			};
	
	
	
	
	

	
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
		
			
	}else{
				(function(){
				$("*").stop(true);

								$("#test1").css({marginTop:"0px"});
								$(".test1_6").css({opacity:"1"});
								$(".test2_4").css({opacity:"0"});
								$("#test3").css({marginTop:"-50px"});

								//★전역변수 선언구역
								var bwWidth = $(window).width();	//(1) 브라우저의 너비값 기록 변수(리사이즈  이벤트 발생시 추가 기록 필요)
								var scNum = $("html,body").scrollTop();  //(2) 브라우저의 스크롤바 위치값 기록변수(스크롤 이벤트 발생시 추가 기록필요)
								var sectionH1 = $("section:eq(0)").css("height"); //(ex) 섹션별 높이값 CSS가져오기(기록)
								var sectionH2 = $("section:eq(1)").css("height"); //(ex) 섹션별 높이값 CSS가져오기(기록)
								var sectionH3 = $("section:eq(2)").css("height"); //(ex) 섹션별 높이값 CSS가져오기(기록)


								//★전역함수 선언구역
								function mCSS(){ 
										$(".test2_4").css({opacity:"0"});
										$("#test3").css({marginTop:"-50px"});
								};



							// 모바일 동작 요소
								var mMotionState = 1;
								function mMotion(){
									if(mMotionState == 1){
										mMotionState = 2;

										test24Motion();

									};
								};

										var test24MotionState = 1;
										function test24Motion(){
											if(test24MotionState == 1){
												test24MotionState = 2;
												$(".test2_4").stop().animate({opacity:"1"},1500);
											};
										};				

										var idtest3MotionState = 1;
										function idtest3Motion(){
											if(idtest3MotionState == 1){
												idtest3MotionState = 2;
												$("#test3").animate({marginTop:"0px"},1500);
											};
										};


								//너비 관계(O) & 스크롤 관계(X) 실행
								idtest3Motion();


								$(window).scroll(function(){
									scNum = $("html,body").scrollTop();

									if(scNum > 200 ){ mMotion() };
								});
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
		
			
	}else{
				(function(){
				$("*").stop(true);
								$("#test1").css({marginTop:"0px"});
								$(".test1_6").css({opacity:"1"});
								$(".test2_4").css({opacity:"0"});
								$("#test3").css({marginTop:"-50px"});


								//★전역변수 선언구역
								var bwWidth = $(window).width();	//(1) 브라우저의 너비값 기록 변수(리사이즈  이벤트 발생시 추가 기록 필요)
								var scNum = $("html,body").scrollTop();  //(2) 브라우저의 스크롤바 위치값 기록변수(스크롤 이벤트 발생시 추가 기록필요)
								var sectionH1 = $("section:eq(0)").css("height"); //(ex) 섹션별 높이값 CSS가져오기(기록)
								var sectionH2 = $("section:eq(1)").css("height"); //(ex) 섹션별 높이값 CSS가져오기(기록)
								var sectionH3 = $("section:eq(2)").css("height"); //(ex) 섹션별 높이값 CSS가져오기(기록)


								//★전역함수 선언구역
								function mCSS(){ 
										$(".test2_4").css({opacity:"0"});
										$("#test3").css({marginTop:"-50px"});
								};



							// 모바일 동작 요소
								var mMotionState = 1;
								function mMotion(){
									if(mMotionState == 1){
										mMotionState = 2;

										test24Motion();

									};
								};

										var test24MotionState = 1;
										function test24Motion(){
											if(test24MotionState == 1){
												test24MotionState = 2;
												$(".test2_4").stop().animate({opacity:"1"},1500);
											};
										};				

										var idtest3MotionState = 1;
										function idtest3Motion(){
											if(idtest3MotionState == 1){
												idtest3MotionState = 2;
												$("#test3").animate({marginTop:"0px"},1500);
											};
										};


								//너비 관계(O) & 스크롤 관계(X) 실행
								idtest3Motion();


								$(window).scroll(function(){
									scNum = $("html,body").scrollTop();

									if(scNum > 200 ){ mMotion() };
								});
				}());
		};

	});
	
	
	
});