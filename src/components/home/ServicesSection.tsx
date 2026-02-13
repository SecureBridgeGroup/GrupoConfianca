import { ShieldCheck, Sparkles, Trees, Wrench, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { services } from '../../data/services';

const iconMap = {
  ShieldCheck,
  Sparkles,
  Trees,
  Wrench
};

export default function ServicesSection() {
  return (
    <section id="servicos" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Nossos Serviços
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Soluções completas para atender todas as necessidades do seu condomínio ou empresa
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap];
            return (
              <div
                key={service.id}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all hover:-translate-y-1"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 bg-green-100 text-green-600 rounded-lg mb-4">
                  <Icon size={28} />
                </div>
                <h3 className="font-bold text-xl text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {service.shortDescription}
                </p>
                <Link
                  to={`/servicos/${service.id}`}
                  className="inline-flex items-center text-green-600 hover:text-green-700 font-semibold text-sm"
                >
                  Saiba mais
                  <ArrowRight size={16} className="ml-1" />
                </Link>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <button
            onClick={() => {
              const element = document.getElementById('contato');
              element?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition-colors inline-flex items-center"
          >
            Solicite um Orçamento Gratuito
            <ArrowRight size={20} className="ml-2" />
          </button>
        </div>
      </div>
    </section>
  );
}
