//Side Responsive Bar Function
var sidebtn = document.querySelector(".sidenav")
var nav = document.querySelector(".navmobile")
var close = document.querySelector(".close")

sidebtn.addEventListener('click', function(event){
    nav.style.top = "0%"
    nav.style.zIndex="3"
    nav.style.transform="scale(1)"
})
close.addEventListener('click', function(event){
    nav.style.top = "-200%"
    nav.style.transform="scale(0)"
})


//Side Responsive Bar Function
// For Next Button
    var nextBtn = document.querySelector(".next")
    var PrevBtn = document.querySelector(".prev")
    var firstSlide = document.querySelector(".s1")
    var matteSlide = document.querySelector(".m1")
    var textSlide = document.querySelector(".t1")
    var body = document.querySelector("body")
    var animtext = document.querySelectorAll(".animtext")

    console.log(animtext)

        
      var nextClicks = 0;
// //for text animation

//text-animation end

      function next(){
      if(nextClicks < 4){
        nextClicks++ ;
        console.log(nextClicks)
        firstSlide.style.marginLeft = `-${nextClicks*20}%`
        matteSlide.style.marginLeft = `-${nextClicks*20}%`
        textSlide.style.marginLeft = `-${nextClicks*20}%`
    }else{
        nextClicks = -1;
        console.log(nextClicks)
        nextClicks++ ;
        firstSlide.style.marginLeft = `-${nextClicks*20}%`
        matteSlide.style.marginLeft = `-${nextClicks*20}%`
        textSlide.style.marginLeft = `-${nextClicks*20}%`
    }
       }
// For Previous Button
   function prev(){
    if (nextClicks <= 0){
        nextClicks = 5
        nextClicks--
        firstSlide.style.marginLeft = `-${nextClicks*20}%`
        matteSlide.style.marginLeft = `-${nextClicks*20}%`
        textSlide.style.marginLeft = `-${nextClicks*20}%`
    }else{
        nextClicks--
        firstSlide.style.marginLeft = `-${nextClicks*20}%`
        matteSlide.style.marginLeft = `-${nextClicks*20}%`
        textSlide.style.marginLeft = `-${nextClicks*20}%`
    } 
   }
// for upcoming projects
var fstbtn = document.querySelector(".b1")
var scndbtn = document.querySelector(".b2")
var thrdbtn = document.querySelector(".b3")
var upfstslide = document.querySelector(".u1")

function img1(){
    upfstslide.style.marginLeft = "0"
    fstbtn.style.backgroundColor = "orange"
    scndbtn.style.backgroundColor = "grey"
    thrdbtn.style.backgroundColor = "grey"
}
function img2(){
    upfstslide.style.marginLeft = "-25%"
    fstbtn.style.backgroundColor = "grey"
    scndbtn.style.backgroundColor = "orange"
    thrdbtn.style.backgroundColor = "grey"
}
function img3(){
    upfstslide.style.marginLeft = "-50%"
    fstbtn.style.backgroundColor = "grey"
    scndbtn.style.backgroundColor = "grey"
    thrdbtn.style.backgroundColor = "orange"
}
//setInterval Function for first slide
var counter = 1
    setInterval(function(){
       firstSlide.style.marginLeft = `-${counter*20}%`
       matteSlide.style.marginLeft = `-${counter*20}%`
       textSlide.style.marginLeft = `-${counter*20}%`
        counter++
        if(counter > 4){
            counter = 0;
        }
    }, 3500);
//setInterval for upcoming project
var variable = 1
setInterval(function(){
    upfstslide.style.marginLeft = `-${variable*25}%`
    variable++
if(variable > 3 ){
    variable = 0
}
}, 3500)
//for fixed navbar function
var navbar = document.querySelector(".navbar")
var dropcon = document.querySelector(".dropcontent")
console.log(dropcon)
window.addEventListener('scroll',function(){
if(this.window.pageYOffset>100){
    // navbar.style.position = "fixed"
    navbar.style.zIndex = "2"
    navbar.style.right = "0"
}else{
    navbar.style.position="relative"

  
}
})
