import vereliScreenshot from '/vereli.png';
import finoraScreenshot from '/finora.png';

export const featuredProjects = [
  {
    id: 'vereli',
    name: 'Vereli',
    img: vereliScreenshot,
    imageAlt: 'Vereli restaurant website interface',
    category: 'Restaurant Website',
    role: 'Concept project · React development',
    description:
      'A restaurant website concept that brings the brand presentation, menu browsing, cart interaction, and WhatsApp ordering path into one responsive experience.',
    problem:
      'Give a restaurant a clear online presence where visitors can understand the offering, browse the menu, and find a direct path to place an order.',
    approach:
      'Built a component-based React interface with restaurant-focused sections and an ordering flow designed around familiar customer actions.',
    highlights: ['Menu browsing', 'Interactive cart', 'WhatsApp ordering', 'Responsive layout'],
    tags: ['React', 'JavaScript', 'Responsive Design', 'Component Architecture'],
    liveDemo: 'https://vereli.netlify.app',
    sourceCode: 'https://github.com/nasirabubakar-dev/vereli',
  },
  {
    id: 'finora',
    name: 'Finora',
    img: finoraScreenshot,
    imageAlt: 'Finora product landing page interface',
    category: 'Product Landing Page',
    role: 'Concept project · Frontend development',
    description:
      'A product-focused landing page demonstration built to practise presenting a digital product through a clear visual hierarchy and focused page structure.',
    problem:
      'Present a product concept in a way that helps visitors quickly understand its value and identify the next step.',
    approach:
      'Created a responsive React landing page with organised content sections, consistent visual styling, and clear calls to action.',
    highlights: ['Product-focused messaging', 'Clear page hierarchy', 'Call-to-action flow', 'Responsive layout'],
    tags: ['React', 'JavaScript', 'Landing Page', 'Frontend Design'],
    liveDemo: 'https://finora-landing-page.netlify.app',
    sourceCode: 'https://github.com/nasirabubakar-dev/Finora',
  },
];

export const additionalProjects = [
  {
    id: 'weather-app',
    name: 'Weather App',
    description: 'A weather application that lets users search for a city and view weather information. Built to practise JavaScript and API integration.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Weather API'],
    liveDemo: 'https://weather-app-nasir.netlify.app',
    sourceCode: 'https://github.com/nasirabubakar-dev/weather-app',
    category: 'API Project',
    visual: 'weather',
  },
  {
    id: 'rock-paper-scissors',
    name: 'Rock Paper Scissors',
    description: 'A browser-based game where you play against the computer and track your score while practising JavaScript game logic.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Game Logic'],
    liveDemo: 'https://rps-game-nasir.netlify.app',
    sourceCode: 'https://github.com/nasirabubakar-dev/rock-paper-scissors',
    category: 'Mini Game',
    visual: 'game',
  },
  {
    id: 'todo-list',
    name: 'Todo List',
    description: 'A simple task manager for adding tasks, marking them complete, and deleting them when they’re no longer needed.',
    tags: ['HTML', 'CSS', 'JavaScript', 'DOM'],
    liveDemo: 'https://todo-list-nasir.netlify.app',
    sourceCode: 'https://github.com/nasirabubakar-dev/todo-list',
    category: 'Productivity',
    visual: 'todo',
  },
  {
    id: 'password-generator',
    name: 'Random Password Generator',
    description: 'A utility that generates random passwords using selectable lengths and character options.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Randomization'],
    liveDemo: 'https://password-generator-nasir.netlify.app',
    sourceCode: 'https://github.com/nasirabubakar-dev/password-generator',
    category: 'Utility',
    visual: 'password',
  },
];
