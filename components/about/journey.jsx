import Image from "next/image";
import { Card } from "@/components/ui/card";

export default function AboutJourney() {
  return (
    <section className="py-24 bg-muted/50">
      <div className="px-4 mx-auto">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] lg:h-[600px] rounded-lg overflow-hidden">
              <Image
                src="/assets/pattern.jpg"
                alt="Our Journey"
                fill
                className="object-cover"
              />
            </div>

            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold tracking-tight mb-4">
                  Our Journey
                </h2>
                <p className="text-muted-foreground">
                  From a small temple initiative to a digital platform reaching
                  thousands
                </p>
              </div>

              <div className="space-y-6">
                <Card className="p-6 bg-background/50 backdrop-blur-sm">
                  <h3 className="text-lg font-semibold mb-2">The Beginning</h3>
                  <p className="text-muted-foreground">
                    Started at the Brambhika Sametha Mallikarjuna Swamy Temple,
                    distributing sloka books during Dasara Pooja.
                  </p>
                </Card>

                <Card className="p-6 bg-background/50 backdrop-blur-sm">
                  <h3 className="text-lg font-semibold mb-2">
                    Growing Community
                  </h3>
                  <p className="text-muted-foreground">
                    Expanded to multiple languages and formats to reach more
                    children and families.
                  </p>
                </Card>

                <Card className="p-6 bg-background/50 backdrop-blur-sm">
                  <h3 className="text-lg font-semibold mb-2">
                    Digital Transformation
                  </h3>
                  <p className="text-muted-foreground">
                    Launched this platform to make shlokas accessible to
                    everyone, anywhere.
                  </p>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
