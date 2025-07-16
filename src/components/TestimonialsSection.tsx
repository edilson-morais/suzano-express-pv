import { Card } from "@/components/ui/card";

export const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Fábio",
      result: "Primeiro projeto vendido por R$ 15.000",
      content: "Aplicou o método e conseguiu seu primeiro cliente em menos de 30 dias"
    },
    {
      name: "Alex",
      result: "Automatizou 90% do atendimento",
      content: "Criou um agente de IA que revolucionou o atendimento da empresa"
    },
    {
      name: "Elizeu", 
      result: "Nova fonte de renda mensal",
      content: "Montou sua agência de IA e está faturando consistentemente"
    },
    {
      name: "Roberto",
      result: "Economizou 15h semanais",
      content: "Automações criadas liberaram tempo para focar em estratégia"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto text-center space-y-12">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-5xl font-bold">
              Eles decidiram aplicar.
            </h2>
            <p className="text-2xl md:text-3xl font-semibold text-primary">
              E colheram os frutos.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6 space-y-4 hover:shadow-glow-cyan transition-smooth border-primary/20">
                <div className="space-y-2">
                  <h3 className="font-bold text-lg">{testimonial.name}</h3>
                  <p className="text-primary font-semibold">{testimonial.result}</p>
                </div>
                <p className="text-sm text-muted-foreground">{testimonial.content}</p>
              </Card>
            ))}
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            {[...Array(12)].map((_, index) => (
              <Card key={index} className="p-4 bg-gradient-primary/10 border-primary/30">
                <div className="aspect-square bg-gradient-primary/20 rounded-lg flex items-center justify-center">
                  <div className="text-primary font-bold text-lg">★</div>
                </div>
                <p className="text-xs text-center mt-2 text-muted-foreground">
                  Resultado comprovado #{index + 1}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};