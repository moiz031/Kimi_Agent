export interface TeamMember {
  id: number;
  name: string;
  role: string;
  bio: string;
  photo: string;
  specialties: string[];
  linkedin?: string;
  twitter?: string;
}

export const defaultTeamMembers: TeamMember[] = [
  {
    id: 1,
    name: 'Zaid Al-Rashid',
    role: 'CEO & Founder',
    bio: '10+ years scaling brands from zero to market leaders. Serial entrepreneur with exits in SaaS and e-commerce.',
    photo: '/team-ceo.jpg',
    specialties: ['Growth Strategy', 'Product Vision', 'Investor Relations'],
    linkedin: '#',
    twitter: '#',
  },
  {
    id: 2,
    name: 'Sara Mirza',
    role: 'Lead Developer',
    bio: 'Full-stack architect specializing in React, Next.js, and performance-first web applications.',
    photo: '/team-developer.jpg',
    specialties: ['React / Next.js', 'Web Performance', 'API Architecture'],
    linkedin: '#',
  },
  {
    id: 3,
    name: 'Hamza Tariq',
    role: 'Creative Director',
    bio: 'Award-winning designer with a passion for brand narratives that convert visitors into loyal customers.',
    photo: '/team-creative.jpg',
    specialties: ['Brand Identity', 'UI/UX Design', 'Motion Graphics'],
    linkedin: '#',
    twitter: '#',
  },
  {
    id: 4,
    name: 'Nadia Khan',
    role: 'SEO Strategist',
    bio: 'Organic growth specialist who has ranked over 3,400 keywords to #1 positions across competitive niches.',
    photo: '/team-seo.jpg',
    specialties: ['Technical SEO', 'Content Strategy', 'Link Building'],
    linkedin: '#',
  },
  {
    id: 5,
    name: 'Usman Chaudhry',
    role: 'PPC & Paid Media Manager',
    bio: 'Meta & Google certified ads expert delivering consistent 8x+ ROAS across e-commerce and lead gen.',
    photo: '/team-ppc.jpg',
    specialties: ['Google Ads', 'Meta Ads', 'Conversion Optimization'],
    linkedin: '#',
    twitter: '#',
  },
  {
    id: 6,
    name: 'Ayesha Siddiqui',
    role: 'Content Lead',
    bio: 'Storyteller and strategist crafting content that ranks, resonates, and drives measurable pipeline growth.',
    photo: '/team-content.jpg',
    specialties: ['Copywriting', 'Content Planning', 'Email Campaigns'],
    linkedin: '#',
  },
  {
    id: 7,
    name: 'Bilal Ahmed',
    role: 'Account Manager',
    bio: 'Client success advocate ensuring every engagement exceeds expectations with proactive communication.',
    photo: '/team-account.jpg',
    specialties: ['Client Relations', 'Project Management', 'Reporting'],
    linkedin: '#',
  },
  {
    id: 8,
    name: 'Rabia Hassan',
    role: 'Growth Strategist',
    bio: 'Data-driven marketer building full-funnel growth engines for B2B SaaS and enterprise brands.',
    photo: '/team-strategy.jpg',
    specialties: ['Growth Hacking', 'Analytics', 'Funnel Optimization'],
    linkedin: '#',
    twitter: '#',
  },
];
