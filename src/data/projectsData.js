const projectsData = {
  'ourverse-couple-app': {
    title: 'OurVerse: The Ultimate Couple Platform',
    tagline: 'Connect, share, and celebrate your love online!',
    description: 'OurVerse is a dynamic platform designed for couples to stay connected and make memories together.',
    longDescription: "OurVerse is a dynamic platform designed for couples to stay connected and make memories together. Built with React, and MongoDB, it features real-time chat, shared memory albums, bucket lists, a couple calendar, notifications, and an intuitive dashboard. It's not just an app, it's a digital space for love, fun, and shared experiences.",
    tech: ['React', 'CSS Modules', 'MongoDB', 'Node.js', 'Socket.io'],
    features: [
      'Real-time chat with instant messaging',
      'Shared memory albums with cloud storage',
      'Bucket list management and tracking',
      'Couple calendar with reminders',
      'Push notifications system',
      'Personalized dashboard with analytics'
    ],
    challenges: [
      {
        problem: 'Implementing real-time chat with notifications',
        solution: 'Used Socket.io with proper event handling and state management'
      },
      {
        problem: 'Managing shared memory albums',
        solution: 'Integrated MongoDB with cloud storage and access control'
      }
    ],
    images: [
      '/portfolio-img/ourversecover.png',
      '/portfolio-img/ourverse2.png',
      '/portfolio-img/ourverse3.png',
      '/portfolio-img/ourverse4.png',
      '/portfolio-img/ourverse5.png'
    ],
    video:  '/portfolio-img/ourverse1.mp4',
    github: 'https://github.com/Djowo1/ourVerse-Frontend',
    live: 'https://ourverse.netlify.app',
    duration: '3 months',
    role: 'Frontend Developer',
    year: '2025'
  },

  'surefit-gym': {
    title: 'React Frontend Project For A Gym Website',
    tagline: 'Responsive gym frontend website with interactive features',
    description: 'Developed a responsive frontend website for a gym using React and CSS.',
    longDescription: 'Developed a responsive frontend website for a gym using React and CSS, allowing users to explore exercise routines, yoga, and muscle-building programs with interactive slideshows and image galleries. The website features smooth animations, modern UI design, and optimized performance.',
    tech: ['React', 'CSS', 'JavaScript'],
    features: [
      'Responsive design across all devices',
      'Interactive slideshows and galleries',
      'Exercise routine display with categories',
      'Smooth scroll animations',
      'Modern UI with custom styling'
    ],
    challenges: [
      {
        problem: 'Ensuring cross-device responsiveness',
        solution: 'Used Flexbox, Grid, and media queries for adaptive layouts'
      },
      {
        problem: 'Creating smooth image galleries',
        solution: 'Implemented CSS transitions and JavaScript for interactive controls'
      }
    ],
    images: [
      '/portfolio-img/gym1.PNG',
      '/portfolio-img/gym2.PNG',
      '/portfolio-img/gym3.PNG',
      '/portfolio-img/gym4.PNG',
      '/portfolio-img/gymcover.PNG'
    ],
    video: null,
    github: 'https://github.com/Djowo1/KeepFit-React-App/tree/main',
    live: 'https://polite-zuccutto-9a5bbd.netlify.app/',
    duration: '1 month',
    role: 'Frontend Developer',
    year: '2025'
  },

  'cinemanest': {
    title: 'Cinemanest React Website',
    tagline: 'Movie discovery web app with API integration and Firebase auth',
    description: 'Built a responsive React-based movie web app with dynamic API data fetching.',
    longDescription: 'Built a responsive React-based movie web app with dynamic API data fetching, Firebase authentication, and real-time notifications. Users can explore movies, watch trailers, save favorites, and get personalized recommendations. The app features smooth transitions and an intuitive user interface.',
    tech: ['React', 'CSS', 'JavaScript', 'Firebase', 'Toastify', 'Movie API'],
    features: [
      'Movie browsing and discovery',
      'Trailer playback with video player',
      'Firebase authentication (login/signup)',
      'Favorites management system',
      'Real-time notifications',
      'Search and filter functionality'
    ],
    challenges: [
      {
        problem: 'Fetching and displaying API data efficiently',
        solution: 'Implemented caching and optimized React components with lazy loading'
      },
      {
        problem: 'Managing user authentication state',
        solution: 'Used Firebase Auth with context API for global state management'
      }
    ],
    images: [
      '/portfolio-img/cinemanest1.PNG',
      '/portfolio-img/cinemanest2.PNG',
      '/portfolio-img/cinemanest3.PNG',
      '/portfolio-img/cinemanest4.PNG'
    ],
    video: '/portfolio-img/cinemanestvid.mp4',
    github: 'https://github.com/Djowo1/CinemaNest_React_App',
    live: 'https://cinemanestt.netlify.app/>',
    duration: '2 months',
    role: 'Frontend Developer',
    year: '2024'
  },

  'bitro-crypto': {
    title: 'Bitro Cryptocurrency App',
    tagline: 'Crypto tracking platform with real-time market data',
    description: 'Developed a responsive cryptocurrency web app integrated with the CoinGecko API.',
    longDescription: 'Developed a responsive cryptocurrency web app integrated with the CoinGecko API, providing real-time coin information, market trends, and performance metrics with interactive UI. Users can track their favorite cryptocurrencies, view price charts, and get market insights.',
    tech: ['React', 'CSS', 'JavaScript', 'CoinGecko API', 'Chart.js'],
    features: [
      'Real-time crypto prices and updates',
      'Market trend visualization with charts',
      'Interactive coin dashboard',
      'Cryptocurrency comparison tool',
      'Price alerts and notifications',
      'Detailed coin information'
    ],
    challenges: [
      {
        problem: 'Handling live market data updates',
        solution: 'Used API polling with optimized state updates and debouncing'
      },
      {
        problem: 'Displaying complex chart data',
        solution: 'Integrated Chart.js with custom configurations for performance'
      }
    ],
    images: [
      '/portfolio-img/bittro1.png',
      '/portfolio-img/bittro2.png',
      '/portfolio-img/bittro3.png',
      '/portfolio-img/bittrocover.png'
    ],
    video: '/portfolio-img/bittrovid.mp4',
    github: 'https://github.com/Djowo1/Bitro_Cryptocurrency_web_app',
    live: 'https://bittro.netlify.app/',
    duration: '1.5 months',
    role: 'Frontend Developer',
    year: '2024'
  },

  'cake-website': {
    title: 'Frontend Project For A Cake Website',
    tagline: 'Interactive cake business website with ordering features',
    description: 'Created a responsive frontend for a cake business.',
    longDescription: 'Created a responsive frontend for a cake business, featuring interactive image galleries, add-to-cart functionality, customizable cake options, and direct ordering. The website includes a beautiful product showcase, customer reviews, and an easy-to-use ordering system.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    features: [
      'Interactive image galleries with zoom',
      'Customizable cake options and flavors',
      'Add-to-cart functionality',
      'Direct ordering system with form validation',
      'Responsive design',
      'Customer testimonials section'
    ],
    challenges: [
      {
        problem: 'Ensuring smooth ordering experience',
        solution: 'Used JavaScript to dynamically update order summary and validate inputs'
      },
      {
        problem: 'Managing cart state',
        solution: 'Implemented localStorage for cart persistence across sessions'
      }
    ],
    images: [
      '/portfolio-img/mycake1.PNG',
      '/portfolio-img/mycake2.PNG',
      '/portfolio-img/mycake3.PNG',
      '/portfolio-img/mycake4.PNG'
    ],
    video: '/portfolio-img/mycakevid.mp4',
    github: 'https://github.com/Djowo1/DjowoCake-Website',
    live: 'https://djowo1.github.io/DjowoCake-Website/MyCake.html',
    duration: '1 month',
    role: 'Frontend Developer',
    year: '2024'
  },

  'brew-coffee': {
    title: 'Frontend Project For Brew & You Coffee Website',
    tagline: 'E-commerce coffee website with interactive product showcase',
    description: 'Developed a responsive e-commerce platform for Brew & You Coffee.',
    longDescription: 'Developed a responsive e-commerce platform for Brew & You Coffee, allowing users to explore and purchase specialty coffee blends online with interactive product features. The site includes detailed product descriptions, brewing guides, and an elegant shopping experience.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    features: [
      'Interactive product showcase with filters',
      'Online ordering system',
      'Responsive design with mobile-first approach',
      'Coffee brewing guides',
      'Newsletter subscription',
      'Shopping cart functionality'
    ],
    challenges: [
      {
        problem: 'Showcasing products effectively',
        solution: 'Implemented CSS hover effects and dynamic display with JavaScript'
      },
      {
        problem: 'Creating smooth transitions',
        solution: 'Used CSS animations and transitions for professional feel'
      }
    ],
    images: [
      '/portfolio-img/brew&you1.png',
      '/portfolio-img/brew&you2.png',
      '/portfolio-img/brew&you3.png',
      '/portfolio-img/brew&you4.png',
      '/portfolio-img/brew&youcover.png'
    ],
    video: '/portfolio-img/brew&youvid.mp4',
    github: 'https://github.com/Djowo1/Brew-n-You',
    live: 'https://djowo1.github.io/Brew-n-You/Brew&You.html',
    duration: '1 week',
    role: 'Frontend Developer',
    year: '2024'
  },

  'paws-love': {
    title: 'Frontend Project For Paws and Love Dog Adoption Website',
    tagline: 'Dog adoption platform with interactive features',
    description: 'Built a responsive dog adoption website.',
    longDescription: 'Built a responsive dog adoption website, providing filtering, sorting, and an intuitive application process for users to explore, adopt, or buy dogs. The platform includes detailed dog profiles, adoption requirements, and an easy-to-use application system.',
    tech: ['HTML', 'TailwindCSS', 'JavaScript'],
    features: [
      'Dog filtering by breed, age, and size',
      'Advanced sorting options',
      'Adoption application process',
      'Detailed dog profiles with photos',
      'Responsive design with TailwindCSS',
      'Contact form for inquiries'
    ],
    challenges: [
      {
        problem: 'Handling multiple filters efficiently',
        solution: 'Implemented JavaScript-based dynamic filtering with state management'
      },
      {
        problem: 'Creating accessible forms',
        solution: 'Used semantic HTML and ARIA labels for better accessibility'
      }
    ],
    images: [
      '/portfolio-img/paws&love1.png',
      '/portfolio-img/paws&love2.png',
      '/portfolio-img/paws&lovecover.png'
    ],
    video: '/portfolio-img/paws&lovevid.mp4',
    github: 'https://github.com/Djowo1/PawsAndLove',
    live: 'https://djowo1.github.io/PawsAndLove',
    duration: '1 month',
    role: 'Frontend Developer',
    year: '2024'
  },
};

export default projectsData;