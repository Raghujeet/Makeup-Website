let cursor = document.querySelector("#cursor");
let blur =  document.querySelector("#cursor-blur");

document.addEventListener("mousemove",function (delt) {
        cursor.style.left = delt.x+ 25 + "px";
        cursor.style.top = delt.y + "px";
        blur.style.left = delt.x - 150 + "px";
        blur.style.top = delt.y - 150 + "px";
        
});


var navAll = document.querySelectorAll("#nav .navh3");
        navAll.forEach(function(elm) {
            elm.addEventListener("mouseenter", function(){
                cursor.style.scale = 3
                cursor.style.border = "1px solid #fff"
                cursor.style.backgroundColor  = "transparent"
            })
            elm.addEventListener("mouseleave", function(){
                cursor.style.scale = 1
                cursor.style.border = "0px solid   ##FF52A2"
                cursor.style.backgroundColor  = ""
            })
        })


gsap.to("#nav",{
    backgroundColor: "#C5669E",
    height: "90px",
    duration: 0.5,
    delay:0.5,
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        start: "top -10%",
        end: "top -11%",
        scrub:1
    }
})

gsap.to("#main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"#main",
        scroll:"body",
        start: "top -25%",
        end: "top -75%",
        scrub:1
    }

})

gsap.from("#about-us img,#about-us-in",{
    y:80,
    opacity:1,
    duration:1,
    // stagger: 0.1,
    scrollTrigger:{
        trigger: "#about-us",
        scroller:"body",
        // markers:true,
        start:"top 40%",
        end:"top 60%",
        scrub:1
    }
})

gsap.from(".card",{
    scale:1,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger: ".card",
        scroller:"body",
        // markers:true,
        start:"top 50%",
        end:"top 65%",
        scrub:1
    }
})

gsap.from("#colon1",{
    y:-70,
    x:-65,
    scrollTrigger:{
        trigger: "#colon1",
        scroller:"body",
        start:"top 55%",
        end:"top 45%",
        scrub:2
    }
})

gsap.from("#colon2",{
    y: 70,
    x: 65,
    scrollTrigger:{
        trigger: "#colon1",
        scroller:"body",
        start:"top 55%",
        end:"top 45%",
        scrub:2
    }
})
