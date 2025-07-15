// gsapAnimations.js - Animaciones con GSAP para el proyecto bancario

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Registrar el plugin ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Animación para el navbar
export const animateNavbar = () => {
  gsap.fromTo(".custom-navbar", 
    { 
      y: -100, 
      opacity: 0 
    },
    { 
      y: 0, 
      opacity: 1, 
      duration: 1, 
      ease: "power3.out" 
    }
  );
};

// Animación para el título principal
export const animateHeroTitle = () => {
  gsap.fromTo("h1", 
    { 
      y: 50, 
      opacity: 0, 
      scale: 0.8 
    },
    { 
      y: 0, 
      opacity: 1, 
      scale: 1, 
      duration: 1.2, 
      ease: "power3.out",
      delay: 0.3
    }
  );
};

// Animación para el párrafo
export const animateHeroText = () => {
  gsap.fromTo("p", 
    { 
      y: 30, 
      opacity: 0 
    },
    { 
      y: 0, 
      opacity: 1, 
      duration: 1, 
      ease: "power2.out",
      delay: 0.6
    }
  );
};

// Animación para botones
export const animateButtons = () => {
  gsap.fromTo("a[href]", 
    { 
      y: 20, 
      opacity: 0, 
      scale: 0.9 
    },
    { 
      y: 0, 
      opacity: 1, 
      scale: 1, 
      duration: 0.8, 
      ease: "back.out(1.7)",
      delay: 0.9,
      stagger: 0.2
    }
  );
};

// Animación para scroll entre secciones
export const setupScrollAnimations = () => {
  // Animación para revelar secciones al hacer scroll
  gsap.utils.toArray("section").forEach((section, i) => {
    ScrollTrigger.create({
      trigger: section,
      start: "top 80%",
      end: "bottom 20%",
      onEnter: () => {
        gsap.fromTo(section, 
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
        );
      }
    });
  });
};

// Animación para video entrance
export const animateVideoEntrance = () => {
  gsap.fromTo("video", 
    { 
      scale: 1.1, 
      opacity: 0 
    },
    { 
      scale: 1, 
      opacity: 1, 
      duration: 2, 
      ease: "power2.out" 
    }
  );
};

// Hover effect para botones con GSAP
export const addButtonHoverEffects = () => {
  const buttons = document.querySelectorAll("a[href], button");
  
  buttons.forEach(button => {
    button.addEventListener("mouseenter", () => {
      gsap.to(button, {
        scale: 1.05,
        y: -3,
        duration: 0.3,
        ease: "power2.out"
      });
    });
    
    button.addEventListener("mouseleave", () => {
      gsap.to(button, {
        scale: 1,
        y: 0,
        duration: 0.3,
        ease: "power2.out"
      });
    });
  });
};

// Timeline completa para la página de inicio
export const createHomePageTimeline = () => {
  const tl = gsap.timeline();
  
  tl.add(animateNavbar())
    .add(animateVideoEntrance(), "-=0.5")
    .add(animateHeroTitle(), "-=1")
    .add(animateHeroText(), "-=0.6")
    .add(animateButtons(), "-=0.3");
    
  return tl;
};
