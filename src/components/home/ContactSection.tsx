import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useState } from 'react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappMessage = `Olá! Meu nome é ${formData.name}.%0A%0AServiço de interesse: ${formData.service}%0AEmail: ${formData.email}%0ATelefone: ${formData.phone}%0A%0AMensagem: ${formData.message}`;
    window.open(`https://wa.me/5592992911914?text=${whatsappMessage}`, '_blank');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contato" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Entre em Contato
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Solicite um orçamento gratuito ou tire suas dúvidas
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Solicite seu Orçamento
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                  Nome Completo *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    E-mail *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                    Telefone *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-semibold text-gray-700 mb-2">
                  Serviço de Interesse *
                </label>
                <select
                  id="service"
                  name="service"
                  required
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                >
                  <option value="">Selecione um serviço</option>
                  <option value="Agente de Portaria">Agente de Portaria</option>
                  <option value="Limpeza e Conservação">Limpeza e Conservação</option>
                  <option value="Jardinagem e Paisagismo">Jardinagem e Paisagismo</option>
                  <option value="Manutenção Predial">Manutenção Predial</option>
                  <option value="Múltiplos Serviços">Múltiplos Serviços</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none"
                  placeholder="Conte-nos mais sobre suas necessidades..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-green-600 text-white py-4 rounded-lg font-semibold hover:bg-green-700 transition-colors flex items-center justify-center space-x-2"
              >
                <span>Enviar Solicitação</span>
                <Send size={20} />
              </button>
            </form>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Informações de Contato
            </h3>
            <div className="space-y-6 mb-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="text-green-600" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">E-mail</h4>
                  <a href="mailto:direcao@gpconfianca.com.br" className="text-gray-600 hover:text-green-600">
                    direcao@gpconfianca.com.br
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="text-green-600" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Telefone / WhatsApp</h4>
                  <a href="https://wa.me/5592992911914" className="text-gray-600 hover:text-green-600">
                    (92) 99291-1914
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-green-600" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Localização</h4>
                  <p className="text-gray-600">Manaus, Amazonas</p>
                </div>
              </div>
            </div>

            <div className="bg-green-50 rounded-2xl p-8">
              <h4 className="font-bold text-xl text-gray-900 mb-4">Horário de Atendimento</h4>
              <div className="space-y-2 text-gray-700">
                <p><span className="font-semibold">Segunda a Sexta:</span> 8h às 18h</p>
                <p><span className="font-semibold">Sábado:</span> 8h às 12h</p>
                <p><span className="font-semibold">Emergências:</span> 24 horas</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
