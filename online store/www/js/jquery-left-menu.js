jQuery(document).ready(function () {
$('.left-menu-item a').on('click',
    function () {  

    	$(this).parent().siblings().children().removeClass("active");    		
    	$(this).parent().siblings().children().siblings(".sublist").css("display", "none");
    	$(this).parent().siblings().children().siblings(".sublist").children().children().removeClass("active");
        $(this).addClass("active");
        $(this).siblings(".sublist").css("display", "block");
    });
});