// jquery.gohashurl.js
// copyright Jiangshui
// website http://yujiangshui.com
// contact yujiangshui@gmail.com
// https://github.com/yujiangshui/jquery.gourlhash.js


;(function($) {
$.extend({

	'gohashurl': function(options){

		options = jQuery.extend({
			target: '',
			topfixed: '',
			offset: 10,
			duration: 200,
			easing: 'linear'
		},options);

		var hashtarget = options.target || location.hash || 'body',
			topfixedtarget = options.topfixed,
			hashtarget_top = $(hashtarget).length ? $(hashtarget).offset().top : $('a[name='+hashtarget.substring(1)+']').offset().top, //获取目标元素的高度位置
			topfixed_top = $(topfixedtarget).height() || 0,
			current_top = hashtarget_top - topfixed_top - options.offset; //获得要滚动的正确高度
			if( options.duration === 0 )
				options.duration = 1; //修正时间间隔为 0 的Bug

			$('body,html').animate({
				scrollTop: current_top
			}, options.duration, options.easing);

	}


});
})(jQuery);
