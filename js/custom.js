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
