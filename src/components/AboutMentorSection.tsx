import { Card } from "@/components/ui/card";
import mentorPhoto from "@/assets/mentor-photo.jpg";
export const AboutMentorSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="p-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <img 
                  src="/lovable-uploads/885c9407-5578-4769-b987-e56746077b6b.png" 
                  alt="Mentor Suzano" 
                  className="w-full h-auto rounded-lg"
                />
              </div>
              <div className="space-y-6">
                <h2 className="text-3xl font-bold">Conheça seu Mentor</h2>
                <p className="text-lg text-muted-foreground">
                  Marcos Suzano é reconhecido mundialmente como um dos maiores pandeiristas do Brasil, 
                  revolucionando a forma de tocar o instrumento com sua técnica única e inovadora.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};