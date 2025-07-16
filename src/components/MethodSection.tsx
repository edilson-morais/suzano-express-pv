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
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Método Validado em 6 Passos
          </h2>
          <p className="text-lg text-muted-foreground">
            A única metodologia comprovada para dominar o pandeiro do zero ao avançado
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {methodSteps.map((step, index) => (
            <Card key={index} className="p-6">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold mr-3">
                  {index + 1}
                </div>
                <h3 className="text-xl font-semibold">{step.title}</h3>
              </div>
              <p className="text-muted-foreground">{step.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};