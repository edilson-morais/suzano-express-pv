export const TestimonialsSection = () => {
  const videoIds = [
    "8lXgS2xZxv8",
    "lJCwvkgSUVY", 
    "a5Fkulj2SIY",
    "ZnkHaKyEJ4A"
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto text-center space-y-12">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-5xl font-bold">
              Eles decidiram aplicar.
            </h2>
            <p className="text-2xl md:text-3xl font-semibold text-primary">
              E colheram os frutos.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {videoIds.map((videoId, index) => (
              <div key={index} className="aspect-video rounded-lg overflow-hidden shadow-lg hover:shadow-glow-cyan transition-smooth">
                <iframe
                  src={`https://www.youtube.com/embed/${videoId}`}
                  title={`Depoimento ${index + 1}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};