import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  const whatsappNumber = '5592992911914';
  const message = 'Olá! Gostaria de solicitar um orçamento.';

  const handleClick = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg transition-all hover:scale-110 z-50 flex items-center justify-center group"
      aria-label="Contato via WhatsApp"
    >
      <MessageCircle size={28} />
      <span className="absolute right-full mr-3 bg-gray-900 text-white px-3 py-1 rounded text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
        Fale conosco
      </span>
    </button>
  );
}
