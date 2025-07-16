import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const PricingSection = () => {
  const features = [
    "Curso n8n do básico ao avançado",
    "Mentoria ao vivo + comunidade ativa",
    "Módulo completo de vendas e agência", 
    "Atualizações constantes",
    "Projetos prontos e vendáveis"
  ];

  return (
    <section id="oferta" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="text-center space-y-8">
            <h2 className="text-3xl md:text-5xl font-bold leading-tight">
              Enquanto uns brincam com IA, você tem a oportunidade de dominar a habilidade mais valiosa dos próximos 10 anos.
            </h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Plano Anual */}
            <Card className="p-8 space-y-8 border-primary bg-gradient-primary/5 relative overflow-hidden">
              <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground">
                O MAIS ESCOLHIDO
              </Badge>
              
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Plano anual</h3>
                
                <div className="space-y-2">
                  <p className="text-lg">
                    De <span className="line-through text-muted-foreground">R$ 1.997,00</span> por apenas:
                  </p>
                  
                  <div className="space-y-1">
                    <div className="text-4xl md:text-5xl font-bold text-primary">
                      12x de R$59,68
                    </div>
                    <p className="text-lg text-muted-foreground">
                      Ou R$ 577 à vista no Pix
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-primary-foreground text-xs font-bold">✓</span>
                    </div>
                    <p className="font-medium">{feature}</p>
                  </div>
                ))}
              </div>
              
              <Button variant="hero" size="xl" className="w-full">
                Quero o plano anual!
              </Button>
              
              <div className="flex items-center justify-center space-x-4 pt-4">
                <div className="flex -space-x-2">
                  {[...Array(8)].map((_, i) => (
                    <div 
                      key={i} 
                      className="w-8 h-8 rounded-full bg-gradient-primary border-2 border-background flex items-center justify-center text-primary-foreground font-bold text-xs"
                    >
                      {String.fromCharCode(65 + i)}
                    </div>
                  ))}
                </div>
                <div className="text-left text-sm">
                  <p className="font-bold">
                    + <span className="text-primary">1.2K</span> alunos <span className="font-bold">dominando a IA</span>
                    <span className="block">e enriquecendo <span className="font-bold">mais ainda!</span></span>
                  </p>
                </div>
              </div>
            </Card>
            
            {/* Plano Mensal */}
            <Card className="p-8 space-y-8 border-border">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Plano mensal</h3>
                
                <div className="space-y-2">
                  <p className="text-lg">
                    De <span className="line-through text-muted-foreground">R$ 297,00</span> por apenas:
                  </p>
                  
                  <div className="text-4xl md:text-5xl font-bold text-primary">
                    R$97/mês
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-primary-foreground text-xs font-bold">✓</span>
                    </div>
                    <p className="font-medium">{feature}</p>
                  </div>
                ))}
              </div>
              
              <Button variant="outline" size="xl" className="w-full">
                Quero o plano mensal!
              </Button>
            </Card>
          </div>
          
          <div className="text-center space-y-8">
            <div className="flex items-center justify-center space-x-4">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">7D</span>
              </div>
              <div className="text-left">
                <h3 className="text-2xl font-bold">Garantia incondicional de 7 dias</h3>
              </div>
            </div>
            
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Participe do treinamento, aplique o método e se você sentir que não é para você, basta falar com nossa equipe e devolveremos 100% do valor do ingresso.
            </p>
            
            <p className="text-lg font-semibold">
              Sem perguntas. Sem complicação. O risco continua sendo todo nosso.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};