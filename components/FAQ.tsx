
import React, { useState } from 'react';

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-brand-border">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-full py-5 text-left"
        aria-expanded={isOpen}
      >
        <span className="text-lg font-medium text-brand-dark">{question}</span>
        <svg
          className={`w-6 h-6 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
        </svg>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-screen' : 'max-h-0'
        }`}
      >
        <div className="pb-5 pr-10">
          <p className="text-brand-mid">{answer}</p>
        </div>
      </div>
    </div>
  );
};

const FAQ: React.FC = () => {
  const faqData = [
    {
      question: "Preciso saber usar o Notion para usar o template?",
      answer: "Não! O template foi feito para ser intuitivo e vem com um guia de início rápido em vídeo. A versão com consultoria é perfeita para quem quer uma ajuda extra para começar do zero e personalizar tudo."
    },
    {
      question: "O template serve para concurso, faculdade ou só vestibular?",
      answer: "O sistema é 100% flexível e pode ser adaptado para qualquer tipo de estudo: vestibular, concursos, faculdade, certificações, ou até mesmo para organizar projetos pessoais. Você ajusta às suas necessidades."
    },
    {
      question: "Como funciona a consultoria de 1 hora?",
      answer: "É uma chamada de vídeo individual, agendada conforme sua disponibilidade. Nela, vamos instalar e configurar o template juntos, personalizar para a sua rotina e tirar todas as suas dúvidas sobre Notion e organização de estudos."
    },
    {
      question: "Receberei atualizações futuras do template?",
      answer: "Sim! Seu acesso ao template é vitalício e você receberá todas as melhorias e atualizações que fizermos no futuro, sem custo adicional."
    },
    {
      question: "Como funciona o acesso ao template?",
      answer: "Após a confirmação da compra, você receberá um e-mail com o link para duplicar o template para a sua própria conta do Notion. O processo é instantâneo e você já pode começar a usar."
    },
    {
      question: "Posso usar na versão gratuita do Notion?",
      answer: "Sim, o Study Flow Template funciona perfeitamente na versão gratuita do Notion. Você não precisa de nenhum plano pago para ter acesso a 100% das funcionalidades."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-brand-light">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-dark mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-lg text-brand-mid mb-16">
            Tudo o que você precisa saber antes de organizar seus estudos.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqData.map((item, index) => (
            <FAQItem key={index} question={item.question} answer={item.answer} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;