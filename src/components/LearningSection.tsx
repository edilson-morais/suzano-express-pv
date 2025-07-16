import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
export const LearningSection = () => {
  const learningPoints = ["Método comprovado: mais de 800 alunos no Japão e mais de 2.000 alunos no Brasil", "3 vídeos por ritmo: execução, explicação e câmera lenta", "Técnica Invertida: marca registrada de Suzano", "Grupos exclusivos no WhatsApp por nível", "Acesso 24h por 2 anos, sem precisar ler partitura"];
  return <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <div className="space-y-6">
            <h3 className="text-xl md:text-2xl font-semibold text-primary">
              O Que Você Vai Aprender na <span className="font-bold">curso suzano express</span>
            </h3>
            
            <h2 className="text-3xl md:text-5xl font-bold leading-tight">Você não vai apenas "aprender tocar pandeiro". Vai criar suas próprias levadas, de verdade. Do absoluto zero ao avançado, você vai:</h2>
          </div>
          
          <div className="grid gap-6 md:gap-8">
            {learningPoints.map((point, index) => <Card key={index} className="p-6 text-left border-l-4 border-l-primary bg-card/50 hover:bg-card transition-smooth">
                <p className="text-lg font-medium">{point}</p>
              </Card>)}
          </div>
          
          <div className="space-y-6">
            
            
            <Button variant="cta" size="xl" asChild>
              <a href="https://sun.eduzz.com/50027?utm_source=suzano+express&utm_id=pv">QUERO COMEÇAR AGORA</a>
            </Button>
          </div>
        </div>
      </div>
    </section>;
};