export default function GallerySection() {
  const images = [
    {
      url: 'https://images.pexels.com/photos/2098427/pexels-photo-2098427.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Agente de Portaria',
      category: 'Segurança'
    },
    {
      url: 'https://images.pexels.com/photos/4107120/pexels-photo-4107120.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Limpeza Profissional',
      category: 'Limpeza'
    },
    {
      url: 'https://images.pexels.com/photos/2397651/pexels-photo-2397651.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Jardinagem',
      category: 'Paisagismo'
    },
    {
      url: 'https://images.pexels.com/photos/5691607/pexels-photo-5691607.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Conservação de Áreas',
      category: 'Conservação'
    },
    {
      url: 'https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Manutenção Predial',
      category: 'Manutenção'
    },
    {
      url: 'https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Limpeza de Vidros',
      category: 'Limpeza'
    }
  ];

  return (
    <section id="galeria" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Galeria de Serviços
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Confira a qualidade do nosso trabalho
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all"
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <span className="text-xs font-semibold bg-green-600 px-2 py-1 rounded">{image.category}</span>
                  <h3 className="font-bold text-lg mt-2">{image.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
