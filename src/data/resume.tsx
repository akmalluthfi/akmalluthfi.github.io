import { Icons } from '@/components/icons';
import { HomeIcon } from 'lucide-react';

export const DATA = {
  name: 'Akmal Luthfi',
  initials: 'AL',
  url: 'https://dillion.io',
  location: 'Surabaya, Indonesia',
  locationLink: 'https://www.google.com/maps/place/surabaya',
  description:
    'Web Developer turned Machine Learning Engineer. I love working on projects and helping others.',
  summary:
    'I started my journey as a web developer before becoming deeply interested in machine learning and data science. Currently, I am still in college, focusing on various machine learning techniques, big data processing, and data visualization. My background in web development helps me in ML Ops and model deployment, allowing me to seamlessly integrate machine learning models into production-ready systems.',
  avatarUrl: '/me.jpg',
  skills: [
    // Machine Learning
    'Python',
    'Scikit-Learn',
    'Keras Tensorflow',
    'Pytorch',
    'Hugging Face',
    'NLTK',
    'Python FastAPI',
    'Streamlit',
    // Tools
    'Docker',
    'Git & GitHub/GitLab',
    'Postman',
    'Pentaho',
    // Database
    'SQL (MySQL & PostgreSQL)',
    'NoSQl (MongoDB)',
    // Visualisasi
    'Tableau',
    'Power BI',
    // Web
    'JavaScript Vue',
    'JavaScript React',
    'PHP Laravel',
    'Apache Airfow',
  ],
  navbar: [{ href: '/', icon: HomeIcon, label: 'Home' }],
  contact: {
    email: 'akmalluthfi19@gmail.com',
    tel: '+6288901984340',
    social: {
      GitHub: {
        name: 'GitHub',
        url: 'https://github.com/akmalluthfi',
        icon: Icons.github,
        navbar: true,
      },
      WhatsApp: {
        name: 'WhatsApp',
        url: 'https://wa.me/6288901984340',
        icon: Icons.whatsapp,
        navbar: true,
      },
      LinkedIn: {
        name: 'LinkedIn',
        url: 'https://linkedin.com/in/akmalluthfi19/',
        icon: Icons.linkedin,
        navbar: true,
      },
      Instagram: {
        name: 'Instagram',
        url: 'https://instagram.com/_akmalluthfi',
        icon: Icons.instagram,
        navbar: true,
      },
      Telegram: {
        name: 'Telegram',
        url: 'https://t.me/akmalluthfi',
        icon: Icons.telegram,
        navbar: true,
      },
      Email: {
        name: 'Send Email',
        url: 'mailto:akmalluthfi19@gmail.com',
        icon: Icons.email,
        navbar: true,
      },
      Kaggle: {
        name: 'Kaggle',
        url: 'https://www.kaggle.com/akmalluthfi',
        icon: Icons.kaggle,
        navbar: true,
      },
    },
  },

  experience: [
    {
      company: 'AI Meeting Assistant Project - PT PAL Indonesia x PENS',
      href: '',
      badges: [],
      location: 'Surabaya',
      title: 'Backend Support Developer and AI Research Assistant',
      logoUrl: '/experiences/pens.jpeg',
      start: 'Sep 2025',
      end: 'Present',
      description:
        'Assisted in developing the data management backend integrated with React Router using Drizzle ORM and PostgreSQL to support structured data delivery. Conducted research on Large Language Models (LLMs) using Ollama and LangChain to explore potential AI implementations for meeting summarization.',
    },
    {
      company: 'Dashboard PENS - Lecturer Project',
      href: 'https://www.mcflyon.co.id/',
      badges: [],
      location: 'Surabaya',
      title: 'Backend Developer and Data Engineer',
      logoUrl: '/experiences/pens.jpeg',
      start: 'Des 2025',
      end: 'Present',
      description:
        'Developed a web-based data dashboard using React Router and FastAPI, supporting ongoing academic research. Performed ETL processes with Pentaho and Pandas to transform CSV data into SQL databases for visualization. Collaborated on data analysis and visualization design, contributing to insightful and interactive data presentations.',
    },
    {
      company: 'Freelance at CV. Mcflyon Teknologi Indonesia',
      href: 'https://www.mcflyon.co.id/',
      badges: [],
      location: 'Surabaya',
      title: 'Fullstack Developer',
      logoUrl: '/experiences/mcflyon.png',
      start: 'Des 2023',
      end: 'Feb 2024',
      description:
        'Built a full-stack web application for a client using Vue.js, Tailwind CSS, and Laravel, handling both frontend and backend development. Designed database schemas and developed RESTful APIs to enable efficient data exchange between system components. Collaborated with team members to refine technical requirements based on client needs, enhancing communication and project alignment.',
    },
    {
      company:
        'Participated in the Student Competency Competition (LKS) East Java Province',
      href: '/',
      badges: [],
      location: 'Jember, Jawa Timur',
      title: 'Web Technologies Category',
      logoUrl: '/experiences/lks.png',
      start: 'May 2023',
      end: 'May 2023',
      description:
        'After achieving 2nd place at the city level, I advanced to the Provincial-level Lomba Kompetensi Siswa (LKS) competition, which followed a similar format but with greater technical difficulty. Out of 45 participants, I ranked 7th overall. This experience provided valuable insight into higher-level standards and motivated me to further develop my technical and time management skills in web development.',
    },
    {
      company:
        '2nd Place Winner of the Student Competency Competition (LKS) Surabaya',
      badges: [],
      href: '/',
      location: 'Surabaya',
      title: 'Web Technologies Category',
      logoUrl: '/experiences/lks.png',
      start: 'Mar 2023',
      end: 'Mar 2023',
      description:
        'I participated in the Lomba Kompetensi Siswa (LKS) tingkat Kota competition, which consisted of four main modules: speed test, client-side, frontend, and backend development. The competition took place over two days, with two modules completed each day. I achieved 2nd place, gaining valuable experience in web development and competitive problem-solving for the first time.',
    },
    {
      company: 'Freelance at Klepon Tech',
      href: 'https://gse.co.id/',
      badges: [],
      location: 'Sidoarjo, remote from Surabaya',
      title: 'Backend Developer',
      logoUrl: '/experiences/klepondev.png',
      start: 'Okt 2022',
      end: 'Apr 2023',
      description:
        'Developed and maintained RESTful APIs using Laravel, ensuring reliable and efficient data delivery for four client projects. Designed and optimized database structures from scratch to support scalable and data-driven backend systems. Collaborated with frontend developers and clients via GitLab and Postman, performing manual API testing and writing clear documentation to support seamless integration.',
    },
    {
      company: 'Inosoft Bootcamp',
      href: 'https://www.instagram.com/inosoftbootcamp/',
      badges: [],
      location: 'Online',
      title: 'Training Class : Backend Web Developer',
      logoUrl: '/experiences/inosoft.jpg',
      start: 'Aug 2022',
      end: 'Des 2022',
      description:
        'Developed multiple back-end projects using Laravel and MongoDB, implementing Service Repository Pattern, RESTful API design, JWT authentication, and clean coding principles. Built applications such as a School Information System and a To-Do App to strengthen skills in database operations, application logic structuring, and secure API development.',
    },
    {
      company: 'ID Camp 2022 by Indosat Ooredoo Hutchison',
      href: 'https://idcamp.ioh.co.id/',
      badges: [],
      location: 'Online',
      title: 'Path : Front-End Web Developer',
      logoUrl: '/experiences/idcamp.jpg',
      start: 'May 2022',
      end: 'Jan 2023',
      description:
        'I participated in IDCamp, a bootcamp program organized by Dicoding, an online learning platform for technology and software development. I completed the Front-End Web Development learning path, finishing four courses from beginner to expert level. Each course included hands-on projects as graduation requirements, allowing me to gain practical experience in building interactive and responsive web interfaces.',
    },
    {
      company: 'Internship at PT Crosstechno Digitech Internasional',
      href: 'https://crosstechno.com',
      badges: [],
      location: 'Surabaya',
      title: 'Web Developer',
      logoUrl: '/experiences/crosstechno.png',
      start: 'Jan 2022',
      end: 'Jun 2022',
      description:
        'Completed 3 practice projects, including UI slicing, e-commerce, and portfolio websites using HTML, CSS, and SilverStripe (PHP). Collaborated closely with mentors to refine coding practices and gain exposure to a professional development environment. Applied and enhanced technical skills through hands-on experience in building responsive and functional web applications.',
    },
  ],
  education: [
    {
      school: 'Politeknik Elektronika Negeri Surabaya (PENS)',
      href: 'https://www.pens.ac.id/',
      degree: 'Sarjana Terapan - Sains Data Terapan',
      logoUrl: '/educations/pens.jpeg',
      start: '2023',
      end: 'Expected 2027', // 2027
    },
    {
      school: 'SMK Negeri 2 Surabaya',
      href: 'https://smkn2sby.sch.id/',
      degree: 'Rekayasa Perangkat Lunak',
      logoUrl: '/educations/smkn2.jpg',
      start: '2020',
      end: '2023',
    },
  ],
  projects: [
    // {
    //   title: 'llm.report',
    //   href: 'https://llm.report',
    //   dates: 'April 2023 - September 2023',
    //   active: false,
    //   description:
    //     'Developed an open-source logging and analytics platform for OpenAI: Log your ChatGPT API requests, analyze costs, and improve your prompts.',
    //   technologies: [
    //     'Next.js',
    //     'Typescript',
    //     'PostgreSQL',
    //     'Prisma',
    //     'TailwindCSS',
    //     'Shadcn UI',
    //     'Magic UI',
    //     'Stripe',
    //     'Cloudflare Workers',
    //   ],
    //   links: [
    //     {
    //       type: 'Website',
    //       href: 'https://llm.report',
    //       icon: <Icons.globe className="size-3" />,
    //     },
    //     {
    //       type: 'Source',
    //       href: 'https://github.com/dillionverma/llm.report',
    //       icon: <Icons.github className="size-3" />,
    //     },
    //   ],
    //   image: '',
    //   video: 'https://cdn.llm.report/openai-demo.mp4',
    // },
    {
      title: 'Dashboard PENS',
      href: '/',
      dates: 'Mar 2025 - Present',
      active: true,
      description:
        'Developed a web-based data dashboard using React Router and FastAPI, supporting ongoing academic research. Performed ETL processes with Pentaho and Pandas to transform CSV data into SQL databases for visualization. Collaborated on data analysis and visualization design, contributing to insightful and interactive data presentations.',
      technologies: [
        'React Router Framework',
        'TailwindCSS',
        'Shadcn UI',
        'FastAPI',
        'SQL Model',
        'Alembic',
        'PostgreSQL',
        'Scikit-Learn',
        'Pandas',
      ],
      links: [
        {
          type: 'Website',
          href: '/',
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: '/projects/dashboardpens.png',
      video: '',
    },
    {
      title: 'House Price Prediction',
      href: 'https://rego-omah.up.railway.app/',
      dates: 'May 2025 - September 2025',
      active: true,
      description:
        'Developed a house price prediction system using XGBoost Regressor. Handled data preprocessing and ETL with Pentaho. Built FastAPI endpoints for model predictions integrated with a React frontend. Achieved R² scores of 87.5% (train) and 72.4% (test).',
      technologies: [
        'React Router Framework',
        'TailwindCSS',
        'Shadcn UI',
        'Tailark',
        'FastAPI',
        'SQL Model',
        'Alembic',
        'PostgreSQL',
        'Scikit-Learn',
        'Pandas',
      ],
      links: [
        {
          type: 'Website',
          href: 'https://rego-omah.up.railway.app/',
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: 'Modeling Source',
          href: 'https://github.com/romzyalba/house_price_model',
          icon: <Icons.github className="size-3" />,
        },
        {
          type: 'Backend Source',
          href: 'https://github.com/akmalluthfi/house-price-backend',
          icon: <Icons.github className="size-3" />,
        },
        {
          type: 'Frontend Source',
          href: 'https://github.com/fawzan745/house-price-frontend-react',
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: '/projects/rego-omah.png',
      video: '',
    },
    {
      title: 'Content-Based Car Recommendation System',
      href: 'https://fh4-car-recommender.up.railway.app/',
      dates: 'May 2025',
      active: true,
      description:
        'Built a car recommendation web app using content-based filtering. Managed data scraping, preprocessing, model training, and deployment with Streamlit. Delivered a publicly accessible, fully functional web app.',
      technologies: [
        'Pandas',
        'Matplotlib',
        'Seaborn',
        'Scikit-Learn',
        'Streamlit',
      ],
      links: [
        {
          type: 'Website',
          href: 'https://fh4-car-recommender.up.railway.app/',
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: 'Source',
          href: 'https://github.com/akmalluthfi/fh4-car-recommender',
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: '/projects/recommendation-system.png',
      video: '',
    },
    {
      title:
        'Facebook Posts Clustering and Classification using KMeans and Random Forest',
      href: 'https://github.com/akmalluthfi/bmlp-fb-posts-cluster-and-classification',
      dates: 'December 2024',
      active: true,
      description:
        'Collected Facebook posts data for analysis and machine learning. Applied KMeans clustering with a Silhouette score of 0.90. Trained a Random Forest classifier achieving 98% accuracy',
      technologies: [
        'Python',
        'Pandas',
        'Scikit-Learn',
        'Matplotlib',
        'Seaborn',
        'Kaggle',
      ],
      links: [
        {
          type: 'Source',
          href: 'https://github.com/akmalluthfi/bmlp-fb-posts-cluster-and-classification',
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: '/projects/cluster-classify.png',
      video: '',
    },
    {
      title: 'Text Summarization on News Liputan 6',
      href: 'https://github.com/akmalluthfi/bmlp-fb-posts-cluster-and-classification',
      dates: 'November 2024',
      active: true,
      description:
        'Scraped Indonesian news articles and preprocessed data. Implemented a T5-based text summarization model using Hugging Face. Generated concise summaries capturing main news points.',
      technologies: [
        'Python',
        'Hugging Face Transformers',
        'T5-Base-Indonesian-Summarization-Cased',
        'Newspaper3k',
      ],
      links: [
        {
          type: 'Code & Documentation',
          href: 'https://drive.google.com/drive/folders/1n8eu0iIM1LhjljOofDn7OH035Fzt1MbV?usp=sharing',
          icon: <Icons.googleDrive className="size-3" />,
        },
      ],
      image: '/projects/news-summarization.png',
      video: '',
    },
    {
      title: 'Spam Email Classification',
      href: 'https://github.com/akmalluthfi/email-classification',
      dates: 'September 2024 - November 2024',
      active: true,
      description:
        'Developed a spam email classifier for Indonesian language using Kaggle datasets. Applied text preprocessing and experimented with several models. Achieved 98.66% accuracy with Naive Bayes.',
      technologies: ['Pandas', 'Sastrawi', 'nltk', 'Scikit-Learn'],
      links: [
        {
          type: 'Source',
          href: 'https://github.com/akmalluthfi/email-classification',
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: '/projects/spam-email.png',
      video: '',
    },
    {
      title: 'Smekda Peduli',
      href: 'https://github.com/akmalluthfi/smekda-peduli',
      dates: 'November 2022 - March 2023',
      active: true,
      description:
        'Developed a full-stack donation website using Laravel, featuring an admin dashboard and an integrated demo payment gateway for learning purposes.',
      technologies: ['PHP Laravel', 'Midtrans', 'Bootstrap', 'MySQL'],
      links: [
        {
          type: 'Website',
          href: 'https://github.com/akmalluthfi/smekda-peduli',
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: 'Source',
          href: 'https://github.com/akmalluthfi/smekda-peduli',
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: '/projects/smekda-peduli.png',
      video: '',
    },
  ],
  hackathons: [
    {
      title: 'Hack Western 5',
      dates: 'November 23rd - 25th, 2018',
      location: 'London, Ontario',
      description:
        'Developed a mobile application which delivered bedtime stories to children using augmented reality.',
      image:
        'https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png',
      mlh: 'https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg',
      links: [],
    },
    {
      title: 'Hack The North',
      dates: 'September 14th - 16th, 2018',
      location: 'Waterloo, Ontario',
      description:
        'Developed a mobile application which delivers university campus wide events in real time to all students.',
      image:
        'https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png',
      mlh: 'https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg',
      links: [],
    },
    {
      title: 'FirstNet Public Safety Hackathon',
      dates: 'March 23rd - 24th, 2018',
      location: 'San Francisco, California',
      description:
        'Developed a mobile application which communcicates a victims medical data from inside an ambulance to doctors at hospital.',
      icon: 'public',
      image:
        'https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/firstnet.png',
      links: [],
    },
    {
      title: 'DeveloperWeek Hackathon',
      dates: 'February 3rd - 4th, 2018',
      location: 'San Francisco, California',
      description:
        'Developed a web application which aggregates social media data regarding cryptocurrencies and predicts future prices.',
      image:
        'https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/developer-week.jpg',
      links: [
        {
          title: 'Github',
          icon: <Icons.github className="h-4 w-4" />,
          href: 'https://github.com/cryptotrends/cryptotrends',
        },
      ],
    },
    {
      title: 'HackDavis',
      dates: 'January 20th - 21st, 2018',
      location: 'Davis, California',
      description:
        'Developed a mobile application which allocates a daily carbon emission allowance to users to move towards a sustainable environment.',
      image:
        'https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-davis.png',
      win: 'Best Data Hack',
      mlh: 'https://s3.amazonaws.com/logged-assets/trust-badge/2018/white.svg',
      links: [
        {
          title: 'Devpost',
          icon: <Icons.globe className="h-4 w-4" />,
          href: 'https://devpost.com/software/my6footprint',
        },
        {
          title: 'ML',
          icon: <Icons.github className="h-4 w-4" />,
          href: 'https://github.com/Wallet6/my6footprint-machine-learning',
        },
        {
          title: 'iOS',
          icon: <Icons.github className="h-4 w-4" />,
          href: 'https://github.com/Wallet6/CarbonWallet',
        },
        {
          title: 'Server',
          icon: <Icons.github className="h-4 w-4" />,
          href: 'https://github.com/Wallet6/wallet6-server',
        },
      ],
    },
    {
      title: 'ETH Waterloo',
      dates: 'October 13th - 15th, 2017',
      location: 'Waterloo, Ontario',
      description:
        'Developed a blockchain application for doctors and pharmacists to perform trustless transactions and prevent overdosage in patients.',
      image:
        'https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/eth-waterloo.png',
      links: [
        {
          title: 'Organization',
          icon: <Icons.github className="h-4 w-4" />,
          href: 'https://github.com/ethdocnet',
        },
      ],
    },
    {
      title: 'Hack The North',
      dates: 'September 15th - 17th, 2017',
      location: 'Waterloo, Ontario',
      description:
        'Developed a virtual reality application allowing users to see themselves in third person.',
      image:
        'https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png',
      mlh: 'https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg',
      links: [
        {
          title: 'Streamer Source',
          icon: <Icons.github className="h-4 w-4" />,
          href: 'https://github.com/justinmichaud/htn2017',
        },
        {
          title: 'Client Source',
          icon: <Icons.github className="h-4 w-4" />,
          href: 'https://github.com/dillionverma/RTSPClient',
        },
      ],
    },
    {
      title: 'Hack The 6ix',
      dates: 'August 26th - 27th, 2017',
      location: 'Toronto, Ontario',
      description:
        'Developed an open platform for people shipping items to same place to combine shipping costs and save money.',
      image:
        'https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-6ix.jpg',
      mlh: 'https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg',
      links: [
        {
          title: 'Source',
          icon: <Icons.github className="h-4 w-4" />,
          href: 'https://github.com/ShareShip/ShareShip',
        },
        {
          title: 'Site',
          icon: <Icons.globe className="h-4 w-4" />,
          href: 'https://share-ship.herokuapp.com/',
        },
      ],
    },
    {
      title: 'Stupid Hack Toronto',
      dates: 'July 23rd, 2017',
      location: 'Toronto, Ontario',
      description:
        'Developed a chrome extension which tracks which facebook profiles you have visited and immediately texts your girlfriend if you visited another girls page.',
      image:
        'https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/stupid-hackathon.png',
      links: [
        {
          title: 'Source',
          icon: <Icons.github className="h-4 w-4" />,
          href: 'https://github.com/nsagirlfriend/nsagirlfriend',
        },
      ],
    },
    {
      title: 'Global AI Hackathon - Toronto',
      dates: 'June 23rd - 25th, 2017',
      location: 'Toronto, Ontario',
      description:
        'Developed a python library which can be imported to any python game and change difficulty of the game based on real time emotion of player. Uses OpenCV and webcam for facial recognition, and a custom Machine Learning Model trained on a [Kaggle Emotion Dataset](https://www.kaggle.com/c/challenges-in-representation-learning-facial-expression-recognition-challenge/leaderboard) using [Tensorflow](https://www.tensorflow.org/Tensorflow) and [Keras](https://keras.io/). This project recieved 1st place prize at the Global AI Hackathon - Toronto and was also invited to demo at [NextAI Canada](https://www.nextcanada.com/next-ai).',
      image:
        'https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/global-ai-hackathon.jpg',
      win: '1st Place Winner',
      links: [
        {
          title: 'Article',
          icon: <Icons.globe className="h-4 w-4" />,
          href: 'https://syncedreview.com/2017/06/26/global-ai-hackathon-in-toronto/',
        },
        {
          title: 'Source',
          icon: <Icons.github className="h-4 w-4" />,
          href: 'https://github.com/TinySamosas/',
        },
      ],
    },
    {
      title: 'McGill AI for Social Innovation Hackathon',
      dates: 'June 17th - 18th, 2017',
      location: 'Montreal, Quebec',
      description:
        'Developed realtime facial microexpression analyzer using AI',
      image:
        'https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/ai-for-social-good.jpg',
      links: [],
    },
    {
      title: 'Open Source Circular Economy Days Hackathon',
      dates: 'June 10th, 2017',
      location: 'Toronto, Ontario',
      description:
        "Developed a custom admin interface for food waste startup <a href='http://genecis.co/'>Genecis</a> to manage their data and provide analytics.",
      image:
        'https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/open-source-circular-economy-days.jpg',
      win: '1st Place Winner',
      links: [
        {
          title: 'Source',
          icon: <Icons.github className="h-4 w-4" />,
          href: 'https://github.com/dillionverma/genecis',
        },
      ],
    },
    {
      title: "Make School's Student App Competition 2017",
      dates: 'May 19th - 21st, 2017',
      location: 'International',
      description: 'Improved PocketDoc and submitted to online competition',
      image:
        'https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/make-school-hackathon.png',
      win: 'Top 10 Finalist | Honourable Mention',
      links: [
        {
          title: 'Medium Article',
          icon: <Icons.globe className="h-4 w-4" />,
          href: 'https://medium.com/make-school/the-winners-of-make-schools-student-app-competition-2017-a6b0e72f190a',
        },
        {
          title: 'Devpost',
          icon: <Icons.globe className="h-4 w-4" />,
          href: 'https://devpost.com/software/pocketdoc-react-native',
        },
        {
          title: 'YouTube',
          icon: <Icons.youtube className="h-4 w-4" />,
          href: 'https://www.youtube.com/watch?v=XwFdn5Rmx68',
        },
        {
          title: 'Source',
          icon: <Icons.github className="h-4 w-4" />,
          href: 'https://github.com/dillionverma/pocketdoc-react-native',
        },
      ],
    },
    {
      title: 'HackMining',
      dates: 'May 12th - 14th, 2017',
      location: 'Toronto, Ontario',
      description: 'Developed neural network to optimize a mining process',
      image:
        'https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-mining.png',
      links: [],
    },
    {
      title: 'Waterloo Equithon',
      dates: 'May 5th - 7th, 2017',
      location: 'Waterloo, Ontario',
      description:
        'Developed Pocketdoc, an app in which you take a picture of a physical wound, and the app returns common solutions or cures to the injuries or diseases.',
      image:
        'https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/waterloo-equithon.png',
      links: [
        {
          title: 'Devpost',
          icon: <Icons.globe className="h-4 w-4" />,
          href: 'https://devpost.com/software/pocketdoc-react-native',
        },
        {
          title: 'YouTube',
          icon: <Icons.youtube className="h-4 w-4" />,
          href: 'https://www.youtube.com/watch?v=XwFdn5Rmx68',
        },
        {
          title: 'Source',
          icon: <Icons.github className="h-4 w-4" />,
          href: 'https://github.com/dillionverma/pocketdoc-react-native',
        },
      ],
    },
    {
      title: 'SpaceApps Waterloo',
      dates: 'April 28th - 30th, 2017',
      location: 'Waterloo, Ontario',
      description:
        'Developed Earthwatch, a web application which allows users in a plane to virtually see important points of interest about the world below them. They can even choose to fly away from their route and then fly back if they choose. Special thanks to CesiumJS for providing open source world and plane models.',
      image:
        'https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/space-apps.png',
      links: [
        {
          title: 'Source',
          icon: <Icons.github className="h-4 w-4" />,
          href: 'https://github.com/dillionverma/earthwatch',
        },
      ],
    },
    {
      title: 'MHacks 9',
      dates: 'March 24th - 26th, 2017',
      location: 'Ann Arbor, Michigan',
      description:
        'Developed Super Graphic Air Traffic, a VR website made to introduce people to the world of air traffic controlling. This project was built completely using THREE.js as well as a node backend server.',
      image:
        'https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/mhacks-9.png',
      mlh: 'https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg',
      links: [
        {
          title: 'Source',
          icon: <Icons.github className="h-4 w-4" />,
          href: 'https://github.com/dillionverma/threejs-planes',
        },
      ],
    },
    {
      title: 'StartHacks I',
      dates: 'March 4th - 5th, 2017',
      location: 'Waterloo, Ontario',
      description:
        'Developed at StartHacks 2017, Recipic is a mobile app which allows you to take pictures of ingredients around your house, and it will recognize those ingredients using ClarifAI image recognition API and return possible recipes to make. Recipic recieved 1st place at the hackathon for best pitch and hack.',
      image:
        'https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/starthacks.png',
      win: '1st Place Winner',
      mlh: 'https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg',
      links: [
        {
          title: 'Source (Mobile)',
          icon: <Icons.github className="h-4 w-4" />,
          href: 'https://github.com/mattBlackDesign/recipic-ionic',
        },
        {
          title: 'Source (Server)',
          icon: <Icons.github className="h-4 w-4" />,
          href: 'https://github.com/mattBlackDesign/recipic-rails',
        },
      ],
    },
    {
      title: 'QHacks II',
      dates: 'February 3rd - 5th, 2017',
      location: 'Kingston, Ontario',
      description:
        'Developed a mobile game which enables city-wide manhunt with random lobbies',
      image:
        'https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/qhacks.png',
      mlh: 'https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg',
      links: [
        {
          title: 'Source (Mobile)',
          icon: <Icons.github className="h-4 w-4" />,
          href: 'https://github.com/dillionverma/human-huntr-react-native',
        },
        {
          title: 'Source (API)',
          icon: <Icons.github className="h-4 w-4" />,
          href: 'https://github.com/mattBlackDesign/human-huntr-rails',
        },
      ],
    },
    {
      title: 'Terrible Hacks V',
      dates: 'November 26th, 2016',
      location: 'Waterloo, Ontario',
      description:
        'Developed a mock of Windows 11 with interesting notifications and functionality',
      image:
        'https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/terrible-hacks-v.png',
      links: [
        {
          title: 'Source',
          icon: <Icons.github className="h-4 w-4" />,
          href: 'https://github.com/justinmichaud/TerribleHacks2016-Windows11',
        },
      ],
    },
    {
      title: 'Portal Hackathon',
      dates: 'October 29, 2016',
      location: 'Kingston, Ontario',
      description:
        "Developed an internal widget for uploading assignments using Waterloo's portal app",
      image:
        'https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/portal-hackathon.png',
      links: [
        {
          title: 'Source',
          icon: <Icons.github className="h-4 w-4" />,
          href: 'https://github.com/UWPortalSDK/crowmark',
        },
      ],
    },
  ],
} as const;
