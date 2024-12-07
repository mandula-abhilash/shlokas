'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Card } from '@/components/ui/card';
import Navigation from '@/components/navigation';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { contributorsList } from '@/lib/contributors';

export default function Contributors() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredContributors = contributorsList.filter(contributor =>
    contributor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    contributor.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    contributor.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-primary text-center mb-8">
            Our Contributors
          </h1>
          
          <div className="relative mb-8">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search contributors..."
              className="pl-10"
            />
          </div>

          <div className="grid gap-6">
            {filteredContributors.map((contributor) => (
              <Card key={contributor.id} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex flex-col md:flex-row gap-6 items-center">
                  <div className="relative w-32 h-32 rounded-full overflow-hidden">
                    <Image
                      src={contributor.image}
                      alt={contributor.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  
                  <div className="flex-1 text-center md:text-left">
                    <h2 className="text-2xl font-bold text-primary mb-2">
                      {contributor.name}
                    </h2>
                    <p className="text-lg text-muted-foreground mb-2">
                      {contributor.title}
                    </p>
                    <p className="text-muted-foreground mb-4">
                      {contributor.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {contributor.expertise.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                    <Link
                      href={`/contributors/${contributor.id}`}
                      className="inline-block px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                    >
                      View Profile
                    </Link>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}