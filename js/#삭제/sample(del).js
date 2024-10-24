$(function(){//①$(document).ready()함수 시작---------------------------------------------------------------------------------------------------
	
		//★전역변수 선언구역
		var bwWidth = $(window).width();	//(1) 브라우저의 너비값 기록 변수(리사이즈  이벤트 발생시 추가 기록 필요)
		var scNum = $("html,body").scrollTop();  //(2) 브라우저의 스크롤바 위치값 기록변수(스크롤 이벤트 발생시 추가 기록필요)
		var sectionH1 = $("section:eq(0)").css("height"); //(ex) 섹션별 높이값 CSS가져오기(기록)
		var sectionH2 = $("section:eq(1)").css("height"); //(ex) 섹션별 높이값 CSS가져오기(기록)
		var sectionH3 = $("section:eq(2)").css("height"); //(ex) 섹션별 높이값 CSS가져오기(기록)
	
	
		//★전역함수 선언구역
		function pcCSS(){ }
		function mCSS{  }
		function pcMotion(){
		
			if ( $( this ).scrollTop() >500 ){
				
			}else if($( this ).scrollTop() >4000 ){
				
			};
		};
		function mMotion(){
			
			if ( $( this ).scrollTop() >sectionH1 ){
				
				$(".btn_top").fadeIn();
				
			}else if($( this ).scrollTop() >sectionH2 ){
				
			};
			
		};
	
		function allMotion(){ } //리사이즈 상관없이 전체 영역에서 공통으로 적용 가능한 함수.
	
	


		//----(0)---최초 리사이즈(스크롤)이벤트 발생전 실행화면
		if(bwWidth > 1100){ 
					pcMotion(); 
		}else{
					mMotion(); 
		};

		//---- (3)리사이즈 이벤트 발생시 수행할 매소드  시작-----------------------------------------
		$(window).resize(function(){

								bwWidth = $(this).width(); //(3-1) 발생된 리사이즈 이벤트에 맞춰 변경된 브라우저 너비값 추가 기록	 	
								sectionH1 = $("section:eq(0)").css("height"); //(ex) 섹션별 높이값 CSS가져오기(기록)
								sectionH2 = $("section:eq(1)").css("height"); //(ex) 섹션별 높이값 CSS가져오기(기록)
								sectionH3 = $("section:eq(2)").css("height"); //(ex) 섹션별 높이값 CSS가져오기(기록)
			

								if(bwWidth > 1100){ //(3-2) 기록된 변수의 값에 따라 "데스크탑 환경" 과 "모바일(태블릿)환경" 을 구분하고 각각  실행할 명령어 정리

										//기존 진행중인 애니메이션이 있다면 즉각 중단하고 해당 브라우저 환경에 맞춰 CSS정비 및 정비된 CSS를 토대로 애니메이션 진행 
										(function(){
											$("*").stop(true);  //모든 진행중인 애니메이션 중단
											pcCSS(); // pcCSS 함수내에 포함된 데스크탑 버전의 CSS조작 처리 진행 
											pcMotion(); // 변경된 CSS조작에 맞춰 PC모션 진행
										}());

								}else{
										//기존 진행중인 애니메이션이 있다면 즉각 중단하고 해당 브라우저 환경에 맞춰 CSS정비 및 정비된 CSS를 토대로 애니메이션 진행 
										(function(){
											$("*").stop(true);  //모든 진행중인 애니메이션 중단
											mCSS(); // mCSS 함수내에 포함된 모바일(태블릿) 버전의 CSS조작 처리 진행
											mMotion(); // 변경된 CSS조작에 맞춰 모바일(태블릿)모션 진행
										}());
								};

		});
		//---- (3)리사이즈 이벤트 발생시 수행할 매소드  끝--------------------------------------------

		//---- (4)스크롤 이벤트 발생시 수행할 매소드  시작--------------------------------------------
		$(window).scroll(function(){

								BwWidth = $(this).width();//(4-1) 발생된 스크롤 이벤트에 맞춰 변경된 브라우저 너비값 추가 기록
								sectionH1 = $("section:eq(0)").css("height"); //(ex) 섹션별 높이값 CSS가져오기(기록)
								sectionH2 = $("section:eq(1)").css("height"); //(ex) 섹션별 높이값 CSS가져오기(기록)
								sectionH3 = $("section:eq(2)").css("height"); //(ex) 섹션별 높이값 CSS가져오기(기록)
			
								if(bwWidth > 1100){ 

									(function(){
										$("*").stop(true);
										pcCSS();
										pcMotion();
									}());

								}else{

									(function(){
										$("*").stop(true);
										mCSS();
										mMotion();
									}());
								};
		});
		//---- (4)스크롤 이벤트 발생시 수행할 매소드  끝----------------------------------------------
	
	
	
	
	
});//①$(document).ready()함수 끝---------------------------------------------------------------------------------------------------













