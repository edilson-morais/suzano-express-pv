import { Instagram, Youtube, Linkedin, Mail } from "lucide-react";
export const Footer = () => {
  return <footer className="py-16 bg-card border-t border-primary/20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Disclaimer */}
          <div className="text-center">
            <p className="text-sm text-muted-foreground leading-relaxed max-w-4xl mx-auto">
              A <span className="font-bold">Comunidade Cr[IA]dores da Nova Era</span> não é uma empresa associada ao WhatsApp INC, Facebook INC, META ou qualquer uma de suas empresas, e não possui relação comercial ou consentimento para uso. Copyright © 2024. Desenvolvido por Avianto Estúdio. Ao fazer seu cadastro em nosso site, você concorda com os nossos Termos de Uso e Política de Privacidade.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12 items-center">
            {/* Logo */}
            <div className="text-center md:text-left">
              <div className="space-y-2">
                <h3 className="text-2xl font-bold">
                  
                  <span className="text-primary">Curso de Pandeiro Suzano Express</span>
                  
                </h3>
                <p className="text-sm text-muted-foreground">AgentesIA</p>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="text-center">
              <h4 className="font-semibold mb-4"></h4>
              
            </div>
            
            {/* Contact */}
            <div className="text-center md:text-right">
              <h4 className="font-semibold mb-4">Contato:</h4>
              <a href="mailto:suporte@criadoresdanovaera.com.br" className="flex items-center justify-center md:justify-end space-x-2 text-muted-foreground hover:text-primary transition-smooth">
                <Mail size={16} />
                <span>edilsomdil@gmail.com</span>
              </a>
            </div>
          </div>
          
          <div className="border-t border-primary/20 pt-8 text-center space-y-4">
            <p className="text-lg font-bold">
              Todos os direitos reservados – <span className="text-primary">Duni Digital 2025</span>
            </p>
            
            <div className="text-sm text-muted-foreground">
              Desenvolvido por <span className="font-bold text-primary">NexPages</span>
            </div>
          </div>
        </div>
      </div>
    </footer>;
};