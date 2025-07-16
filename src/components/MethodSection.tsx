import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
export const MethodSection = () => {
  const methodSteps = [{
    title: "Fundamentos:",
    description: "IA aplicável e domínio completo do n8n, do básico ao avançado"
  }, {
    title: "Criação:",
    description: "Como criar agentes de IA que resolvem problemas reais."
  }, {
    title: "Integração:",
    description: "Conecte com APIs, Whatsapp, CRMs, banco de dados e mais."
  }, {
    title: "Monetização:",
    description: "Como transformar suas automações em ofertas de serviço."
  }, {
    title: "Vendas:",
    description: "Como vender para empresas com o pitch certo."
  }, {
    title: "Escala:",
    description: "Montando sua Agência de IA para vender em alto volume."
  }];
  
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Nossa Metodologia</h2>
          <p className="text-lg text-muted-foreground">
            Um método estruturado e comprovado para te levar do zero ao profissional
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {methodSteps.map((step, index) => (
            <Card key={index} className="p-6 text-center">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4">
                {index + 1}
              </div>
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button size="lg" asChild>
            <a href="https://sun.eduzz.com/50027?utm_source=suzano+express&utm_id=pv">
              QUERO COMEÇAR AGORA
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};