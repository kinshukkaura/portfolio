// gitprofile.config.js

const config = {
  github: {
    username: 'kinshukkaura', // Your GitHub org/user name. (Required)
    sortBy: 'stars', // stars | updated
    limit: 10, // How many projects to display.
    exclude: {
      forks: true, // Forked projects will not be displayed if set to true.
      projects: [], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: 'www.linkedin.com/in/kinshuk31',
    github: 'https://github.com/kinshukkaura',
    phone: '07436706810',
    email: 'kinshuk57@outlook.com',
  },
  // resume: {
  //   fileUrl:
  //      // Empty fileUrl will hide the `Download Resume` button.
  // },
  skills: [
    'Python',
    'SQL',
    'C++',
    'Tableau',
    'R',
    'Git',
    'Spark',
    'Kafka',
    'Google Cloud',
  ],
  experiences: [
    {
      company: 'Deutsche Bank',
      position: 'Graduate Researcher',
      from: 'March 2023',
      to: 'September 2023',
    },
    {
      company: 'Pareto Economics',
      position: 'Data Scientist',
      from: 'November 2022',
      to: 'February 2023',
    },
    {
      company: 'Chegg India',
      position: 'Statistics Subject Matter Expert',
      from: 'Oct 2022',
      to: 'April 2023',
      companyLink: 'https://example.com',
    },
  ],
  /* certifications: [
    {
      name: 'Lorem ipsum',
      body: 'Lorem ipsum dolor sit amet',
      year: 'March 2022',
      link: 'https://example.com'
    },
  ], */
  education: [
    {
      institution: 'London School of Economics',
      degree: 'MSc in Data Science',
      from: 'Sept 2022',
      to: 'Sept 2023',
    },
    {
      institution: 'University of Delhi',
      degree: 'BSc (Hons) Statistics',
      from: '2019',
      to: '2022',
    },
  ],

  // To hide the `My Projects` section, keep it empty.
  externalProjects: [
    {
      title: 'Home Credit Risk Model Stability - Kaggle Competition',
      description:
        'Modelling default risk.',
      imageUrl: 'https://via.placeholder.com/250x250',
      link: 'https://example.com',
    },
    {
      title: 'Accuracy of Part of Speech Tagging Algorithms',
      description:
        'A Design of Experiments Paper, analysing the performance and estimating the accuracy of Part-of-Speech tagging techniques tested on newspaper articles.',
      imageUrl: 'https://via.placeholder.com/250x250',
      link: 'https://example.com',
    },
    {
      title: 'IPL Auction Pricing Prediction',
      description:
        'Scraping and analysing IPL data (2013-2022) to predict auction prices for 2023 using boosting machines in Python.',
      imageUrl: 'https://via.placeholder.com/250x250',
      link: 'https://example.com',
    },
    {
      title: 'Effects of Income Inequality on Economic Growth of Developing Countries',
      description:
        'An Econometrics Report, explaining the nuanced effects of income disparity affecting growth and offering valuable insights into the trajectory of developing economies.',
      imageUrl: 'https://via.placeholder.com/250x250',
      link: 'https://example.com',
      
    },
  ],
  // Display blog posts from your medium or dev account. (Optional)
  // blog: {
  //   source: 'dev', // medium | dev
  //   username: 'arifszn', // to hide blog section, keep it empty
  //   limit: 2, // How many posts to display. Max is 10.
  // },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'coffee',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Hide the ring in Profile picture
    hideAvatarRing: false,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'procyon',
    ],

    // Custom theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },
};
export default config;
