import { CheckCircle } from 'lucide-react';

export default function HeroSection() {
  const scrollToContact = () => {
    const element = document.getElementById('contato');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative bg-gradient-to-br from-green-600 to-green-800 text-white pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Há 10 anos oferecendo serviços com <span className="text-green-200">confiança</span> e <span className="text-green-200">qualidade</span>
            </h1>
            <p className="text-xl mb-8 text-green-50">
              Soluções completas em serviços administrativos e terceirização com equipe própria e sede estabelecida.
            </p>
            <div className="space-y-3 mb-8">
              <div className="flex items-center space-x-3">
                <CheckCircle className="text-green-300" size={24} />
                <span className="text-lg">10 anos de experiência</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="text-green-300" size={24} />
                <span className="text-lg">Sede própria e estruturada</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="text-green-300" size={24} />
                <span className="text-lg">Equipe de profissionais qualificados</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={scrollToContact}
                className="bg-white text-green-700 px-8 py-4 rounded-lg font-semibold hover:bg-green-50 transition-colors"
              >
                Solicitar Orçamento
              </button>
              <button
                onClick={() => {
                  const element = document.getElementById('servicos');
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-green-700 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-800 transition-colors border-2 border-white"
              >
                Conheça nossos serviços
              </button>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="space-y-6">
                <div className="bg-white/20 p-6 rounded-xl">
                  <h3 className="font-bold text-2xl mb-2">100+</h3>
                  <p className="text-green-100">Clientes Atendidos</p>
                </div>
                <div className="bg-white/20 p-6 rounded-xl">
                  <h3 className="font-bold text-2xl mb-2">10 Anos</h3>
                  <p className="text-green-100">de Experiência</p>
                </div>
                <div className="bg-white/20 p-6 rounded-xl">
                  <h3 className="font-bold text-2xl mb-2">24/7</h3>
                  <p className="text-green-100">Atendimento</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
