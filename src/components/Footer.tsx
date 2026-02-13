import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">C</span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg leading-tight">CONFIANÇA</span>
                <span className="text-xs text-gray-400">Serviços Administrativos</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm">
              Há 10 anos oferecendo serviços administrativos com qualidade, confiança e profissionalismo.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Contato</h3>
            <div className="space-y-3">
              <a href="mailto:direcao@gpconfianca.com.br" className="flex items-center space-x-2 text-gray-400 hover:text-green-500 transition-colors">
                <Mail size={18} />
                <span className="text-sm">direcao@gpconfianca.com.br</span>
              </a>
              <a href="https://wa.me/5592992911914" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-gray-400 hover:text-green-500 transition-colors">
                <Phone size={18} />
                <span className="text-sm">(92) 99291-1914</span>
              </a>
              <div className="flex items-center space-x-2 text-gray-400">
                <MapPin size={18} />
                <span className="text-sm">Manaus, AM</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Siga-nos</h3>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Confiança Serviços Administrativos LTDA. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
