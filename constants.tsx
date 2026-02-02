
import { ProfileData } from './types';

export const PROFILE: ProfileData = {
  name: "Konark Sharma",
  role: "React Developer | Building AI-Integrated Web Apps",
  tagline: "Learning, building, and refining software to solve meaningful problems.",
  projects: [
    {
      id: "p1",
      title: "Bug Tales",
      category: "AI & Fullstack",
      description: "AI-Powered Debugging Assistant that converts technical errors into stories with actionable solutions using Gemini 2.5 Flash.",
      image: "https://images.pexels.com/photos/11035537/pexels-photo-11035537.jpeg",
      link: "https://bug-tales.netlify.app/",
      tags: ["React.js", "Node.js", "Gemini 2.5 Flash", "Cloud Run"]
    },
    {
      id: "p2",
      title: "ProctorVision",
      category: "Computer Vision",
      description: "AI-based proctoring tool featuring real-time face/object detection and automated integrity report generation.",
      image: "https://images.pexels.com/photos/7092408/pexels-photo-7092408.jpeg",
      link: "https://proctorvision13.netlify.app/",
      tags: ["Python", "Computer Vision", "TailwindCSS"]
    },
      {
      id: "p3",
      title: "GlassCPP",
      category: "Revamp",
      description: "Revamping Cplus plus into a modern website with fast loading and animation",
      image: "https://images.pexels.com/photos/33013269/pexels-photo-33013269.jpeg",
      link: "https://glasscpp.netlify.app/",
      tags: ["Framer", "React", "Smooth-animation"]
    },
    {
      id: "p4",
      title: "Wheel of fun",
      category: "Html & CSS",
      description: "Interactive application to determine what to do in your break time.",
      image: "https://images.pexels.com/photos/6476019/pexels-photo-6476019.jpeg",
      link: "https://konarksharma13.github.io/Wheel-of-Fun/",
      tags: ["HTML", "CSS", "JS"]
    },
    
  ],
  publications: [
     {
      id: "pub1",
      title: "Pneumonia Detection Model using AI-driven Systems",
      publisher: "ICICCT",
      date: "2024",
      link: "https://www.taylorfrancis.com/chapters/edit/10.1201/9781003530176-78/pneumonia-detection-model-utilising-deep-learning-algorithms-chayanika-arora-sanvi-arora-konark-sharma-seema-arora?context=ubx&refId=59c87511-db30-4cf6-8332-465cea82885a"
    },
    {
      id: "pub2",
      title: "Digital Yoga Game with Enhanced Pose Grading Model",
      publisher: "IEEE",
      date: "2022",
      link: "https://ieeexplore.ieee.org/abstract/document/9936591"
    },
   
    {
      id: "pub3",
      title: "AI based Yoga Trainer-Simplifying Home Yoga",
      publisher: "IEEE",
      date: "2022",
      link: "https://ieeexplore.ieee.org/abstract/document/9824332"
    }
  ],
  achievements: [
    {
      id: "a1",
      title: "Patent Filed: LifeSaver Glotch",
      issuer: "Women's Safety Device",
      year: "2022"
    },
    {
      id: "a2",
      title: "IBM ICE Day Winner",
      issuer: "IBM Poster Competition",
      year: "2022"
    },
    {
      id: "a3",
      title: "Technovation Hackathon-3 Winner",
      issuer: "Sharda University",
      year: "2021"
    }
  ],
  blogPosts: [
    {
      id: "b1",
      title: "DailyBrief: The AI Assistant That Brings Calm to the Chaos",
      excerpt: "DailyBrief is a Runner H-powered AI agent that acts like your personal Chief of Staff.",
      link: "https://dev.to/konark_13/dailybrief-the-ai-assistant-that-brings-calm-to-the-chaos-47bi",
      platform: "Dev.to"
    },
    {
      id: "b2",
      title: "Wheel of Fun",
      excerpt: "Wheel of Fun — a playful spin wheel built with HTML, CSS, and a touch of JavaScript to help me",
      link: "https://dev.to/konark_13/wheel-of-fun-1bbb",
      platform: "Dev.to"
    },
    {
      id: "b3",
      title: "System Design Served Hot: How Ordering Pizza Taught Me Everything",
      excerpt: "Here’s how we go from “I’m hungry” to “pizza in hand”, while casually learning real-world system design concepts in 5 bite-sized slices.",
      link: "https://dev.to/konark_13/system-design-served-hot-how-ordering-pizza-taught-me-everything-1bcb",
      platform: "Dev.to"
    },
    {
      id: "b4",
      title: "Glitch Tales: Turning Errors into Epic Stories",
      excerpt: "Glitch Tales is a quirky little AI-powered debugging companion.",
      link: "https://dev.to/konark_13/glitch-tales-turning-errors-into-epic-stories-407f",
      platform: "Dev.to"
    },
  ],
  socials: {
    linkedin: "https://www.linkedin.com/in/konarksharma13",
    github: "https://github.com/Konarksharma13",
    // Fix: Added missing 'twitter' property as required by the ProfileData interface
    email: "konarksharma492@gmail.com"
  }
};
