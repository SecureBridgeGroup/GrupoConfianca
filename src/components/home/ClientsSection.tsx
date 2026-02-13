import { Building2 } from 'lucide-react';

export default function ClientsSection() {
  const clients = [
    'Condomínio Residencial Parque das Flores',
    'Edifício Comercial Centro',
    'Shopping Popular da Cidade',
    'Hospital Regional Norte',
    'Universidade Amazonense',
    'Indústria Química do Norte',
    'Condomínio Residencial Jardins',
    'Hotel Executive Plaza',
    'Clínica Médica Saúde Total',
    'Edifício Empresarial Tower',
    'Centro Comercial Manaus',
    'Condomínio Solar das Palmeiras'
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Clientes que Confiam em Nosso Trabalho
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Mais de 100 clientes satisfeitos em 10 anos de atuação
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {clients.map((client, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow flex items-center space-x-4"
            >
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Building2 className="text-green-600" size={24} />
              </div>
              <div>
                <p className="font-semibold text-gray-900">{client}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-block bg-green-50 rounded-2xl p-8">
            <p className="text-gray-700 text-lg mb-4">
              <span className="font-bold text-green-600 text-3xl">100+</span>
            </p>
            <p className="text-gray-600 font-semibold">Clientes Atendidos</p>
          </div>
        </div>
      </div>
    </section>
  );
}
