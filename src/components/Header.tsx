import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
      if (location.pathname !== route) {
        navigate(path);
      } else {
        document.getElementById(anchor)?.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate(path);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg h-16' : 'bg-white h-20'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex justify-between items-center h-full">
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center group-hover:rotate-6 transition-transform">
              <span className="text-white font-bold text-xl">C</span>
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-gray-900 text-lg leading-tight tracking-tight">CONFIANÇA</span>
              <span className="text-[10px] text-green-700 font-bold uppercase tracking-widest">Serviços Administrativos</span>
            </div>
          </Link>

          <nav className="hidden md:flex space-x-6">
            {menuItems.map((item) => (
              <button
                key={item.path}
                onClick={() => handleNavClick(item.path)}
                className="text-gray-700 hover:text-green-600 font-semibold text-sm transition-colors relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-green-600 hover:after:w-full after:transition-all"
              >
                {item.label}
              </button>
            ))}
          </nav>

          <button className="md:hidden p-2 text-gray-700" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden absolute left-0 w-full bg-white border-t transition-all duration-300 ${isMenuOpen ? 'top-full opacity-100 visible' : 'top-[120%] opacity-0 invisible'}`}>
          <nav className="flex flex-col p-4 space-y-4 shadow-xl">
            {menuItems.map((item) => (
              <button
                key={item.path}
                onClick={() => handleNavClick(item.path)}
                className="text-left text-gray-800 hover:text-green-600 font-bold py-2 border-b border-gray-50"
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}