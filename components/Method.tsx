
import React from 'react';
import { TargetIcon, CogIcon, ZapIcon, CalendarIcon } from './IconComponents';

const Method: React.FC = () => {
  const methodPillars = [
    {
      icon: <TargetIcon className="w-12 h-12 mb-4" />,
      title: "Foco Intencional",
      description: "Aprenda a criar um ambiente de estudo livre de distrações e use técnicas como Pomodoro para absorver mais conteúdo em menos tempo."
    },
    {
      icon: <CogIcon className="w-12 h-12 mb-4" />,
      title: "Sistemas Inteligentes",
      description: "Construa um painel de controle no Notion para gerenciar matérias, provas e revisões. Tenha tudo organizado de forma visual e intuitiva."
    },
    {
      icon: <ZapIcon className="w-12 h-12 mb-4" />,
      title: "Automação Estratégica",
      description: "Use as automações do Notion para criar lembretes de revisão espaçada e alertar sobre prazos. Menos trabalho manual, mais tempo para estudar."
    },
    {
      icon: <CalendarIcon className="w-12 h-12 mb-4" />,
      title: "Revisão Semanal Ágil",
      description: "Implemente um ritual de 15 minutos para avaliar seu progresso, identificar dificuldades e planejar a próxima semana de estudos com base em dados."
    }
  ];

  return (
    <section id="metodo" className="py-20 bg-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-brand-dark mb-4">
          Um Sistema Completo para sua Aprovação
        </h2>
        <p className="text-lg text-brand-mid max-w-3xl mx-auto mb-16">
          Integramos automações que otimizam tempo e foco, trazendo produtividade real: menos excesso, mais resultado. Nossos sistemas são pensados para manter consistência e criar hábitos sustentáveis.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {methodPillars.map((pillar, index) => (
            <div key={index} className="bg-brand-light p-8 rounded-xl shadow-lg border border-brand-border hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
              <div className="flex justify-center text-brand-purple">{pillar.icon}</div>
              <h3 className="text-xl font-bold text-brand-dark mt-4 mb-2">{pillar.title}</h3>
              <p className="text-brand-mid">{pillar.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Method;