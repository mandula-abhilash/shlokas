import Image from "next/image";
import { Card } from "@/components/ui/card";

export default function AboutHero() {
  return (
    <section className="py-12 px-2 md:px-8 lg:py-24">
      <div className="px-4 mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Container */}
          <Card className="relative aspect-[4/3] overflow-hidden">
            <Image
              src="/assets/images/bramarambhika-mallana-swamy-devasthanam.jpg"
              alt="Brambhika Sametha Mallikarjuna Swamy Temple"
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
            />
          </Card>

          {/* Content Container */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-5xl font-bold tracking-tight leading-relaxed">
                A Sanatana Dharma Effort: Shlokas for Children{" "}
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                At Brambhika Sametha Mallikarjuna Swamy Temple, we're dedicated
                to keeping Sanatana Dharma alive through the teaching of shlokas
                to children, bridging ancient wisdom with modern learning
                approaches.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <Card className="p-4 bg-primary/5 border-primary/10">
                <div className="text-3xl font-bold text-primary mb-1">2</div>
                <div className="text-sm text-muted-foreground">
                  Languages Available
                </div>
              </Card>
              <Card className="p-4 bg-primary/5 border-primary/10">
                <div className="text-3xl font-bold text-primary mb-1">18</div>
                <div className="text-sm text-muted-foreground">
                  Sacred Shlokas
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
