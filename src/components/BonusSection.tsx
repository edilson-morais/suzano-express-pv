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
  return <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Bônus Exclusivos</h2>
          <p className="text-lg text-muted-foreground">
            Além do conteúdo principal, você recebe esses bônus incríveis
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {modules.map((module, index) => <Card key={index} className="p-6 text-center">
              <h3 className="text-lg font-semibold mb-2">{module.name}</h3>
              <p className="text-muted-foreground">{module.title}</p>
            </Card>)}
        </div>
        
        
        
        <div className="text-center mt-12">
          <Button size="lg" asChild>
            <a href="https://sun.eduzz.com/50027?utm_source=suzano+express&utm_id=pv">
              QUERO COMEÇAR AGORA
            </a>
          </Button>
        </div>
      </div>
    </section>;
};