import vereliScreenshot from '/vereli.png';
import finoraScreenshot from '/finora.png';

export const featuredProjects = [
  {
    id: 'vereli',
    name: 'Vereli',
    img: vereliScreenshot,
    description:
      'A restaurant website demonstration built with React. Includes restaurant-focused sections such as Home, About, Menu, Gallery, Contact, and Order.',
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
      'A landing-page project demonstrating frontend design and implementation, focused on clean layout and a clear conversion path.',
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
      'A responsive weather app that lets users search for a city and view its weather information. Built to practice API requests and asynchronous JavaScript.',
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
      'A browser game where you play against the computer, see each round’s result, and track the score while practicing JavaScript game logic.',
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
      'A simple task manager for adding tasks, marking them complete, and deleting them. Built to practice DOM manipulation and event handling.',
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
      'A small utility that generates random passwords with a selectable length and character types, demonstrating JavaScript strings and randomization.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Randomization'],
    liveDemo: 'https://password-generator-nasir.netlify.app',
    sourceCode: 'https://github.com/nasirabubakar-dev/password-generator',
    category: 'Utility',
    visual: 'password',
  },
];
