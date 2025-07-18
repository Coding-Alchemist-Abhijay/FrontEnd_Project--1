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

let card_1 = document.querySelector(".card_1");
let card_2 = document.querySelector(".card_2");
let card_3 = document.querySelector(".card_3");

let card_img_1 = document.querySelector(".card_1 img");
let ccard_img_2 = document.querySelector(".card_2 img");
let card_img_3 = document.querySelector(".card_3 img");


[
  { card: card_1, img: card_img_1 },
  { card: card_2, img: ccard_img_2 },
  { card: card_3, img: card_img_3 }
].forEach(({ card, img }) => {
  card.addEventListener("mouseenter", () => {
    gsap.set(cursor, {
      scale: 5,
      backgroundColor: "transparent",
      border: "1px solid white",
      ease: "power3.out"
    });
    card.style.overflow = "hidden";
    gsap.to(img, {
      opacity: 0,
      scale : 1.2,
      duration:0.4,
      ease : "none"
    });
  });

  card.addEventListener("mouseleave", () => {
    gsap.set(cursor, {
      scale: 1,
      backgroundColor: "greenyellow",
      border: "none"
    });
    gsap.to(img, {
      opacity: 1,
      scale : 1
    });
  });
});
let dot_1 = document.querySelector("#dot_1");
let dot_2 = document.querySelector("#dot_2");
let dot_3 = document.querySelector("#dot_3");
let food_img_1 = document.querySelector("#food_img_1");
let food_img_2 = document.querySelector("#food_img_2");
let food_img_3 = document.querySelector("#food_img_3");
let t_1 = document.querySelector(".t_div_1");
let t_2 = document.querySelector(".t_div_2");
let t_3 = document.querySelector(".t_div_3");
dot_1.addEventListener("click" , ()=> {
  gsap.to(dot_1, {
    backgroundColor:"#96E910"
  })
  gsap.to(t_1, {
    border: "1px solid #96E910",
    scale:2.4
  })
  gsap.to(food_img_1, {
    zIndex: 3,
    duration:1,
    ease:"power3.out"
  })
  gsap.set([dot_2, dot_3], { clearProps: "backgroundColor" });
  gsap.set([t_2, t_3], { clearProps: "border,scale" });
  gsap.to([food_img_2, food_img_3], { clearProps: "zIndex" });
})
dot_2.addEventListener("click" , ()=> {
  gsap.to(dot_2, {
    backgroundColor:"#96E910"
  })
  gsap.to(t_2, {
    border: "1px solid #96E910",
    scale:2.4
  })
  gsap.to(food_img_2, {
    zIndex: 3,
    duration:1,
    ease:"power3.out"
  })
  gsap.set([dot_1, dot_3], { clearProps: "backgroundColor" });
  gsap.set([t_1, t_3], { clearProps: "border,scale" });
  gsap.to([food_img_1, food_img_3], { clearProps: "zIndex" });
})
dot_3.addEventListener("click" , ()=> {
  gsap.to(dot_3, {
    backgroundColor:"#96E910"
  })
  gsap.to(t_3, {
    border: "1px solid #96E910",
    scale:2.4
  })
  gsap.to(food_img_3 , {
    zIndex: 3,
    duration:1,
    ease:"power3.out"
  })
  gsap.set([dot_1, dot_2], { clearProps: "backgroundColor" });
  gsap.set([t_1, t_2], { clearProps: "border,scale" });
  gsap.to([food_img_1, food_img_2], { clearProps: "zIndex" });
})