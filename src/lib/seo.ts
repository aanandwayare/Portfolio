import { Metadata } from 'next';

export const siteConfig = {
  name: 'Anand Chandrakant Wayare',
  title: 'Anand Wayare | Full Stack Developer & AI Engineer',
  description:
    'Portfolio of Anand Chandrakant Wayare — Full Stack Developer & AI Engineer based in Pune, India. Specializing in Next.js, React, TypeScript, Python, Generative AI, LangChain, and scalable distributed web architectures.',
  url: 'https://anandwayare.dev',
  ogImage: 'https://anandwayare.dev/og-image.png',
  location: 'Pune, Maharashtra, India',
  email: 'aanandwayare61@gmail.com',
  phone: '+91 7276011718',
  social: {
    github: 'https://github.com/aanandwayare',
    linkedin: 'https://www.linkedin.com/in/anand-wayare-8b1202385/',
  },
  skills: [
    'Full Stack Development',
    'Artificial Intelligence',
    'Next.js',
    'React',
    'TypeScript',
    'Python',
    'LangChain',
    'FastAPI',
    'Node.js',
    'Docker',
    'Tailwind CSS',
    'System Design',
  ],
};

export function constructMetadata({
  title = siteConfig.title,
  description = siteConfig.description,
  image = siteConfig.ogImage,
  noIndex = false,
}: {
  title?: string;
  description?: string;
  image?: string;
  noIndex?: boolean;
} = {}): Metadata {
  return {
    title,
    description,
    keywords: [
      'Anand Wayare',
      'Anand Chandrakant Wayare',
      'Full Stack Developer',
      'AI Engineer',
      'Machine Learning Engineer',
      'Next.js Developer',
      'React Developer',
      'Software Engineer Pune',
      'Sinhagad Institute of Technology',
      'LangChain Developer',
      'TypeScript Developer',
      'Web Development Portfolio',
    ],
    authors: [
      {
        name: 'Anand Chandrakant Wayare',
        url: 'https://github.com/aanandwayare',
      },
    ],
    creator: 'Anand Chandrakant Wayare',
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url: siteConfig.url,
      title,
      description,
      siteName: siteConfig.name,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: siteConfig.name,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
      creator: '@anandwayare',
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
      },
    },
    icons: {
      icon: '/favicon.ico',
      shortcut: '/favicon.ico',
      apple: '/apple-touch-icon.png',
    },
    manifest: '/manifest.json',
  };
}

export function generatePersonJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Anand Chandrakant Wayare',
    givenName: 'Anand',
    familyName: 'Wayare',
    jobTitle: 'Full Stack Developer & AI Engineer',
    url: siteConfig.url,
    sameAs: [siteConfig.social.github, siteConfig.social.linkedin],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Pune',
      addressRegion: 'Maharashtra',
      addressCountry: 'India',
    },
    email: siteConfig.email,
    telephone: siteConfig.phone,
    alumniOf: [
      {
        '@type': 'EducationalOrganization',
        name: 'Sinhagad Institute of Technology, Lonavala',
      },
    ],
    knowsAbout: siteConfig.skills,
  };
}
