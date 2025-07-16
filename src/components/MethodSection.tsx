import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export const MethodSection = () => {
  const methodSteps = [
    {
      title: "Fundamentos:",
      description: "IA aplicável e domínio completo do n8n, do básico ao avançado"
    },
    {
      title: "Criação:",
      description: "Como criar agentes de IA que resolvem problemas reais."
    },
    {
      title: "Integração:",
      description: "Conecte com APIs, Whatsapp, CRMs, banco de dados e mais."
    },
    {
      title: "Monetização:",
      description: "Como transformar suas automações em ofertas de serviço."
    },
    {
      title: "Vendas:",
      description: "Como vender para empresas com o pitch certo."
    },
    {
      title: "Escala:",
      description: "Montando sua Agência de IA para vender em alto volume."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="text-center space-y-8">
            <h2 className="text-3xl md:text-5xl font-bold">
              O Método Cr[IA]dor: Da ideia ao faturamento com IA
            </h2>
            
            <p className="text-xl font-semibold">
              Nada aqui é teórico. Você vai seguir um <span className="text-primary font-bold">método testado em negócios reais</span> — com:
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {methodSteps.map((step, index) => (
              <Card key={index} className="p-8 space-y-6 border-primary/30 hover:shadow-glow-cyan transition-smooth group">
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-primary group-hover:text-primary">{step.title}</h3>
                  <p className="text-lg leading-relaxed">{step.description}</p>
                </div>
                
                <Button variant="outline" className="w-full" asChild>
                  <a href="https://sun.eduzz.com/50027?utm_source=suzano+express&utm_id=pv">QUERO COMEÇAR AGORA</a>
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};