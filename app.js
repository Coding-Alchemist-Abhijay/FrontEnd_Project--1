var container = document.querySelector(".Bigcontainer");
var cursor = document.querySelector(".cursor_div");
var transparent = document.querySelector(".transparent_div");

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

gsap.to(".nav", {
    height: "80px",
    backgroundColor: "black",
    scrollTrigger: {
        trigger : ".nav",
        scroller : "body",
        start : "top -10%",
        end : "top -21%",
        scrub:1
    }
})
gsap.to(".video_text",{
    backgroundColor:"black",
    scrollTrigger: {
        trigger : ".video_text",
        scroller : "body",
        start : "top -7%",
        end : "top -32%",
        scrub:1
    }
})
let moving_text = document.querySelectorAll(".moving_text_1");

moving_text.forEach((el) => {
  el.addEventListener("mouseenter", function() {
    gsap.to(el, {
      color: "#96E910",
      ease: "power1.out"
    });
  });

  el.addEventListener("mouseleave", function() {
    gsap.to(el, {
      color: "transparent",
      ease: "power1.out"
    });
  });
});
let img2_div = document.querySelector(".d3");
let img1_div = document.querySelector(".d1");
let img1 = document.querySelector(".d1 img");
let img2 = document.querySelector(".d3 img");

img1.addEventListener("mouseenter", function() {
  gsap.set(cursor, {
    scale: 5,
    backgroundColor: "transparent",
    border: "1px solid white",
    ease: "power3.out"
  });
});

img1_div.addEventListener("mousemove", function(e) {
    const rect = img1_div.getBoundingClientRect();
    const x = e.clientX - rect.left; // mouse X inside div
    const y = e.clientY - rect.top;  // mouse Y inside div

    // Calculate offset from center, max movement ±20px
    const offsetX = ((x / rect.width) - 0.5) * 100; // -20 to +20
    const offsetY = ((y / rect.height) - 0.5) * 100; // -20 to +20
    gsap.to(img1, {
      scale:1.2,
      x: offsetX,
      y: offsetY, 
      ease: "power2.out"
  });
});

img1_div.addEventListener("mouseleave", function() {
  // Instant cursor reset
  gsap.set(cursor, {
    scale: 1,
    backgroundColor: "greenyellow",
    border: "none"
  });
  
  // Animate image back
  gsap.to(img1, {
    scale: 1,
    x: 0,
    y: 0,
    duration: 0.5,
    ease: "power2.out"
  });
});


img2.addEventListener("mouseenter", function() {
  gsap.set(cursor, {
    scale: 5,
    backgroundColor: "transparent",
    border: "1px solid white",
    ease: "power3.out"
  });
});

img2_div.addEventListener("mousemove", function(e) {
  const rect = img2_div.getBoundingClientRect();
  const x = e.clientX - rect.left; // mouse X inside div
  const y = e.clientY - rect.top;  // mouse Y inside div

  const offsetX = ((x / rect.width) - 0.5) * 100; // -20 to +20
  const offsetY = ((y / rect.height) - 0.5) * 100; // -20 to +20
  gsap.to(img2, {
      scale:1.2,
      x: offsetX,
      y: offsetY,
      ease: "power2.out"
  });
});

img2_div.addEventListener("mouseleave", function() {
  // Instant cursor reset
  gsap.set(cursor, {
    scale: 1,
    backgroundColor: "greenyellow",
    border: "none"
  });
  
  // Animate image back
  gsap.to(img2, {
    scale: 1,
    x: 0,
    y: 0,
    duration: 0.5,
    ease: "power2.out"
  });
});