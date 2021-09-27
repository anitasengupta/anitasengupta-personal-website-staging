$(document).ready(() => {

  // create controller
  const controller = new ScrollMagic.Controller();

  // create animations

  // single version
  const fadeOutIntro = gsap.to('#intro', {opacity: 0.3});
  const fadeInSp = gsap.to('#specialization', {display: "inline-block", opacity: 1});
  const fadeOutSp = gsap.to('#specialization', {opacity: 0.3});
  const fadeInWork = gsap.to('#work', {display: "inline-block", opacity: 1});
  const fadeOutWork = gsap.to('#work', {opacity: 0.3});
  const fadeInContact = gsap.to('#contact', {display: "inline-block", opacity: 1});

  // create scene
  const scene1 = new ScrollMagic.Scene({
    triggerElement: '#one',
    duration: '20%'
})
  .setTween(fadeOutIntro)
  .addIndicators()
  .addTo(controller);

  const scene2 = new ScrollMagic.Scene({
    triggerElement: '#two',
    duration: '20%'
})
  .setTween(fadeInSp)
  .addIndicators()
  .addTo(controller);

  const scene3 = new ScrollMagic.Scene({
    triggerElement: '#three',
    duration: '20%'
})
  .setTween(fadeOutSp)
  .addIndicators()
  .addTo(controller);

  const scene4 = new ScrollMagic.Scene({
    triggerElement: '#four',
    duration: '20%'
})
  .setTween(fadeInWork)
  .addIndicators()
  .addTo(controller);

  const scene5 = new ScrollMagic.Scene({
    triggerElement: '#five',
    duration: '20%'
})
  .setTween(fadeOutWork)
  .addIndicators()
  .addTo(controller);

  const scene6 = new ScrollMagic.Scene({
    triggerElement: '#six',
    duration: '20%'
})
  .setTween(fadeInContact)
  .addIndicators()
  .addTo(controller);
});
