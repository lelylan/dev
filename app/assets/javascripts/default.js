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

    // set language on cookies
    $.cookie('lelylan-dev-language', language);

    // show the selected language examples
    $('#language').val(language);

    // set the menu to the actual language
    $('#language').val(language);

    // show all code examples for the actual language
    $('.nav-tabs a.' + language).tab('show');
    console.log('.nav-tabs a.' + language);
  }

  $('#language').change(function () {
    // check the selected language
    var language = $("#language option:selected").first().attr('value');

    // set language on cookies
    $.cookie('lelylan-dev-language', language);

    // show all code examples for the actual language
    $('.nav-tabs a.' + language).tab('show');
    console.log('.nav-tabs a.' + language);

    // set the language on the browser url
    var path = window.location.pathname;
    window.history.pushState(null, path, path + '#' + language);
  })


  initLanguage();
});
