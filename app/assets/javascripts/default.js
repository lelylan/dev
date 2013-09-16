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
