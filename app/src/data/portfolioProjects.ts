export interface PortfolioProject {
  id: number;
  title: string;
  client: string;
  category: string;
  image: string;
  description: string;
  featured?: boolean;
  results: { label: string; value: string }[];
  videoUrl?: string;
  projectLink?: string;
  fullDetails?: {
    challenge: string;
    solution: string;
    timeline: string;
    deliverables: string[];
    testimonial?: string;
  };
}

export const portfolioProjects: PortfolioProject[] = [
  {
    id: 1,
    title: 'FinTech Platform Redesign & Growth',
    client: 'PayPulse Global',
    category: 'Web Design',
    image: '/portfolio-saas.jpg',
    description: 'Complete redesign and conversion optimization for a fintech SaaS platform.',
    featured: true,
    results: [
      { label: 'Conversion Rate', value: '+340%' },
      { label: 'Organic Traffic', value: '1.2M/mo' },
      { label: 'Pipeline Revenue', value: '$45M' },
    ],
    fullDetails: {
      challenge: 'PayPulse needed a modern financial dashboard, faster onboarding, and improved enterprise CTA conversion.',
      solution: 'Built an ultra-fast React + Vite platform with data-driven dashboards, AI-powered personalization, and premium brand motion design.',
      timeline: '3 Months',
      deliverables: ['UI/UX redesign', 'Frontend build', 'Landing page funnel', 'Analytics integration'],
      testimonial: 'The new platform gave our enterprise product the confidence and conversion lift we needed.',
    },
  },
  {
    id: 2,
    title: 'E-Commerce Growth Marketing System',
    client: 'Aura Lifestyle',
    category: 'Marketing',
    image: '/portfolio-ecommerce.jpg',
    description: 'Omnichannel campaigns that grew monthly sales from $50k to $600k+.',
    featured: true,
    results: [
      { label: 'ROAS', value: '8.4x' },
      { label: 'New Customers', value: '85K+' },
      { label: 'Revenue Growth', value: '1,200%' },
    ],
    fullDetails: {
      challenge: 'High acquisition costs were preventing scalable growth.',
      solution: 'Implemented performance creative, AI-driven retargeting, and conversion rate optimization across paid social and search.',
      timeline: '6 Months',
      deliverables: ['Campaign strategy', 'Ad creative', 'Funnel optimization', 'Analytics reporting'],
      testimonial: 'Our ads finally delivered consistent, profitable scale across every funnel stage.',
    },
  },
  {
    id: 3,
    title: 'Healthcare SEO & Authority Hub',
    client: 'HealthFirst Network',
    category: 'SEO',
    image: '/portfolio-seo.jpg',
    description: 'Technical SEO and content hub strategy that drove 5M+ organic visits.',
    featured: false,
    results: [
      { label: 'Search Visits', value: '5.4M' },
      { label: '#1 Terms', value: '3,400+' },
      { label: 'Bookings', value: '+290%' },
    ],
    fullDetails: {
      challenge: 'Low visibility for premium medical services in competitive search results.',
      solution: 'Created a HIPAA-safe content hub, schema-rich site architecture, and speed-optimized technical SEO foundation.',
      timeline: '9 Months',
      deliverables: ['SEO strategy', 'Content planning', 'Schema implementation', 'Site speed audit'],
      testimonial: 'Our search presence became the lead engine for quality patient appointments.',
    },
  },
  {
    id: 4,
    title: 'SaaS Identity & Landing Experience',
    client: 'Cognitive AI',
    category: 'Branding',
    image: '/portfolio-social.jpg',
    description: 'Brand system and premium landing experience for an AI SaaS startup.',
    featured: false,
    results: [
      { label: 'Lead Quality', value: '+220%' },
      { label: 'Demo Requests', value: '1,800+' },
      { label: 'Series A Traffic', value: '+420%' },
    ],
    fullDetails: {
      challenge: 'A complex AI product needed a simple, trustworthy enterprise positioning.',
      solution: 'Designed a bold visual identity with data-led storytelling, interactive experiences, and clear enterprise conversion funnels.',
      timeline: '2 Months',
      deliverables: ['Brand system', 'Landing page design', 'Product narrative', 'Pitch assets'],
      testimonial: 'The brand moved our product from confusing to credible in one launch cycle.',
    },
  },
  {
    id: 5,
    title: 'Social Media Launch Campaign',
    client: 'Velox Electric',
    category: 'Social Media',
    image: '/portfolio-content.jpg',
    description: 'Viral short-form campaign and influencer activation for a hardware brand.',
    featured: false,
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    projectLink: 'https://example.com/velox-campaign',
    results: [
      { label: 'Views', value: '45M+' },
      { label: 'Engagement', value: '14.2%' },
      { label: 'Pre-Orders', value: '12,500' },
    ],
  },
  {
    id: 6,
    title: 'Data Platform UX & Design System',
    client: 'DataFlow Cloud',
    category: 'Web Design',
    image: '/hero-bg.jpg',
    description: 'Enterprise dashboard design that simplifies complex analytics workflows.',
    featured: false,
    results: [
      { label: 'Retention', value: '+68%' },
      { label: 'NPS', value: '74' },
      { label: 'DAU', value: '250K' },
    ],
  },
];
