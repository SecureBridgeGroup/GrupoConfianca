import { Building2, Users, Award, Target } from 'lucide-react';

export default function AboutSection() {
  const features = [
    {
      icon: Building2,
      title: 'Sede Própria',
      description: 'Estrutura física estabelecida para melhor atender nossos clientes'
    },
    {
      icon: Users,
      title: 'Equipe Própria',
      description: 'Profissionais qualificados e diretamente contratados pela empresa'
    },
    {
      icon: Award,
      title: '10 Anos no Mercado',
      description: 'Década de experiência oferecendo serviços de qualidade'
    },
    {
      icon: Target,
      title: 'Comprometimento',
      description: 'Foco total na satisfação e segurança dos nossos clientes'
    }
  ];

  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Sobre a Confiança
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Empresa consolidada no mercado de serviços administrativos e terceirização
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Uma década de excelência em serviços
            </h3>
            <p className="text-gray-700 mb-4 leading-relaxed">
              A <strong>CONFIANÇA SERVIÇOS ADMINISTRATIVOS LTDA</strong> atua há 10 anos no mercado oferecendo soluções completas em terceirização de serviços. Nossa trajetória é marcada pelo compromisso com a qualidade, profissionalismo e, principalmente, pela confiança que nossos clientes depositam em nosso trabalho.
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Com sede própria e equipe de profissionais qualificados, garantimos a entrega de serviços com padrão de excelência. Nossa mão de obra é própria, devidamente treinada e capacitada para atender às mais diversas necessidades de condomínios, empresas e estabelecimentos comerciais.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Investimos continuamente no desenvolvimento de nossa equipe e em tecnologias que otimizam nossos processos, garantindo resultados superiores e duradouros para todos os nossos clientes.
            </p>
          </div>
          <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl">
            <img
              src="https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Equipe profissional"
              className="rounded-xl shadow-lg w-full h-64 object-cover"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-600 text-white rounded-full mb-4">
                <feature.icon size={32} />
              </div>
              <h3 className="font-bold text-lg text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
