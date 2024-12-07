import Head from 'next/head';
import Image from 'next/image';
import { Card } from '@/components/ui/card';

import Navigation from '@/components/navigation';

export default function AboutUs() {
  return (
    <div className="h-screen flex flex-col overflow-hidden bg-background overflow-y-scroll">
      <Navigation />
      <Head>
        <title>About Us | Sloka Books for Children</title>
        <meta name="description" content="Learn about our journey of sharing shloka books for children to keep Sanatana Dharma alive. Explore shlokas in different languages and their meanings." />
        <meta name="keywords" content="Sanatana Dharma, Sloka books, Children, Shlokas, Temple, Dasara Pooja, Nandikandi, Tradition, Learning" />
        <meta name="author" content="Brambhika Sametha Mallikarjuna Swamy Temple" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="mx-auto py-12 px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* Image Section */}
          <div className="relative w-full h-64 md:h-full overflow-hidden rounded-lg shadow-lg">
            <Image
              src="/assets/images/bramarambhika-mallana-swamy-devasthanam.jpg"
              alt="Brambhika Sametha Mallikarjuna Swamy Devasthanam"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>

          {/* About Us Content */}
          <Card className="p-8 bg-white shadow-lg rounded-lg flex flex-col justify-center">
            <h1 className="text-4xl font-bold text-primary mb-4">About Us</h1>
            <p className="text-lg leading-relaxed text-gray-700 mb-4">
              Welcome! We’re here to help keep <strong>Sanatana Dharma</strong> strong and share its teachings with children.
            </p>
            <p className="text-lg leading-relaxed text-gray-700 mb-4">
              Our journey began at the <em>Brambhika Sametha Mallikarjuna Swamy Temple</em> in Nandikandi village. Every year at our <strong>Dasara Pooja</strong>, we give <strong>sloka books</strong> to children, teaching them about shlokas and their meanings.
            </p>
            <p className="text-lg leading-relaxed text-gray-700 mb-4">
              These books help children learn shlokas, understand them, and know when to recite them. Through this, they connect with our culture and learn values like peace and respect.
            </p>
            <p className="text-lg leading-relaxed text-gray-700">
              Thank you for joining us on this journey to keep our traditions alive!
            </p>
          </Card>
        </div>

        {/* Additional Content Below */}
        <Card className="p-8 text-center bg-white shadow-lg rounded-lg">
          <h2 className="text-3xl font-bold text-primary mb-4">Our Vision</h2>
          <p className="text-lg leading-relaxed text-gray-700 mb-4">
            We received a lot of love and requests for more sloka books. Families wanted shlokas in different languages so more children could learn. To make it easier for everyone to access these books, we created this website.
          </p>
          <p className="text-lg leading-relaxed text-gray-700 mb-4">
            Now, families everywhere can read and learn shlokas in their own language. This website gives translations, meanings, and guides for reciting shlokas, helping families connect with these sacred verses from home.
          </p>
          <p className="text-lg leading-relaxed text-gray-700 mb-4">
            We hope this website helps keep the spirit of Sanatana Dharma strong and brings families together. Together, let's pass down our traditions for generations to come.
          </p>
          <p className="text-lg leading-relaxed text-gray-700">
            Thank you for being a part of this journey. We hope these shlokas bring peace and blessings to your life.
          </p>
        </Card>
      </div>
    </div>
  );
}
