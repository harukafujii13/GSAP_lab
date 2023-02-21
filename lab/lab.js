
const logo = document.querySelector('.logo');
gsap.from(logo, {
  autoAlpha: 0,
  duration: 1,
  x: -100,
})

gsap.from(".navItem", {
  autoAlpha: 0,
  duration: 1,
  x: -10,
  // ease: "power4.out",
  stagger: 0.1,
})



var tl = gsap.timeline();

tl.from(".title", {
  autoAlpha: 0,
  duration: 0.5, //デフォルト値が1。1より値が小さくなるほどアニメーションの動きが早くなる。
  y: 100,
  delay: 1　//一秒遅れ
});

tl.from(".tagline, .desc", {
  autoAlpha: 0,
  duration: 0.5,
  y: 100,
})

tl.from(".beer-img", {
  autoAlpha: 0,
  duration: 0.5,
  y: -500
})

  const beerImg = document.querySelector('.beer-img');

  tl.to(beerImg, {
    duration: 1,
    y: -15,
    ease: "sine.inOut",
    repeat: -1,
    yoyo: true,
  })

