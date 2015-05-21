// JavaScript Document

$(function() {
        var $mainNav = $('#menu');
        
        $mainNav.children('.main-nav-item').hover(function(ev) {
            var $this = $(this),
            $dd = $this.find('.main-nav-dd');
            
            // get the left position of this tab
            var leftPos = $this.find('.main-nav-tab').position().left;
            
            // position the dropdown
            
            $dd.css('left', leftPos);
            
            // show the dropdown
            $this.addClass('main-nav-item-active');
            }, function(ev) {
            // hide the dropdown
            $(this).removeClass('main-nav-item-active');
        });
    });