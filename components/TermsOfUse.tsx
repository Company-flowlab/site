
import React from 'react';
import { FlowLabLogo } from './IconComponents';

interface TermsOfUseProps {
  onNavigateHome: () => void;
}

const TermsOfUse: React.FC<TermsOfUseProps> = ({ onNavigateHome }) => {
  return (
    <div className="bg-brand-light min-h-screen">
       <header className="bg-white shadow-sm">
         <div className="container mx-auto px-6 py-4 flex justify-between items-center">
             <div className="flex items-center gap-2">
                <FlowLabLogo className="h-8 w-auto" />
                <span className="text-2xl font-bold text-brand-dark">FlowLab</span>
              </div>
            <button onClick={onNavigateHome} className="font-semibold text-brand-purple hover:underline">
              &larr; Voltar para o Início
            </button>
         </div>
       </header>
       <main className="container mx-auto px-6 py-12 md:py-20">
        <div className="max-w-4xl mx-auto prose lg:prose-lg text-brand-mid">
          <h1>Termos de Uso</h1>
          <p className="text-sm text-gray-500">Última atualização: {new Date().toLocaleDateString('pt-BR')}</p>
          
          <h2>1. Aceitação dos Termos</h2>
          <p>Ao acessar e usar o site e os produtos do FlowLab, você concorda em cumprir e estar vinculado a estes Termos de Uso. Se você não concordar com estes termos, não deverá usar nossos serviços.</p>

          <h2>2. Propriedade Intelectual</h2>
          <p>O conteúdo do site, incluindo textos, gráficos, logotipos, e o "Study Flow Template", são propriedade exclusiva do FlowLab e protegidos por leis de direitos autorais. Ao adquirir nosso template, você recebe uma licença de uso pessoal e intransferível.</p>
          <p>Você não tem permissão para:</p>
          <ul>
            <li>Vender, redistribuir ou sublicenciar o template.</li>
            <li>Modificar e reivindicar o template como sua própria criação.</li>
            <li>Utilizar qualquer parte do nosso material para fins comerciais sem consentimento prévio.</li>
          </ul>

          <h2>3. Uso dos Produtos e Serviços</h2>
          <p>Nossos produtos são destinados a auxiliar na organização e produtividade. Você é responsável pelos resultados obtidos com o uso de nossas ferramentas. O FlowLab não garante a aprovação em exames ou concursos, pois o sucesso depende do esforço e dedicação individual de cada usuário.</p>

          <h2>4. Pagamentos e Reembolsos</h2>
          <p>Todos os pagamentos são processados através de plataformas seguras. Oferecemos uma garantia de reembolso de 7 dias para o "Study Flow Template", conforme descrito em nossa página de vendas. Após esse período, nenhuma solicitação de reembolso será aceita.</p>

          <h2>5. Limitação de Responsabilidade</h2>
          <p>Em nenhuma circunstância o FlowLab será responsável por quaisquer danos diretos, indiretos, incidentais ou consequentes resultantes do uso ou da incapacidade de usar nossos produtos e serviços.</p>

          <h2>6. Modificações nos Termos</h2>
          <p>Reservamo-nos o direito de modificar estes Termos de Uso a qualquer momento. As alterações entrarão em vigor imediatamente após sua publicação no site. É sua responsabilidade revisar os termos periodicamente.</p>
          
          <h2>7. Lei Aplicável</h2>
          <p>Estes termos serão regidos e interpretados de acordo com as leis da República Federativa do Brasil, e você se submete à jurisdição exclusiva dos tribunais localizados no Brasil para a resolução de quaisquer disputas.</p>

          <h2>8. Contato</h2>
          <p>Se você tiver alguma dúvida sobre estes Termos de Uso, entre em contato conosco pelo e-mail: contato@flowlab.example.com.</p>
        </div>
       </main>
    </div>
  );
};

export default TermsOfUse;
