/*$(function() {
	let windowWidth = $(window).width();

	if (windowWidth>=992) {
		$(".topMenu").appendTo(".header__topInner");
		$(".search").appendTo(".header__topInner");
		$(".mainMenu").appendTo(".header__bottomInner");
		$(".bascet").appendTo(".bascet");
	}

});*/


/*
$(function(){
	$(".toggleMobMenu").on("click",function(){
		$(".header__mobMenuInner").toggleClass("open");
	});

});
*/


$(function() {

		$(".toggleMobMenu").on("click",function(){

			$(".header__mobMenuInner").toggleClass("open");

	let windowWidth = $(window).width();

	if (windowWidth>=992) {

		$(".topMenu").appendTo(".header__topInner");
		$(".search").appendTo(".header__topInner");
		$(".mainMenu").appendTo(".header__bottomLeft");
		$(".basket").appendTo(".header__bottomInner");
	}
});
});





$(document).ready(function() {
  $('select').niceSelect();
});


$(function(){
	$(".accordion__itemTitle").on("click",function(){

		var accordionItem = $(this).closest(".accordion__item");
		var accordionItemSiblings = $(accordionItem).siblings(".accordion__item");
		var accordionCheckboxWrap = $(accordionItemSiblings).children(".accordion__checkboxWrap");

		$(accordionCheckboxWrap).hide();

		$(this).siblings(".accordion__checkboxWrap").slideToggle();
	});
});

$(function(){
	$(".accordion__catalogTitle").on("click",function(){

		var accordionItem = $(this).closest(".accordion__catalog");
		var accordionItemSiblings = $(accordionItem).siblings(".accordion__catalog");
		var accordionCheckboxWrap = $(accordionItemSiblings).children(".accordion__checkboxWrap");

		$(accordionCheckboxWrap).hide();

		$(this).siblings(".accordion__checkboxWrap").slideToggle();
	});
});