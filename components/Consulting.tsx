
import React from 'react';
import { UserCircleIcon, CheckCircleIcon } from './IconComponents';

const Consulting: React.FC = () => {
  return (
    <section id="consultoria" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-4xl mx-auto">
          <span className="text-brand-purple font-bold uppercase tracking-wider">Acompanhamento Premium</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-dark mt-2 mb-6">
            Consultoria FlowLab: Acelere 1 ano em 8 semanas.
          </h2>
          <p className="text-lg text-brand-mid mb-12">
            Para profissionais, founders e equipes que precisam de uma solução sob medida. Vamos diagnosticar seus gargalos e implementar um sistema de produtividade personalizado para seus objetivos.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="border border-brand-border rounded-xl p-8 bg-brand-light shadow-sm">
            <h3 className="text-2xl font-bold text-brand-dark mb-4">Consultoria Individual</h3>
            <p className="text-brand-mid mb-6">Um programa intensivo de 8 semanas, 1:1, para destravar seu máximo potencial.</p>
            <ul className="space-y-3">
              <li className="flex items-start"><CheckCircleIcon className="w-5 h-5 text-brand-purple mr-3 mt-1 flex-shrink-0" /><span>Diagnóstico profundo e plano de ação personalizado.</span></li>
              <li className="flex items-start"><CheckCircleIcon className="w-5 h-5 text-brand-purple mr-3 mt-1 flex-shrink-0" /><span>Sessões semanais de mentoria e implementação.</span></li>
              <li className="flex items-start"><CheckCircleIcon className="w-5 h-5 text-brand-purple mr-3 mt-1 flex-shrink-0" /><span>Suporte direto via WhatsApp para tirar dúvidas.</span></li>
              <li className="flex items-start"><CheckCircleIcon className="w-5 h-5 text-brand-purple mr-3 mt-1 flex-shrink-0" /><span>Acesso vitalício ao infoproduto FlowLab System.</span></li>
            </ul>
          </div>
          
          <div className="border border-brand-border rounded-xl p-8 bg-brand-light shadow-sm">
            <h3 className="text-2xl font-bold text-brand-dark mb-4">Consultoria para Equipes</h3>
            <p className="text-brand-mid mb-6">Alinhe seu time, otimize processos e crie uma cultura de alta performance.</p>
             <ul className="space-y-3">
              <li className="flex items-start"><CheckCircleIcon className="w-5 h-5 text-brand-purple mr-3 mt-1 flex-shrink-0" /><span>Workshop de imersão com toda a equipe.</span></li>
              <li className="flex items-start"><CheckCircleIcon className="w-5 h-5 text-brand-purple mr-3 mt-1 flex-shrink-0" /><span>Desenvolvimento de um sistema operacional de trabalho.</span></li>
              <li className="flex items-start"><CheckCircleIcon className="w-5 h-5 text-brand-purple mr-3 mt-1 flex-shrink-0" /><span>Sessões de acompanhamento com as lideranças.</span></li>
              <li className="flex items-start"><CheckCircleIcon className="w-5 h-5 text-brand-purple mr-3 mt-1 flex-shrink-0" /><span>Relatórios de progresso e otimização contínua.</span></li>
            </ul>
          </div>
        </div>

        <div className="text-center mt-12">
            <div className="inline-block bg-yellow-100 text-yellow-800 font-semibold py-2 px-4 rounded-full mb-8">
              Atenção: Vagas extremamente limitadas. Apenas 5 por trimestre.
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
               <a href="https://tally.so/r/mRN0Qj" target="_blank" rel="noopener noreferrer" className="group relative inline-block text-lg font-bold text-white py-4 px-8 rounded-xl shadow-2xl transition-all duration-300 ease-in-out overflow-hidden">
                <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-brand-purple via-brand-magenta to-brand-orange transition-all duration-300 group-hover:from-brand-orange group-hover:via-brand-magenta group-hover:to-brand-purple"></span>
                <span className="relative">Aplicar para Consultoria</span>
                <small className="block text-white/80 text-xs font-normal mt-1">Analisaremos sua aplicação</small>
              </a>
               <a href="https://wa.me/5521992094859" target="_blank" rel="noopener noreferrer" className="text-lg font-bold text-brand-dark py-4 px-8 rounded-xl bg-gray-200/80 hover:bg-gray-300/80 transition-colors duration-200 shadow-lg">
                Tirar dúvidas no WhatsApp
              </a>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Consulting;
