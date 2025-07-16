import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const FAQSection = () => {
  const faqs = [
    {
      question: "PRA QUEM É O CURSO SUZANO EXPRESS?",
      answer: "Para você que é músico profissional ou amador, que já toca Percussão ou Pandeiro, porém ainda se sente um pouco limitado na parte técnica ou dos grooves. Pra você que quer aumentar — e muito — o seu repertório de grooves, ou quer aprender pandeiro para tocar com os amigos ou na igreja."
    },
    {
      question: "RECEBEREI ALGUM MATERIAL PELOS CORREIOS?",
      answer: "NÃO! Todo o material do curso é disponibilizado através de um login e senha, para uma área de membros exclusiva dos alunos. O acesso ficará disponível por 2 anos, sem restrições. Estude onde e quando quiser."
    },
    {
      question: "É NECESSÁRIO SABER LER PARTITURAS PARA ENTENDER AS AULAS?",
      answer: "NÃO é necessário saber ler partitura para aprender a tocar pandeiro com o Método Suzano Express."
    },
    {
      question: "EU NÃO SEI TOCAR NADA AINDA. ESTE CURSO É PARA INICIANTES?",
      answer: "Se você é iniciante, talvez precise aprender as \"coisas\" mais simples primeiro, por exemplo no YouTube. Mas se você se compromete a estudar, este curso é o adequado para você."
    },
    {
      question: "EXISTE ALGUM TIPO DE SUPORTE, CASO EU TENHA DÚVIDAS DURANTE O CURSO?",
      answer: "SIM, CLARO! Caso você tenha alguma dúvida relacionada ao curso, poderá nos contatar pelo nosso e-mail de suporte, que será informado após a compra. Será um prazer te ajudar!"
    },
    {
      question: "POSSO PAGAR O SUZANO EXPRESS MENSALMENTE?",
      answer: "O Suzano Express NÃO É um serviço de assinatura ou mensalidade. É um programa fechado. O valor do curso pode ser pago à vista ou parcelado no cartão de crédito, à critério do aluno."
    },
    {
      question: "EU POSSO BAIXAR AS VÍDEO AULAS?",
      answer: "NÃO. Todo o material é acessado somente online. Ao se matricular, você receberá um login e senha para acessar a plataforma do curso durante 2 anos. Tudo fica disponível 24h por dia, todos os dias da semana. As aulas podem ser assistidas quantas vezes você quiser."
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