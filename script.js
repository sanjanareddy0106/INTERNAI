/* ---------- CONFIGURATION ---------- */

const W = {
  skills: 50,
  domain: 25,
  loc: 15,
  acad: 10
};

const DOMAINS = [
  "Software Development",
  "Web Development",
  "Data Science",
  "Artificial Intelligence",
  "Cybersecurity"
];

const LOCS = [
  "Hyderabad",
  "Bangalore",
  "Chennai",
  "Remote"
];

const ACAD = [
  ["B.Tech CSE", "cs"],
  ["B.Tech IT", "cs"],
  ["BCA / MCA", "cs"],
  ["B.Tech ECE / EEE", "ece"],
  ["B.Sc (Maths / Stats / CS)", "sci"],
  ["Other", "other"]
];

const SYN = {
  js: "javascript",
  ml: "machine learning",
  ai: "artificial intelligence",
  dl: "deep learning",
  nlp: "natural language processing",
  py: "python",
  reactjs: "react",
  "react.js": "react",
  nodejs: "node.js",
  node: "node.js",
  ts: "typescript",
  postgres: "sql",
  mysql: "sql",
  html5: "html",
  css3: "css",
  "c plus plus": "c++",
  cpp: "c++",
  dsa: "data structures",
  pandas: "pandas",
  sklearn: "scikit-learn",
  "scikit learn": "scikit-learn",
  tf: "tensorflow",
  net: "networking",
  networks: "networking",
  pentesting: "penetration testing",
  pentest: "penetration testing",
  git: "git",
  github: "git"
};


/* ---------- INTERNSHIP DATASET ---------- */

const D = (t, c, d, l, s, a) => ({
  t,
  c,
  d,
  l,
  s: s.split(","),
  a: a.split(",")
});

const DATA = [

  D(
    "Backend Developer Intern",
    "TechNova",
    "Software Development",
    "Bangalore",
    "java,sql,git,data structures",
    "cs,ece"
  ),

  D(
    "Software Engineer Intern",
    "CodeCraft",
    "Software Development",
    "Hyderabad",
    "python,data structures,git,sql",
    "cs,ece,sci"
  ),

  D(
    "Android App Intern",
    "AppForge",
    "Software Development",
    "Remote",
    "java,kotlin,git,sql",
    "cs"
  ),

  D(
    "Full-Stack Intern",
    "Pixelwave",
    "Software Development",
    "Chennai",
    "javascript,node.js,sql,git",
    "cs"
  ),

  D(
    "QA Automation Intern",
    "TestPilot",
    "Software Development",
    "Hyderabad",
    "java,selenium,sql,git",
    "cs,ece"
  ),

  D(
    "DevOps Intern",
    "CloudNest",
    "Software Development",
    "Bangalore",
    "linux,docker,git,python",
    "cs,ece"
  ),

  D(
    "Frontend Developer Intern",
    "WebSpark",
    "Web Development",
    "Hyderabad",
    "html,css,javascript,react",
    "cs,sci"
  ),

  D(
    "React Developer Intern",
    "UIVerse",
    "Web Development",
    "Remote",
    "react,javascript,css,git",
    "cs,ece,sci"
  ),

  D(
    "Web Designer Intern",
    "PixelCraft",
    "Web Development",
    "Chennai",
    "html,css,javascript,figma",
    "cs,sci,other"
  ),

  D(
    "MERN Stack Intern",
    "StackBay",
    "Web Development",
    "Bangalore",
    "mongodb,express,react,node.js",
    "cs"
  ),

  D(
    "WordPress Developer Intern",
    "SiteLab",
    "Web Development",
    "Remote",
    "html,css,php,javascript",
    "cs,sci,other"
  ),

  D(
    "Node.js API Intern",
    "ApiHub",
    "Web Development",
    "Hyderabad",
    "node.js,javascript,sql,git",
    "cs"
  ),

  D(
    "Data Analyst Intern",
    "DataBridge",
    "Data Science",
    "Hyderabad",
    "python,sql,excel,statistics",
    "cs,sci,ece"
  ),

  D(
    "Data Science Intern",
    "InsightIQ",
    "Data Science",
    "Bangalore",
    "python,pandas,statistics,machine learning",
    "cs,sci"
  ),

  D(
    "BI Analyst Intern",
    "DashLogic",
    "Data Science",
    "Chennai",
    "sql,power bi,excel,statistics",
    "cs,sci,other"
  ),

  D(
    "Data Engineering Intern",
    "PipeFlow",
    "Data Science",
    "Remote",
    "python,sql,spark,git",
    "cs,ece"
  ),

  D(
    "Analytics Intern",
    "MetricMind",
    "Data Science",
    "Hyderabad",
    "python,sql,tableau,statistics",
    "cs,sci,other"
  ),

  D(
    "Machine Learning Intern",
    "NeuralWorks",
    "Artificial Intelligence",
    "Bangalore",
    "python,machine learning,scikit-learn,statistics",
    "cs,sci,ece"
  ),

  D(
    "Deep Learning Intern",
    "VisionAI",
    "Artificial Intelligence",
    "Hyderabad",
    "python,deep learning,tensorflow,computer vision",
    "cs,ece"
  ),

  D(
    "NLP Research Intern",
    "LingoTech",
    "Artificial Intelligence",
    "Remote",
    "python,natural language processing,deep learning,pytorch",
    "cs,sci"
  ),

  D(
    "AI Product Intern",
    "SmartLoop",
    "Artificial Intelligence",
    "Chennai",
    "python,machine learning,sql,statistics",
    "cs,sci,other"
  ),

  D(
    "Computer Vision Intern",
    "SightLabs",
    "Artificial Intelligence",
    "Bangalore",
    "python,opencv,deep learning,tensorflow",
    "cs,ece"
  ),

  D(
    "GenAI Developer Intern",
    "PromptWorks",
    "Artificial Intelligence",
    "Remote",
    "python,machine learning,apis,git",
    "cs,ece,sci"
  ),

  D(
    "Security Analyst Intern",
    "SecureNet",
    "Cybersecurity",
    "Hyderabad",
    "networking,linux,penetration testing,python",
    "cs,ece"
  ),

  D(
    "SOC Analyst Intern",
    "ShieldOps",
    "Cybersecurity",
    "Bangalore",
    "networking,siem,linux,cryptography",
    "cs,ece"
  ),

  D(
    "Ethical Hacking Intern",
    "RedTeamLabs",
    "Cybersecurity",
    "Remote",
    "penetration testing,linux,networking,python",
    "cs,ece,sci"
  ),

  D(
    "Cloud Security Intern",
    "VaultCloud",
    "Cybersecurity",
    "Chennai",
    "networking,linux,cryptography,aws",
    "cs,ece"
  ),

  D(
    "GRC Intern",
    "TrustLayer",
    "Cybersecurity",
    "Hyderabad",
    "cryptography,networking,risk management,excel",
    "cs,other"
  )

];


/* ---------- LEARNING RESOURCES ---------- */

const LEARN = {
  python: "Python for Everybody",
  javascript: "JavaScript full course",
  sql: "SQL tutorial",
  git: "Git and GitHub crash course",
  react: "React tutorial",
  java: "Java programming",
  html: "HTML and CSS course",
  css: "HTML and CSS course",
  "machine learning": "Machine Learning course",
  "deep learning": "Deep Learning course",
  statistics: "Statistics for data science",
  networking: "Computer Networking basics",
  linux: "Linux for beginners",
  "penetration testing": "Ethical hacking course",
  tensorflow: "TensorFlow tutorial",
  "node.js": "Node.js tutorial",
  excel: "Excel for data analysis"
};


/* ---------- CAREER GUIDANCE DATA ---------- */

const CAREER = {

  "Software Development": {
    roles: [
      "Backend Engineer",
      "Software Engineer",
      "DevOps Engineer",
      "QA Automation Engineer"
    ],

    road: [
      "Master one language (Java/Python) and data structures",
      "Build 2–3 projects and use Git daily",
      "Learn databases, APIs and system design basics",
      "Do an internship, then contribute to open source"
    ],

    certs: [
      "Oracle Java SE Associate",
      "AWS Cloud Practitioner",
      "Meta Back-End Developer (Coursera)"
    ]
  },

  "Web Development": {
    roles: [
      "Frontend Developer",
      "Full-Stack Developer",
      "UI Engineer",
      "Web Designer"
    ],

    road: [
      "HTML, CSS and responsive design",
      "JavaScript fundamentals, then React",
      "Backend basics: Node.js and databases",
      "Deploy a portfolio and 3 real projects"
    ],

    certs: [
      "freeCodeCamp Responsive Web Design",
      "Meta Front-End Developer",
      "Google UX Design"
    ]
  },

  "Data Science": {
    roles: [
      "Data Analyst",
      "Data Scientist",
      "BI Developer",
      "Data Engineer"
    ],

    road: [
      "Python, SQL and statistics",
      "Pandas, visualisation, dashboards (Power BI/Tableau)",
      "Machine learning basics with scikit-learn",
      "Publish case studies on Kaggle/GitHub"
    ],

    certs: [
      "Google Data Analytics",
      "Microsoft PL-300 (Power BI)",
      "IBM Data Science Professional"
    ]
  },

  "Artificial Intelligence": {
    roles: [
      "ML Engineer",
      "AI Researcher",
      "NLP Engineer",
      "Computer Vision Engineer"
    ],

    road: [
      "Python, linear algebra, probability",
      "Classical ML, then deep learning (PyTorch/TensorFlow)",
      "Choose NLP, vision or GenAI and build projects",
      "Read papers, replicate results, publish"
    ],

    certs: [
      "DeepLearning.AI ML Specialization",
      "TensorFlow Developer Certificate",
      "Hugging Face courses"
    ]
  },

  "Cybersecurity": {
    roles: [
      "SOC Analyst",
      "Penetration Tester",
      "Security Engineer",
      "GRC Analyst"
    ],

    road: [
      "Networking, Linux and OS fundamentals",
      "Security basics: cryptography, web vulnerabilities",
      "Practice on TryHackMe / Hack The Box",
      "Specialise: blue team, red team or cloud security"
    ],

    certs: [
      "CompTIA Security+",
      "CEH",
      "Google Cybersecurity Certificate"
    ]
  }

};


/* ---------- HELPER FUNCTIONS ---------- */

const $ = id => document.getElementById(id);

const esc = s => String(s).replace(/[&<>"']/g, c => ({
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;"
}[c]));

const norm = s => {
  s = s.toLowerCase().trim().replace(/\s+/g, " ");
  return SYN[s] || s;
};

const cap = s => s.replace(/\b\w/g, c => c.toUpperCase());

let skills = [];
let profile = null;
let results = [];


/* ---------- PAGE NAVIGATION ---------- */

function go(v) {
  document.querySelectorAll(".view").forEach(e => {
    e.classList.remove("on");
  });

  $(v).classList.add("on");
  window.scrollTo(0, 0);

  if (v === "career") {
    renderCareer();
  }
}


/* ---------- FORM SETUP ---------- */

function opts(sel, arr, first) {
  sel.innerHTML =
    (first ? `<option value="">${first}</option>` : "") +
    arr.map(a => `<option>${a}</option>`).join("");
}

function init() {

  opts($("domain"), DOMAINS, "Select your domain");
  opts($("loc"), LOCS, "Select location");

  $("acad").innerHTML = ACAD.map(a =>
    `<option value="${a[1]}">${a[0]}</option>`
  ).join("");

  opts($("fd"), DOMAINS, "All domains");
  opts($("fl"), LOCS, "All locations");
  opts($("cd"), DOMAINS);

  const all = [...new Set(DATA.flatMap(d => d.s))];

  $("sklist").innerHTML = all.map(s =>
    `<option value="${cap(s)}">`
  ).join("");

  try {
    const p = JSON.parse(
      localStorage.getItem("internai_profile") || "null"
    );

    if (p) {
      $("name").value = p.name;
      skills = p.skills;
      $("domain").value = p.domain;
      $("loc").value = p.loc;
      $("acad").value = p.acad;
    }
  } catch (e) {}

  drawTags();

  $("skin").addEventListener("keydown", e => {

    if (e.key === "Enter" || e.key === ",") {
      e.preventDefault();
      addSkill($("skin").value);
    }

    else if (e.key === "Backspace" && !$("skin").value) {
      skills.pop();
      drawTags();
    }

  });

  $("skin").addEventListener("change", e => {
    addSkill(e.target.value);
  });

}


/* ---------- SKILL TAGS ---------- */

function addSkill(v) {

  v = v.replace(",", "").trim();

  if (!v) return;

  if (!skills.some(s => norm(s) === norm(v))) {
    skills.push(v);
  }

  $("skin").value = "";
  drawTags();

}

function drawTags() {

  document.querySelectorAll("#tagbox .chip").forEach(e => {
    e.remove();
  });

  skills.forEach((s, i) => {

    const c = document.createElement("span");

    c.className = "chip";

    c.innerHTML =
      `${esc(s)} <b onclick="skills.splice(${i},1);drawTags()">×</b>`;

    $("tagbox").insertBefore(c, $("skin"));

  });

}

function resetForm() {

  skills = [];
  profile = null;
  results = [];

  ["name", "domain", "loc"].forEach(i => {
    $(i).value = "";
  });

  $("acad").selectedIndex = 0;

  localStorage.removeItem("internai_profile");

  drawTags();

}


/* ---------- MATCHING ALGORITHM ---------- */

function locScore(pref, l) {

  if (l === "Remote" || pref === l) {
    return 1;
  }

  return 0.5;

}

function acadScore(b, list) {

  if (list.includes(b)) {
    return 1;
  }

  const grp = ["cs", "ece", "sci"];

  return (grp.includes(b) && list.some(x => grp.includes(x))) ? 0.5 : 0;

}

function score(p, i) {

  const mine = new Set(p.skills.map(norm));

  const matched = i.s.filter(s => mine.has(s));

  const missing = i.s.filter(s => !mine.has(s));

  const sk = W.skills * matched.length / i.s.length;

  const dm = i.d === p.domain ? W.domain : 0;

  const lc = W.loc * locScore(p.loc, i.l);

  const ac = W.acad * acadScore(p.acad, i.a);

  return {
    i,
    matched,
    missing,
    sk,
    dm,
    lc,
    ac,
    total: sk + dm + lc + ac
  };

}


/* ---------- GENERATE RECOMMENDATIONS ---------- */

function run() {

  if (
    !$("name").value.trim() ||
    !skills.length ||
    !$("domain").value ||
    !$("loc").value
  ) {

    alert(
      "Please enter your name, at least one skill, a domain and a location."
    );

    return;

  }

  profile = {

    name: $("name").value.trim(),

    skills: [...skills],

    domain: $("domain").value,

    loc: $("loc").value,

    acad: $("acad").value

  };

  localStorage.setItem(
    "internai_profile",
    JSON.stringify(profile)
  );

  results = DATA.map(i => score(profile, i));

  $("fd").value = "";
  $("fl").value = "";
  $("fm").value = "0";
  $("fs").value = "score";

  $("rtitle").textContent =
    `Recommendations for ${profile.name}`;

  $("rsub").textContent =
    `${profile.domain} · ${profile.loc} · ${profile.skills.length} skills analysed across ${DATA.length} internships`;

  $("cd").value = profile.domain;

  render();
  go("results");

}


/* ---------- RESULTS AND FILTERS ---------- */

function clearFilters() {

  $("fd").value = "";
  $("fl").value = "";
  $("fm").value = "0";
  $("fs").value = "score";

  render();

}

function render() {

  const fd = $("fd").value;
  const fl = $("fl").value;
  const fm = +$("fm").value;
  const fs = $("fs").value;

  let r = results.filter(x =>
    (!fd || x.i.d === fd) &&
    (!fl || x.i.l === fl) &&
    x.total >= fm
  );

  r.sort((a, b) =>
    fs === "title"
      ? a.i.t.localeCompare(b.i.t)
      : fs === "skills"
        ? b.sk - a.sk
        : b.total - a.total
  );

  const summary = $("resultSummary");

  if (summary) {
    summary.innerHTML = `
      <span><b>${r.length}</b> matching internships</span>
      <span><b>${results.length}</b> total sample records analysed</span>
      <span>Sorted by <b>${
        fs === "score"
          ? "best match"
          : fs === "skills"
            ? "skills score"
            : "title A–Z"
      }</b></span>
    `;
  }

  $("list").innerHTML = r.length
    ? r.slice(0, fd || fl || fm ? 50 : 10).map(card).join("")
    : `<div class="card">
        No internships match these filters. Try clearing or changing your filters.
       </div>`;

}

const f = n => (Math.round(n * 10) / 10).toString();


/* ---------- INTERNSHIP RESULT CARD ---------- */

function card(x) {

  const { i } = x;

  const t = Math.round(x.total);

  const learn = x.missing[0]
    ? `<div class="learn">
        💡 <b>Learn next: ${esc(cap(x.missing[0]))}</b> –
        <a target="_blank" rel="noopener"
        href="https://www.youtube.com/results?search_query=${
          encodeURIComponent(
            (LEARN[x.missing[0]] || cap(x.missing[0]) + " tutorial") +
            " free course"
          )
        }">free course</a>
       </div>`
    : `<div class="learn">
        ✅ You have every required skill – apply now!
       </div>`;

  return `
    <div class="card res">

      <div class="top">

        <div>
          <h3>${esc(i.t)}</h3>

          <div class="co">${esc(i.c)}</div>

          <div style="margin-top:8px">
            <span class="pill">${esc(i.d)}</span>
            <span class="pill">📍 ${esc(i.l)}</span>
          </div>
        </div>

        <div class="score">
          ${t}%
          <small>match</small>
        </div>

      </div>

      <div class="bar">
        <i style="width:${x.sk}%;background:#3b5bdb"></i>
        <i style="width:${x.dm}%;background:#0ca678"></i>
        <i style="width:${x.lc}%;background:#f59f00"></i>
        <i style="width:${x.ac}%;background:#9c36b5"></i>
      </div>

      <div class="leg">
        <span><em style="background:#3b5bdb"></em>Skills ${f(x.sk)}/${W.skills}</span>
        <span><em style="background:#0ca678"></em>Domain ${f(x.dm)}/${W.domain}</span>
        <span><em style="background:#f59f00"></em>Location ${f(x.lc)}/${W.loc}</span>
        <span><em style="background:#9c36b5"></em>Academic ${f(x.ac)}/${W.acad}</span>
      </div>

      <div class="sk">
        ${x.matched.map(s =>
          `<span class="chip ok">✓ ${esc(cap(s))}</span>`
        ).join("")}

        ${x.missing.map(s =>
          `<span class="chip bad">✗ ${esc(cap(s))}</span>`
        ).join("")}
      </div>

      <div class="details">
        <b>Required skills:</b>
        ${i.s.map(s => esc(cap(s))).join(", ")}
        <br>

        <b>Eligible academic groups:</b>
        ${esc(i.a.join(", ").toUpperCase())}
        <br>

        <b>Match explanation:</b>
        Skills ${f(x.sk)}/50 +
        Domain ${f(x.dm)}/25 +
        Location ${f(x.lc)}/15 +
        Academic ${f(x.ac)}/10
      </div>

      ${learn}

    </div>
  `;

}


/* ---------- CAREER GUIDANCE ---------- */

function renderCareer() {

  if (
    profile &&
    $("cd").dataset.init !== "1"
  ) {
    $("cd").value = profile.domain;
    $("cd").dataset.init = "1";
  }

  const dom = $("cd").value || DOMAINS[0];

  const cc = CAREER[dom];

  let gap = "";

  if (profile) {

    const mine = new Set(profile.skills.map(norm));

    const need = {};

    DATA
      .filter(i => i.d === dom)
      .forEach(i => {
        i.s.forEach(s => {
          need[s] = (need[s] || 0) + 1;
        });
      });

    const top = Object.entries(need)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 8)
      .map(e => e[0]);

    gap = `
      <div class="card" style="margin-bottom:16px">

        <h3>Your skill gap for ${esc(dom)}</h3>

        <p style="margin:8px 0">
          Most in-demand skills across our ${esc(dom)} internships:
        </p>

        <div class="sk">
          ${top.map(s => `
            <span class="chip ${mine.has(s) ? "ok" : "bad"}">
              ${mine.has(s) ? "✓" : "✗"} ${esc(cap(s))}
            </span>
          `).join("")}
        </div>

      </div>
    `;

  }

  $("csub").textContent = profile
    ? `Personalised for ${profile.name}`
    : "Complete the profile form to personalise this page.";

  $("cbody").innerHTML = `

    ${gap}

    <div class="grid" style="margin-top:0">

      <div class="card">
        <h3>Career roles</h3>

        <div class="sk" style="margin-top:10px">
          ${cc.roles.map(r =>
            `<span class="chip">${esc(r)}</span>`
          ).join("")}
        </div>
      </div>

      <div class="card">
        <h3>Recommended certifications</h3>

        <p style="margin-top:8px">
          ${cc.certs.map(esc).join("<br>")}
        </p>
      </div>

    </div>

    <div class="card" style="margin-top:16px">

      <h3>Roadmap</h3>

      ${cc.road.map((s, i) => `
        <div class="step">
          <div class="n">${i + 1}</div>
          <p>${esc(s)}</p>
        </div>
      `).join("")}

    </div>

  `;

}


/* ---------- START APPLICATION ---------- */

init();