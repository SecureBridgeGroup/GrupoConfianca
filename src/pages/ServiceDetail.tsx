import { useParams, Link, Navigate } from 'react-router-dom';
import { services } from '../data/services';
import { ShieldCheck, Sparkles, Trees, Wrench, CheckCircle, ArrowLeft, Phone } from 'lucide-react';

const iconMap = {
  ShieldCheck,
  Sparkles,
  Trees,
  Wrench
};

export default function ServiceDetail() {
  const { serviceId } = useParams();
  const service = services.find(s => s.id === serviceId);

  if (!service) {
    return <Navigate to="/" replace />;
  }

  const Icon = iconMap[service.icon as keyof typeof iconMap];

  const scrollToContact = () => {
    window.location.href = '/#contato';
  };

  return (
    <div className="pt-20">
      <section className="bg-gradient-to-br from-green-600 to-green-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/" className="inline-flex items-center text-green-100 hover:text-white mb-6">
            <ArrowLeft size={20} className="mr-2" />
            Voltar para home
          </Link>
          <div className="flex items-center space-x-4 mb-6">
            <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center">
              <Icon size={36} />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold">{service.title}</h1>
          </div>
          <p className="text-xl text-green-50 max-w-3xl">{service.shortDescription}</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Sobre o Serviço</h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-8">
                {service.fullDescription}
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">O que oferecemos</h3>
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                {service.features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Benefícios</h3>
              <div className="space-y-3">
                {service.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3 bg-green-50 p-4 rounded-lg">
                    <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-700 font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="bg-green-50 rounded-2xl p-8 sticky top-24">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Solicite um Orçamento
                </h3>
                <p className="text-gray-700 mb-6">
                  Entre em contato conosco e receba um orçamento personalizado para suas necessidades.
                </p>
                <button
                  onClick={scrollToContact}
                  className="w-full bg-green-600 text-white py-4 rounded-lg font-semibold hover:bg-green-700 transition-colors mb-4"
                >
                  Solicitar Orçamento
                </button>
                <a
                  href="https://wa.me/5592992911914"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-white text-green-600 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-colors border-2 border-green-600 flex items-center justify-center space-x-2"
                >
                  <Phone size={20} />
                  <span>WhatsApp</span>
                </a>

                <div className="mt-8 pt-8 border-t border-green-200">
                  <h4 className="font-bold text-gray-900 mb-3">Por que escolher a Confiança?</h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="text-green-600" size={16} />
                      <span>10 anos de experiência</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="text-green-600" size={16} />
                      <span>Equipe própria qualificada</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="text-green-600" size={16} />
                      <span>Sede própria</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="text-green-600" size={16} />
                      <span>Atendimento 24/7</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Outros Serviços
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {services
              .filter(s => s.id !== service.id)
              .map(otherService => {
                const OtherIcon = iconMap[otherService.icon as keyof typeof iconMap];
                return (
                  <Link
                    key={otherService.id}
                    to={`/servicos/${otherService.id}`}
                    className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all hover:-translate-y-1"
                  >
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                      <OtherIcon className="text-green-600" size={24} />
                    </div>
                    <h3 className="font-bold text-lg text-gray-900 mb-2">{otherService.title}</h3>
                    <p className="text-gray-600 text-sm">{otherService.shortDescription}</p>
                  </Link>
                );
              })}
          </div>
        </div>
      </section>
    </div>
  );
}
