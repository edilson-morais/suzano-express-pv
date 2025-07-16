import { Card } from "@/components/ui/card";
import mentorPhoto from "@/assets/mentor-photo.jpg";

export const AboutMentorSection = () => {
  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-8 mb-16">
            <h3 className="text-xl text-primary font-medium">
              Sobre o seu mentor:
            </h3>
            
            <h2 className="text-3xl md:text-5xl font-bold">
              Quem é Kelvin Vieira?
            </h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <p className="text-lg leading-relaxed">
                  Empreendedor desde os 16 anos. Hoje sou <span className="font-bold text-primary">CEO da Duni Digital e da Strong Sales IA,</span> onde potencializamos o faturamento de grandes empresas com automações avançadas e agentes de IA sob medida.
                </p>
                
                <p className="text-lg leading-relaxed">
                  Com a IA, transformei minha rotina, economizei tempo, aumentei o lucro e criei um novo negócio. Agora, quero te mostrar o mesmo caminho.
                </p>
                
                <p className="text-xl font-bold text-primary">
                  Aqui, você não aprende com um teórico. Aprende com quem <span className="text-foreground">faz, aplica e vende IA todo dia.</span>
                </p>
              </div>
            </div>
            
            <div className="relative">
              <Card className="p-8 space-y-6 border-primary/30">
                <div className="relative overflow-hidden rounded-xl">
                  <img 
                    src={mentorPhoto} 
                    alt="Kelvin Vieira - CEO da Duni Digital e Strong Sales IA" 
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-primary opacity-10" />
                </div>
                
                <div className="text-center space-y-2">
                  <h3 className="text-xl font-bold">Kelvin Vieira</h3>
                  <p className="text-primary font-medium">CEO Duni Digital & Strong Sales IA</p>
                  <p className="text-sm text-muted-foreground">+10 anos empreendendo</p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};