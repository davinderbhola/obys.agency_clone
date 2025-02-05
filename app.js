function loadingAnimation(){
    var tl1 = gsap.timeline();
tl1.from(".line h1",{
    y:150,
    stagger:0.25,
    duration:0.6,
    delay:1,
});
tl1.from("#line1-part1, .line h2",{
    opacity:0,
    onStart:function(){
        let h5Timer = document.querySelector("#line1-part1 h5");
        let grow = 1;
        setInterval(function(){
            if(grow<100){
                h5Timer.innerHTML = grow++
            }else{
                h5Timer.innerHTML = grow
            }
        },28);
    }
});
tl1.to(".line h2",{
    animationName:"anime",
    opacity:1,
})
tl1.to("#loader",{
    y:-500,
    opacity:0,
    duration:0.3,
    delay:0.1,
});

tl1.from("#page1",{
    delay:0.2,
    y:1000,
    opacity:0,
    duration:0.8,
    ease:Power4,
})
tl1.to("#loader",{
    display:"none",
});
tl1.from("#nav",{
    y:"top 20%",
    opacity:0,
})
tl1.from("#hero1 h1, #hero2 h1, #hero3 h2, #hero4 h1",{
    y:120,
    stagger:0.5,
    opacity:0,
})
tl1.from("#hero1, #page2",{
    opacity:0,
},'-=1.9')

}
function cursorAnimation(){
    Shery.mouseFollower({
        skew: true,
        ease: "cubic-bezier(0.23, 1, 0.320, 1)",
        duration: 1,
      });
    
    Shery.makeMagnet("#nav-part2 h4");
    var videoContainer = document.querySelector("#video-container");
    var video = document.querySelector("#video-container video");

    videoContainer.addEventListener("mouseenter",function(){
        gsap.to(".mousefollower",{
            display:"none",
        })
        videoContainer.addEventListener("mousemove",function(dets){
            gsap.to("#video-cursor",{
                left:dets.x - 500,
                y:dets.y - 250,
            })
        })
    })
    videoContainer.addEventListener("mouseleave",function(){
        gsap.to(".mousefollower",{
            display:"initial",
        })
        gsap.to("#video-cursor",{
            left:"70%",
            top:"15%"
        })
    })
    var flag = 0
    videoContainer.addEventListener("click",function(){
        if(flag == 0){
                video.play();
                video.style.opacity = 1;
                document.querySelector("#video-cursor").innerHTML = `<i class="ri-pause-line"></i>`;
                gsap.to("#video-cursor",{
                scale:0.5,  
            });
            flag = 1;
        }else{
            video.pause();
                video.style.opacity = 0;
                document.querySelector("#video-cursor").innerHTML = `<i class="ri-play-fill"></i>`;
                gsap.to("#video-cursor",{
                scale:1,
            });
            flag = 0;
        }
    })

    var flips = document.querySelectorAll(".flips");
    flips.forEach(frams =>{
        frams.addEventListener("mouseenter",function(){
            gsap.to(frams.children,{
                y: "-3vw",
                duration:0.1,
            })
            console.log(dets)
        })
        frams.addEventListener("mouseleave",function(){
            gsap.to(frams.children,{
                y: 0,
                duration:0.1,
            })
        })
    })
   
}
function scrolling(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});



// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}
function sheryAnimation(){
    Shery.imageEffect(".img-div", {
        style: 6,
        config:{"noiseDetail":{"value":5.34,"range":[0,100]},"distortionAmount":{"value":1.98,"range":[0,10]},"scale":{"value":23.66,"range":[0,100]},"speed":{"value":0.55,"range":[0,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.8333378683445897},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0.08,"y":0}},"shapeScale":{"value":{"x":0.58,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":false},"maskVal":{"value":1,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":0},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.37,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":9.92,"range":[0,100]}},
        gooey:true,
      });
}

function footerAnimation() {

    var clutter = ""
    var clutter2 = ""
    document.querySelector("#footer h1").textContent.split("").forEach(function (elem) {
      clutter += `<span>${elem}</span>`
    })
    document.querySelector("#footer h1").innerHTML = clutter
    document.querySelector("#footer h2").textContent.split("").forEach(function (elem) {
      clutter2 += `<span>${elem}</span>`
    })
    document.querySelector("#footer h2").innerHTML = clutter2
  
  
    document.querySelector("#footer-text").addEventListener("mouseenter", function () {
      gsap.to("#footer h1 span", {
        opacity: 0,
        stagger: 0.05
      })
      gsap.to("#footer h2 span", {
        delay: 0.15,
        opacity: 1,
        stagger: 0.1
      })
    })
    document.querySelector("#footer-text").addEventListener("mouseleave", function () {
      gsap.to("#footer h1 span", {
        opacity: 1,
        stagger: 0.1,
        delay: 0.15,
  
      })
      gsap.to("#footer h2 span", {
        opacity: 0,
        stagger: 0.05
      })
    })
  }
  

scrolling();
loadingAnimation();
cursorAnimation();
sheryAnimation();
footerAnimation();

document.addEventListener("mousemove",function(dets){
    gsap.to("#flagg",{
        x:dets.x,
        y:dets.y,
    })
})

document.querySelector("#hero3").addEventListener("mouseenter",function(){
    gsap.to("#flagg",{
        opacity:1,
    })
})

document.querySelector("#hero3").addEventListener("mouseleave",function(){
    gsap.to("#flagg",{
        opacity:0,
    })
})

// var footh2 = document.querySelector("#footer h1");
// footh2.addEventListener("mouseenter",function(){
//     gsap.from("#footer h1",{
//         delay:0.2,
//         duration:0.5,
//         onStart:function(){
//             $('#footer h1').textillate({ in: { effect: 'rollIn' } });
//         }
//     })
// })



