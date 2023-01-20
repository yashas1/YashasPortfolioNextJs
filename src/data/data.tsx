import {
  AcademicCapIcon,
  CalendarIcon,
  DownloadIcon,
  FlagIcon,
  MapIcon,
  OfficeBuildingIcon,
  SparklesIcon,
} from '@heroicons/react/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
import TwitterIcon from '../components/Icon/TwitterIcon';

import heroImage from '../images/header-background.webp';
import housemarket from '../images/portfolio/housemarket.png';
import documentParser from '../images/portfolio/documentParser.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';

import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Yashas Bhadregowda',
  description: 'Portfolio site built by Yashas Bhadregowda',
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Projects: 'Projects',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Yashas Bhadregowda.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a Canada based <strong className="text-stone-100">Full Stack Software Engineer</strong>, currently looking
        for Full time job in <strong className="text-stone-100">Software development role </strong>.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time time, you can catch me solving problems in <strong className="text-stone-100">LeetCode</strong>,
        Working out at <strong className="text-stone-100">Gym</strong> , or exploring beautiful Nature in{' '}
        <strong className="text-stone-100">Canada</strong>.
      </p>
    </>
  ),
  actions: [
    {
      href: 'https://drive.google.com/file/d/1Uz2Bklsc0Bkgmk7mRqBJTunX2Y95rjvq/view?usp=sharing',
      text: 'Resume',
      primary: true,
      Icon: DownloadIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `
  I am an athlete at heart with an entrepreneurial spirit, a knack for software development, and a passion for coding. Born in a small town in Tumkur, Karnataka, India, I made my move to Ontario, Canada, Where i finished my post graduation studies as a full stack developer form conestoga college, alongside my many ongoing projects.
  Outside of work I am an avid gymbrat, photographer and PC gamer. I love to travel and lead a fairly nomadic lifestyle. I built much of my early portfolio from beaches of south india and dream of taking my work with me while traveling the world.
`,
  aboutItems: [
    {label: 'Location', text: 'Waterloo, ON', Icon: MapIcon},
    {label: 'Age', text: '27', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Indian', Icon: FlagIcon},
    {label: 'Interests', text: 'Motorcycles, Photography, Pc Games', Icon: SparklesIcon},
    {label: 'Study', text: 'Conestoga college', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'Oracle', Icon: OfficeBuildingIcon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'React/Redux',
        level: 8,
      },
      {
        name: 'JavaScript/Typescript',
        level: 9,
      },
      {
        name: 'NextJs',
        level: 7,
      },
      {
        name: 'GraphQL',
        level: 6,
      },
      {
        name: 'Angular JS',
        level: 6,
      },
    ],
  },

  {
    name: 'Backend development',
    skills: [
      {
        name: 'Node.js',
        level: 8,
      },
      {
        name: 'Python',
        level: 6,
      },
      {
        name: 'C#',
        level: 4,
      },
    ],
  },
  {
    name: 'Database',
    skills: [
      {
        name: 'MongoDB',
        level: 7,
      },
      {
        name: 'MySql',
        level: 5,
      },
    ],
  },
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'English',
        level: 9,
      },
      {
        name: 'Kannada',
        level: 10,
      },
      {
        name: 'Hindi',
        level: 6,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'HouseMarket APP',
    description:
      'An HouseMarket app built using next js, firebase , Application allows the users to search for the near by houses and allows the user to sell the Houses.',
    url: 'https://animated-piroshki-9d86f9.netlify.app/',
    image: housemarket,
  },
  {
    title: 'Document Parser',
    description:
      'A web application in which AI model is trained to understand the unstructred Data, The model can read the Bank statments and generate the key values results ',
    url: 'https://github.com/yashas1/Final_capstone_project',
    image: documentParser,
  },

  {
    title: 'Pro Shop',
    description: 'An Ecommerce application ',
    url: 'https://timbaker.me',
    image: porfolioImage3,
  },
  {
    title: 'Project title 4',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage4,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'December 2022',
    location: 'Conestoga College, ON, Canada',
    title: 'Mobile Solutions Development',
    content: (
      <p>
        Post Graduation Course , where i learnt and implemnted Mobile/Web technologies, cyber security, System Design.
        Graduated with 3.7 GPA
      </p>
    ),
  },
  {
    date: 'Aug 2017',
    location: 'Channabasaveshwara Institute of Technology, Karnataka, India',
    title: 'Information Science and Enginerring',
    content: (
      <p>
        4 years of Bachelor of Engineering Degree , where i learnt computer science Engineering princeples, Design and
        Development.Focused on solving real time problems by applying computer technologies. I grduated on 2017 with 3.4
        GPA
      </p>
    ),
  },
];

export const experience: TimelineItem[] = [
  {
    date: '2022,Sep - 2022-Dec',
    location: 'Derivative Path, Inc., Canada',
    title: 'Intern',
    content: (
      <>
        <p>
          Worked on building an AI module, which is trained to automate the pdf document reading and extracting data.
          The module is built using Deep learning, Natural Language processing concepts. The module gives 90 percent
          accuracy in reading the bank notices and matches the required attributes. AWS s3 bucket is used to store
          files, AWS lambdas used to run the python modules. We used React in frontend and express router for backed
        </p>
      </>
    ),
  },
  {
    date: '2018,Jan - 2021-Sep',
    location: 'Oracle',
    title: 'Frontend Developer',
    content: (
      <>
        <ul>
          <li> • Involved in building new components for Oracle Responsys product using ReactJS.</li>
          <li>• Formulated and implemented improvements on performance by minimizing loading time of application.</li>
          <li>• Involved in the process of Software Development life Cycle Agile/Scrum model. Gathering business </li>
          <li>• Performed components testing with Jest and React Testing Library to achieve 70% test coverage.</li>
          <li>
            • Developed reusable components in Next JS and hosted those modules on oracle npm repo, to use across
            multiple applications.
          </li>
        </ul>
      </>
    ),
  },
  {
    date: 'Sept,2017-Jan-2018',
    location: 'VerastileTech,India',
    title: 'Assoicate Campaign Specalist',
    content: (
      <ul>
        <li>
          • Worked on developing the responsive dynamic web modules using Angular js, Python ,HTML - 5, CSS – 3,
          Bootstrap 4, and along with converting PSD to a Web page.{' '}
        </li>
        <li>• Building web applications using WordPress and shopify for multiple clients.</li>
        <li>
          • Built new design components for AB testing the web page for Staples web application project using react,
          JavaScript , Graph QL, Oracle Maximizer
        </li>
      </ul>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'Naveen Sharma / Software Developer at Oracle',
      text: 'It’s rare that you come across standout talent like Yashas. I had the pleasure of working with Yashas for more than one year at Oracle. His focus keeps everything moving smoothly, he makes sure all the deadlines are met, and makes sure that whatever project he is working on meets the highest standards. He very Skill full in Web Technologies like react , Next Js , Java Script. As a team member or a leader, Yashas earns my highest recommendation',
      image: 'https://logos-world.net/wp-content/uploads/2020/09/Oracle-Logo.png',
    },
    {
      name: 'Jessen Jurado / Senior QA Consultant at Lev',
      text: 'I worked with Yashas for about six months in 2020. He picked up new tasks quickly and streamlined, automated, and simplified complex tasks during the time we worked together. He also took initiative on a month-long project to modernize our workflow, and accomplished it in under two weeks--our client was very pleased. Yashas is serious about producing quality work, thinks pro-actively, and is quick to communicate potential concerns. He was a pleasure to work with; I will miss having him as a colleague, and know he will have much success in his new role',
      image: 'https://yt3.ggpht.com/ytc/AMLnZu8pjm4DPiQgPG9d4p9hGvryEnjook-W2kpicKBxmg=s900-c-k-c0x00ffffff-no-rj',
    },
    {
      name: 'Stacy / Digital Marketing Manger at Staples',
      text: 'Yashas handled Email marketing project for 12 months at oracle for staples project. He also worked on Product development project where he showed his hard work and dedication . He is a fast learner and always eager to learn and try new things.',
      image: 'https://cdn.mos.cms.futurecdn.net/9FjXgFet9VcH4fXyqvva2j-1200-80.jpg',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Here is the contact infromation on how to connect with me.',
  items: [
    {
      type: ContactType.Email,
      text: 'yashas.bhadregowda@gmail.com',
      href: 'mailto:yashas.bhadregowda@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'Waterloo On, Canada',
      href: 'https://goo.gl/maps/CBmZQ3ics3Nap2Dj6',
    },
    {
      type: ContactType.Instagram,
      text: '@yashas____gowda',
      href: 'https://www.instagram.com/yashas____gowda/',
    },
    {
      type: ContactType.Github,
      text: 'yashas1',
      href: 'https://github.com/yashas1',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/yashas1'},
  {label: 'Stack Overflow', Icon: StackOverflowIcon, href: 'https://stackoverflow.com/users/11817070/yashas-b'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/yashas-bhadregowda-67b5a9122/'},
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/yashas____gowda/'},
  {label: 'Twitter', Icon: TwitterIcon, href: 'https://twitter.com/yashas164'},
];
