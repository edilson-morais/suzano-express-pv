import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
export const WhyJoinSection = () => {
  const reasons = [{
    number: "01",
    text: "Você já tentou aprender sobre IA, mas só encontrou teoria vaga e vídeos soltos no YouTube."
  }, {
    number: "02",
    text: "Fica perdido entre APIs, ferramentas, códigos e não sabe nem por onde começar."
  }, {
    number: "03",
    text: "Sonha em ganhar dinheiro com IA, mas sente que está atrasado nessa corrida."
  }, {
    number: "04",
    text: "Quer vender soluções de IA, mas não sabe estruturar uma oferta real."
  }, {
    number: "05",
    text: "Está cansado de cursos genéricos e quer um passo a passo validado por quem aplica de verdade."
  }, {
    number: "06",
    text: "Precisa de uma comunidade ativa, suporte real e networking que gere oportunidades."
  }];
  const targetAudience = [
    "Está começando do zero e quer entrar no mercado de IA aplicada", 
    "Já trabalha com marketing digital, vendas, programação, ou tráfego pago e quer se atualizar", 
    "É empreendedor e quer economizar tempo, escalar processos e gerar lucro", 
    "Quer abrir uma agência de IA ou prestar serviços com alto valor percebido", 
    "Quer aprender na prática, sem enrolação ou termos técnicos confusos",
    "É músico profissional ou amador, que já toca Percussão ou Pandeiro, porém ainda se sente um pouco limitado na parte técnica ou dos grooves",
    "Quer aumentar — e muito — o seu repertório de grooves, ou quer aprender pandeiro para tocar com os amigos ou na igreja",
    "É iniciante mas se compromete a estudar e quer aprender o método adequado desde o início"
  ];
  return <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="text-center space-y-8">
            <p className="text-lg text-primary font-medium">
              Olha... Se eu fosse você, eu entrava...
            </p>
            
            <h2 className="text-3xl md:text-5xl font-bold">Por que você precisa no suzano express agora:</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reasons.map((reason, index) => <Card key={index} className="p-6 space-y-4 border-l-4 border-l-primary hover:shadow-glow-cyan transition-smooth">
                <div className="text-4xl font-bold text-primary">{reason.number}</div>
                <p className="text-lg leading-relaxed">{reason.text}</p>
              </Card>)}
          </div>
          
          <div className="space-y-12">
            <h3 className="text-3xl md:text-4xl font-bold text-center">
              Essa formação é para você que:
            </h3>
            
            <div className="space-y-6">
              {targetAudience.map((audience, index) => <Card key={index} className="p-6 border-primary/30 bg-gradient-primary/5">
                  <h4 className="text-xl font-semibold text-primary">{audience}</h4>
                </Card>)}
            </div>
            
            <div className="text-center space-y-8">
              <Button variant="cta" size="xl">
                Quero Me Tornar Um Cr[IA]dor da Nova Era
              </Button>
              
              <div className="flex items-center justify-center space-x-4">
                <div className="flex -space-x-2">
                  {[...Array(8)].map((_, i) => <div key={i} className="w-10 h-10 rounded-full bg-gradient-primary border-2 border-background flex items-center justify-center text-primary-foreground font-bold text-sm">
                      {String.fromCharCode(65 + i)}
                    </div>)}
                </div>
                <div className="text-left">
                  <p className="text-lg font-bold">
                    + <span className="text-primary">1.2K</span> alunos <span className="font-bold">dominando a IA</span>
                    <span className="block">e enriquecendo <span className="font-bold">mais ainda!</span></span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};