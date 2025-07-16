import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
export const BonusSection = () => {
  const bonuses = ["Formação Cr[IA]dor Agentes IA – Do zero ao avançado", "Mentoria em Grupo AO VIVO semanal com Kelvin Vieira", "Arsenal com +100 Templates validados e prontos para usar", "Aulas com convidados especialistas em IA", "Suporte via WhatsApp e Discord", "Atualizações frequentes com novas ferramentas", "Acesso completo a comunidade PRIME - Networking, oportunidades de contratações e suporte em seus projetos ativos"];
  const modules = [{
    name: "Módulo 0",
    title: "Fundamentos de IA"
  }, {
    name: "Módulo 1",
    title: "n8n Básico ao Avançado"
  }, {
    name: "Módulo 2",
    title: "Criação de Agentes"
  }, {
    name: "Módulo 3",
    title: "Integrações e APIs"
  }, {
    name: "Módulo 4",
    title: "Monetização e Vendas"
  }, {
    name: "Bônus 1",
    title: "Templates Prontos"
  }, {
    name: "Bônus 2",
    title: "Comunidade PRIME"
  }, {
    name: "Bônus 3",
    title: "Mentorias Exclusivas"
  }];
  return (
    <section className="py-16 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Bônus Exclusivos
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Além do curso completo, você recebe estes bônus especiais para acelerar seu aprendizado
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {bonuses.map((bonus, index) => (
            <Card key={index} className="border-primary/20 hover:border-primary/40 transition-all duration-300">
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {index + 1}
                  </div>
                  <h3 className="font-semibold text-foreground">Bônus {index + 1}</h3>
                </div>
                <p className="text-muted-foreground text-sm">{bonus}</p>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button variant="cta" size="lg">
            Quero Garantir Meus Bônus
          </Button>
        </div>
      </div>
    </section>
  );
};