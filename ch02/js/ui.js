$(document).ready(function(){
    $("#container").addClass("start");

	$("nav li").click(function() {
        $("#container").css("max-width", "100%");
        var id = $(this).attr("data-rol");
        $("nav li").removeClass("on");
        $(this).addClass("on");
        $(".content").removeClass("prev this next");
        // 클릭시 가지고 있던 클래스 모두 삭제
        $("#"+id).addClass("this").prevAll().addClass("prev");
        // 클릭한 메뉴와 매칭된 id에 this 클래스를 지정하고 그앞의 모든 section 태크는 prev지정
        $("#"+id).nextAll().addClass("next");
        // 뒤는 next 지정
    });

    $(".logo_box").click(function() {
        $("nav li").removeClass("on");
        $(".content").removeClass("prev this next");
        $("#container").css("max-width", "1200px");
    });
});

