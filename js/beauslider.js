
// Selection des objets pour le beauSlider
var beauSlider = document.querySelector("#beauSlider");
var itemSlide = document.querySelectorAll(".block_slider");
const nextItem = document.querySelector('.next');
const prevItem = document.querySelector('.prev');

// Width full ecran
var items = itemSlide.length 
var widthWindow = beauSlider.clientWidth
var widthItems = (items * widthWindow)
var approxima = (widthWindow * 50) / widthItems
var less = approxima * 2
var count = 0;


// Width landing page
beauSlider.style.transform = "translate(" + (-approxima - (less * count) + "%") + ", -50%)";

    // Control slider next
    function nextSlide(){
        if(count < items - 1){ count++ }
        else { count = 0; }
        beauSlider.style.transform = "translate(" + (-approxima - (less * count) + "%") + ", -50%)" }

    // Control slider prev
    function prevSlide(){
        if(count > 0){ count-- }
        else { count = items - 1 }
        beauSlider.style.transform = "translate(" + (-approxima - (less * count) + "%") + ", -50%)" }

    // Control slider prev & next
        nextItem.addEventListener("click", nextSlide)
        prevItem.addEventListener("click", prevSlide)

    // autoPlay
    function autoPlay(){ nextSlide(); }

    setInterval(autoPlay, 3000)



