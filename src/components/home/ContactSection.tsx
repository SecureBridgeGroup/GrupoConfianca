import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useState } from 'react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', service: '', message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Proteção contra caracteres especiais no link do WhatsApp
    const messageText = `Olá! Meu nome é ${formData.name}.
*Serviço:* ${formData.service}
*Email:* ${formData.email}
*Telefone:* ${formData.phone}
*Mensagem:* ${formData.message}`;

    const whatsappUrl = `https://wa.me/5592992911914?text=${encodeURIComponent(messageText)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contato" className="py-20 bg-gray-50 scroll-mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Entre em Contato</h2>
          <p className="text-xl text-gray-600">Solicite um orçamento gratuito para sua empresa em Manaus</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Solicite seu Orçamento</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Grid para Nome e Email */}
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">Nome Completo *</label>
                  <input type="text" name="name" required value={formData.name} onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">Telefone *</label>
                  <input type="tel" name="phone" required value={formData.phone} onChange={handleChange} placeholder="(92) 99999-9999"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700">E-mail *</label>
                <input type="email" name="email" required value={formData.email} onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none" />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700">Serviço de Interesse *</label>
                <select name="service" required value={formData.service} onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none">
                  <option value="">Selecione um serviço</option>
                  <option value="Agente de Portaria">Agente de Portaria</option>
                  <option value="Limpeza e Conservação">Limpeza e Conservação</option>
                  <option value="Jardinagem e Paisagismo">Jardinagem e Paisagismo</option>
                  <option value="Manutenção Predial">Manutenção Predial</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700">Mensagem</label>
                <textarea name="message" rows={4} value={formData.message} onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none outline-none" />
              </div>

              <button type="submit" className="w-full bg-green-600 text-white py-4 rounded-lg font-semibold hover:bg-green-700 transition-all flex items-center justify-center space-x-2 shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
                <span>Enviar para WhatsApp</span>
                <Send size={20} />
              </button>
            </form>
          </div>

          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-gray-900">Informações de Contato</h3>
            <div className="grid gap-6">
              {[
                { icon: Mail, title: 'E-mail', content: 'direcao@gpconfianca.com.br', link: 'mailto:direcao@gpconfianca.com.br' },
                { icon: Phone, title: 'Telefone / WhatsApp', content: '(92) 99291-1914', link: 'https://wa.me/5592992911914' },
                { icon: MapPin, title: 'Localização', content: 'Manaus, Amazonas', link: '#' }
              ].map((item, i) => (
                <div key={i} className="flex items-start space-x-4 group">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-green-600 group-hover:text-white transition-colors">
                    <item.icon size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{item.title}</h4>
                    <a href={item.link} className="text-gray-600 hover:text-green-600 transition-colors">{item.content}</a>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="bg-green-600 text-white rounded-2xl p-8 shadow-xl">
              <h4 className="font-bold text-xl mb-4">Atendimento Especializado</h4>
              <div className="space-y-3 opacity-90">
                <p><span className="font-bold">Segunda a Sexta:</span> 8h às 18h</p>
                <p><span className="font-bold">Sábado:</span> 8h às 12h</p>
                <div className="pt-2 border-t border-white/20">
                  <p className="flex items-center"><span className="w-2 h-2 bg-red-400 rounded-full animate-pulse mr-2"></span> <span className="font-bold">Emergências:</span> 24 horas</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}