export type FolderId = 'about' | 'projects' | 'experience' | 'skills'

export const folders: {
  id: FolderId
  name: string
}[] = [
  { id: 'about', name: 'About Me' },
  { id: 'projects', name: 'Projects' },
  { id: 'experience', name: 'Experience' },
  { id: 'skills', name: 'Skills' },
]

export const dockLinks = {
  github: 'https://github.com/imilisav',
  linkedin: 'https://www.linkedin.com/in/imilisav',
}

export const about = {
  text: `My name is Ilija, and I am passionate about software development. My journey began as a kid with a fascination for websites, which led me to build basic websites for friends and family. Since then, I’ve continually pushed my limits to refine my craft. While my primary focus is front-end development, I am equally comfortable across the full stack. I am currently seeking new opportunities in front-end, back-end, or full-stack roles.`
}

export const experience = [
    { 
      role: 'Software Engineer', 
      place: 'Candescent (Formerly NCR/NCR Voyix)', 
      when: '09/2022 — 06/2026' 
    },
    { 
      role: 'Software Engineer Intern', 
      place: 'Zynga',
      when: '05/2021 — 08/2021' 
    },
    { 
      role: 'Web Software Developer', 
      place: 'BlackBerry', 
      when: '09/2020 — 04/2021'
    },
    { 
      role: 'Android Software Developer', 
      place: 'BlackBerry', 
      when: '06/2020 — 08/2020'
    },
    { 
      role: 'Web Developer', 
      place: 'GatewayiQ', 
      when: '05/2017 — 08/2017'
    },
  ];

export const projects = [];

export const skills = [
    { 
      type: 'Languages', 
      items: ['HTML', 'CSS', 'JavaScript', 'Python', 'Java', 'SQL', 'TypeScript', 'YAML', 'JSON']
    },
    { 
      type: 'Frameworks/Libraries', 
      items: ['Android SDK', 'React', 'Expo', 'React Native', 'SharePoint Framework', 'Flask', 'Redux', 'MobX', 'MUI', 'Storybook']
    }, 
    { 
      type: 'Tools', 
      items: ['Android Studio', 'Webstorm', 'Firebase', 'Cursor', 'Visual Studio Code', 'Jira', 'Gerrit', 'SharePoint', 'Xcode', 'Google Cloud Platform',
        'Wallaby', 'Jest', 'Bash', 'Git', 'Figma']
    }
  ];