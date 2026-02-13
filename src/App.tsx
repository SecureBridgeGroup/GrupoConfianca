import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { useLayoutEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import Home from './pages/Home';
import ServiceDetail from './pages/ServiceDetail';
import ScrollToTop from './components/ScrollToTop';

export default function App() {
  return (
    /* O basename é essencial para o GitHub Pages identificar a pasta do projeto */
    <Router basename="/GrupoConfianca">
      <ScrollToTop />
      <div className="min-h-screen bg-white flex flex-col">
        <Header />
        
        {/* main com flex-grow garante que o conteúdo empurre o footer para baixo */}
        <main className="flex-grow pt-20"> 
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/servicos/:serviceId" element={<ServiceDetail />} />
            {/* Se o usuário cair em qualquer rota desconhecida, volta para a Home */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        <Footer />
        <WhatsAppButton />
      </div>
    </Router>
  );
}