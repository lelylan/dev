// code highlight
$(function () { hljs.initHighlightingOnLoad(); })

// language examples selection (ruby, javascript, curl, etc.)
$(function () {

  var initLanguage = function() {
    var language;

    // search in the fragment
    if (window.location.hash.match(/curl/))       language = 'curl';
    if (window.location.hash.match(/ruby/))       language = 'ruby';
    if (window.location.hash.match(/node/))       language = 'node';
    if (window.location.hash.match(/javascript/)) language = 'javascript';
    console.log('Fragment Language', language);

    // search in the cookie
    if (!language) language = $.cookie('lelylan-dev-language');
    console.log('Cookie language', language);

    // set a default
    if (!language) language = 'curl';
    console.log('Final Language', language);

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
