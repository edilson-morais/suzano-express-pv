import { Card } from "@/components/ui/card";
import mentorPhoto from "@/assets/mentor-photo.jpg";
export const AboutMentorSection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Sobre o Mentor</h2>
          <Card className="p-8">
            <img src={mentorPhoto} alt="Mentor" className="w-32 h-32 rounded-full mx-auto mb-6" />
            <p className="text-lg text-muted-foreground">
              Informações sobre o mentor serão adicionadas aqui.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};