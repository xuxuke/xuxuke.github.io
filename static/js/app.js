(function($) {
  "use strict";

  $(document).foundation();

  //Run When Document Ready
  $(document).on('ready', function() {
    initCounters();
    initWow();
  });

  //Counters
  //===============================================================================
  function initCounters() {
    $('.timer').appear(function () {
      $(this).countTo();
    });   
  }

  //WOW Animation
  //===============================================================================
  function initWow() {
    new WOW().init();
  }

})(jQuery);