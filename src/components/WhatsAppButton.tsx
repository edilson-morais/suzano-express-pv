import { MessageCircle } from "lucide-react";

export const WhatsAppButton = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="relative">
        <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-75"></div>
        <a
          href="https://wa.me/5511999999999"
          target="_blank"
          rel="noopener noreferrer"
          className="relative flex items-center justify-center w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
        >
          <MessageCircle size={24} className="text-white" />
        </a>
      </div>
      
      <div className="absolute bottom-16 right-0 bg-white text-black px-3 py-2 rounded-lg shadow-lg text-sm font-medium whitespace-nowrap">
        Hélia P. há 2 horas<br />
        <span className="text-green-600">comprou no cartão de crédito</span>
      </div>
    </div>
  );
};