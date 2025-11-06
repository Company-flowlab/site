
import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contato" className="py-20 bg-gradient-to-r from-brand-dark to-slate-800">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6">
          Pronto para Organizar seus Estudos de Vez?
        </h2>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-12">
          Chega de adiar sua aprovação. Dê o próximo passo hoje e comece a construir uma rotina de estudos mais produtiva, focada e com mais resultados.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
           <a href="https://tally.so/r/mRN0Qj" target="_blank" rel="noopener noreferrer" className="group relative inline-block text-xl font-bold text-white py-6 px-10 rounded-xl shadow-2xl transition-all duration-300 ease-in-out overflow-hidden bg-brand-light">
                <span className="absolute top-0 left-0 w-0 h-full bg-gradient-to-r from-brand-purple via-brand-magenta to-brand-orange transition-all duration-500 group-hover:w-full"></span>
                <span className="relative text-brand-dark group-hover:text-white transition-colors duration-500">
                    Comprar Template
                    <small className="block font-normal mt-1 text-sm">Preencha o formulário</small>
                </span>
            </a>
            <a href="https://wa.me/5521992094859" target="_blank" rel="noopener noreferrer" className="text-xl font-bold text-white py-6 px-10 rounded-xl bg-green-500 hover:bg-green-600 transition-colors duration-200 shadow-lg">
                Fale pelo WhatsApp
                <small className="block font-normal mt-1 text-sm">Tire suas dúvidas</small>
            </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;