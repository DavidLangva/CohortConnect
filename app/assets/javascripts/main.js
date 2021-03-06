// Sticky header -- code from now_ui_kit created by www.creative-tim.com

var transparent = true;
var fixedTop = false;
var navbar_initialized,
    backgroundOrange = false,
    toggle_initialized = false;

$(document).ready(function() {

    $navbar = $('.navbar[color-on-scroll]');
    scroll_distance = $navbar.attr('color-on-scroll') || 500;

    // Check if we have the class "navbar-color-on-scroll" then add the function to remove the class "navbar-transparent" so it will transform to a plain color.

    if ($('.navbar[color-on-scroll]').length != 0) {
        navBar.checkScrollForTransparentNavbar();
        $(window).on('scroll', navBar.checkScrollForTransparentNavbar)
    }
    });

    navBar = {
    misc: {
        navbar_menu_visible: 0
    },

    checkScrollForTransparentNavbar: debounce(function() {
        if ($(document).scrollTop() > scroll_distance) {
            if (transparent) {
                transparent = false;
                $('.navbar[color-on-scroll]').addClass('bg-white');
            }
        } else {
            if (!transparent) {
                transparent = true;
                $('.navbar[color-on-scroll]').removeClass('bg-white');
            }
        }
    }, 17),

}

// Returns a function, that, as long as it continues to be invoked, will not be triggered. The function will be called after it stops being called for N milliseconds. If `immediate` is passed, trigger the function on the leading edge, instead of the trailing.

function debounce(func, wait, immediate) {
    var timeout;
    return function() {
        var context = this,
            args = arguments;
        clearTimeout(timeout);
        timeout = setTimeout(function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        }, wait);
        if (immediate && !timeout) func.apply(context, args);
    };
};

// Modal close on submit

$(document).ready(function(){
    $("#modal_btn").click(function(){
        $('.modal, .modal-backdrop').hide();
    });
  })
  