$(function(){//①$(document).ready()함수 시작---------------------------------------------------------------------------------------------------


	
	var allMotionState = 1;
	function allMotion(){
		if(allMotionState == 1){
			allMotionState = 2;
		//-------------------------------------- PC 너비 관계(O) & 스크롤 관계(O) 실행 함수 목록
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
		};
	};
	
});