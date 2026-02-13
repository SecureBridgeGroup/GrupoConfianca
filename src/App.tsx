import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, useLayoutEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import Home from './pages/Home';
import ServiceDetail from './pages/ServiceDetail';

// Componente de correção de scroll robusto
function ScrollToTop() {
  const { pathname, hash } = useLocation();

  // useLayoutEffect executa ANTES da pintura da tela, sendo mais eficaz que o useEffect comum
  useLayoutEffect(() => {
    if (!hash) {
      // Força o scroll para o topo absoluto (x:0, y:0)
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'instant' // 'instant' evita que a tela "corra" visualmente, ela já aparece no topo
      });
      
      // Reforço para navegadores que tentam lembrar a posição (delay técnico)
      const timeoutId = setTimeout(() => {
        window.scrollTo(0, 0);
      }, 10);
      
      return () => clearTimeout(timeoutId);
    } else {
      // Se houver um ID na URL (ex: #contato), espera um pouco o componente montar e rola
      const timeoutId = setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
      return () => clearTimeout(timeoutId);
    }
  }, [pathname, hash]);

  return null;
}

function App() {
  // Nota: Se você estiver usando GitHub Pages ou uma subpasta, 
  // adicione basename="/GrupoConfianca" dentro do <Router>
  return (
    <Router basename="/GrupoConfianca">
      <ScrollToTop />
      
      <div className="min-h-screen bg-white flex flex-col">
        <Header />
        
        {/* Adicionado flex-grow para garantir que o rodapé fique sempre embaixo 
            e o conteúdo comece corretamente no topo */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/servicos/:serviceId" element={<ServiceDetail />} />
            {/* Rota de fallback para evitar páginas em branco */}
            <Route path="*" element={<Home />} />
          </Routes>
        </main>

        <Footer />
        <WhatsAppButton />
      </div>
    </Router>
  );
}

export default App;