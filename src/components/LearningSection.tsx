import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export const LearningSection = () => {
  const learningPoints = [
    "Construir agentes inteligentes com n8n integrados com WhatsApp, CRMs, APIs e bancos de dados",
    "Criar automações que economizam tempo e geram faturamento",
    "Desenvolver soluções reais para empresas — e vender essas soluções",
    "Validar sua oferta e montar sua própria Agência de IA",
    "Aprender técnicas de vendas que funcionam, mesmo se você nunca vendeu nada online"
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <div className="space-y-6">
            <h3 className="text-xl md:text-2xl font-semibold text-primary">
              O Que Você Vai Aprender na <span className="font-bold">Formação Cr[IA]dor Agentes IA</span>
            </h3>
            
            <h2 className="text-3xl md:text-5xl font-bold leading-tight">
              Você não vai apenas "aprender sobre IA". Vai criar com IA, de verdade. Do absoluto zero ao avançado, você vai:
            </h2>
          </div>
          
          <div className="grid gap-6 md:gap-8">
            {learningPoints.map((point, index) => (
              <Card key={index} className="p-6 text-left border-l-4 border-l-primary bg-card/50 hover:bg-card transition-smooth">
                <p className="text-lg font-medium">{point}</p>
              </Card>
            ))}
          </div>
          
          <div className="space-y-6">
            <p className="text-xl font-semibold">
              Tudo isso <span className="font-bold">sem enrolação técnica</span>. É IA aplicada na prática — 
              <span className="font-bold"> com método e resultados.</span>
            </p>
            
            <Button variant="cta" size="xl">
              Quero Me Tornar Um Cr[IA]dor da Nova Era
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};