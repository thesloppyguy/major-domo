import Infant from "@/assets/experience/infant.png";
import Baby from "@/assets/experience/baby.png";
import child from "@/assets/experience/child.png";
import adolescent from "@/assets/experience/teen.png";
import adult from "@/assets/experience/adult.png";
import elderly from "@/assets/experience/old.png";

import LeDiff from "@/assets/projects/headers/diff.jpeg";
import InventoryManager from "@/assets/projects/headers/inv.jpeg";
import TP1 from "@/assets/projects/headers/trivia.jpeg";
import ATS from "@/assets/projects/headers/ats.jpeg";
import AIVolution from "@/assets/projects/headers/loki.jpeg";
import DocU from "@/assets/projects/headers/docu.jpeg";
import NeoRadio from "@/assets/projects/headers/radio.jpeg";
import MediaStream from "@/assets/projects/headers/media.jpeg";

export const work = [
  {
    id: 1,
    image: Infant,
    title: "Trainee Dev",
    company: "Algotrak Pvt Ltd",
    date: "Oct 2021 - May 2022",
    description:
      "Enhanced multilingual handwritten text recognition models and built OCR pipelines, achieving 99%+ model accuracy. Processed over 600,000 documents to extract structured data. Developed image processing solutions using OpenCV.",
  },
  {
    id: 2,
    image: Baby,
    title: "Software Engineer Intern",
    company: "Lokibots",
    date: "Nov 2022 - Jan 2023",
    description:
      "Implemented LRU caching, boosting chatbot speeds by 10x. Automated frontend test pipelines, enhancing QA by 20%. Early exposure to real-world AI product development and optimizations.",
  },
  {
    id: 3,
    image: child,
    title: "Software Engineer",
    company: "Lokibots",
    date: "Feb 2023 - Oct 2023",
    description:
      "Built ATS platforms with multimodal parsers and finance chatbots. Reduced candidate search time by 80% and improved data accuracy by 90%. Delivered production-grade LLM-powered tools.",
  },
  {
    id: 4,
    image: adolescent,
    title: "Software Engg. Manager",
    company: "Lokibots",
    date: "Nov 2023 - Apr 2024",
    description:
      "Led frontend modernization with React, built scalable search systems over 1M+ documents, and engineered top-tier AI parsers. Achieved over 99% parsing accuracy, outpacing competitors.",
  },
  {
    id: 5,
    image: adult,
    title: "Sr. Software Engg. Mgr",
    company: "Lokibots",
    date: "Apr 2024 - Mar 2025",
    description:
      "Built a Gen AI App Platform supporting RAGs, workflows, and API deployments, adopted by 5+ enterprises. Delivered on-premise AI solutions for clients like HDBFS and Reliance, impacting over 200,000 users.",
  },
  {
    id: 6,
    image: elderly,
    title: "Engineering Director",
    company: "Lokibots",
    date: "Apr 2025 - Present",
    description:
      "Spearheading humanoid AI support models at global airports. Architected conversational analytics systems processing over 1M+ customer interactions monthly. Driving next-gen AI solutions at scale.",
  },
];

export const projects = [
  {
    name: "TRIVIAL PURSUIT",
    href: "/trivia",
    backgroundImage: TP1,
    about: "Built a live quiz platform with leaderboards, real-time scoring, and massive concurrency support.",
    year: "2025",
    duration: "2 Months",
    stack: ["Microservices", "NextJs", "Express", "PostgreSQL", "Docker", "AWS", "Redis", "AWS", "NodeJS", "Typescript", "TailwindCSS"],
    vision: "To create scalable live trivia shows that entertain and engage.",
    role: "Architect & Backend Developer (CTO)",
    highlights: [
      "Integrated IVS for live video + timed metadata-based MCQs.",
      "Enabled real-time leaderboard updates and analytics.",
      "Supported 500K+ concurrent users with Redis-backed scoring."
    ],
    impact: "Supported over 500K+ concurrent users and multiple quizzes daily.",
    lesson: "Microservices are a great way to build scalable systems.",
    link: "https://github.com/thesloppyguy/TrivialPursuit",
    referenceImages: [],
  },
  {
    name: "THE DIFFERENCE",
    href: "/lediff",
    backgroundImage: LeDiff,
    about: "The solution was designed to analyze NBFC financial documents to detect discrepancies between the original and the scanned version and provide a diff view of the changes in the document.",
    year: "2023",
    duration: "3 Months",
    stack: ["Python", "NLTK", "Flask", "Docker", "AWS"],
    vision: "Design a text-difference engine to analyze NBFC financial documents with user authentication",
    role: "Lead Developer & Solution Architect",
    highlights: [
      "Implemented a text-difference engine using NLTK and Flask.",
      "Deployed the application on AWS EC2.",
      "Implemented batch processing for large documents and OCR for scanned documents."
    ],
    impact: "Used by over 200 users for document review across the company.",
    lesson: "LLMs are not always the best solution, sometimes a custom model is better.",
    link: "https://github.com/thesloppyguy/TheDifference",
    referenceImages: [],
  },
  {
    name: "INVENTORY MANAGER",
    href: "/inventory",
    backgroundImage: InventoryManager,
    about: "Built a centralized inventory system for managing stock across multiple retail sites with sync support.",
    year: "2023",
    duration: "2 Months",
    stack: ["Python", "Flask", "PostgreSQL", "Docker", "AWS"],
    vision: "To simplify inventory visibility and real-time sync across warehouses.",
    role: "Lead Developer & Solution Architect",
    highlights: [
      "Implemented real-time sync between warehouses.",
      "Enabled bulk upload and download of inventory data.",
      "Built a dashboard for real-time inventory tracking."
    ],
    impact: "Reduced manual inventory errors by 90%.",
    lesson: "Real-time sync is key to maintaining accurate inventory data.",
    link: "https://github.com/thesloppyguy/InventoryManager",
    referenceImages: [],
  },
  {
    name: "LOKI ATS",
    backgroundImage: ATS,
    href: "/ats",
    about: "Designed and deployed a centralized recruitment and evaluation platform for L&T’s talent teams.",
    year: "2023",
    duration: "4 Months",
    stack: ["Node.js", "Express", "React", "NextJS", "TailwindCSS", "Docker", "AWS", "Elasticsearch", "Kibana"],
    vision: "To digitalize hiring workflows from screening to onboarding.",
    role: "Lead Developer & Solution Architect",
    highlights: [
      "Integrated resume parser and JD matcher with internal HR tools.",
      "Enabled dynamic interview scheduling and feedback workflows.",
      "Built dashboards for recruiter KPIs and candidate pipelines."
    ],
    impact: "Reduced hiring turnaround time by 40% during pilot phase.",
    lesson: "Domain-specific tuning is essential for candidate evaluation logic.",
    link: "https://github.com/thesloppyguy/LokiATS",
    referenceImages: [],
  },
  {
    name: "ONE LOKI",
    backgroundImage: AIVolution,
    href: "/oneloki",
    about: "Created a Gen AI App Development Platform supporting agents, custom RAGs, low-code workflows, and API deployments, adopted by 12+ enterprise clients from India's 15 largest companies like HDBFS, Reliance, and SBI.",
    year: "2024",
    duration: "5 Months",
    stack: ["Python", "Typescript", "React", "NextJS", "TailwindCSS", "Docker", "AWS", "LLM"],
    vision: "To consolidate Chatbot and AI development workflows, logs, builds, and metrics in one pane.",
    role: "Lead Developer & Solution Architect",
    highlights: [
      "Developed a low-code workflow builder for custom RAGs.",
      "Built a multi-agent platform supporting custom agents and workflows.",
      "Enabled API deployments for external integrations."
    ],
    impact: "Solutions impacted over 200,000 active users across multiple organizations (HDBFS, JFSL, ZingHr).",
    lesson: "Separation of concerns is key to building scalable and maintainable systems.",
    referenceImages: [],
  },
  {
    name: "DOC U",
    backgroundImage: DocU,
    href: "/docu",
    about: "Built an intelligent document parser that processes structured and unstructured documents into machine-readable formats using AI.",
    year: "2024",
    duration: "3 Months",
    stack: ["Python", "Typescript", "React", "NextJS", "TailwindCSS", "Docker", "AWS", "LLM"],
    vision: "To create a plug-and-play parsing platform for enterprises to automate document workflows.",
    role: "Lead Developer",
    highlights: [
      "Combined OCR, layout parsing, and LLMs to extract complex multi-format content.",
      "Enabled custom schema mapping and format-agnostic parsing.",
      "Built a React-based UI for parsing previews and corrections."
    ],
    impact: "Reduced document processing cost by 80% for pilot users in HR and legal compared to existing solutions like RChilli.",
    lesson: "Hybrid models combining visual layout and semantic context yield more accurate document parsing.",
    link: "https://www.lokibots.ai/document-understanding",
    referenceImages: [],
  },
  {
    name: "NEO RADIO",
    backgroundImage: NeoRadio,
    href: "/neo-radio",
    about: "Created a mobile app that identifies songs from ambient sound and streams related internet radio stations.",
    year: "2024",
    duration: "4 Months",
    stack: ["Flutter", "Dart", "Firebase", "Deezer API", "Alan AI"],
    vision: "To build a lightweight open-source music recognition and discovery tool.",
    role: "Solution Architect & Lead Developer",
    highlights: [
      "Integrated a local ML model for audio fingerprinting.",
      "Built custom UI for music ID and instant streaming.",
      "Used Firebase FireStore for track metadata and radio playlists."
    ],
    impact: "Delivered recognition accuracy of over 85% for real-time queries.",
    lesson: "AI models can be trained to recognize specific patterns in audio data.",
    link: "https://github.com/thesloppyguy/NeoRadio",
    referenceImages: [],
  },
  {
    name: "MEDIA SERVER",
    backgroundImage: MediaStream,
    href: "/media-stream",
    about: "Developed a lightweight media server to handle video/image processing, transcoding, and CDN integration for in house use.",
    year: "2023",
    duration: "1 Month",
    stack: ["Node.js", "FFmpeg", "Docker"],
    vision: "To offer an internal scalable media backend service for at home network devices.",
    role: "System Architect & Developer",
    highlights: [
      "Automated transcoding pipelines using FFmpeg.",
      "Provided APIs for upload, preview, and streaming links.",
    ],
    impact: "Reduced media handling latency by 60% and improved asset optimization.",
    lesson: "Managing media workflows is a complex task, but with the right tools, it can be a breeze.",
    link: "https://github.com/thesloppyguy/MediaServer",
    referenceImages: [],
  },
];

export const labs = [
  {
    name: "LIBRARY MANAGEMENT SYSTEM",
    backgroundImage: "",
    about: "Developed a comprehensive digital library platform for schools, enabling efficient book management, user authentication, and real-time analytics to enhance student engagement and resource utilization.",
    year: "2018",
    duration: "2 Months",
    stack: ["C++", "HTML", "CSS", "JavaScript", "MySQL"],
    vision: "To modernize school libraries by providing a seamless digital platform that fosters reading habits and streamlines library operations.",
    role: "Core Developer",
    highlights: [
      "Implemented role-based access for students and librarians.",
      "Designed an intuitive UI for easy navigation and book discovery."
    ],
    impact: "Reduced manual tracking errors by 70%.",
    lesson: "Prioritizing user experience and feedback loops is crucial for adoption in educational tools.",
    referenceImages: [],
  },
  {
    name: "SMART HOME",
    backgroundImage: "",
    about: "Engineered an IoT system enabling users to control home appliances via WiFi, featuring real-time status updates and command logging through a mobile application.",
    year: "2019",
    duration: "2 Weeks",
    stack: ["ESP32", "Arduino", "Firebase", "MIT App Inventor"],
    vision: "To enhance home automation in my college room and make it more efficient.",
    role: "Lead Developer, Project Manager",
    highlights: [
      "Established real-time communication between devices and the mobile app.",
      "Ensured secure data transmission using Firebase Authentication."
    ],
    impact: "Achieved a 60% reduction in manual operations for users, enhancing convenience and energy efficiency.",
    lesson: "Need to make solutions idiot proof don't take common sense for granted.",
    referenceImages: [],
  },
  {
    name: "ATHENEUM",
    backgroundImage: "",
    about: "The solution strived to provide a virtual solution to eduction amid the pandemic.",
    year: "2020",
    duration: "4 Months",
    stack: ["Flask", "Python", "SQLite", "HTML", "CSS", "JavaScript"],
    vision: "To revolutionize online education by making learning more accessible and tailored to individual needs",
    role: "Lead Developer, Project Manager, UI/UX Designer",
    highlights: [
      "Designed responsive UI components for various devices.",
      "Integrated APIs for content delivery and user analytics.",
      "Implemented user authentication and profile management."
    ],
    impact: "Placed 7th in the Innovative Product Prototype International Challenge.",
    lesson: "Delegation is key to success.",
    referenceImages: [],
  },
  {
    name: "PROXY MATE",
    backgroundImage: "",
    about: "Developed an automated attendance system, where a script logs into class and marks attendance.",
    year: "2020",
    duration: "2 Weeks",
    stack: ["Python", "Selenium", "ChromeDriver", "Chrome Browser", "AWS"],
    vision: "To automate attendance and achieve additional hours to work on my own projects.",
    role: "Sole Developer",
    highlights: [
      "Automated login and attendance marking process.",
      "Integrated with AWS EC2 for automated Execution."
    ],
    impact: "Achieved a 100% attendance in my college.",
    lesson: "Cloud is a very expensive future and it should be used with proper optimization and monitoring.",
    referenceImages: [],
  },
  {
    name: "TELEGRAM STORAGE",
    backgroundImage: "",
    about: "Implemented a solution leveraging Telegram's API to store and retrieve large volumes of data, offering a cost-effective alternative to traditional cloud storage.",
    year: "2022",
    duration: "2 Months",
    stack: ["Python", "Telegram API", "Docker"],
    vision: "To create a cost-effective and scalable solution for storing and retrieving large volumes of data.",
    role: "Sole Developer",
    highlights: [
      "Utilized Telegram's API for efficient data storage and retrieval.",
      "Implemented a cost-effective storage solution using SQLite.",
      "Created a docker container for the application for use in any system."
    ],
    impact: "Achieved an average of 6MB/s upload and 3MB/s download speed.",
    lesson: "Telegram is a very powerful tool but speed limit is a pain.",
    referenceImages: [],
  },
  {
    name: "EMAIL SUMMARIZER",
    backgroundImage: "",
    about: "Developed a script that summarizes emails in bulk and extracts key information using NLP and routes queries to respective departments.",
    year: "2022",
    duration: "1 Week",
    stack: ["Python", "NLP", "SMTP"],
    vision: "To automate email processing and improve efficiency in a corporate environment.",
    role: "Sole Engineer, Solution Architect",
    highlights: [
      "Utilized spaCy for entity recognition and data extraction.",
    ],
    impact: "Improved email processing efficiency by 66% for departments.",
    lesson: "Patterns are the best way to solve problems.",
    referenceImages: [],
  },
  {
    name: "STRIPE INTEGRATION",
    backgroundImage: "",
    about: "Integrated Stripe payment solutions into various applications, enabling seamless transactions, subscription management, and financial reporting.",
    year: "2024",
    duration: "1 Month",
    stack: ["Python", "Django", "Stripe API", "React"],
    vision: "To simplify online payment processes, making them accessible and reliable for businesses of all sizes.",
    role: "Full-Stack Developer",
    highlights: [
      "Implemented secure payment gateways and checkout flows.",
      "Developed dashboards for transaction monitoring and analytics.",
      "Ensured compliance with financial regulations and standards."
    ],
    impact: "Opened up a new revenue stream for the company.",
    lesson: "A well-integrated payment system enhances user trust and business credibility.",
    referenceImages: [],
  },
  {
    name: "UNIT TEST SCRIPTING",
    backgroundImage: "",
    about: "Created automated testing scripts to ensure the reliability and stability of applications, facilitating continuous integration and deployment.",
    year: "2023",
    duration: "4 Months",
    stack: ["Selenium", "PyTest", "Python"],
    vision: "To enhance software quality through rigorous and automated testing processes.",
    role: "Freelancer",
    highlights: [
      "Developed test cases covering critical application functionalities.",
      "Integrated tests into CI/CD pipelines for automated execution.",
      "Generated detailed reports for test outcomes and coverage."
    ],
    impact: "Reduced bug-related incidents by 60% and accelerated deployment cycles by 30%.",
    lesson: "Early and continuous testing is vital for maintaining high-quality software products.",
    referenceImages: [],
  },
  {
    name: "GITHUB ACTIONS",
    backgroundImage: "",
    about: "Implemented custom GitHub workflows to automate development processes, including code linting, testing, and deployment, enhancing team productivity.",
    year: "2023",
    duration: "1 Week",
    stack: ["GitHub Actions", "JavaScript"],
    vision: "To streamline development workflows, reducing manual interventions and errors.",
    role: "Freelancer",
    highlights: [
      "Created reusable workflow templates for various projects.",
      "Automated code quality checks and deployment processes.",
      "Monitored workflow executions and optimized performance."
    ],
    impact: "Improved deployment frequency by 40% and reduced integration issues by 50%.",
    lesson: "Automating repetitive tasks allows developers to focus more on feature development and innovation.",
    referenceImages: [],
  },
  {
    name: "UI PROPS",
    backgroundImage: "",
    about: "Enhanced user interfaces across multiple applications, focusing on responsiveness, accessibility, and aesthetic consistency to improve user experience.",
    year: "2024",
    duration: "-",
    stack: ["React", "TailwindCSS", "JavaScript", "TypeScript", "NextJS"],
    vision: "To create intuitive and visually appealing interfaces that cater to diverse user needs.",
    role: "Freelancer",
    highlights: [
      "Refactored components for better performance and maintainability.",
      "Ensured compliance with accessibility standards (WCAG).",
      "Collaborated with designers for cohesive visual themes."
    ],
    impact: "Increased user satisfaction scores by 20% and reduced bounce rates by 15%.",
    lesson: "Attention to UI details significantly influences user engagement and retention.",
    referenceImages: [],
  }
]