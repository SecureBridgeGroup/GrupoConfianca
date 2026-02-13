import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // Se não houver um "hash" (ex: #contato), volta para o topo
    if (!hash) {
      window.scrollTo(0, 0);
    } else {
      // Se houver hash, tenta rolar até o elemento
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [pathname, hash]);

  return null;
}