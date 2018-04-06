/*$(function() {
	let windowWidth = $(window).width();

	if (windowWidth>=992) {
		$(".topMenu").appendTo(".header__topInner");
		$(".search").appendTo(".header__topInner");
		$(".mainMenu").appendTo(".header__bottomInner");
		$(".bascet").appendTo(".bascet");
	}

});*/

$(function(){
	$(".toggleMobMenu").on("click",function(){
		$(".header__mobMenuInner").toggleClass("open");
	});

});