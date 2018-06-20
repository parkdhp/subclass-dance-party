$(document).ready(function() {
  window.dancers = [];
  $('.addDancerButton').on('click', function(event) {
    let dancerMakerFunctionName = $(this).data('dancer-maker-function-name');
    let dancerMakerFunction = window[dancerMakerFunctionName];
    let dancer = new dancerMakerFunction(
      $("body").height() * Math.random()+50,
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    window.dancers.push(dancer);
    $('body').append(dancer.$node);
  });

  $('.LineupButton').on('click', function(event) {
    window.dancers.forEach( dancer => {
      dancer.lineUp();
    });
  });

  // $('.charmander').on('click', function() {
  //     $('.charmander').animate({left: '100px'},"slow")
  // });
});