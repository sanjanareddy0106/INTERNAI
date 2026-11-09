/* =========================================================
   InternAI - Data and configuration
   (loaded before script.js)
   ========================================================= */


/* ---------- 1. Scoring weights (total = 100) ---------- */
const WEIGHTS = {
  skills: 50,
  domain: 25,
  location: 15,
  academic: 10
};


/* ---------- 2. Dropdown options ---------- */
const DOMAINS = [
  "Software Development",
  "Web Development",
  "Data Science",
  "Artificial Intelligence",
  "Cybersecurity"
];

const LOCATIONS = [
  "Hyderabad",
  "Bangalore",
  "Chennai",
  "Remote"
];

// [label shown to student, branch code used for matching]
const ACADEMIC_OPTIONS = [
  ["B.Tech CSE", "cs"],
  ["B.Tech IT", "cs"],
  ["BCA / MCA", "cs"],
  ["B.Tech ECE / EEE", "ece"],
  ["B.Sc (Maths / Stats / CS)", "sci"],
  ["Other", "other"]
];


/* ---------- 3. Synonyms: what the student types -> standard skill name ---------- */
const SYNONYMS = {
  "js": "javascript",
  "ml": "machine learning",
  "ai": "artificial intelligence",
  "dl": "deep learning",
  "nlp": "natural language processing",
  "py": "python",
  "reactjs": "react",
  "react.js": "react",
  "nodejs": "node.js",
  "node": "node.js",
  "ts": "typescript",
  "postgres": "sql",
  "mysql": "sql",
  "html5": "html",
  "css3": "css",
  "cpp": "c++",
  "dsa": "data structures",
  "sklearn": "scikit-learn",
  "scikit learn": "scikit-learn",
  "tf": "tensorflow",
  "networks": "networking",
  "pentesting": "penetration testing",
  "pentest": "penetration testing",
  "github": "git"
};


/* ---------- 4. Internship dataset ---------- */
// Helper: builds one internship object from plain values.
// Branch codes: cs, ece, sci, other
function internship(title, company, domain, location, skills, branches) {
  return {
    title: title,
    company: company,
    domain: domain,
    location: location,
    skills: skills,
    branches: branches
  };
}

const INTERNSHIPS = [
  // ----- Software Development -----
  internship("Backend Developer Intern", "TechNova", "Software Development", "Bangalore", ["java", "sql", "git", "data structures"], ["cs", "ece"]),
  internship("Software Engineer Intern", "CodeCraft", "Software Development", "Hyderabad", ["python", "data structures", "git", "sql"], ["cs", "ece", "sci"]),
  internship("Android App Intern", "AppForge", "Software Development", "Remote", ["java", "kotlin", "git", "sql"], ["cs"]),
  internship("Full-Stack Intern", "Pixelwave", "Software Development", "Chennai", ["javascript", "node.js", "sql", "git"], ["cs"]),
  internship("QA Automation Intern", "TestPilot", "Software Development", "Hyderabad", ["java", "selenium", "sql", "git"], ["cs", "ece"]),
  internship("DevOps Intern", "CloudNest", "Software Development", "Bangalore", ["linux", "docker", "git", "python"], ["cs", "ece"]),

  // ----- Web Development -----
  internship("Frontend Developer Intern", "WebSpark", "Web Development", "Hyderabad", ["html", "css", "javascript", "react"], ["cs", "sci"]),
  internship("React Developer Intern", "UIVerse", "Web Development", "Remote", ["react", "javascript", "css", "git"], ["cs", "ece", "sci"]),
  internship("Web Designer Intern", "PixelCraft", "Web Development", "Chennai", ["html", "css", "javascript", "figma"], ["cs", "sci", "other"]),
  internship("MERN Stack Intern", "StackBay", "Web Development", "Bangalore", ["mongodb", "express", "react", "node.js"], ["cs"]),
  internship("WordPress Developer Intern", "SiteLab", "Web Development", "Remote", ["html", "css", "php", "javascript"], ["cs", "sci", "other"]),
  internship("Node.js API Intern", "ApiHub", "Web Development", "Hyderabad", ["node.js", "javascript", "sql", "git"], ["cs"]),

  // ----- Data Science -----
  internship("Data Analyst Intern", "DataBridge", "Data Science", "Hyderabad", ["python", "sql", "excel", "statistics"], ["cs", "sci", "ece"]),
  internship("Data Science Intern", "InsightIQ", "Data Science", "Bangalore", ["python", "pandas", "statistics", "machine learning"], ["cs", "sci"]),
  internship("BI Analyst Intern", "DashLogic", "Data Science", "Chennai", ["sql", "power bi", "excel", "statistics"], ["cs", "sci", "other"]),
  internship("Data Engineering Intern", "PipeFlow", "Data Science", "Remote", ["python", "sql", "spark", "git"], ["cs", "ece"]),
  internship("Analytics Intern", "MetricMind", "Data Science", "Hyderabad", ["python", "sql", "tableau", "statistics"], ["cs", "sci", "other"]),

  // ----- Artificial Intelligence -----
  internship("Machine Learning Intern", "NeuralWorks", "Artificial Intelligence", "Bangalore", ["python", "machine learning", "scikit-learn", "statistics"], ["cs", "sci", "ece"]),
  internship("Deep Learning Intern", "VisionAI", "Artificial Intelligence", "Hyderabad", ["python", "deep learning", "tensorflow", "computer vision"], ["cs", "ece"]),
  internship("NLP Research Intern", "LingoTech", "Artificial Intelligence", "Remote", ["python", "natural language processing", "deep learning", "pytorch"], ["cs", "sci"]),
  internship("AI Product Intern", "SmartLoop", "Artificial Intelligence", "Chennai", ["python", "machine learning", "sql", "statistics"], ["cs", "sci", "other"]),
  internship("Computer Vision Intern", "SightLabs", "Artificial Intelligence", "Bangalore", ["python", "opencv", "deep learning", "tensorflow"], ["cs", "ece"]),
  internship("GenAI Developer Intern", "PromptWorks", "Artificial Intelligence", "Remote", ["python", "machine learning", "apis", "git"], ["cs", "ece", "sci"]),

  // ----- Cybersecurity -----
  internship("Security Analyst Intern", "SecureNet", "Cybersecurity", "Hyderabad", ["networking", "linux", "penetration testing", "python"], ["cs", "ece"]),
  internship("SOC Analyst Intern", "ShieldOps", "Cybersecurity", "Bangalore", ["networking", "siem", "linux", "cryptography"], ["cs", "ece"]),
  internship("Ethical Hacking Intern", "RedTeamLabs", "Cybersecurity", "Remote", ["penetration testing", "linux", "networking", "python"], ["cs", "ece", "sci"]),
  internship("Cloud Security Intern", "VaultCloud", "Cybersecurity", "Chennai", ["networking", "linux", "cryptography", "aws"], ["cs", "ece"]),
  internship("GRC Intern", "TrustLayer", "Cybersecurity", "Hyderabad", ["cryptography", "networking", "risk management", "excel"], ["cs", "other"])
];


/* ---------- 5. "Learn next" search phrases for common skills ---------- */
const LEARNING_TOPICS = {
  "python": "Python for beginners",
  "javascript": "JavaScript full course",
  "sql": "SQL tutorial",
  "git": "Git and GitHub crash course",
  "react": "React tutorial",
  "java": "Java programming",
  "html": "HTML and CSS course",
  "css": "HTML and CSS course",
  "machine learning": "Machine Learning course",
  "deep learning": "Deep Learning course",
  "statistics": "Statistics for data science",
  "networking": "Computer Networking basics",
  "linux": "Linux for beginners",
  "penetration testing": "Ethical hacking course",
  "tensorflow": "TensorFlow tutorial",
  "node.js": "Node.js tutorial",
  "excel": "Excel for data analysis"
};


/* ---------- 6. Career guidance content for each domain ---------- */
const CAREER_GUIDE = {

  "Software Development": {
    roles: ["Backend Engineer", "Software Engineer", "DevOps Engineer", "QA Automation Engineer"],
    roadmap: [
      "Master one language (Java or Python) and data structures",
      "Build 2-3 projects and use Git every day",
      "Learn databases, APIs and system design basics",
      "Do an internship, then contribute to open source"
    ],
    certifications: [
      "Oracle Java SE Associate",
      "AWS Cloud Practitioner",
      "Meta Back-End Developer (Coursera)"
    ]
  },

  "Web Development": {
    roles: ["Frontend Developer", "Full-Stack Developer", "UI Engineer", "Web Designer"],
    roadmap: [
      "Learn HTML, CSS and responsive design",
      "Learn JavaScript fundamentals, then React",
      "Learn backend basics: Node.js and databases",
      "Deploy a portfolio and 3 real projects"
    ],
    certifications: [
      "freeCodeCamp Responsive Web Design",
      "Meta Front-End Developer",
      "Google UX Design"
    ]
  },

  "Data Science": {
    roles: ["Data Analyst", "Data Scientist", "BI Developer", "Data Engineer"],
    roadmap: [
      "Learn Python, SQL and statistics",
      "Learn Pandas, visualisation and dashboards (Power BI or Tableau)",
      "Learn machine learning basics with scikit-learn",
      "Publish case studies on Kaggle and GitHub"
    ],
    certifications: [
      "Google Data Analytics",
      "Microsoft PL-300 (Power BI)",
      "IBM Data Science Professional"
    ]
  },

  "Artificial Intelligence": {
    roles: ["ML Engineer", "AI Researcher", "NLP Engineer", "Computer Vision Engineer"],
    roadmap: [
      "Learn Python, linear algebra and probability",
      "Learn classical ML, then deep learning (PyTorch or TensorFlow)",
      "Choose NLP, vision or GenAI and build projects",
      "Read papers, replicate results and publish"
    ],
    certifications: [
      "DeepLearning.AI Machine Learning Specialization",
      "TensorFlow Developer Certificate",
      "Hugging Face courses"
    ]
  },

  "Cybersecurity": {
    roles: ["SOC Analyst", "Penetration Tester", "Security Engineer", "GRC Analyst"],
    roadmap: [
      "Learn networking, Linux and OS fundamentals",
      "Learn security basics: cryptography and web vulnerabilities",
      "Practise on TryHackMe or Hack The Box",
      "Specialise in blue team, red team or cloud security"
    ],
    certifications: [
      "CompTIA Security+",
      "CEH (Certified Ethical Hacker)",
      "Google Cybersecurity Certificate"
    ]
  }
};