function loco(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".maincont"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(".maincont", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector(".maincont").style.transform ? "transform" : "fixed"
});




// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();


}

loco()


function page1() {
gsap.to(".vid1" , {
    filter:'blur(20px)' , 
    transform:"scaleX(0.85)",
    scrollTrigger:{
        trigger:".page1",
        scroller:".maincont",
        // markers:true,
        start:"top 0",
        end:"top -50%",
        scrub:true
    }
})

document.addEventListener("mousemove" , (e)=>{
    gsap.to("#cursor",{
        top:e.y,
        left:e.x
        
    })
})



// var mainMenu = document.querySelector(".nav i")

// mainMenu.addEventListener("click" , ()=>{
//     gsap.to(".main-menu" , {
//     display:"block" ,
//     // scale:"100%" ,
//     height: "100vh",
//     width: "100%" ,
//     // filter:'blur(10px)' 


// })
//     console.log("llllll")
// })


gsap.to(".nav-p2",{
    y:-100,
    duration:1,
    scrollTrigger:{
        trigger:".nav",
        scroller:".maincont",
        start:"top 0",
        end:"top -10%",
        scrub:true
    }
})

gsap.to(".nav i",{
    display:"block",
    scrollTrigger:{
        trigger:".nav",
        scroller:".maincont",
        start:"top -15%",
        end:"top -20%",
        scrub:true
    }
})


var text = "We are brain.space     The brain data company"


var splittedText = text.split("")

var clutter = ""

splittedText.forEach(function(elem){
    clutter += `<span>${elem}</span>`
})

var h1Text = document.querySelector(".page1 h1")
h1Text.innerHTML = clutter

gsap.to(".page1 h1 span",{
    display:"initial",
    stagger:0.1
})


}

page1()

function page2() {
    
gsap.to(".page2 img",{
    transform:"translateY(-50%) translateX(69%)",
    duration:10,
    repeat:-1,
    ease:"none"     
})



gsap.from(".p2top #left-page2,.p2top #right-page2" , {
    y:100 , 
    scale: 1.2 ,
    opacity: 0 ,
    // duration:4 , 

    scrollTrigger : {
        trigger:".page2",
        scroller: ".maincont",
        start: "top 0",
        end: "top -20%",
        scrub: 3,
        // markers:true
        // pin: true
    }
})


gsap.from(".p2bottom #left2-page2,.p2bottom #right2-page2" , {
    y:100 , 
    scale: 1.2 ,
    opacity: 0 ,
    // duration:4 , 

    scrollTrigger : {
        trigger:".page2",
        scroller: ".maincont",
        start: "top -30%",
        end: "top -80%",
        scrub: 3,
        // markers: true
        // pin: true
    }
})


}

page2()

function page3() {
    
gsap.from("#helmet " , {
    y:100 , 
    scale: .8 ,
    opacity: 0 ,
    // duration:4 , 

    scrollTrigger : {
        trigger:".page3",
        scroller: ".maincont",
        start: "top 0",
        end: "top -20%",
        scrub: 3,
        // markers:true
        // pin: true
    }
})

gsap.from(".p3box1 h2 ,.p3box1 p ,.p3box1 button " , {
    y:100 , 
    scale: .8 ,
    opacity: 0 ,
    stagger:0.1 ,
    // duration:4 , 

    scrollTrigger : {
        trigger:".page3",
        scroller: ".maincont",
        start: "top -60%",
        end: "top -80%",
        scrub: 3,
        // markers:true
        // pin: true
    }
})


gsap.from(".p3box2 ,.p3box3 ,.p3box4 ,.p3box5" , {
    y:100 , 
    scale: .8 ,
    opacity: 0 ,
    stagger:0.1 ,
    // duration:4 , 

    scrollTrigger : {
        trigger:".page3",
        scroller: ".maincont",
        start: "top -90%",
        end: "top -300%",
        scrub: 3,
        // markers:true
        // pin: true
    }
})
}

page3()


function page4() {
    
var tl4 = gsap.timeline({
    scrollTrigger: {
        trigger: ".page4",
        scroller: ".maincont",
        start: "top 0",
        end: "top -70%",
        scrub: 3,
        pin: true
    }
})
tl4.to(".page4-content", {
    transform: "translateX(-75%)",
}, "okay")
tl4.to(".page4 #slider-in", {
    x: 650,
}, "okay")


}

page4()

function page5() {
    
gsap.from(".p5part1 h1 ,.p5textbox " , {
    y:100 , 
    scale: .8 ,
    opacity: 0 ,
    stagger:0.1,

    scrollTrigger : {
        trigger:".page5",
        scroller: ".maincont",
        start: "top 50%",
        end: "top -10%",
        scrub: 3,
        // markers:true
        // pin: true
    }
})

gsap.from(".cardbox" , {
    // y:100 , 
    scale: 1.4 ,
    opacity: 0 ,
    // stagger:0.1,

    scrollTrigger : {
        trigger:".page5",
        scroller: ".maincont",
        start: "top 0%",
        end: "top -50%",
        scrub: 3,
        // markers:true
    }
})



}

page5()

function page7() {
    
gsap.from(".p7textinfo" , {
    y:100 , 
    scale: .8 ,
    opacity: 0 ,
    // stagger:0.1,

    scrollTrigger : {
        trigger:".page7",
        scroller: ".maincont",
        start: "top 0%",
        end: "top -30%",
        scrub: 3,
        // markers:true
        // pin: true
    }
})


gsap.from(".p7boxi1" , {
    y:100 , 
    scale: .8 ,
    opacity: 0 ,
    stagger:0.1,

    scrollTrigger : {
        trigger:".page7",
        scroller: ".maincont",
        start: "top -30%",
        end: "top -80%",
        scrub: 3,
        // markers:true
        // pin: true
    }
})


document.querySelector(".p7contbox").addEventListener("mousemove", function (dets) {
    document.querySelector(".p7contant").style.background = `conic-gradient(at ${dets.x}px ${dets.y}px,rgb(255, 228, 233),aliceblue,rgb(205, 243, 255),rgb(195, 255, 195),lightyellow,rgb(251, 226, 230))`
})


}

page7()

