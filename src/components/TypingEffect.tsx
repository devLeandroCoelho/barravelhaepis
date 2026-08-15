'use client';

import { useEffect, useRef } from 'react';

const phrases = [
  'Qualidade e segurança para sua equipe',
  'Proteção completa para sua empresa',
  'Equipamentos certificados e confiáveis',
  'Soluções em EPI para cada necessidade',
];

export default function TypingEffect() {
  const elRef = useRef<HTMLSpanElement>(null);
  const phraseIndex = useRef(0);
  const charIndex = useRef(0);
  const isDeleting = useRef(false);
  const isPaused = useRef(false);

  useEffect(() => {
    const el = elRef.current;
    if (!el) return;

    let timeout: NodeJS.Timeout;

    function type() {
      const currentPhrase = phrases[phraseIndex.current];

      if (isPaused.current) {
        timeout = setTimeout(type, 50);
        return;
      }

      if (isDeleting.current) {
        charIndex.current--;
        if (el) el.textContent = currentPhrase.substring(0, charIndex.current);
      } else {
        charIndex.current++;
        if (el) el.textContent = currentPhrase.substring(0, charIndex.current);
      }

      let speed = isDeleting.current ? 40 : 80;

      if (!isDeleting.current && charIndex.current === currentPhrase.length) {
        isPaused.current = true;
        timeout = setTimeout(() => {
          isPaused.current = false;
          isDeleting.current = true;
          type();
        }, 2500);
        return;
      }

      if (isDeleting.current && charIndex.current === 0) {
        isDeleting.current = false;
        phraseIndex.current = (phraseIndex.current + 1) % phrases.length;
        speed = 500;
      }

      timeout = setTimeout(type, speed);
    }

    timeout = setTimeout(type, 2000);

    return () => clearTimeout(timeout);
  }, []);

  return <span ref={elRef} aria-live="polite">qualidade e segurança para sua equipe</span>;
}
