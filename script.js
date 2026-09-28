
function loco(){
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






function loadinganimation(){


var t1 = gsap.timeline()

t1.from(".line h1" ,{
    y : 100,
    stagger : 0.1,
    duration : .6,
    delay : .2
})

t1.from(".line1-part1",{
    opacity : 0,
   
})

t1.to(".line h2",{
    animationName: "anime",
    
})



t1.from(".line1-part1 h5", {
  onStart: function () {
    var h5 = document.querySelector(".line1-part1 h5");
    var grow = 0;
    setInterval(function () {
      if (grow < 100) {
        h5.textContent = grow++;
      } else {
        h5.textContent = grow;
      }
    }, 20);
  },
});



document.body.classList.add("loading");

t1.to("#loader",{
    opacity: 0,
    delay: 2.6,
    duration: 1.5,
    onComplete: function () {
        document.body.classList.remove("loading");
    }
})


t1.from("#page1",{
   y : 1600,
   duration : .1, 
   delay : .3,

})

t1.from("#video-container",{
    opacity :0

})

t1.to("#loader",{
   height :"100vh",
   display : "none"
})

}


function middiv(){
  gsap.from(".hero h1" ,{
    y : 100,
    stagger : 0.1,
    duration : .6,
    delay : 7.122
})
}

function crsr(){
  document.addEventListener("mousemove",function(dels){
     gsap.to("#crsr",{
      top : dels.y,
      left : dels.x
     })
})


Shery.makeMagnet(".nav-mid h4 , .nav-end h3" /* Element to target.*/, {
  //Parameters are optional.
 
});

 var cursor = document.querySelector("#video-container")
 var video = document.querySelector("#video-container video")
 var img = document.querySelector("#video-container img")

 cursor.addEventListener("mouseenter",function(){
   cursor.addEventListener("mousemove",function(del){
     
    gsap.to("#crsr",{
       opacity :0,
      });

     gsap.to(".icon",{
       y : del.y - 370  ,
     left : del.x  -650  ,
     });


    var flag = 0
    video.addEventListener("click",function(){
    
    if(flag == 0){
    video.play();
    document.querySelector(".icon").innerHTML = `<i class="ri-pause-fill"></i>`
      gsap.to(".icon",{
      scale : 0.5,
    
          });
          
    flag = 1;
  }
    else{
    video.pause();
    document.querySelector(".icon").innerHTML = `<i class="ri-play-large-fill"></i>`
       gsap.to(".icon",{
        scale : 1,
        });
    flag = 0;
    } 
    
 


});




  });

 

 });

 cursor.addEventListener("mouseleave",function(del){
   gsap.to("#crsr",{
          opacity : 1,

   });

   gsap.to(".icon",{
    top: "10%",
    left: "70%",
   })
 });



}

function bluediv(){
Shery.makeMagnet(".blue-div h2,.blue-div h4" /* Element to target.*/, {
  //Parameters are optional.
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 1,
});
}


function sheryanimation(){
  Shery.imageEffect(".img-div",{
    style:5,
    // debug : true,
    config : {"a":{"value":2,"range":[0,30]},"b":{"value":0.7501875468867217,"range":[-1,1]},"zindex":{"value":1,"range":[-9999999,9999999]},"aspect":{"value":0.80285743540956},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":false},"maskVal":{"value":1,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":0},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.002,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}},
    gooey : true

    
  })
}

function flag(){
var flag = document.querySelector("#page1")
flag.addEventListener("mousemove",function(del){
  
  gsap.to("#crsr",{
       opacity : 1,
      });

  gsap.to("#flag",{
    left : del.x,
    top : del.y,
  })
  
  var move = document.querySelector("#move")
  move.addEventListener("mouseenter",function(){
     
     gsap.to("#crsr",{
       opacity : 0,
      });
    
    gsap.to("#flag",{
      opacity : 1,
     })
  })

    var move = document.querySelector("#move")
  move.addEventListener("mouseleave",function(){
     gsap.to("#flag",{
      opacity : 0,
     })
      gsap.to("#crsr",{
       opacity : 1,
      });
  })


})
}

function lets (){
var h1 = document.querySelector("#footer h1")
h1.addEventListener("mouseenter",function(){
    gsap.to("#footer h1",{
          x :"20%",
         webkitTextStroke : "1px rgba(251, 239, 212, 0.586)",
         color: "transparent",
         fontSize: "6.1vw"



    })

  })
  h1.addEventListener("mouseleave",function(){
    gsap.to("#footer h1",{
          x :"0%",
         fontSize: "5vw",
         color: 'white'

    })

  })

}



loadinganimation();
lets ()
flag()
sheryanimation()
loco();
middiv();
crsr();
bluediv();
