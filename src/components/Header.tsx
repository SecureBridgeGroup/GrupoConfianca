import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const menuItems = [
    { label: 'Início', path: '/' },
    { label: 'Sobre', path: '/#sobre' },
    { label: 'Serviços', path: '/#servicos' },
    { label: 'Galeria', path: '/#galeria' },
    { label: 'Contato', path: '/#contato' }
  ];

  const handleNavClick = (path: string) => {
    setIsMenuOpen(false);
    if (path.includes('#')) {
      const [route, anchor] = path.split('#');
      if (location.pathname !== route && route) {
        window.location.href = path;
      } else {
        const element = document.getElementById(anchor);
        element?.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">C</span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-gray-800 text-lg leading-tight">CONFIANÇA</span>
              <span className="text-xs text-gray-600">Serviços Administrativos</span>
            </div>
          </Link>

          <nav className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <button
                key={item.path}
                onClick={() => handleNavClick(item.path)}
                className={`text-gray-700 hover:text-green-600 font-medium transition-colors ${
                  isActive(item.path) ? 'text-green-600' : ''
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <nav className="flex flex-col space-y-3">
              {menuItems.map((item) => (
                <button
                  key={item.path}
                  onClick={() => handleNavClick(item.path)}
                  className={`text-left text-gray-700 hover:text-green-600 font-medium py-2 ${
                    isActive(item.path) ? 'text-green-600' : ''
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
