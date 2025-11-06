import React from 'react';
import { BookOpenIcon, TemplateIcon, CalendarIcon } from './IconComponents';

const Infoproduct: React.FC = () => {
  return (
    <section id="infoproduto" className="py-20 bg-brand-light">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          
          {/* Conteúdo */}
          <div>
            <span className="text-brand-purple font-bold uppercase tracking-wider">Nosso Template</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-brand-dark mt-2 mb-6">
              Acesse o sistema passo a passo para dominar sua rotina de estudos.
            </h2>
            <p className="text-lg text-brand-mid mb-8">
              O Study Flow é a solução completa para organizar estudos, tarefas e rotina em uma única plataforma inteligente. Ele transforma seu Notion em uma máquina de produtividade para a aprovação.
            </p>

            <div className="space-y-6 mb-10 inline-block text-left">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-brand-purple/10 text-brand-purple rounded-lg flex items-center justify-center"><BookOpenIcon className="w-6 h-6"/></div>
                <div>
                  <h4 className="font-bold text-brand-dark">Controle de Matérias e Aulas</h4>
                  <p className="text-brand-mid">Organize seu progresso por disciplina, anexe materiais e nunca mais se perca no conteúdo.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-brand-purple/10 text-brand-purple rounded-lg flex items-center justify-center"><TemplateIcon className="w-6 h-6"/></div>
                <div>
                  <h4 className="font-bold text-brand-dark">Sistema de Revisão Inteligente</h4>
                  <p className="text-brand-mid">Gerencie suas revisões com um sistema de repetição espaçada integrado.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-brand-purple/10 text-brand-purple rounded-lg flex items-center justify-center"><CalendarIcon className="w-6 h-6"/></div>
                <div>
                  <h4 className="font-bold text-brand-dark">Cronograma e Planejamento</h4>
                  <p className="text-brand-mid">Visualize suas tarefas, provas e compromissos para planejar sua semana com eficiência.</p>
                </div>
              </div>
            </div>

            <div>
              <a href="https://tally.so/r/mRN0Qj" target="_blank" rel="noopener noreferrer" className="group relative inline-block text-lg font-bold text-white py-4 px-8 rounded-xl shadow-2xl transition-all duration-300 ease-in-out overflow-hidden w-full sm:w-auto text-center">
                <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-brand-purple via-brand-magenta to-brand-orange transition-all duration-300 group-hover:from-brand-orange group-hover:via-brand-magenta group-hover:to-brand-purple"></span>
                <span className="relative">Quero o Study Flow</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Infoproduct;
