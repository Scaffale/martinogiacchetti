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

function initGsapHome() {
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

function initGsapJobs(argument) {
  let scrollTriggerBasicOptions = { trigger: '.single-job.corehab', scrub: true, pin: false };
  gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(TextPlugin);
  gsap.to('.pointer', { marginLeft: 50, scrollTrigger: {start: "top bottom",
                                                         end: "top top",
                                                         ...scrollTriggerBasicOptions }});
  gsap.to('.corehab .position, .corehab .company, .corehab .overview', { opacity: 0, scrollTrigger: {start: "top bottom",
                                                         end: "top center",
                                                         trigger: '.corehab .description',
                                                         scrub: true, pin: false }});

  gsap.to('.pervoice .position, .pervoice .company, .pervoice .overview', { opacity: 0, scrollTrigger: {start: "top bottom",
                                                         end: "top center",
                                                         trigger: '.pervoice .description',
                                                         scrub: true, pin: false }});
  let timelineYear = gsap.timeline({scrollTrigger: {
    trigger: '.year-change.one',
    pin: true,
    scrub: true,
    start: 'top top',
    end: '200%'
  }});
  timelineYear.addLabel('start')
              .to('.pointer', { marginLeft: 0, textAlign: 'center', width: '100%', fontSize: '3em' })
              .addLabel('now')
              .to('.pointer', { text: 'Now...' })
              .addLabel('before')
              .to('.pointer', { text: 'and before?' })
              .addLabel('after')
              .to('.pointer', { text: '2018', rotate: 360, marginLeft: 50, width: 'auto', textAlign: 'left', fontSize: '1em'})
              .addLabel('end');
  let timelineYearTwo = gsap.timeline({scrollTrigger: {
    trigger: '.year-change.two',
    pin: true,
    scrub: true,
    start: 'top bottom',
    end: 'bottom top'
  }});
  timelineYearTwo.addLabel('start')
              .to('.pointer', { marginLeft: 0, textAlign: 'center', width: '100%', fontSize: '3em' })
              .addLabel('before')
              .to('.pointer', { text: '2018...' })
              .addLabel('before')
              .to('.pointer', { text: 'and before?' })
              .addLabel('after')
              .to('.pointer', { text: 'take a look at my studies', top: 90 })
              .addLabel('end');
}
