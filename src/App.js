import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { useState } from "react";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Mail, Linkedin, ChevronDown } from "lucide-react";
import "./index.css";

import WorkIcon from "@mui/icons-material/Work";
import SchoolIcon from "@mui/icons-material/School";
import Resume from "./assets/Resume.pdf";
import NCAAPicks from "./assets/ncaapicks.png";
import Spreadsheet from "./assets/spreadsheet.png";
import Sprite from "./assets/sprite.png";
import Blackjack from "./assets/blackjack.png";
import Wristwrite from "./assets/wristwrite.png";
import Depthdash from "./assets/depthdash.png";
import Quickgrid from "./assets/quickgrid.png";
import Simon from "./assets/simon.png";
import Cheesemice from "./assets/cheesemice.png";
import Battle from "./assets/battle.png";
import Agario from "./assets/agario.png";
import Rotary from "./assets/rotary.jpg";

export default function App() {
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  }, []);

  return (
    <div className="wrapper">
      <Navbar />
      <Header />
      <Skills />
      <Projects />
      <About />
      <Courses />
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}

function Navbar() {
  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="navbar"
    >
      <div className="nav-content">
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#about">About Me</a>
        <a href="#courses">Coursework</a>
      </div>
    </motion.nav>
  );
}

function Header() {
  return (
    <header className="header">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="headerContent"
      >
        <h1 className="title">
          <p>Hi, I'm</p>
          <span className="highlight">Ryan Nguyen</span>
        </h1>
        <p className="subtitle">Full-Stack Developer • Computer Science Graduate</p>
        <p className="about">
          Software developer passionate about designing and building innovative
          solutions
        </p>

        <motion.div
          className="contactLinks"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <a href="mailto:ryan.tat.nguyen@gmail.com" className="contact-link">
            <Mail />
          </a>
          <a
            href="https://www.linkedin.com/in/ryan-tat-nguyen"
            target="_blank"
            rel="noreferrer"
            className="contact-link"
          >
            <Linkedin />
          </a>
          <a
            href={Resume}
            target="_blank"
            rel="noreferrer"
            className="contact-link"
          >
            Resume
          </a>
        </motion.div>

        <motion.div
          className="scroll-indicator"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ChevronDown size={32} />
        </motion.div>
      </motion.div>
    </header>
  );
}

function Skills() {
  const skills = [
    {
      title: "JavaScript",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
    },
    {
      title: "TypeScript",
      image: "https://cdn.worldvectorlogo.com/logos/typescript.svg",
    },
    {
      title: "C/C++",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg",
    },
    {
      title: "C#",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/4/4f/Csharp_Logo.png",
    },
    {
      title: "Python",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg",
    },
    {
      title: "Java",
      image:
        "https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg",
    },
    {
      title: "SQL",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/8/87/Sql_data_base_with_logo.png",
    },
    {
      title: "HTML/CSS",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg",
    },
    {
      title: "React.js",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
    },
    {
      title: "Node.js",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg",
    },
    {
      title: "Django",
      image:
        "https://static.djangoproject.com/img/logos/django-logo-negative.svg",
    },
    {
      title: "Bootstrap",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg",
    },
    {
      title: "jQuery",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/9/9d/JQuery_UI_Logo.png",
    },
    {
      title: "MySQL",
      image: "https://upload.wikimedia.org/wikipedia/en/d/dd/MySQL_logo.svg",
    },
    {
      title: "MongoDB",
      image:
        "https://webassets.mongodb.com/_com_assets/cms/mongodb-logo-rgb-j6w271g1xn.jpg",
    },
    {
      title: "AWS",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
    },
    {
      title: "Docker",
      image: "https://www.docker.com/wp-content/uploads/2022/03/Moby-logo.png",
    },
    {
      title: "Excel",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/7/73/Microsoft_Excel_2013-2019_logo.svg",
    },
  ];

  return (
    <section id="skills" className="section">
      <motion.h2
        className="sectionTitle"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Skills
      </motion.h2>
      <div className="skillsGrid">
        {skills.map((skill, i) => (
          <motion.div
            key={i}
            className="skill-card"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.025 }}
            viewport={{ once: true }}
          >
            <img src={skill.image} alt={skill.title} className="skillImg" />
            <p className="skill-title">{skill.title}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function Projects() {
  const projects = [
    {
      title: "NCAA Picks",
      desc: "Full-stack web application for weekly college football predictions using virtual points, allowing fans to compete socially without gambling. Capstone project developed under agile methodology.",
      img: NCAAPicks,
      link: "https://corptoolsprojectshowcase.netlify.app/",
    },
    {
      title: "Spreadsheet",
      desc: "Custom-built spreadsheet application, featuring core functionalities like data entry, mathematical operations, and persistent file saving. Designed for enterprise productivity.",
      img: Spreadsheet,
      link: "https://drive.google.com/file/d/1qpqhWf15aKabKxEKhGkWGt9Iebu4zfe5/view?usp=sharing",
      github: "https://gitea.com/Taizukii/spreadsheet",
    },
    {
      title: "Sprite Editor",
      desc: "Feature-rich 2D sprite editor supporting pixel-level manipulation and real-time previews. Built for game developers and digital artists.",
      img: Sprite,
      link: "https://drive.google.com/file/d/15PdZFP_-hXPxqOsg8b4kbKqZDX7mst8m/view",
      github: "https://gitea.com/Taizukii/sprite-editor",
    },
    {
      title: "Rotary MP3 Player",
      desc: "A custom-built MP3 player that uses a rotary encoder as its primary control mechanism for navigation and playback. Designed to explore embedded systems, user interface design, and audio hardware integration.",
      img: Rotary,
      link: "https://drive.google.com/file/d/1uIim2QSLxf-5v9bu-DQh_9SlPdYhM7r_/view?usp=sharing",
    },
    {
      title: "Agario Server/DB",
      desc: "Multiplayer game server with real-time database integration for user sessions, gameplay metrics, and scalable matchmaking logic.",
      img: Agario,
      link: "https://drive.google.com/file/d/1p-Um4zz24b8cThkY5aRGye6XUTn1klBo/view?usp=sharing",
      github: "https://gitea.com/Taizukii/agario-server-db",
    },
    {
      title: "Blackjack",
      desc: "Interactive casino game simulation with strategic card logic and a challenging AI opponent. Developed using modern game architecture patterns.",
      img: Blackjack,
      link: "https://drive.google.com/file/d/1h71lmXXFrZ-EqAc9qBzV-IOWhshxnv-o/view",
      github: "https://gitea.com/Taizukii/blackjack",
    },
    {
      title: "Wrist Write",
      desc: "Minimalist smartwatch concept notepad app optimized for wearable UI/UX and on-the-go note-taking. Engineered with embedded device constraints in mind.",
      img: Wristwrite,
      link: "https://drive.google.com/file/d/1NaVKlMwa74Hkkgt98iZEmJDDHr4gfutm/view?usp=sharing",
      github: "https://gitea.com/Taizukii/wrist-write",
    },
    {
      title: "Depth Dash",
      desc: "An interactive spatial awareness game where users control a cursor square to reach randomly placed, rotated, and scaled target squares. Ideal for visual training and coordination assessment.",
      img: Depthdash,
      link: "https://drive.google.com/file/d/1BIDGIq0_JXDbqFK9loYcPVwHV4x-9O7N/view?usp=sharing",
      github: "https://gitea.com/Taizuki/depth-dash",
    },
    {
      title: "Quick Grid",
      desc: "Interactive 4×4 grid reaction game designed to measure and improve user response times. Highlights precise input tracking and a minimalist UI tailored for user focus and accessibility.",
      img: Quickgrid,
      link: "https://drive.google.com/file/d/1BHN1vvKrNuuyvsXFlIYsKUFJYCtXM6ia/view?usp=sharing",
      github: "https://gitea.com/Taizuki/quick-grid",
    },
    {
      title: "Simon Game",
      desc: "Memory sequence game that tests pattern recall with increasing complexity. Developed with clean state management and a unique disorientation mode.",
      img: Simon,
      link: "https://drive.google.com/file/d/1exKeuADrSsc3fh5sfowjPyXgkLdVkLW7/view?usp=sharing",
      github: "https://gitea.com/Taizuki/simon-game",
    },
    {
      title: "Cheese vs. Mice",
      desc: "Tower defense-inspired strategy game where players deploy cheese traps to outsmart waves of invading mice. Features pathfinding and AI behaviors.",
      img: Cheesemice,
      link: "https://drive.google.com/file/d/1e40Jz3q28ak583KDBv3GzTGGDjgabQqi/view?usp=sharing",
      github: "https://gitea.com/Taizuki/cheese-vs-mice",
    },
    {
      title: "Battle GUI",
      desc: "Turn-based battle simulator inspired by rock-paper-scissors logic. Developed with a custom GUI engine and game state tracking to explore decision-making patterns.",
      img: Battle,
      link: "https://drive.google.com/file/d/1ZAsQjlUyNdwjbAFuRNlKQSJiiMxjBDw8/view?usp=sharing",
      github: "https://gitea.com/Taizuki/rock-paper-battle",
    },
  ];

  return (
    <section id="projects" className="section">
      <motion.h2
        className="sectionTitle"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Projects
      </motion.h2>
      <div className="projects-grid">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            className="project-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.025 }}
            viewport={{ once: true }}
          >
            <div className="project-image-container">
              <img src={p.img} alt={p.title} className="projectImg" />
            </div>
            <div className="project-content">
              <h3 className="project-title">{p.title}</h3>
              <p className="project-desc">{p.desc}</p>
              <div className="project-buttons">
                <a
                  href={p.link}
                  target="_blank"
                  rel="noreferrer"
                  className="project-link"
                >
                  View Project
                </a>
                {p.github && (
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noreferrer"
                    className="github-link"
                  >
                    Repository
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about">
      <div className="experience">
        <motion.h2
          className="sectionTitle"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>
        <div className="aboutme">
          {/* <p> 
            I'm a software developer and currently a student at the 
            University of Utah majoring in Computer Science.
          </p>
          <p>
            I have great passion and ambition towards building applications 
            and  
          </p> */}
        </div>
        <VerticalTimeline lineColor="#3863da">
          <VerticalTimelineElement
            date="2016 - 2020"
            iconStyle={{ background: "white", color: "black" }}
            contentStyle={{
              background: "white",
              borderRadius: "20px",
              padding: "20px",
              boxShadow: "0 4px 14px rgba(0, 0, 0, 0.06)",
            }}
            icon={<SchoolIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              West High School
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Salt Lake City, UT
            </h4>
            <ul>
              <li>GPA: 4.0</li>
              <li>High School Diploma</li>
            </ul>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2022 - 2023"
            iconStyle={{ background: "white", color: "black" }}
            contentStyle={{
              background: "white",
              borderRadius: "20px",
              padding: "20px",
              boxShadow: "0 4px 14px rgba(0, 0, 0, 0.06)",
            }}
            icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              Retail Cashier - P-2000 Superstore
            </h3>
            <h4 className="vertical-timeline-element-subtitle">Stockton, CA</h4>
            <ul>
              <li>
                Provided friendly and efficient customer service in a fast-paced
                retail environment, handling transactions, returns, and product
                inquiries
              </li>
              <li>
                Maintained accurate cash handling and register operations while
                restocking shelves, organizing displays, and ensuring a clean
                and welcoming store atmosphere
              </li>
            </ul>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2024 - 2025"
            iconStyle={{ background: "white", color: "black" }}
            contentStyle={{
              background: "white",
              borderRadius: "20px",
              padding: "20px",
              boxShadow: "0 4px 14px rgba(0, 0, 0, 0.06)",
            }}
            icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              Freelance Web Developer - C&T Driving School
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Salt Lake City, UT
            </h4>
            <ul>
              <li>
                Designed and developed a responsive website to improve the
                school’s online presence and user experience
              </li>
              <li>
                Implemented clear navigation and key information architecture to
                reduce customer confusion and streamline course sign-ups
              </li>
              <li>
                Optimized for SEO and local search, resulting in increased web
                traffic and improved customer engagement
              </li>
            </ul>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            date="2020 - 2025"
            iconStyle={{ background: "white", color: "black" }}
            contentStyle={{
              background: "white",
              borderRadius: "20px",
              padding: "20px",
              boxShadow: "0 4px 14px rgba(0, 0, 0, 0.06)",
            }}
            icon={<SchoolIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              University of Utah
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Salt Lake City, UT
            </h4>
            <ul>
              <li>GPA: 3.792</li>
              <li>Bachelor's of Science in Computer Science</li>
              <li>Dean’s List (6 Semesters)</li>
            </ul>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2025"
            iconStyle={{ background: "white", color: "black" }}
            contentStyle={{
              background: "white",
              borderRadius: "20px",
              padding: "20px",
              boxShadow: "0 4px 14px rgba(0, 0, 0, 0.06)",
            }}
            icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              LMS Administrator - C&T Driving School
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Salt Lake City, UT
            </h4>
            <ul>
              <li>
                Engineered dynamic quiz banks, automated assessments, and
                conditional certificate issuance workflows to support scalable
                and regulation-aligned driver education
              </li>
              <li>
                Integrated backend logic for real-time progress tracking, data
                validation, and compliance reporting in accordance with Utah
                state driving requirements
              </li>
              <li>
                Administered course structure, user permissions, and completion
                gating mechanisms
              </li>
            </ul>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </section>
  );
}

function Courses() {
  const [selected, setSelected] = useState(null);

  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };

  return (
    <section id="courses" className="section">
      {/* Section title for Coursework */}
      <motion.h2
        className="sectionTitle"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Related Coursework
      </motion.h2>

      <div className="accordion-wrapper">
        <div className="accordion">
          {data.map((item, i) => (
            <motion.div
              className="course"
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.025 }}
              viewport={{ once: true }}
            >
              <div className="course-title" onClick={() => toggle(i)}>
                <h3>
                  {(() => {
                    const [id, title] = item.course.split(" - ");
                    return (
                      <>
                        <span className="highlight">{id}</span> {title}
                      </>
                    );
                  })()}
                </h3>
                <span>{selected === i ? "-" : "+"}</span>
              </div>
              <div className={selected === i ? "content show" : "content"}>
                {item.description}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

const data = [
  {
    course: "CS 4500 - Senior Capstone Project",
    description:
      "The Capstone program represents the pinnacle of the undergraduate computer science, data science, and software development curriculums.  It is an intense two-semester sequence in which students embark either on their own research culminating with a Bachelor’s Thesis, or form project teams culminating in delivering a significant software Capstone Project.",
  },
  {
    course: "CS 4000 - Senior Capstone Design",
    description:
      "This class is the first semester in the sequence. Seniors will work on team formation, project identification, project planning (including UI design, software architecture, testing methods, scheduling, etc.), and completion of a system prototype. This course will provide teams with time and guidance to effectively plan their projects, as well as emphasizing the written and oral communications necessary to succeed in industry.",
  },
  {
    course: "CS 4400 - Computer Systems",
    description:
      "C, Assembly - Introduction to computer systems from a programmer's point of view. Machine level representations of programs, optimizing program performance, memory hierarchy, linking, exceptional control flow, measuring program performance, virtual memory, concurrent programming with threads, network programming.",
  },
  {
    course: "CS 3810 - Computer Organization",
    description:
      "MIPS assembly language, MARS Simulator - An in-depth study of computer architecture and design, including topics such as RISC and CISC instruction set architectures, CPU organizations, pipelining, memory systems, input/output, and parallel machines. Emphasis is placed on performance measures and compilation issues.",
  },
  {
    course: "CS 3520 - Programming Languages",
    description:
      "Shplait(Custom-Language), DrRacket - Ideas behind the design and implementation of programming languages. Syntactic description; grammars and abstract syntax; interpreters and compilers; scope and lifetime of variables; order of evaluation; continuation representation; type systems.",
  },
  {
    course: "CS 3505 - Software Practices 2",
    description:
      "C++, Qt Creator - An in-depth study of traditional software development (using UML) from inception through implementation. The entire class is team-based, and will include a project that uses an agile process.",
  },
  {
    course: "CS 3500 - Software Practice",
    description:
      "C#, MAUI, Visual Studio - Practical exposure to the process of creating large software systems, including requirements specifications, design, implementation, testing, and maintenance. Emphasis on software process, software tools (debuggers, profilers, source code repositories, test harnesses), software engineering techniques (time management, code, and documentation standards, source code management, object-oriented analysis and design), and team development practice. Much of the work will be in groups and will involve modifying preexisting software systems.",
  },
  {
    course: "CS 3390 - Ethics in Data Science",
    description:
      "In this course, we will explore the technical, social, and ethical ramifications of the choices we make at the different stages of the data analysis pipeline, from data collection and storage to understanding feedback loops in analysis. Through class discussions, case studies and exercises, students will learn the basics of ethical thinking in science, understand the history of ethical dilemmas in scientific work, and study the distinct challenges associated with ethics in modern data science.",
  },
  {
    course: "CS 3100 - Models of Computation",
    description:
      "This course covers different models of computation and how they relate to the understanding and better design of real-world computer programs. As examples, we will study Turing machines that help define the fundamental limits of computing, Push-down Automata that help build language parsers, and Finite Automata that help build string pattern matchers. This course also covers the basics of designing correctly functioning programs, and introduces the use of mathematical logic through Boolean satisfiability methods. The course will involve the use of hands-on programming exercises written at a sufficiently high level of abstraction that the connections between theory and practice are apparent.",
  },
  {
    course: "CS 3130 - Engineering Probability and Statistics",
    description:
      "An introduction to probability theory and statistics, with an emphasis on solving problems in electrical and computer engineering. Topics in probability include discrete and continuous random variables, probability distributions, sums and functions of random variables, the law of large numbers, and the central limit theorem. Topics in statistics include sample mean and variance, estimating distributions, correlation, regression, and hypothesis testing. Engineering applications include failure analysis, process control, communication systems, and speech recognition.",
  },
  {
    course: "CS 3020 - Research Forum",
    description:
      "Throughout the semester, students will hear from a number of speakers about the kinds of problems that remain unsolved in computer science. The majority of the speakers to be School of computing faculty, with some speakers coming from outside of the university.",
  },
  {
    course: "CS 3011 - Industry Forum",
    description:
      "Presentations from local and national business leaders discussing issues in computing from industry perspectives, trends in computer science, professionalism, ethics, career readiness, lifelong learning, and contemporary issues. Offered on a graded basis.",
  },
  {
    course: "CS 2420 - Algorithms & Data Structures",
    description:
      "Java, Ecliipse IDE - This course provides an introduction to the problem of engineering computational efficiency into programs. Students will learn about classical algorithms (including sorting, searching, and graph traversal), data structures (including stacks, queues, linked lists, trees, hash tables, and graphs), and analysis of program space and time requirements. Students will complete extensive programming exercises that require the application of elementary techniques from software engineering.",
  },
  {
    course: "CS 2100 - Discrete Structures",
    description:
      "Introduction to propositional logic, predicate logic, formal logical arguments, finite sets, functions, relations, inductive proofs, recurrence relations, graphs, probability, and their applications to Computer Science.",
  },
  {
    course: "CS 1410 - Object-Oriented Programming",
    description:
      "Java, Eclipse IDE - This course builds on the programming skills learned in CS 1400, while introducing the paradigm of object-oriented programming.",
  },
  {
    course: "CS 1030 - Foundation of CS",
    description:
      "This course offers a gentle introduction to, and background about, what computers do and how they work, as well as how they interpret software instructions (i.e., programs) to do useful work.",
  },
  {
    course: "MATH 1210 - Calculus 1",
    description:
      "Functions and their graphs, differentiation of polynomial, rational and trigonometric functions. Velocity and acceleration. Geometric applications of the derivative, minimization and maximization problems, the indefinite integral, and an introduction to differential equations. The definite integral and the Fundamental Theorem of Calculus.",
  },
  {
    course: "MATH 1220 - Calculus 2",
    description:
      "Geometric applications of the integral, logarithmic, and exponential functions, techniques of integration, conic sections, improper integrals, numerical approximation techniques, infinite series and power series expansions, differential equations (continued).",
  },
  {
    course: "MATH 2270 - Linear Algebra",
    description:
      "Euclidean space, linear systems, Gaussian elimination, determinants, inverses, vector spaces, linear transformations, quadratic forms, least squares and linear programming, eigenvalues and eigenvectors, diagonalization. Includes theoretical and computer lab components.",
  },
];

function Footer() {
  return (
    <footer className="footer">
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        Thanks for visiting ✨
      </motion.p>
    </footer>
  );
}

function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    window.history.replaceState(null, "", "/");
  };
  useState(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);
  return (
    <motion.button
      className="scroll-to-top"
      onClick={scrollToTop}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: visible ? 1 : 0, scale: visible ? 1 : 0 }}
      transition={{ duration: 0.3 }}
    >
      ↑
    </motion.button>
  );
}