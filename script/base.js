/*
 * name: 'base.js';
 * for: 'GuangRong_IBHelp';
 * author: 'NearSaint';
 * time: '2017.1123';
 */

/*
 *
 *
 *  nav dropdown & scroll;
 *
 *
 */
var nav_main = $('.nav_main');
//show nav dropdown for mobile;
nav_main.on('click', '.meun>a.btn-bars', function () {
	nav_main.find('ul').addClass('active').addClass('fadeInDown');
	$('body').addClass('overflowHiden');
});
nav_main.on('click', '.meun>ul>a.btn-close', function () {
	nav_main.find('ul').removeClass('active').removeClass('fadeInDown');
	$('body').removeClass('overflowHiden');
});
//show the nav for scrolling widow
$(window).scroll(function () {
	var scrollTop = $(this).scrollTop();
	// hiden
	if (scrollTop < 5) {
		nav_main.removeClass('fixed').removeClass('fadeIn');
	}
	//show
	if (scrollTop > 66) {
		nav_main.removeClass('fadeInDown').addClass('fixed').addClass('fadeIn');
	}
});


/*
 *
 *
 *  touch - hover for mobile;
 *
 *
 */
$(document).on('touchstart', 'a', function () {
	$(this).addClass('touch');
});
$(document).on('touchend', 'a', function () {
	$(this).removeClass('touch');
});

/*
 *
 *
 *  popover for join in the plan;
 *
 *
 */
var popover = $("section.popover_join");
var popover_c_daili = $(".popover_join_daili");
var popover_c_jingji = $(".popover_join_jingji");
//show the popover;
$(document).on('click', 'a.btn_openPopover', function () {
	popover.fadeIn();
	$('body').addClass('overflowHiden');
});
//hide the popover;
$(document).on('click', 'a.btn_closePopover', function () {
	popover.fadeOut();
	$('body').removeClass('overflowHiden');
});
//tap the user type;
$(document).on('click', 'a.btn_join_changUserType_daili', function () {
	popover_c_jingji.hide();
	popover_c_daili.fadeIn();
});
$(document).on('click', 'a.btn_join_changUserType_jingji', function () {
	popover_c_daili.fadeOut();
	popover_c_jingji.fadeIn();
});
//uploading, get the image src and show the logo in container
$('.form_join input[type="hidden"]').on("change", function () {
		console.log(this.value);
		uploading_logo.showLogo_hidden(this.value);
});
$('.form_join input[type="file"]').on("change", function () {
		uploading_logo.showLogo(this.files[0],this.value);
});
var uploading_logo = {
	//get the image url
	getObjectURL:function(file){
		var url;
		try{
			if (window.createObjectURL != undefined) { // basic
				url = window.createObjectURL(file);
			} else if (window.URL != undefined) { // mozilla(firefox)
				url = window.URL.createObjectURL(file);
			} else if (window.webkitURL != undefined) { // webkit or chrome
				url = window.webkitURL.createObjectURL(file);
			}
			return url;
		}
		catch(e){
			console.log(e);
		}
		finally{
			url=null;
		}

	},//end getObjectURL
	//show the image in to the container
	showLogo:function(file,val){
		try{
			var winUrl = uploading_logo.getObjectURL(file);
			if (winUrl,val) {
				console.log('widow.url:'+winUrl);
				console.log('src:'+val);
				$('.imgUpload').attr('style', 'background-image:url(' + winUrl + ')').fadeIn().attr('data-src', val);
			}
		}
		catch(e){
			console.log(e);
		}
		finally{
			windowUrl = null;
			val = null;
		}

	},//end showLogo
	showLogo_hidden:function(src){
		try{
			if (src) {
				console.log('src:'+src);
				$('.imgUpload').attr('style', 'background-image:url(' + src + ')').fadeIn();
			}
		}
		catch(e){
			console.log(e);
		}
		finally{
			src = null;
		}
	},//end showLogo_hidden
}//end uploading_logo
/*
 *
 *
 *  public news swiper
 *
 *
 */
var mySwiper_news = new Swiper('.container_swiper_news', {
	loop: false,
	autoplay: true,
	pagination: {
		el: '.pagination_swiper',
		clickable: true,
	},
});


/*
 *
 *
 *  wow - the animate in the all page;
 *
 *
 */
new WOW().init();

/*
 *
 *
 *  document Ready
 *
 *
 */
$(document).ready(function () {});
