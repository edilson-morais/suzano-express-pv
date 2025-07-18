import { MessageCircle } from "lucide-react";
export const WhatsAppButton = () => {
  return <div className="fixed bottom-6 right-6 z-50">
      <div className="relative">
        <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-75"></div>
        <a href="https://api.whatsapp.com/send/?phone=5562981245921&text=Olá+gostaria+de+saber+informações+sobre+o+*suzano*+*express*" target="_blank" rel="noopener noreferrer" className="relative flex items-center justify-center w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group">
          <MessageCircle size={24} className="text-white" />
        </a>
      </div>
      
      
    </div>;
};