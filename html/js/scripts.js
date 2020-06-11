
$(document).ready(function() {
						   
	$('.mobile_menu').click(function(){
		$(this).toggleClass('menu_activate');
		$('body').toggleClass('mobile_menu_active');
	})			   
							   
	$('.search_filter > a').click(function(){
		if($('.filter_popup').hasClass('open')){
			$(this).removeClass('activedd');
			$('.filter_popup').removeClass('open');
		} else{
			$(this).addClass('activedd');
			$('.filter_popup').addClass('open');
		}
	})	
	
	
	/* ==== Expend Button function === */
	$('.expendfullscreen').click(function(){
		$('body').addClass('fullscreen_active');
		$('body').prepend('<div class="toast" >Press ESC to escape.<a href="javascript:"><i class="fa fa-times"></i></a></div>');
		setTimeout(function(){
			$('.toast').addClass('active_toast');
		})
	})
	$(document).on('keydown', function(event) {
       if (event.key == "Escape") {
			$('body').removeClass('fullscreen_active');
			$('.toast').removeClass('active_toast');			   
			$('.toast').fadeOut(500);
       }
   });
	$(document).click(function() {
		$('.toast').removeClass('active_toast');			   
		$('.toast').fadeOut(500);
	});
	$(".expendfullscreen").click(function(e) {
		e.stopPropagation(); 
		return false; 
	});
	/* ==== Expend Button function === */
	
	
	$('.similar_activities').click(function(){
		$(this).addClass('hide');
		$('.similar_act_inner').slideDown(300);
	})
	$('.closesimilarbox').click(function(){
		$('.similar_activities').removeClass('hide');
		$('.similar_act_inner').slideUp(300);
	})
	
	
	$('#banner_slider').owlCarousel({
		margin:0,
		nav: false,
		dots: true,
		items: 1,
		loop: true
	})
	
	
	
  
})
