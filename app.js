var container = document.querySelector(".Bigcontainer");
var cursor = document.querySelector(".cursor_div");
var transparent = document.querySelector(".transparent_div");
gsap.to(".div_1 h1", {
    x: "1%",
    ease: "none",
    duration: 14,
    repeat: -1
  });

container.addEventListener("mousemove", function(dets) {
    gsap.to(cursor, {
        x : dets.x,
        y : dets.y,
        duration : 1,
        ease: "power3.out" 
    })
    gsap.to(transparent, {
        x : dets.x,
        y : dets.y,
        duration : 1.5,
        ease: "power3.out" 
    })
})