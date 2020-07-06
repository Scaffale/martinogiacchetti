function initBarba() {
  barba.init({
    transitions: [{
      sync: false,
      leave(data) {
        gsap.to(data.current.container, { opacity: 0, duration: 0.3, delay: 0.5});
        return gsap.to('.transition-panel', {top: 0, right: 0, rotation: 0,
                                      ease: 'power2.out', duration: 1});
      },
      enter(data) {
        return gsap.to('.transition-panel', {...randomPanel(),
                                      ease: 'power2.in', duration: 1});
      }
    }],
    views: [{
      namespace: 'home',
      beforeLeave() {
      },
      beforeEnter() {
        Splitting();
        initGsapHome();
      }
    },
    {
      namespace: 'jobs',
      beforeLeave() {
      },
      beforeEnter() {
        Splitting();
        initGsapJobs();
        gsap.from('.jobs-container *', { opacity: 0, duration: 1, delay: 1, stagger: { grid: 'auto', from: 'random', amount: 0.3 } });
      },
      afterEnter() {
        setTimeout(function() {
          ScrollTrigger.refresh();
        }, 1000);
      }
    },
    {
      namespace: 'about',
      beforeLeave() {
      },
      beforeEnter() {
        Splitting();
        gsap.from('.about .char', { opacity: 0, top: -100, duration: 0.2, delay: 0.5, stagger: { grid: 'auto', from: 'random', amount: 1 } });
        gsap.from('li span.arrow', { opacity: 0, duration: 0.2, delay: 2, stagger: { grid: 'auto', from: 0, amount: 0.3 } });
      }
    },
    {
      namespace: 'education',
      beforeLeave() {
      },
      beforeEnter() {
        Splitting();
        gsap.from('.education div', { opacity: 0, duration: 0.2, delay: 0.5, stagger: { grid: 'auto', from: 0, amount: 1 } });
      }
    }]
  });
}

function randomPanel() {
  var top = ['-150%', '150%'];
  var right = ['-150%', '150%'];
  return {top: top[Math.round(Math.random(2))], right: right[Math.round(Math.random(2))], rotate: (Math.round(Math.random() * 90))}
}

