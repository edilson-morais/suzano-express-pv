import { Instagram, Youtube, Linkedin, Mail } from "lucide-react";
export const Footer = () => {
  return <footer className="py-16 bg-card border-t border-primary/20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-8">
          {/* Disclaimer */}
          <div className="text-center">
            <p className="text-sm text-muted-foreground leading-relaxed max-w-4xl mx-auto">
              A <span className="font-bold">Comunidade suzano express</span> não é uma empresa associada ao WhatsApp INC, Facebook INC, META ou qualquer uma de suas empresas, e não possui relação comercial ou consentimento para uso.
            </p>
          </div>
          
          <div className="text-center">
            <p className="text-sm text-muted-foreground leading-relaxed max-w-4xl mx-auto">
              Copyright © 2025. Desenvolvido por Edilson Morais. Ao fazer seu cadastro em nosso site, você concorda com os nossos Termos de Uso e Política de Privacidade.
            </p>
          </div>

          {/* Brand and Links */}
          <div className="text-center space-y-4">
            <h3 className="text-2xl font-bold text-primary">suzano express</h3>
            
            <div className="flex justify-center items-center space-x-4 text-sm">
              <a href="#" className="text-muted-foreground hover:text-primary transition-smooth">
                Termos de Uso
              </a>
              <span className="text-muted-foreground">|</span>
              <a href="https://politica-de-privacidade.rota50ia.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-smooth">
                Política de Privacidade
              </a>
            </div>
          </div>
          
          <div className="border-t border-primary/20 pt-8 text-center space-y-4">
            <p className="text-lg font-bold">
              Todos os direitos reservados – <span className="text-primary">Edilson Morais 2025</span>
            </p>
            
            <div className="flex items-center justify-center space-x-2 text-muted-foreground">
              <Mail size={16} />
              <span>Contato: </span>
              <a href="mailto:edilsomdil@gmail.com" className="hover:text-primary transition-smooth">
                edilsomdil@gmail.com
              </a>
            </div>
            
            <div className="text-sm text-muted-foreground">
              Desenvolvido por <span className="font-bold text-primary">Edilson Morais</span>
            </div>
          </div>
        </div>
      </div>
    </footer>;
};