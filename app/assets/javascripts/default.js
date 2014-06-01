
// code highlight

addEventListener('load', function (event) { prettyPrint() }, false);


// language examples selection (ruby, angular, curl, etc.)

$(function () {

  var initLanguage = function() {
    var language;

    // search in the fragment
    if (window.location.hash.match(/curl/))    language = 'curl';
    if (window.location.hash.match(/node/))    language = 'node';
    if (window.location.hash.match(/angular/)) language = 'angular';
    if (window.location.hash.match(/ruby/))    language = 'ruby';
    if (window.location.hash.match(/python/))  language = 'python';

    // search in the cookie
    if (!language) language = $.cookie('lelylan-dev-language');

    // set a default
    if (!language) language = 'curl';

    // change the language description
    setLanguage(language);
  }

  // Add a listener on language change
  $('.languages a').click(function (e) {

    e.preventDefault()

    // get the selected language
    var language = $(this).attr('class');

    // change the language description
    setLanguage(language);
  })

  // Set the current language
  var setLanguage = function(language) {

    // set language on cookies
    $.cookie('lelylan-dev-language', language);

    // show all code examples for the actual language
    $('.nav-tabs a.' + language).tab('show');

    // set the menu to the actual language
    var language_description = 'Curl';
    if (language.match(/node/))    language_description = 'Node.js';
    if (language.match(/angular/)) language_description = 'AngularJS';
    if (language.match(/ruby/))    language_description = 'Ruby';
    if (language.match(/python/))  language_description = 'Python';

    $('.language-description').html(language_description);

  }

  initLanguage();
});



// Connect your first light hardware switch

$(function () {

  var initHardware = function() {
    var hardware;

    // search in the fragment
    if (window.location.hash.match(/arduino/))    hardware = 'arduino';
    if (window.location.hash.match(/raspberry/))  hardware = 'raspberry-pi';
    if (window.location.hash.match(/arduino-yun/))  hardware = 'arduino-yun';
    if (window.location.hash.match(/electric-imp/))  hardware = 'electric-imp';
    if (window.location.hash.match(/sparkcore/))  hardware = 'sparkcore';

    // search in the cookie
    if (!hardware) hardware = $.cookie('lelylan-dev-hardware');

    // set a default
    if (!hardware) hardware = 'arduino';

    // show the hardware tab
    $('[data-hardware=' + hardware + ']').tab('show')

    $('#arduino').hide();
    $('#raspberry-pi').hide();
    $('#arduino-yun').hide();
    $('#electric-imp').hide();
    $('#sparkcore').hide();

    $('#' + hardware).show();
  }

  // Add a listener on hardware change
  $('.connect-your-first-light a').click(function (e) {

    // get the selected hardware
    var hardware = $(this).data('hardware');

    // set hardware on cookies
    $.cookie('lelylan-dev-hardware', hardware);

    // change the hardware description
    setTimeout(function() {
      window.location.reload();
    }, 1)
  })

  initHardware();
});



// Left menu affix definition

!function ($) {

  $(function(){

    var $window = $(window)
    var $body   = $(document.body)

    var navHeight = $('.navbar').outerHeight(true) + 10

    $body.scrollspy({
      target: '.bs-sidebar',
      offset: navHeight
    })

    $window.on('load', function () {
      $body.scrollspy('refresh')
    })

    $('.bs-docs-container [href=#]').click(function (e) {
      e.preventDefault()
    })

    // back to top
    setTimeout(function () {
      var $sideBar = $('.bs-sidebar')

      $sideBar.affix({
        offset: {
          top: function () {
            var offsetTop      = $sideBar.offset().top
            var sideBarMargin  = parseInt($sideBar.children(0).css('margin-top'), 60)
            var navOuterHeight = $('.bs-docs-nav').height()

            return (this.top = offsetTop - navOuterHeight - sideBarMargin)
          }
        , bottom: function () {
            return (this.bottom = $('.bs-footer').outerHeight(true))
          }
        }
      })
    }, 100)

  })
}(window.jQuery)



// open all external links in new tab

$(function(){
  $('a').each(function() {
    var a = new RegExp('/' + window.location.host + '/');
    if(!a.test(this.href)) {
      $(this).click(function(event) {
        event.preventDefault();
        event.stopPropagation();
        window.open(this.href, '_blank');
      });
    }
  });
});


