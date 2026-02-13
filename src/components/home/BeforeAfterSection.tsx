export default function BeforeAfterSection() {
  const comparisons = [
    {
      before: 'https://images.pexels.com/photos/4099354/pexels-photo-4099354.jpeg?auto=compress&cs=tinysrgb&w=800',
      after: 'https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Limpeza e Conservação',
      description: 'Transformação completa do ambiente'
    },
    {
      before: 'https://images.pexels.com/photos/1595104/pexels-photo-1595104.jpeg?auto=compress&cs=tinysrgb&w=800',
      after: 'https://images.pexels.com/photos/2397651/pexels-photo-2397651.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Jardinagem e Paisagismo',
      description: 'Revitalização de áreas verdes'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Antes e Depois
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Veja a transformação que nossos serviços proporcionam
          </p>
        </div>

        <div className="space-y-12">
          {comparisons.map((comparison, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="grid md:grid-cols-2">
                <div className="relative">
                  <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold z-10">
                    Antes
                  </div>
                  <img
                    src={comparison.before}
                    alt="Antes"
                    className="w-full h-64 md:h-80 object-cover"
                  />
                </div>
                <div className="relative">
                  <div className="absolute top-4 left-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold z-10">
                    Depois
                  </div>
                  <img
                    src={comparison.after}
                    alt="Depois"
                    className="w-full h-64 md:h-80 object-cover"
                  />
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-xl text-gray-900 mb-2">{comparison.title}</h3>
                <p className="text-gray-600">{comparison.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
