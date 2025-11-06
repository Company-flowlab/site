
import React from 'react';
import { CheckCircleIcon, ShieldCheckIcon } from './IconComponents';

const Pricing: React.FC = () => {
  const plans = [
    {
      name: "Study Flow Template",
      price: "R$ 59",
      description: "O sistema de estudos completo para você usar no Notion.",
      features: [
        "Template completo e vitalício",
        "Controle de matérias e aulas",
        "Sistema de revisão espaçada",
        "Planejador semanal e mensal",
        "Guia de início rápido em vídeo"
      ],
      cta: "Comprar Template",
      popular: false,
      link: "https://tally.so/r/mRN0Qj"
    },
    {
      name: "Template + Consultoria",
      price: "R$ 159",
      description: "O template + 1h de consultoria para personalizar tudo.",
      features: [
        "Tudo do plano Template",
        "1h de consultoria individual via Google Meet",
        "Configuração guiada e personalização",
        "Tire todas as suas dúvidas de Notion",
        "Dicas de automação e produtividade"
      ],
      cta: "Comprar com Consultoria",
      popular: true,
      link: "https://tally.so/r/mRN0Qj"
    },
  ];

  return (
    <section id="planos" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-dark mb-4">
            Um investimento na sua aprovação.
          </h2>
          <p className="text-lg text-brand-mid mb-16">
            Escolha o plano que melhor se adapta ao seu momento e comece a estudar de forma mais inteligente hoje mesmo.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto items-stretch">
          {plans.map((plan, index) => (
            <div key={index} className={`border rounded-2xl p-8 flex flex-col relative ${plan.popular ? 'border-brand-purple border-2' : 'border-brand-border'}`}>
              {plan.popular && (
                <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 bg-brand-purple text-white text-sm font-bold uppercase tracking-wider py-1 px-4 rounded-full">
                  Recomendado
                </div>
              )}
              
              <h3 className="text-2xl font-bold text-brand-dark">{plan.name}</h3>
              <p className="text-brand-mid my-4 flex-grow">{plan.description}</p>
              
              <div className="text-4xl font-extrabold text-brand-dark my-4">
                {plan.price}
                <span className="text-lg font-medium text-brand-mid"> / pagamento único</span>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircleIcon className="w-5 h-5 text-brand-purple mr-3 mt-1 flex-shrink-0" />
                    <span dangerouslySetInnerHTML={{ __html: feature }}></span>
                  </li>
                ))}
              </ul>
              
              <a href={plan.link} target="_blank" rel="noopener noreferrer" className={`w-full text-center text-lg font-bold py-4 px-8 rounded-xl shadow-lg transition-transform duration-200 hover:scale-105 mt-auto ${plan.popular ? 'bg-gradient-to-r from-brand-purple to-brand-blue text-white' : 'bg-gray-200 text-brand-dark'}`}>
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
        
        <div className="mt-16 max-w-2xl mx-auto bg-brand-light border border-brand-border p-6 rounded-2xl flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
          <ShieldCheckIcon className="w-16 h-16 text-brand-purple flex-shrink-0" />
          <div>
            <h4 className="font-bold text-lg text-brand-dark">Garantia Incondicional de 7 Dias</h4>
            <p className="text-brand-mid mt-1">
              Teste o Study Flow Template sem riscos. Se em 7 dias você achar que não é para você, devolvemos 100% do seu investimento. Sem perguntas, sem burocracia.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;