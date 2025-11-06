import React from 'react';
import { CheckCircleIcon } from './IconComponents';

const Hero: React.FC = () => {
  return (
    <section id="inicio" className="bg-brand-light pt-20 pb-12 md:pt-32 md:pb-20">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Coluna de Texto */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-brand-dark leading-tight mb-6">
              Organize seus Estudos, Conquiste a <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-orange via-brand-magenta to-brand-purple">Aprovação</span>.
            </h1>
            <p className="text-lg md:text-xl text-brand-mid mb-8 max-w-xl mx-auto lg:mx-0">
              Somos especialistas em qualidade de processos, tecnologia e automação, criando soluções práticas para organizar estudos, tarefas e rotina em uma única plataforma inteligente.
            </p>
            
            <ul className="space-y-3 text-left mb-10 max-w-md mx-auto lg:mx-0">
              <li className="flex items-center text-brand-mid">
                <CheckCircleIcon className="w-6 h-6 text-brand-purple mr-3" />
                <span>Tenha clareza total do seu cronograma de estudos.</span>
              </li>
              <li className="flex items-center text-brand-mid">
                <CheckCircleIcon className="w-6 h-6 text-brand-purple mr-3" />
                <span>Crie um sistema de revisões espaçadas que funciona.</span>
              </li>
              <li className="flex items-center text-brand-mid">
                <CheckCircleIcon className="w-6 h-6 text-brand-purple mr-3" />
                <span>Centralize resumos, tarefas e flashcards em um só lugar.</span>
              </li>
            </ul>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="https://tally.so/r/mRN0Qj" target="_blank" rel="noopener noreferrer" className="group relative inline-block text-lg font-bold text-white py-4 px-8 rounded-xl shadow-2xl transition-all duration-300 ease-in-out overflow-hidden">
                <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-brand-purple via-brand-magenta to-brand-orange transition-all duration-300 group-hover:from-brand-orange group-hover:via-brand-magenta group-hover:to-brand-purple"></span>
                <span className="relative">Quero meu Template</span>
                <small className="block text-white/80 text-xs font-normal mt-1">Leva apenas 1 minuto</small>
              </a>
              <a href="https://wa.me/5521992094859" target="_blank" rel="noopener noreferrer" className="text-lg font-bold text-brand-dark py-4 px-8 rounded-xl bg-gray-200/80 hover:bg-gray-300/80 transition-colors duration-200 shadow-lg">
                Falar no WhatsApp
                <small className="block text-brand-mid/80 text-xs font-normal mt-1">Resposta em até 2h</small>
              </a>
            </div>
          </div>
          
          {/* Coluna do Mockup */}
           <div className="relative w-full max-w-lg mx-auto lg:mt-0 mt-8">
            <div className="relative aspect-[4/3] transform transition-transform duration-500 hover:scale-105 group">
              {/* Corpo principal do Mockup (simulando uma imagem gerada) */}
              <div className="relative w-full h-full bg-[#1A2233] border border-slate-700 rounded-2xl shadow-2xl p-4 overflow-hidden">
                {/* Header da janela */}
                <div className="flex items-center gap-1.5 mb-4">
                  <div className="w-3 h-3 rounded-full bg-slate-700"></div>
                  <div className="w-3 h-3 rounded-full bg-slate-700"></div>
                  <div className="w-3 h-3 rounded-full bg-slate-700"></div>
                </div>

                {/* Conteúdo do Mockup */}
                <div className="w-full h-[calc(100%-28px)] flex gap-4">
                  {/* Sidebar */}
                  <div className="w-1/3 h-full rounded-md space-y-3 pt-2">
                    <div className="w-3/4 h-3.5 rounded bg-slate-700"></div>
                    <div className="w-full pl-3 space-y-2">
                      <div className="w-5/6 h-3 rounded bg-slate-800"></div>
                      <div className="w-4/6 h-3 rounded bg-slate-800"></div>
                      <div className="w-full h-3 rounded bg-gradient-to-r from-brand-purple to-brand-blue opacity-80"></div>
                    </div>
                     <div className="w-full h-px bg-slate-700 my-4 !mt-4"></div>
                    <div className="w-3/4 h-3.5 rounded bg-slate-700"></div>
                     <div className="w-full pl-3 space-y-2">
                      <div className="w-4/6 h-3 rounded bg-slate-800"></div>
                    </div>
                  </div>
                  {/* Main content */}
                  <div className="w-2/3 h-full rounded-md bg-slate-900/50 p-3 space-y-3">
                    <div className="w-1/2 h-5 rounded bg-slate-700"></div>
                    {/* Item de tarefa */}
                    <div className="w-full h-10 rounded-lg bg-slate-800/70 p-2 flex items-center justify-between">
                      <div className="w-4 h-4 rounded border-2 border-brand-magenta"></div>
                      <div className="w-3/5 h-3 rounded bg-slate-600"></div>
                      <div className="w-10 h-4 rounded-full bg-brand-purple/50"></div>
                    </div>
                    {/* Item de tarefa concluído */}
                    <div className="w-full h-10 rounded-lg bg-slate-800/70 p-2 flex items-center justify-between opacity-50">
                       <div className="w-4 h-4 rounded bg-brand-blue flex items-center justify-center">
                          <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
                       </div>
                      <div className="w-3/5 h-3 rounded bg-slate-600 line-through"></div>
                      <div className="w-10 h-4 rounded-full bg-slate-700"></div>
                    </div>
                    <div className="w-full h-10 rounded-lg bg-slate-800/70 p-2 flex items-center justify-between">
                      <div className="w-4 h-4 rounded border-2 border-brand-magenta"></div>
                      <div className="w-4/5 h-3 rounded bg-slate-600"></div>
                      <div className="w-10 h-4 rounded-full bg-brand-purple/50"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;