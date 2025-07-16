import { Card } from "@/components/ui/card";

export const BonusSection = () => {
  const bonuses = [
    "Formação Cr[IA]dor Agentes IA – Do zero ao avançado",
    "Mentoria em Grupo AO VIVO semanal com Kelvin Vieira", 
    "Arsenal com +100 Templates validados e prontos para usar",
    "Aulas com convidados especialistas em IA",
    "Suporte via WhatsApp e Discord",
    "Atualizações frequentes com novas ferramentas",
    "Acesso completo a comunidade PRIME - Networking, oportunidades de contratações e suporte em seus projetos ativos"
  ];

  const modules = [
    { name: "Módulo 0", title: "Fundamentos de IA" },
    { name: "Módulo 1", title: "n8n Básico ao Avançado" },
    { name: "Módulo 2", title: "Criação de Agentes" },
    { name: "Módulo 3", title: "Integrações e APIs" },
    { name: "Módulo 4", title: "Monetização e Vendas" },
    { name: "Bônus 1", title: "Templates Prontos" },
    { name: "Bônus 2", title: "Comunidade PRIME" },
    { name: "Bônus 3", title: "Mentorias Exclusivas" }
  ];

  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="text-center space-y-8">
            <h3 className="text-xl text-primary font-medium">
              O que você recebe de BÔNUS!
            </h3>
            
            <h2 className="text-3xl md:text-5xl font-bold">
              Você vai aprender tudo isso, e ainda recebe:
            </h2>
          </div>
          
          <div className="grid gap-6">
            {bonuses.map((bonus, index) => (
              <Card key={index} className="p-6 border-l-4 border-l-primary bg-gradient-primary/5 hover:bg-gradient-primary/10 transition-smooth">
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary-foreground text-sm font-bold">✓</span>
                  </div>
                  <p className="text-lg font-medium">{bonus}</p>
                </div>
              </Card>
            ))}
          </div>
          
          <div className="space-y-8">
            <h3 className="text-2xl md:text-3xl font-bold text-center">
              Módulos da Formação
            </h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {modules.map((module, index) => (
                <Card key={index} className="p-6 text-center space-y-4 border-primary/30 hover:shadow-glow-cyan transition-smooth">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto">
                    <span className="text-primary-foreground font-bold text-lg">
                      {index < 5 ? (index).toString() : "★"}
                    </span>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-bold text-primary">{module.name}</h4>
                    <p className="text-sm text-muted-foreground">{module.title}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
          
          <div className="space-y-8">
            <h3 className="text-2xl md:text-3xl font-bold text-center">
              Comparação
            </h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-8 space-y-6 border-destructive/50">
                <h4 className="text-xl font-bold text-center text-destructive">
                  Cursos Genéricos de IA
                </h4>
                <div className="space-y-3">
                  {[
                    "Só teoria",
                    "Grupo parado ou sem resposta", 
                    "Módulos sem ensinar a vender",
                    "Não se atualiza com frequência",
                    "Sem aplicação real"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-4 h-4 bg-destructive rounded-full flex items-center justify-center">
                        <span className="text-destructive-foreground text-xs">✗</span>
                      </div>
                      <p className="text-muted-foreground">{item}</p>
                    </div>
                  ))}
                </div>
              </Card>
              
              <Card className="p-8 space-y-6 border-primary bg-gradient-primary/5">
                <h4 className="text-xl font-bold text-center text-primary">
                  Cr[IA]dores da Nova Era
                </h4>
                <div className="space-y-3">
                  {[
                    "IA aplicada com n8n",
                    "Mentoria ao vivo + comunidade ativa",
                    "Módulo completo de vendas e agência",
                    "Atualizações constantes", 
                    "Projetos prontos e vendáveis"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-4 h-4 bg-primary rounded-full flex items-center justify-center">
                        <span className="text-primary-foreground text-xs">✓</span>
                      </div>
                      <p className="font-medium">{item}</p>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};