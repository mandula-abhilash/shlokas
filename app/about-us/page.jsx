import Navigation from "@/components/navigation";
import AboutHero from "@/components/about/hero";
import AboutMission from "@/components/about/mission";
import AboutJourney from "@/components/about/journey";
import { Mail, Phone } from "lucide-react";

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="relative">
        {/* Hero Section */}
        <AboutHero />

        {/* Mission Section */}
        <AboutMission />

        {/* Journey Section */}
        <AboutJourney />

        {/* Contact Section */}
        <section className="relative py-24 bg-muted/50">
          <div className="px-4 mx-auto">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-bold tracking-tight mb-4">
                Contact Us
              </h2>
              <p className="text-muted-foreground mb-8">
                Get in touch to learn more about our mission and how you can
                contribute.
              </p>
              <div className="space-y-4">
                <a
                  href="mailto:contact@visdak.com"
                  className="flex items-center justify-center gap-2 text-primary hover:text-primary/80"
                >
                  <Mail className="h-4 w-4" />
                  contact@visdak.com
                </a>
                {/* <a
                  href="https://wa.me/918050301614"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 text-primary hover:text-primary/80"
                >
                  <Phone className="h-4 w-4" />
                  +91 80503 01614
                </a> */}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
