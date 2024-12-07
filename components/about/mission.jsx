import { Card } from "@/components/ui/card";
import { Heart, BookOpen, Users } from "lucide-react";

export default function AboutMission() {
  const missions = [
    {
      icon: <Heart className="h-6 w-6 text-primary" />,
      title: "Preserve Tradition",
      description:
        "Keeping our ancient wisdom and cultural heritage alive for future generations.",
    },
    {
      icon: <BookOpen className="h-6 w-6 text-primary" />,
      title: "Educate Children",
      description:
        "Making sacred knowledge accessible and engaging for young minds.",
    },
    {
      icon: <Users className="h-6 w-6 text-primary" />,
      title: "Build Community",
      description:
        "Creating a global community of learners and practitioners of Sanatana Dharma.",
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="px-4 mx-auto">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight mb-4">
              Our Mission
            </h2>
            <p className="text-muted-foreground">
              Guided by tradition, powered by innovation
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {missions.map((mission, index) => (
              <Card
                key={index}
                className="p-6 text-center hover:shadow-lg transition-shadow"
              >
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mb-4">
                  {mission.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">{mission.title}</h3>
                <p className="text-muted-foreground">{mission.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
