export const skillCategories = [
  {
    id: 'frontend',
    title: 'Frontend Development',
    icon: 'Monitor',
    status: 'Active practice',
    skills: [
      { name: 'HTML5', note: 'Semantic page structure and accessible markup' },
      { name: 'CSS3', note: 'Responsive layouts with Flexbox, Grid, and modern CSS' },
      { name: 'JavaScript', note: 'Browser interactions, application logic, and asynchronous code' },
      { name: 'React', note: 'Reusable components, props, state, and interactive interfaces' },
    ],
  },
  {
    id: 'backend',
    title: 'Backend Development',
    icon: 'Server',
    status: 'Building',
    skills: [
      { name: 'Node.js', note: 'Server-side JavaScript and application fundamentals' },
      { name: 'Express.js', note: 'Routes, middleware, controllers, and request handling' },
      { name: 'REST APIs', note: 'Designing endpoints and connecting client/server workflows' },
      { name: 'MVC Architecture', note: 'Separating routes, controllers, services, and data responsibilities' },
    ],
  },
  {
    id: 'data',
    title: 'Databases & Data',
    icon: 'Database',
    status: 'Currently learning',
    skills: [
      { name: 'MongoDB', note: 'Documents, collections, CRUD operations, and query patterns' },
      { name: 'Data Modelling', note: 'Thinking through references, ownership, and related records' },
      { name: 'JSON', note: 'Structuring and exchanging application data' },
    ],
  },
  {
    id: 'tools',
    title: 'Tools & Deployment',
    icon: 'Wrench',
    status: 'Using',
    skills: [
      { name: 'Git & GitHub', note: 'Version control, repositories, and project collaboration' },
      { name: 'Vite', note: 'Local development and production builds' },
      { name: 'Vercel & Netlify', note: 'Deploying and publishing web projects' },
      { name: 'Tailwind CSS', note: 'Utility-first styling and reusable design patterns' },
    ],
  },
  {
    id: 'creative',
    title: 'Creative & Emerging Technology',
    icon: 'Box',
    status: 'Exploring',
    skills: [
      { name: 'Three.js & WebGL', note: 'Building a browser-based 3D production studio' },
      { name: 'HyperFrames', note: 'Motion graphics, overlays, and video composition workflows' },
      { name: 'AI Product Development', note: 'Exploring useful AI-enabled product and workflow ideas' },
    ],
  },
];
