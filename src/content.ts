export type FolderId = 'about' | 'experience' | 'skills';
export const folders: {
  id: FolderId;
  name: string;
}[] = [
  { id: 'about', name: 'About Me' },
  { id: 'experience', name: 'Experience' },
  { id: 'skills', name: 'Skills' },
];

// --------- Dock ---------- //
export const dockLinks = {
  github: 'https://github.com/imilisav',
  linkedin: 'https://www.linkedin.com/in/imilisav',
};

// --------- About ---------- //
export const about = {
  text: `My name is Ilija, and I\'m passionate about software development. My journey began as a kid with a fascination for websites, which led me to build basic websites for friends and family. Since then, I\'ve continually pushed my limits to refine my craft. While my primary focus is front-end development, I\'m equally comfortable across the full stack. I\'m currently seeking new opportunities in front-end, back-end, or full-stack roles.`,
};

// --------- Work Experience ---------- //
export const experiences = [
  {
    role: 'Software Engineer',
    company: 'Candescent (Formerly NCR/NCR Voyix)',
    duration: '09/2022 — 06/2026',
    description:
      'At Candescent, I developed core UI components for the flagship Interactive Teller product using modern React design patterns. I led key engineering initiatives, including upgrading the application to use React 19 and coordinating a cross-functional migration to use Google Cloud Platform. Alongside driving technical execution, I maintained clear system documentation to streamline knowledge transfer and mentored interns to accelerate their professional growth.',
  },
  {
    role: 'Software Engineer Intern',
    company: 'Zynga',
    duration: '05/2021 — 08/2021',
    description:
      'Developed key features for the Solo Challenge mode in Words With Friends 2 (10M+ players), building cross-platform iOS and Android experiences using React Native and TypeScript to drive user engagement and retention. Delivered high-impact features within bi-weekly agile sprints to support dynamic, iterative product releases.',
  },
  {
    role: 'Web Software Developer',
    company: 'BlackBerry',
    duration: '09/2020 — 04/2021',
    description:
      'Led the end-to-end development of a new SharePoint company portal using React and the SharePoint Framework (SPFX) to replace a legacy system. Engineered Python automation scripts to streamline data migration, while introducing Kanban workflows and leading weekly stakeholder syncs including with the Chief Marketing Officer to keep cross-functional deliverables aligned and transparent.',
  },
  {
    role: 'Android Software Developer',
    company: 'BlackBerry',
    duration: '06/2020 — 08/2020',
    description:
      "Contributed to new features across BlackBerry's Hub+ Android app suite, leveraging Java and the Android SDK to enhance core functionality and user experience. Ensured high software quality and broad device compatibility across Android versions through rigorous testing and code reviews.",
  },
  {
    role: 'Web Developer',
    company: 'GatewayiQ',
    duration: '05/2017 — 08/2017',
    description:
      "I was responsible for maintaining, testing, and developing new features for the SaaS application, known as gatewayiQ. I worked with PHP and the framework Laravel. I used blade (Laravel's templating engine), Sass and jQuery for the UX/UI aspect of the software. I used Neo4j for any database integration with the application. I used Selenium Webdriver for acceptance tests and integration tests. I made sure the software was accessible, met company standards and followed local governing laws on web applications.",
  },
];

// --------- Skills ---------- //
export const skills = [
  'HTML',
  'CSS',
  'JavaScript',
  'Python',
  'Java',
  'SQL',
  'TypeScript',
  'YAML',
  'JSON',
  'Android SDK',
  'React',
  'Expo',
  'React Native',
  'SharePoint Framework',
  'Flask',
  'Redux',
  'MobX',
  'MUI',
  'Storybook',
  'Android Studio',
  'Webstorm',
  'Firebase',
  'Cursor',
  'Visual Studio Code',
  'Jira',
  'Gerrit',
  'SharePoint',
  'Xcode',
  'Google Cloud Platform',
  'Wallaby',
  'Jest',
  'Bash',
  'Git',
  'Figma',
];
