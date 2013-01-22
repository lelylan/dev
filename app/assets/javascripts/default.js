// code highlight
$(function () { hljs.initHighlightingOnLoad(); })

// language examples selection (ruby, javascript, curl, etc.)
$(function () {

  set_language_from_fragment()
  set_language(find_or_create_language());

  // Change language through the select
  $('#language').change(function () {
    var language = $("#language option:selected").first().attr('value');
    set_language(language);
  })

  // Retrieve the language set on the cookies or set the new one
  function find_or_create_language() {
    var language = $.cookie('lelylan_dev_language');
    if (language == null) { $.cookie('lelylan_dev_language', 'curl'); }
    return $.cookie('lelylan_dev_language');
  }

  // Visualize the documentation through the selected language
  function set_language(language) {
    // show all code examples
    $('#language').val(language);
    // set the select menu
    $('.nav-tabs a.' + language).tab('show');
    // set the language as the default one
    $.cookie('lelylan_dev_language', language);
  }

  // If there is the name of the language in the fragment it is set as default
  function set_language_from_fragment() {
    var languages = ['curl', 'node', 'javascript', 'ruby'];
    for (var i=0; i < languages.length; i++) {
      language = languages[i];
      if (fragment_contains(language)) {
        $.cookie('lelylan_dev_language', language);
      }
    }
  }

  // return true if a language is into the fragment
  function fragment_contains(language) {
    return (window.location.hash.indexOf(language) != -1)
  }
});
