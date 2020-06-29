function initGsap() {
  // gsap.registerPlugin(ScrollTrigger);
  let tl = gsap.timeline();

  // add animations and labels to the timeline
  tl.addLabel('start')
    .from('.name .char', { rotateY: '.25turn',
                           scale: 0.9,
                           opacity: 0,
                           delay: 1,
                           duration: 1,
                           stagger: { grid: 'auto', from: 'center', amount: 0.3 } })
    .addLabel('what');
  document.querySelectorAll('.what .shadows').forEach(function(element, index) {
    tl.from('.what .shadows:nth-of-type(' + (index + 1) + ') .char', { x: -50,
                                                            opacity: 0,
                                                            delay: -0.2,
                                                            duration: 0.3,
                                                            stagger: {grid: 'auto', from: 'random', amount: 0.3 } })
  });
  tl.addLabel('end');
  tl.timeScale(1.3);
}

function randomColor() {
  r = getRandomInt(255);
  g = getRandomInt(255);
  b = getRandomInt(255);
  a = 1;
  return 'rgba(' + r + ',' + g + ',' + b + ',' + a + ')'
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
