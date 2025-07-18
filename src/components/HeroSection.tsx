import { Button } from "@/components/ui/button";
const heroBackground = "/lovable-uploads/7b88e8cb-6fcf-4d13-8a0a-23b84ca1feb9.png";
export const HeroSection = () => {
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-bg">
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20" style={{
      backgroundImage: `url(${heroBackground})`
    }} />
      <div className="absolute inset-0 bg-gradient-hero" />
      
      <div className="relative z-10 container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Coluna da esquerda - Textos */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="space-y-4">
              <p className="text-sm uppercase tracking-wide text-primary font-medium">



CURSO DE PANDEIRO SUZANO EXPRESS</p>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
                
                <span className="text-primary">suzano express</span>
                
              </h1>
              
            </div>
            
            <div className="space-y-6">
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold leading-tight">
                <span className="text-foreground">Aprenda a criar seus próprios ritmos no pandeiro e surpreenda — mesmo que esteja </span>
                <span className="text-primary">começando do zero.</span>
                
              </h2>
              
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">Está cansado(a) de não ter ideias na hora de tocar pandeiro? Com nosso método exclusivo, você vai desbloquear seu potencial criativo e apresentar ritmos novos e empolgantes. Domine técnicas inovadoras e impressione a todos!</p>
            </div>
            
            <div className="pt-8">
              <Button variant="hero" size="xl" className="mb-8" asChild>
                <a href="https://sun.eduzz.com/50027?utm_source=suzano+express&utm_id=pv">QUERO COMEÇAR AGORA</a>
              </Button>
            </div>
          </div>

          {/* Coluna da direita - Vídeo */}
          <div className="flex justify-center">
            <div className="w-full max-w-lg aspect-video rounded-lg overflow-hidden shadow-2xl">
              <iframe src="https://www.youtube.com/embed/CyIMCbUdjf4" title="Curso de Pandeiro Suzano Express" className="w-full h-full" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
            </div>
          </div>
        </div>
      </div>
    </section>;
};