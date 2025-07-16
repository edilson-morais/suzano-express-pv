import { Instagram, Youtube, Linkedin, Mail } from "lucide-react";
export const Footer = () => {
  return (
    <footer className="py-16 bg-card border-t border-primary/20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Disclaimer */}
          <div className="text-center">
            <p className="text-sm text-muted-foreground leading-relaxed max-w-4xl mx-auto">
              A <span className="font-bold">Comunidade Pandeirando com Carlos Café</span> não é uma empresa associada ao WhatsApp INC, Facebook INC, META ou qualquer uma de suas empresas, e não possui relação comercial ou consentimento para uso.
            </p>
          </div>
          
          <div className="text-center">
            <p className="text-sm text-muted-foreground leading-relaxed max-w-4xl mx-auto">
              Copyright © 2025. Desenvolvido por Edilson Morais. Ao fazer seu cadastro em nosso site, você concorda com os nossos Termos de Uso e Política de Privacidade.
            </p>
          </div>
          
          <div className="text-center space-y-6">
            <h3 className="text-2xl font-bold text-primary">
              Pandeirando com Carlos Café
            </h3>
            
            <div className="flex justify-center space-x-8 text-sm">
              <a href="#" className="text-primary hover:text-primary/80 transition-smooth">
                Termos de Uso
              </a>
              <span className="text-muted-foreground">|</span>
              <a href="#" className="text-primary hover:text-primary/80 transition-smooth">
                Política de Privacidade
              </a>
            </div>
            
            <p className="text-sm text-muted-foreground">
              Todos os direitos reservados – Edilson Morais 2025
            </p>
            
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">
                Contato: <a href="mailto:edilsomdil@gmail.com" className="text-primary hover:text-primary/80 transition-smooth">edilsomdil@gmail.com</a>
              </p>
              <p className="text-sm text-muted-foreground">
                Desenvolvido por Edilson Morais
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};