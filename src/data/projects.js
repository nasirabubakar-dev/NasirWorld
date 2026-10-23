import vereliScreenshot from '/vereli.png';
import finoraScreenshot from '/finora.png';

export const featuredProjects = [
  {
    id: 'vereli',
    name: 'Vereli',
    img: vereliScreenshot,
    description:
      'Vereli is a restaurant website demonstration built with React. It brings together restaurant-focused sections for presenting the brand, menu, gallery, contact information, and ordering experience in one responsive interface.',
    tags: ['React', 'Responsive Design', 'Component Architecture'],
    liveDemo: 'https://vereli.netlify.app',
    sourceCode: 'https://github.com/nasirabubakar-dev/vereli',
    category: 'Restaurant Website',
  },
  {
    id: 'finora',
    name: 'Finora',
    img: finoraScreenshot,
    description:
      'Finora is a product-focused landing page project built to demonstrate modern frontend development, clear content structure, and a polished web presentation.',
    tags: ['React', 'Landing Page', 'Frontend Design'],
    liveDemo: 'https://finora-landing-page.netlify.app',
    sourceCode: 'https://github.com/nasirabubakar-dev/Finora',
    category: 'Landing Page',
  },
];

export const additionalProjects = [
  {
    id: 'weather-app',
    name: 'Weather App',
    description:
      'A weather application that lets users search for a city and view weather information. Built to practise JavaScript and API integration.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Weather API'],
    liveDemo: 'https://weather-app-nasir.netlify.app',
    sourceCode: 'https://github.com/nasirabubakar-dev/weather-app',
    category: 'API Project',
    visual: 'weather',
  },
  {
    id: 'rock-paper-scissors',
    name: 'Rock Paper Scissors',
    description:
      'A browser-based game where you play against the computer and track your score while practising JavaScript game logic.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Game Logic'],
    liveDemo: 'https://rps-game-nasir.netlify.app',
    sourceCode: 'https://github.com/nasirabubakar-dev/rock-paper-scissors',
    category: 'Mini Game',
    visual: 'game',
  },
  {
    id: 'todo-list',
    name: 'Todo List',
    description:
      'A simple task manager for adding tasks, marking them complete, and deleting them when they’re no longer needed.',
    tags: ['HTML', 'CSS', 'JavaScript', 'DOM'],
    liveDemo: 'https://todo-list-nasir.netlify.app',
    sourceCode: 'https://github.com/nasirabubakar-dev/todo-list',
    category: 'Productivity',
    visual: 'todo',
  },
  {
    id: 'password-generator',
    name: 'Random Password Generator',
    description:
      'A utility that generates random passwords using selectable lengths and character options.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Randomization'],
    liveDemo: 'https://password-generator-nasir.netlify.app',
    sourceCode: 'https://github.com/nasirabubakar-dev/password-generator',
    category: 'Utility',
    visual: 'password',
  },
];
