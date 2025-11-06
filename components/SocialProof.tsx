
import React from 'react';

const SocialProof: React.FC = () => {
  const groups = ['AprovaMed', 'FocoConcursos', 'EngenhariaPRO', 'DireitoNaVeia', 'Vestibulando BIXO'];
  
  return (
    <div className="py-12 bg-gray-50">
      <div className="container mx-auto px-6">
        <h3 className="text-center text-sm font-bold text-gray-500 uppercase tracking-widest mb-8">
          +1.500 ESTUDANTES JÁ ORGANIZARAM SUA ROTINA COM O STUDY FLOW
        </h3>
        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6">
          {groups.map((name) => (
            <div key={name} className="text-gray-400 font-bold text-xl grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer">
              {name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SocialProof;