import React from 'react';
import { LinkedInIcon } from './IconComponents';

const AboutUs: React.FC = () => {
  const founders = [
    {
      name: "Matheus Freitas",
      title: "Co-fundador & Especialista em Processos",
      bio: "É Engenheiro Químico, especialista em Governança Corporativa, Automações de processos e IA. Entusiasta do Notion como plataforma de produtividade profissional e particular.",
      gradient: "from-brand-purple to-brand-blue",
      linkedinUrl: "https://www.linkedin.com/in/matheus-de-freitas/"
    },
    {
      name: "Leandro Alves",
      title: "Co-fundador & Especialista em IA",
      bio: "Bacharel em Direito e especialista em Governança Corporativa, Automações de processos e IA. Foi seduzido para os ecossistemas de Matheus pelo Notion.",
      gradient: "from-brand-orange to-brand-magenta",
      linkedinUrl: "https://www.linkedin.com/in/leandro-alves-48783b90/"
    }
  ];

  return (
    <section id="quemsomos" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-dark mb-4">
            Conheça os Fundadores
          </h2>
          <p className="text-lg text-brand-mid">
            Apaixonados por produtividade e tecnologia, unimos nossas expertises para criar soluções que transformam a maneira como as pessoas organizam suas vidas e alcançam seus objetivos.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {founders.map((founder, index) => (
            <div key={index} className="bg-brand-light p-8 rounded-2xl shadow-lg border border-brand-border text-center transform hover:-translate-y-2 transition-transform duration-300">
              <div className="relative w-32 h-32 rounded-full mx-auto mb-6 shadow-xl flex items-center justify-center">
                <a 
                  href={founder.linkedinUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label={`Perfil de ${founder.name} no LinkedIn`}
                  className={`w-full h-full rounded-full bg-gradient-to-br ${founder.gradient} flex items-center justify-center text-white transition-transform duration-300 hover:scale-110`}
                >
                  <LinkedInIcon className="w-12 h-12" />
                </a>
              </div>
              <h3 className="text-2xl font-bold text-brand-dark">{founder.name}</h3>
              <p className="text-brand-purple font-semibold mb-3">{founder.title}</p>
              <p className="text-brand-mid">{founder.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;