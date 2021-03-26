    /* ==============
       JAVASCRIPT
     ============== */

var sel = document.querySelector(".hamburgergold");
var linkClosed = document.querySelectorAll(".menu-collapse li a");
var selmenu = document.querySelector(".navbar-collapse");
var btnGold = document.getElementById("lineGold"); // Selectionne un ID dans le html
btnGold.addEventListener("click", function(){ // fait reference à la syntaxe jQuery => $("selector").click( function() { }
// classList permet d'ajouter un element css il y a d'autre exemple comme celui ci classList.remove() etc
  sel.classList.toggle("closed");
  selmenu.classList.toggle("navbar-active");
});

linkClosed.forEach(element => { 
  element.addEventListener("click", function(){ 
  sel.classList.toggle("closed"); 
  selmenu.classList.toggle("navbar-active");
  }) 
});


if ($('#scrollbot').length > 0) {

    var last_scroll_top = 0;
    $(window).on('scroll', function() {
  
      scroll_top = $(this).scrollTop();
  
     window.requestAnimationFrame(function(){ 
  
      if(scroll_top === 0) {
        $('.menu nav li a').css({ color: "#fff" }) 
        $('.navbar-collapse').css({ background: "#2c2c2c" })
        $("#scrollbot")
            .css({ 
              transition: 'ease-out .2s',
              position : "absolute",
              padding: "55px 0 55px 0",
              background: "transparent",
              top: '0',
              boxShadow: '0 4px 10px -10px rgba(0,0,0,0)' 
            })

        $(".cls-3").css({ fill: "#fff" })

        $('.hamburgergold span').css({ background: "#fff"})

      } else if(scroll_top > 226){

        if(scroll_top < last_scroll_top) {
          $('.menu nav li a').css({ color: "#000" })
          $('.navbar-collapse').css({ background: "#fff" })
          $('.hamburgergold span').css({ background: "#000"})
         $("#scrollbot")
            .css({
              transform: "translate3d(0px, 0px, 0px)",
              position: "fixed", 
              top: '0' }) 
      } else if(scroll_top > last_scroll_top){
          $("#scrollbot")
            .css({ 
              background: "#fff",
              padding: "0",
              boxShadow: '0 4px 10px -10px rgba(0,0,0,.6)'
            })
          $("#scrollbot")
            .css({ 
              padding: "10px 0 10px 0",
              transform: "translate3d(0px, -102px, 0px)", })
              $(".cls-3").css({  fill: "#000" })
          }
      }
        last_scroll_top = scroll_top;
    
      }) }) }

