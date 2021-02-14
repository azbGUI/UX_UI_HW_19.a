/* console.log("Your index.js file is loaded correctly!");

$("button").click(function(){
    $(this).open();
  });

$("#resumebutton").hover(function(){
    alert("color change from white to rose gold with white stroke");
  },
  function(){
    alert("color change back to white background with grey font");
  });

  $(".viewworkbutton").click(function(){
    $(this).open();
  });

  $("#workheroImg").hover(function(){
    alert("modale screen on view work button appears");
  },
  function(){
    alert("click resume button");
  });

$("#uparrow").mouseup(function(){
    alert("Mouse up to each section separately on portfolio body pages!");
  });

  $( function() {
    $( "#dialog" ).dialog();
  } );
  */
 
// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });