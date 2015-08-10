// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require ckeditor-jquery
//= require jquery.countdown
//= require foundation
//= require masonry/jquery.masonry
//= require masonry/jquery.infinitescroll.min
//= require masonry/modernizr-transitions
//= require jquery.easy-pie-chart
//= require_tree .

$(document).ready(function () {
	
    $(document).foundation();
    var scroll_pos = 0;
    $(document).scroll(function() { 
        scroll_pos = $(this).scrollTop();
        if(scroll_pos > 210) {
            $(".top-bar").css('background-color', '#4f535b');
        } else {
            $(".top-bar").css('background-color', '#4f535b');
        }
    });
    $('.top-text h1').hide(0).delay(100).fadeIn(1000);
    $('.top-text hr,h3').hide(0).delay(400).fadeIn(3000);
	$('.sentence').hide(0).delay(1000).fadeIn(3000);
	$('.chart').easyPieChart({
        //your configuration goes here
    });
    $('.ckeditor').ckeditor({
	  // optional config
	});
	$("#count").countdown({until: new Date(2015, 05, 21)});
	$('#masonry-container').masonry({
	  // options...
	  itemSelector: '.box',
      columnWidth: 320,
      gutterWidth: 2,
	  isAnimated: !Modernizr.csstransitions
	});
});

