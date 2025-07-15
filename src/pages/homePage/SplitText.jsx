import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SplitText = ({
  text,
  className = "",
  delay = 100,
  duration = 0.8,
  ease = "power3.out",
  splitType = "chars",
  from = { opacity: 0, y: 40 },
  to = { opacity: 1, y: 0 },
  threshold = 0.1,
  rootMargin = "-100px",
  textAlign = "center",
  onLetterAnimationComplete,
}) => {
  const ref = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined" || !ref.current || !text) return;

    const el = ref.current;
    
    const chars = text.split('').map((char, index) => {
      const span = document.createElement('span');
      span.textContent = char === ' ' ? '\u00A0' : char; 
      span.style.display = 'inline-block';
      span.style.willChange = 'transform, opacity';
      span.style.opacity = '0';
      span.style.transform = `translateY(${from.y}px)`;
      return span;
    });

    el.innerHTML = '';
    chars.forEach(char => el.appendChild(char));

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: el,
        start: "top 80%",
        toggleActions: "play none none none",
        once: true,
      },
      onComplete: () => {
        onLetterAnimationComplete?.();
      },
    });

    tl.to(chars, {
      opacity: to.opacity,
      y: to.y,
      duration,
      ease,
      stagger: delay / 1000,
      force3D: true,
    });

    return () => {
      tl.kill();
      gsap.killTweensOf(chars);
    };
  }, [text, delay, duration, ease, from, to, threshold, rootMargin, onLetterAnimationComplete]);

  return (
    <h1
      ref={ref}
      className={`split-parent ${className}`}
      style={{
        textAlign,
        overflow: "visible", // Cambiado de "hidden" a "visible"
        display: "inline-block",
        whiteSpace: "normal",
        wordWrap: "break-word",
        fontSize: "4vw",
        fontWeight: "bold",
        letterSpacing: ".06em",
        color: "#fff",
        marginBottom: 24,
        textShadow: "0 3px 20px #000a",
        paddingTop: "10px", // Padding superior para letras altas
        paddingBottom: "15px", // Padding inferior para letras con descenders como 'g', 'y', 'p'
        lineHeight: "1.2", // Altura de línea para mejor espaciado
      }}
    >
      {text}
    </h1>
  );
};

export default SplitText;
