export const contributors = {
  'pandit-sharma': {
    name: 'Pandit Ramesh Sharma',
    title: 'Vedic Scholar & Sanskrit Expert',
    image: '/assets/images/contributors/sharma.jpg',
    tagline: '"Preserving ancient wisdom for future generations"',
    bio: 'With over 25 years of dedicated service in Vedic studies and Sanskrit, Pandit Ramesh Sharma has been a pillar of spiritual knowledge and guidance. His expertise spans across traditional Vedic rituals, Sanskrit education, and spiritual counseling. A graduate of Banaras Hindu University with a specialization in Sanskrit literature.',
    services: [
      {
        title: 'Traditional Pujas',
        description: 'Performs all types of traditional pujas and rituals'
      },
      {
        title: 'Sanskrit Classes',
        description: 'Individual and group Sanskrit learning sessions'
      },
      {
        title: 'Spiritual Counseling',
        description: 'Personal guidance on spiritual matters and life decisions'
      }
    ],
    recognition: [
      'Sanskrit Ratna Award (2018)',
      'Distinguished Scholar, Vedic Foundation',
      'Author of "Understanding Sanskrit Verses"'
    ],
    contact: {
      email: 'pandit.sharma@example.com',
      phone: '+91 98765 43210',
      website: 'www.panditsharma.com'
    },
    testimonials: [
      {
        name: 'Rajesh Kumar',
        text: 'Pandit ji\'s guidance has been invaluable in understanding the deeper meanings of our ancient texts.'
      },
      {
        name: 'Priya Patel',
        text: 'His Sanskrit classes are engaging and have helped me connect with our cultural heritage.'
      }
    ]
  },
  'dr-rao': {
    name: 'Dr. Lakshmi Rao',
    title: 'Sanskrit Professor & Researcher',
    image: '/assets/images/contributors/rao.jpg',
    tagline: '"Bridging ancient wisdom with modern understanding"',
    bio: 'Dr. Lakshmi Rao is a distinguished professor of Sanskrit with over two decades of academic excellence. Her research focuses on ancient Vedic texts and their relevance in contemporary times. She holds a Ph.D. in Sanskrit Literature from Delhi University and has published numerous papers in international journals.',
    services: [
      {
        title: 'Academic Research',
        description: 'Specializes in Vedic literature research and analysis'
      },
      {
        title: 'Sanskrit Workshops',
        description: 'Conducts intensive workshops on Sanskrit grammar and literature'
      },
      {
        title: 'Manuscript Studies',
        description: 'Expert analysis and interpretation of ancient manuscripts'
      }
    ],
    recognition: [
      'President\'s Award for Sanskrit Research (2020)',
      'Senior Fellow, Indian Council of Historical Research',
      'Published author of "Modern Interpretations of Vedic Texts"'
    ],
    contact: {
      email: 'dr.rao@example.com',
      phone: '+91 98765 43211',
      website: 'www.drlakshmirao.com'
    },
    testimonials: [
      {
        name: 'Dr. Sharma',
        text: 'Dr. Rao\'s research methodology sets new standards in Vedic studies.'
      },
      {
        name: 'Prof. Gupta',
        text: 'Her contributions to Sanskrit literature are truly remarkable.'
      }
    ]
  }
};

export const contributorsList = Object.entries(contributors).map(([id, data]) => ({
  id,
  name: data.name,
  title: data.title,
  image: data.image,
  description: data.bio.substring(0, 150) + '...',
  expertise: data.services.map(service => service.title)
}));