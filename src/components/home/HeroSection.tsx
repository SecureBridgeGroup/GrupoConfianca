import { CheckCircle } from 'lucide-react';

export default function HeroSection() {
  const scrollToId = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="relative bg-gradient-to-br from-green-600 to-green-800 text-white pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-left">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Há 10 anos oferecendo serviços com <span className="text-green-200">confiança</span> e <span className="text-green-200">qualidade</span>
            </h1>
            <p className="text-xl mb-8 text-green-50">
              Soluções completas em serviços administrativos e terceirização com equipe própria e sede estabelecida em Manaus.
            </p>
            <div className="space-y-3 mb-8">
              {['10 anos de experiência', 'Sede própria e estruturada', 'Equipe de profissionais qualificados'].map((text, i) => (
                <div key={i} className="flex items-center space-x-3">
                  <CheckCircle className="text-green-300" size={24} />
                  <span className="text-lg">{text}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => scrollToId('contato')}
                className="bg-white text-green-700 px-8 py-4 rounded-lg font-semibold hover:bg-green-50 transition-all transform hover:scale-105 active:scale-95 shadow-lg"
              >
                Solicitar Orçamento
              </button>
              <button
                onClick={() => scrollToId('servicos')}
                className="bg-green-700 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-800 transition-all border-2 border-white hover:border-green-200"
              >
                Conheça nossos serviços
              </button>
            </div>
          </div>
          <div className="hidden md:block animate-fade-in-right">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 shadow-2xl">
              <div className="space-y-6">
                {[
                  { label: 'Clientes Atendidos', value: '100+' },
                  { label: 'de Experiência', value: '10 Anos' },
                  { label: 'Atendimento', value: '24/7' }
                ].map((stat, i) => (
                  <div key={i} className="bg-white/20 p-6 rounded-xl hover:bg-white/30 transition-colors">
                    <h3 className="font-bold text-3xl mb-1">{stat.value}</h3>
                    <p className="text-green-100">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}