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
//= require raphael
//= require morris
//= require_tree .

$(document).ready(function () {
	
    Morris.Donut({
      element: 'donut-coding',
      resize: true,
      colors: ['#FBB9B9','#F66C6A','#C35554','#C34643','#C97978','#B26C6C'],
      data: [
        {label: "HTML", value: 30},
        {label: "CSS(SASS)",value: 30},
        {label: "RubyOnRails", value: 20},
        {label: "Javascript/AngularJS", value: 20},
        {label: "GitLab",value:10},
        {label: "Bootstrap",value:20}
      ],
      formatter: function (x) { return ''}
    });
    Morris.Donut({
      element: 'donut-ux',
      resize: true,
      colors: ['#C34643','#C35554','#F66C6A','#FBB9B9'],
      data: [
        {label: "Photoshop", value: 30},
        {label: "Illustrator", value: 30},
        {label: "Axure", value: 20},
        {label: "Prototyping",value:20}
      ],
      formatter: function (x) { return ''}
    });

    
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
      isResizable: true,
	  isAnimated: !Modernizr.csstransitions
	});
});

