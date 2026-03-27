import { ProjectsRow } from './Projects/ProjectsRow';

import type { Project } from '../types/Project';
import './ProjectsList.scss';

export const ProjectsList = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: 'Restaurant Review & Recommendation App',
      content: '',
      tags: ['React', 'React Router', 'TypeScript', 'Vite', 'Tailwind'],
      image: '/p1.png',
      category: 'React & TypeScript',
      github_link: 'https://github.com/patricia32/FlavorFeed',
    },

    {
      id: 2,
      title: 'E-Commerce Showcase',
      content:
        'This project is a modern E-Commerce Showcase web application focused on delivering a smooth and interactive user experience.',
      tags: ['React', 'React Router', 'TypeScript', 'Vite', 'CSS'],
      image: '/p2.png',
      category: 'React & TypeScript',
      github_link: 'https://github.com/patricia32/react-project',
    },
    {
      id: 3,
      title: 'Expense Tracker App',
      content:
        'This project is a modern E-Commerce Showcase web application focused on delivering a smooth and interactive user experience.',
      tags: ['React Native', 'React Navigation', 'JavaScript', 'Context API', 'Redux', 'Axios'],
      image: '/p3.png',
      category: 'React Native',
      github_link: 'https://github.com/patricia32/expenseTracker',
    },
    {
      id: 4,
      title: 'Panoramic Radiographs AI Interpretation Tool',
      content:
        'This project is a modern E-Commerce Showcase web application focused on delivering a smooth and interactive user experience.',
      tags: [
        'LibTorch',
        'YOLOv9',
        'DeepLabV3',
        'Conda',
        'C++',
        'OpenCV',
        'Bounding Boxes',
        'Semantic Segmentation',
      ],
      image: '/p4.png',
      category: 'Deep Learning',
      github_link: 'https://github.com/patricia32',
    },
    {
      id: 5,
      title: 'Instagram Frontend Replica',
      content:
        'This project is a modern E-Commerce Showcase web application focused on delivering a smooth and interactive user experience.',
      tags: ['React Native', 'React Navigation', 'JavaScript', 'MySQL'],
      image: '/p5.png',
      category: 'React Native',
      github_link: 'https://github.com/patricia32/mobileApp_Frontend',
    },
  ];
  return (
    <div className="list">
      <ProjectsRow
        category="React & TypeScript"
        projects={projects.filter((project) => project.category === 'React & TypeScript')}
      />
      <ProjectsRow
        category="React Native"
        projects={projects.filter((project) => project.category === 'React Native')}
      />
      <ProjectsRow
        category="Deep Learning"
        projects={projects.filter((project) => project.category === 'Deep Learning')}
      />
    </div>
  );
};
