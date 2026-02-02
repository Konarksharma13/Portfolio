
export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  link: string;
  tags: string[];
}

export interface Publication {
  id: string;
  title: string;
  publisher: string;
  date: string;
  link: string;
}

export interface Achievement {
  id: string;
  title: string;
  issuer: string;
  year: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  link: string;
  platform: string;
}

export interface ProfileData {
  name: string;
  role: string;
  tagline: string;
  projects: Project[];
  publications: Publication[];
  achievements: Achievement[];
  blogPosts: BlogPost[];
  socials: {
    linkedin: string;
    github: string;
    email: string;
  };
}