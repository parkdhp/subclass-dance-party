$(document).ready(function() {
  window.dancers = [];
  // console.log('dancer array', window.dancers);
  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    // console.log('jquery this', $(this).data('dancer-maker-function-name'));
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');
    // console.log('dancermakerfuncname', dancerMakerFunctionName)
    // console.log($(this).data('dancer-maker-function-name'))
    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];
    // console.log('dancermakerfunction', window[dancerMakerFunctionName]);
    // make a dancer with a random position
    // console.log('dancermakerFunc', dancerMakerFunction);
    // console.log(window);
    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random()+50,
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    //MakeSquareDancer(850, 500, 250);
    window.dancers.push(dancer);
    // console.log(dancer);
    // $('body').append(dancer.$node);
    $('body').append(dancer.$node);
    // console.log('windows dancers array', window.dancers);
  });

  $('.LineupButton').on('click', function(event) {
    // console.log(window);
    // lineUp = function() {
    //   console.log('in lineup');
    //   if (window.innerHeight * 0.5 > this.top) {
    //     this.top--;
    //     setTimeout(() => {
    //       this.lineUp();
    //     }, this.timeBetweenSteps);
    //   }
    //   if(window.innerHeight * 0.5 < this.top ) {
    //     this.top++;
    //     setTimeout(()=> {
    //       this.lineUp();
    //     }, this.timeBetweenSteps);
    //   }
    // }
    window.dancers.forEach( dancer => {
      // console.log('dancer', dancer);
      // console.log('lineup', dancer.lineUp);
      dancer.lineUp();
    });
  });

  $('.charmander').on('click', function() {
    console.log('hi charmander');
      // height: '+=50px',
      // width: '+=50px'
      $('.charmander').animate({left: '100px'},"slow")
  })

});