export const siteData = {
  name: 'KVL Khyati',
  role: 'Frontend Developer + Data Science Student',
  tagline: 'Building immersive digital experiences through code, creativity, and modern UI engineering.',
  bio:
    'Computer Science student specializing in Data Science with strong frontend and backend development skills. Passionate about interactive user experiences, creative digital design, and modern web engineering.',
  university: 'Koneru Lakshmaiah University (KL University), Vaddeswaram, Guntur',
  department: 'Computer Science Engineering',
  specialization: 'Data Science',
  leadership: 'Creative & Content Lead - KL Forge',
  location: 'Guntur, Andhra Pradesh',
  assets: {
    hero: 'https://res.cloudinary.com/dkrvtfbor/image/upload/v1779045034/Screenshot_2026_0518_003933_ce9hhy.png',
    creativeWorks: [
      {
        title: 'Pixel Poster System',
        type: 'Poster Design',
        image: 'https://res.cloudinary.com/dkrvtfbor/image/upload/v1779045545/Screenshot_2026_0518_004620_za6rvd.png'
      },
      {
        title: 'Open Source Pixel Icons',
        type: 'Creative Layout',
        image: 'https://res.cloudinary.com/dkrvtfbor/image/upload/v1779045545/Screenshot_2026_0518_004557_opekf8.png'
      }
    ]
  },
  contact: {
    email: '2400033157@kluniversity.in',
    github: 'https://github.com/kl2400033157',
    linkedin:
      'https://www.linkedin.com/in/khyati-kvl-7b7969364/'
  },
  skills: {
    frontend: ['React', 'Vite React', 'Next.js', 'TypeScript', 'JavaScript', 'HTML', 'CSS'],
    backend: ['Java', 'Spring Boot', 'Node.js', 'JWT', 'Maven', 'APIs'],
    database: ['SQL', 'MongoDB', 'Supabase'],
    cloud: ['AWS'],
    creative: ['Adobe', 'Poster Designing', 'Creative Content']
  },
  allSkills: [
    'React',
    'Vite React',
    'Next.js',
    'TypeScript',
    'JavaScript',
    'HTML',
    'CSS',
    'Java',
    'Spring Boot',
    'Node.js',
    'JWT',
    'Maven',
    'APIs',
    'SQL',
    'MongoDB',
    'Supabase',
    'AWS',
    'Adobe',
    'Poster Designing',
    'Creative Content'
  ],
  experience: {
    organization: 'KL Forge',
    role: 'Creative & Content Lead',
    period: 'Current',
    description:
      'Leading creative and content direction for student-led initiatives, posters, campaign systems, and community storytelling.',
    highlights: ['Creative direction', 'Poster systems', 'Community content', 'Visual storytelling']
  },
  project: {
    title: 'SocketIO Share Platform',
    subtitle: 'Real-time interaction and sharing platform',
    description:
      'A real-time interaction and sharing platform built with Socket.IO and modern frontend architecture.',
    tech: ['React', 'Socket.IO', 'JavaScript', 'APIs', 'Realtime UX'],
    github: 'https://github.com/kl2400033157',
    linkedin:
      'https://www.linkedin.com/in/khyati-kvl-7b7969364/',
    highlights: [
      'Realtime event-driven sharing flow',
      'Modern frontend architecture',
      'Interactive Socket.IO communication layer',
      'Clean UI states for active sessions'
    ]
  },
  stats: [
    { label: 'Specialization', value: 'Data Science' },
    { label: 'Leadership', value: 'KL Forge' },
    { label: 'Core Stack', value: 'Next.js' },
    { label: 'Focus', value: 'Realtime UI' }
  ]
}

export type CreativeWork = (typeof siteData.assets.creativeWorks)[0]
