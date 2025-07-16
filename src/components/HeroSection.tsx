import { Button } from "@/components/ui/button";
import heroBackground from "@/assets/hero-bg.jpg";
export const HeroSection = () => {
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-bg">
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20" style={{
      backgroundImage: `url(${heroBackground})`
    }} />
      <div className="absolute inset-0 bg-gradient-hero" />
      
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-wide text-primary font-medium">CURSO DE PANDEIRO SUZANO EXPRESS</p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
              
              <span className="text-primary">suzano express</span>
              
            </h1>
            
          </div>
          
          <div className="space-y-6">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold leading-tight">
              <span className="text-foreground">Aprenda a criar seus próprios ritmos no pandeiro e surpreenda — mesmo que esteja </span>
              <span className="text-primary">começando do zero.</span>
              
            </h2>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">Está cansado(a) de não ter ideias na hora de tocar pandeiro? Com nosso método exclusivo, você vai desbloquear seu potencial criativo e apresentar ritmos novos e empolgantes. Domine técnicas inovadoras e impressione a todos!</p>
          </div>
          
          <div className="pt-8">
            <Button variant="hero" size="xl" className="mb-8">
              Quero Me Tornar Um Cr[IA]dor da Nova Era
            </Button>
          </div>
          
          <div className="flex items-center justify-center space-x-4 pt-8">
            <div className="flex -space-x-2">
              {[...Array(8)].map((_, i) => <div key={i} className="w-12 h-12 rounded-full bg-gradient-primary border-2 border-background flex items-center justify-center text-primary-foreground font-bold">
                  {String.fromCharCode(65 + i)}
                </div>)}
            </div>
            <div className="text-left">
              <p className="text-lg font-bold">
                + <span className="text-primary">dominando o PANDEIRO</span> alunos <span className="font-bold">dominando a IA</span>
              </p>
              <p className="text-lg">
                e enriquecendo <span className="font-bold">e tocando cada vez mais ainda!</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>;
};