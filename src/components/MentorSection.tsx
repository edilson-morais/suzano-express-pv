import { Card } from "@/components/ui/card";
import mentorPhoto from "@/assets/mentor-photo.jpg";
export const MentorSection = () => {
  const achievements = ["Economizei 85% do meu tempo operacional", "Eliminei a necessidade de contratar uma equipe inteira de SDRs", "Aumentei o faturamento em 25% no primeiro mês", "E criei um novo serviço que virou uma nova fonte de lucro"];
  return <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <p className="text-xl font-medium text-primary italic">"Eu não sabia que tocava "invertido". Acabei descobrindo um jeito inovador de tocar pandeiro."</p>
                
                <h2 className="text-3xl md:text-4xl font-bold">Meu nome é Marcos Suzano, criador da "técnica invertida" e do método Suzano express.</h2>
              </div>
              
              <div className="space-y-6">
                <p className="text-lg text-muted-foreground leading-relaxed">Ele inventou uma nova forma de tocar e de ensinar, tornando o aprendizado mais acessível e musicalmente expressivo. Sua habilidade de extrair diferentes timbres e sua impressionante coordenação são marcas registradas.</p>
                
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Mas quando apliquei Inteligência Artificial na minha operação, algo inacreditável aconteceu:
                </p>
                
                <div className="space-y-4">
                  {achievements.map((achievement, index) => <div key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0" />
                      <p className="text-lg font-medium">{achievement}</p>
                    </div>)}
                </div>
                
                <div className="space-y-4 pt-4">
                  <p className="text-lg font-semibold">
                    Agora, <span className="text-primary">transformei esse processo em uma formação completa</span>, 
                    para que você possa fazer o mesmo — sem precisar errar sozinho.
                  </p>
                  
                  <p className="text-xl font-bold text-primary">
                    A pergunta é: você está pronto para entrar na nova era?
                  </p>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl">
                <img src={mentorPhoto} alt="Kelvin Vieira" className="w-full h-auto object-cover" />
                
              </div>
              
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary rounded-full flex items-center justify-center">
                <div className="text-primary-foreground text-center">
                  <div className="text-sm font-bold">AI</div>
                  <div className="text-xs">Expert</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};