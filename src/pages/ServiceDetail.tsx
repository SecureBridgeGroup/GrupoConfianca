import { useParams, Link, Navigate } from 'react-router-dom';
import { services } from '../data/services';
import { ShieldCheck, Sparkles, Trees, Wrench, CheckCircle, ArrowLeft, Phone } from 'lucide-react';

const iconMap = { ShieldCheck, Sparkles, Trees, Wrench };

export default function ServiceDetail() {
  const { serviceId } = useParams();
  const service = services.find(s => s.id === serviceId);

  if (!service) return <Navigate to="/" replace />;

  const Icon = iconMap[service.icon as keyof typeof iconMap];

  // Melhoria: Garante que o scroll ocorra após a navegação
  const handleRequestQuote = () => {
    window.location.href = '/#contato';
  };

  const whatsappMessage = encodeURIComponent(`Olá! Gostaria de um orçamento para o serviço de: ${service.title}`);

  return (
    <div className="pt-20">
      <section className="bg-gradient-to-br from-green-600 to-green-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/" className="inline-flex items-center text-green-100 hover:text-white mb-6 transition-colors">
            <ArrowLeft size={20} className="mr-2" />
            Voltar para home
          </Link>
          <div className="flex items-center space-x-4 mb-6">
            <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
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
              <p className="text-gray-700 text-lg leading-relaxed mb-8">{service.fullDescription}</p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">O que oferecemos</h3>
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                {service.features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3 p-2 hover:bg-gray-50 rounded-lg transition-colors">
                    <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Benefícios</h3>
              <div className="grid gap-3">
                {service.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3 bg-green-50 p-4 rounded-lg border border-green-100">
                    <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-700 font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <aside>
              <div className="bg-white rounded-2xl p-8 sticky top-28 shadow-xl border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Solicite um Orçamento</h3>
                <p className="text-gray-600 mb-6">Resposta em até 24h para condomínios e empresas de Manaus.</p>
                <button
                  onClick={handleRequestQuote}
                  className="w-full bg-green-600 text-white py-4 rounded-lg font-semibold hover:bg-green-700 transition-all shadow-md active:scale-95 mb-4"
                >
                  Solicitar Orçamento
                </button>
                <a
                  href={`https://wa.me/5592992911914?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-white text-green-600 py-4 rounded-lg font-semibold hover:bg-green-50 transition-all border-2 border-green-600 flex items-center justify-center space-x-2"
                >
                  <Phone size={20} />
                  <span>Chamar no WhatsApp</span>
                </a>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
}