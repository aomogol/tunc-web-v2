gsap.registerPlugin(ScrollTrigger);

document.addEventListener('DOMContentLoaded', function() {
  initScrollAnimations();
});

function initScrollAnimations() {
  initFadeInAnimations();
  initStaggerCardAnimations();
  initTextRevealAnimation();
  initParallaxEffect();
}

function initFadeInAnimations() {
  const fadeElements = document.querySelectorAll('.scroll-fade');
  
  fadeElements.forEach(element => {
    gsap.from(element, {
      scrollTrigger: {
        trigger: element,
        start: 'top 80%',
        end: 'top 20%',
        scrub: false,
        markers: false
      },
      opacity: 0,
      y: 50,
      duration: 0.8,
      ease: 'power2.out'
    });
  });
}

function initStaggerCardAnimations() {
  const cardContainers = document.querySelectorAll(
    '.feature-grid, .process-grid, .portfolio-grid, .testimonials-grid'
  );
  
  cardContainers.forEach(container => {
    const cards = container.querySelectorAll('.card-stagger');
    
    if (cards.length > 0) {
      gsap.from(cards, {
        scrollTrigger: {
          trigger: container,
          start: 'top 75%',
          end: 'top 25%',
          scrub: false,
          markers: false
        },
        opacity: 0,
        y: 40,
        stagger: 0.15,
        duration: 0.6,
        ease: 'back.out'
      });
    }
  });
}

function initTextRevealAnimation() {
  const textElements = document.querySelectorAll('.scroll-text-reveal');
  
  textElements.forEach(element => {
    gsap.from(element, {
      scrollTrigger: {
        trigger: element,
        start: 'top 70%',
        end: 'top 30%',
        scrub: 0.5,
        markers: false
      },
      opacity: 0,
      x: -100,
      duration: 1,
      ease: 'power2.out'
    });
  });
}

function initParallaxEffect() {
  const parallaxSections = document.querySelectorAll(
    '.hero, .panasonic-spotlight, .demo-video-section, .testimonials-section'
  );
  
  parallaxSections.forEach(section => {
    gsap.to(section, {
      scrollTrigger: {
        trigger: section,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 0.5,
        markers: false
      },
      backgroundPosition: '50% 100%',
      ease: 'none'
    });
  });
}
