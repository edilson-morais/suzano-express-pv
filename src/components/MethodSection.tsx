import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
export const MethodSection = () => {
  const methodSteps = [{
    title: "Fundamentos:",
    description: "Aprenda desde o zero os fundamentos essenciais do pandeiro com a técnica exclusiva de Marcos Suzano, dominando postura, sons, coordenação e independência."
  }, {
    title: "Criação:",
    description: "Descubra como criar suas próprias levadas e variações. Desenvolva sua expressão musical com exercícios que estimulam improviso e musicalidade."
  }, {
    title: "Integração:",
    description: "Aprenda a tocar com outros instrumentos, em rodas, com amigos ou na igreja. Ritmos brasileiros integrados à vivência real da música."
  }, {
    title: "Monetização:",
    description: "Veja como o que você aprende no curso pode se transformar em apresentações, aulas, rodas e outras formas de gerar renda com a música."
  }, {
    title: "Vendas:",
    description: "Ganhe confiança para mostrar seu som ao vivo, nas redes ou para oportunidades de trabalho musical. Seu pandeiro como sua voz artística."
  }, {
    title: "Escala:",
    description: "Monte um plano de estudo contínuo com base no método Suzano Express e siga evoluindo com clareza, foco e propósito."
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