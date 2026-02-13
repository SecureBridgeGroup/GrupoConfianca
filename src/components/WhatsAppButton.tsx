import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  const whatsappNumber = '5592992911914';
  const message = encodeURIComponent('Olá! Vi o site do Grupo Confiança e gostaria de solicitar um orçamento.');

  const handleClick = () => {
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Efeito de Ondulação */}
      <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-20"></span>
      
      <button
        onClick={handleClick}
        className="relative bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-2xl transition-all hover:scale-110 flex items-center justify-center group"
        aria-label="Contato via WhatsApp"
      >
        <MessageCircle size={32} />
        <span className="absolute right-full mr-4 bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all pointer-events-none shadow-xl">
          Fale Conosco agora!
        </span>
      </button>
    </div>
  );
}