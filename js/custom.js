function initGsap() {
  gsap.registerPlugin(ScrollTrigger);
  let tl = gsap.timeline();

  // add animations and labels to the timeline
  tl.addLabel('start')
    .from('.name .char', { rotateY: '.25turn', scale: 0.9, opacity: 0, stagger: {
                                                                                  grid: 'auto',
                                                                                  from: 'random',
                                                                                  amount: 0.3 }
      })
    .addLabel('what')
    .from('.frontend .char', { x: -50, opacity: 0, stagger: {
                                                              grid: 'auto',
                                                              from: 'random',
                                                              amount: 0.6 }
      })
    .from('.ux .char', { x: -50, opacity: 0, stagger: {
                                                        grid: 'auto',
                                                        from: 'random',
                                                        amount: 0.6 }
      })
    .from('.dev .char', { x: -50, opacity: 0, stagger: {
                                                        grid: 'auto',
                                                        from: 'random',
                                                        amount: 0.6 }
      })
    .addLabel('menuIn')
    .from('.menu', { opacity: 0 })
    .addLabel('end');
}

function frontendHover(kill = false) {
  if (kill) {
    gsap.killTweensOf('.frontend .char');
    gsap.to('.frontend .char', { color: '#FFF' });
  } else {
    document.querySelectorAll('.frontend .char').forEach(function(element, index) {
      gsap.to(element, { color: randomColor(),
                         repeat: -1,
                         duration: 0.8,
                         delay: getRandomInt(index) / 5 });
    });
  }
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
