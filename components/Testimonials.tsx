import React from 'react';

const Testimonials: React.FC = () => {
  const testimonialsData = [
    {
      quote: "Depois de meses perdida em planilhas e apps, o Study Flow centralizou tudo. A sensação de controle é incrível. Fui aprovada em Medicina na USP!",
      name: "Mariana Alves",
      title: "Aprovada em Medicina - USP",
    },
    {
      quote: "Como estudante de engenharia, eu tinha dezenas de matérias e projetos. O Study Flow foi a melhor ferramenta que adotei para não surtar e manter tudo em dia.",
      name: "Carlos Lima",
      title: "Estudante de Engenharia - Unicamp",
    },
    {
      quote: "Finalmente um sistema que entende a rotina de um vestibulando. Consigo ver meu progresso, planejar revisões e focar no que importa: estudar.",
      name: "Sofia Ferreira",
      title: "Vestibulanda de Direito",
    },
     {
      quote: "Eu achava que Notion era complicado, mas o template é super intuitivo. O sistema de revisão me salvou nos estudos para o concurso.",
      name: "Bruno Rocha",
      title: "Concurseiro",
    },
  ];

  return (
    <section id="depoimentos" className="py-20 bg-brand-light">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-dark mb-4">
            Resultados Reais, Aprovações Conquistadas
          </h2>
          <p className="text-lg text-brand-mid mb-16">
            Não acredite apenas na nossa palavra. Veja o que outros estudantes estão dizendo.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {testimonialsData.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-lg border border-brand-border flex flex-col">
              <div className="text-5xl text-brand-purple/50 font-serif mb-4">“</div>
              <blockquote className="text-brand-mid italic text-lg mb-6 flex-grow">
                {testimonial.quote}
              </blockquote>
              <div className="flex items-center mt-auto">
                <div>
                  <p className="font-bold text-brand-dark">{testimonial.name}</p>
                  <p className="text-sm text-brand-mid/80">{testimonial.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
