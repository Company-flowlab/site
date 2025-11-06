
import React from 'react';
import { FlowLabLogo } from './IconComponents';

interface PrivacyPolicyProps {
  onNavigateHome: () => void;
}

const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({ onNavigateHome }) => {
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
          <h1>Política de Privacidade</h1>
          <p className="text-sm text-gray-500">Última atualização: {new Date().toLocaleDateString('pt-BR')}</p>

          <p>A sua privacidade é importante para nós. É política do FlowLab respeitar a sua privacidade em relação a qualquer informação sua que possamos coletar no site FlowLab, e outros sites que possuímos e operamos.</p>
          
          <h2>1. Coleta de Informações</h2>
          <p>Solicitamos informações pessoais apenas quando realmente precisamos delas para lhe fornecer um serviço. Fazemo-lo por meios justos e legais, com o seu conhecimento e consentimento. Também informamos por que estamos coletando e como será usado.</p>
          <p>Coletamos diferentes tipos de informações, incluindo:</p>
          <ul>
            <li><strong>Informações que você nos fornece:</strong> Nome, e-mail e número de telefone quando você preenche nossos formulários de contato ou de compra.</li>
            <li><strong>Informações de uso:</strong> Dados sobre como você interage com nosso site (páginas visitadas, tempo de permanência), coletados através de cookies e tecnologias similares.</li>
          </ul>

          <h2>2. Uso das Informações</h2>
          <p>Usamos as informações que coletamos para:</p>
          <ul>
            <li>Processar suas transações e fornecer os produtos e serviços solicitados.</li>
            <li>Comunicar com você, incluindo responder a perguntas e enviar informações sobre nossos produtos.</li>
            <li>Melhorar e personalizar sua experiência em nosso site.</li>
            <li>Analisar o desempenho do nosso site para otimizar nossos serviços.</li>
          </ul>

          <h2>3. Compartilhamento de Informações</h2>
          <p>Não compartilhamos as suas informações de identificação pessoal publicamente ou com terceiros, exceto quando exigido por lei ou para processar pagamentos através de plataformas seguras (por exemplo, processadores de cartão de crédito).</p>

          <h2>4. Armazenamento e Segurança</h2>
          <p>Apenas retemos as informações coletadas pelo tempo necessário para fornecer o serviço solicitado. Quando armazenamos dados, protegemos dentro de meios comercialmente aceitáveis para evitar perdas e roubos, bem como acesso, divulgação, cópia, uso ou modificação não autorizados.</p>

          <h2>5. Seus Direitos</h2>
          <p>Você é livre para recusar a nossa solicitação de informações pessoais, entendendo que talvez não possamos fornecer alguns dos serviços desejados. Você tem o direito de acessar, corrigir ou excluir suas informações pessoais. Para fazer isso, entre em contato conosco.</p>

          <h2>6. Links para Sites de Terceiros</h2>
          <p>O nosso site pode ter links para sites externos que não são operados por nós. Esteja ciente de que não temos controle sobre o conteúdo e práticas desses sites e não podemos aceitar responsabilidade por suas respectivas políticas de privacidade.</p>

          <h2>7. Alterações a Esta Política</h2>
          <p>Podemos atualizar nossa política de privacidade de tempos em tempos. Recomendamos que você revise esta página periodicamente para quaisquer alterações. Notificaremos sobre quaisquer alterações publicando a nova política de privacidade nesta página.</p>

          <h2>8. Contato</h2>
          <p>Se você tiver alguma dúvida sobre como lidamos com dados do usuário e informações pessoais, entre em contato conosco através do e-mail: contato@flowlab.example.com.</p>
        </div>
       </main>
    </div>
  );
};

export default PrivacyPolicy;
