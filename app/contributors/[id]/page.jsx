import Image from 'next/image';
import Link from 'next/link';
import { Card } from '@/components/ui/card';
import Navigation from '@/components/navigation';
import { Mail, Phone, Globe, Award } from 'lucide-react';
import { contributors } from '@/lib/contributors';

export async function generateStaticParams() {
  return Object.keys(contributors).map((id) => ({
    id,
  }));
}

export default function ContributorProfile({ params }) {
  const contributor = contributors[params.id];

  if (!contributor) {
    return <div>Contributor not found</div>;
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Header Section */}
          <Card className="p-8 mb-8 relative overflow-hidden">
            <div 
              className="absolute inset-0 opacity-5 bg-repeat"
              style={{
                backgroundImage: 'url("/assets/pattern.jpg")',
                backgroundSize: '64px 64px'
              }}
            />
            <div className="relative flex flex-col md:flex-row items-center gap-8">
              <div className="relative w-48 h-48 rounded-full overflow-hidden">
                <Image
                  src={contributor.image}
                  alt={contributor.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="text-center md:text-left">
                <h1 className="text-3xl font-bold text-primary mb-2">{contributor.name}</h1>
                <p className="text-xl text-muted-foreground mb-4">{contributor.title}</p>
                <p className="text-lg italic text-primary/80">{contributor.tagline}</p>
              </div>
            </div>
          </Card>

          {/* About Section */}
          <Card className="p-8 mb-8">
            <h2 className="text-2xl font-bold text-primary mb-4">About</h2>
            <p className="text-muted-foreground leading-relaxed">{contributor.bio}</p>
          </Card>

          {/* Services Section */}
          <Card className="p-8 mb-8">
            <h2 className="text-2xl font-bold text-primary mb-6">Services Offered</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {contributor.services.map((service, index) => (
                <div key={index} className="p-6 bg-card/50 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </div>
              ))}
            </div>
          </Card>

          {/* Recognition Section */}
          <Card className="p-8 mb-8">
            <h2 className="text-2xl font-bold text-primary mb-6">Recognition</h2>
            <div className="space-y-4">
              {contributor.recognition.map((achievement, index) => (
                <div key={index} className="flex items-center gap-3">
                  <Award className="h-5 w-5 text-primary" />
                  <span className="text-muted-foreground">{achievement}</span>
                </div>
              ))}
            </div>
          </Card>

          {/* Contact Section */}
          <Card className="p-8 mb-8">
            <h2 className="text-2xl font-bold text-primary mb-6">Contact Information</h2>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary" />
                <a href={`mailto:${contributor.contact.email}`} className="text-primary hover:underline">
                  {contributor.contact.email}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary" />
                <a href={`tel:${contributor.contact.phone}`} className="text-primary hover:underline">
                  {contributor.contact.phone}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Globe className="h-5 w-5 text-primary" />
                <a href={`https://${contributor.contact.website}`} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  {contributor.contact.website}
                </a>
              </div>
            </div>
          </Card>

          {/* Testimonials Section */}
          <Card className="p-8 mb-8">
            <h2 className="text-2xl font-bold text-primary mb-6">Testimonials</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {contributor.testimonials.map((testimonial, index) => (
                <div key={index} className="p-6 bg-card/50 rounded-lg">
                  <p className="text-muted-foreground italic mb-4">"{testimonial.text}"</p>
                  <p className="font-semibold text-primary">- {testimonial.name}</p>
                </div>
              ))}
            </div>
          </Card>

          {/* Footer Section */}
          <div className="text-center">
            <Link
              href="/contributors"
              className="inline-block px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
            >
              View All Contributors
            </Link>
            <p className="mt-4 text-muted-foreground">
              We thank {contributor.name} for their valuable contributions to our mission of promoting Sanatana Dharma.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

export const metadata = {
  title: 'Contributor Profile | Shlokas for Children',
  description: 'Learn about our expert contributors who help preserve and share Sanatana Dharma through shloka education.',
};