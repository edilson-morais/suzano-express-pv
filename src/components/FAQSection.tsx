import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const FAQSection = () => {
  const faqs = [
    {
      question: "Preciso ter experiência em programação para desenvolver agentes de IA?",
      answer: "Não! O método foi desenvolvido justamente para quem está começando do zero. Tudo é ensinado passo a passo, desde a configuração inicial até implementações avançadas. Muitos dos nossos alunos mais bem-sucedidos nunca tinham programado antes."
    },
    {
      question: "Como a comunidade vai me ajudar a gerar renda com automação?",
      answer: "Você receberá todo o conhecimento prático para criar automações que empresas estão dispostas a pagar. Desde o treinamento técnico até templates prontos e estratégias de monetização. Diferente de outros cursos que só ensinam teoria, aqui você implementa projetos reais que geram resultados financeiros imediatos."
    },
    {
      question: "Quanto tempo tenho de acesso?",
      answer: "Você terá acesso ao ecossistema completo por 12 meses. Isso inclui todas as atualizações, novos templates, sessões ao vivo e suporte na comunidade durante este período."
    },
    {
      question: "E se eu não gostar do conteúdo?",
      answer: "Oferecemos garantia incondicional de 15 dias. Se você não estiver satisfeito por qualquer motivo, basta nos avisar e devolveremos 100% do seu investimento, sem perguntas ou burocracia."
    },
    {
      question: "Que tipo de pessoa vai se beneficiar dessa comunidade?",
      answer: "Esta comunidade é ideal para quem busca uma nova fonte de renda, quer seja para complementar o salário atual ou para construir um negócio próprio. É perfeita para profissionais em transição de carreira, estudantes, empreendedores iniciantes ou qualquer pessoa que queira aproveitar a crescente demanda por automação com IA."
    },
    {
      question: "Preciso de equipamentos caros ou servidores para criar automações?",
      answer: "Não! Você pode começar com o computador que já tem. Para a maioria das implementações, um notebook básico é suficiente. Ensinamos também como usar serviços gratuitos ou de baixo custo para hospedar suas automações, com investimento inicial mínimo."
    },
    {
      question: "O que exatamente vou aprender na comunidade?",
      answer: "Você aprenderá a criar sistemas de automação completos usando n8n, Make, integração com WhatsApp via Evolution API, desenvolvimento de agentes de IA para atendimento e vendas, estratégias de monetização e muito mais. Todo o conteúdo é prático e focado em implementações que geram resultados financeiros reais."
    },
    {
      question: "E se eu tiver dúvidas durante a implementação?",
      answer: "Você terá múltiplos canais de suporte: mentoria em grupo semanal com Kelvin, comunidade ativa no Discord para dúvidas rápidas, e sessões especiais com especialistas convidados. Nosso objetivo é garantir que nenhuma dúvida fique sem resposta para que você possa implementar com confiança."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center">
            <h2 className="text-3xl md:text-5xl font-bold">
              Perguntas Frequentes:
            </h2>
          </div>
          
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border border-primary/20 rounded-lg px-6 data-[state=open]:bg-gradient-primary/5"
              >
                <AccordionTrigger className="text-left font-semibold text-lg hover:text-primary py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};