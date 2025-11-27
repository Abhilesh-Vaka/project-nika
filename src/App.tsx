import './App.css'

type SkillCategory = {
  title: string
  subtitle?: string
  hakiType?: 'observation' | 'armament' | 'conqueror'
  items: string[]
}

type Project = {
  name: string
  repo: string
  description: string
  tags: string[]
  deployed?: string
}

const skillCategories: SkillCategory[] = [
  {
    title: 'Observation Haki',
    subtitle: 'Data Analytics & Business Intelligence',
    hakiType: 'observation',
    items: [
      'Excel',
      'SQL',
      'Power BI',
      'Tableau',
      'DAX',
      'Data Visualization',
      'Business Intelligence',
      'Statistical Analysis',
      'Data Cleaning',
    ],
  },
  {
    title: 'Armament Haki',
    subtitle: 'Programming & Core Technologies',
    hakiType: 'armament',
    items: ['Python', 'Java', 'R (basic)', 'SQL'],
  },
  {
    title: 'Devil Fruit Powers',
    subtitle: 'Machine Learning & AI Frameworks',
    hakiType: 'armament',
    items: [
      'Pandas',
      'NumPy',
      'Scikit-learn',
      'TensorFlow',
      'PyTorch',
      'Prompt Engineering',
      'RLHF Dataset Curation',
    ],
  },
  {
    title: 'Navigation Tools',
    subtitle: 'Developer & Workflow Tools',
    hakiType: 'armament',
    items: [
      'Jupyter Notebook',
      'VS Code',
      'Git/GitHub',
      'Google Colab',
    ],
  },
  {
    title: 'Data Vaults',
    subtitle: 'Database Systems',
    hakiType: 'armament',
    items: ['MySQL', 'MongoDB'],
  },
  {
    title: 'Conqueror\'s Haki',
    subtitle: 'Annotation & Specialized Tools',
    hakiType: 'conqueror',
    items: ['Label Studio', 'CVAT'],
  },
]

const projects: Project[] = [
  {
    name: 'Explainable Cardiac Risk Stratification',
    repo:
      'https://github.com/Abhilesh-Vaka/An-Explainable-Multi-Modal-Deep-Learning-Framework-for-Cardiac-Risk-Stratification-',
    description:
      'Explainable multi-modal deep learning framework for cardiac risk prediction, improving trust and interpretability in clinical settings.',
    tags: ['Deep Learning', 'Explainable AI', 'Healthcare'],
    deployed: 'https://heartriskstrat524.streamlit.app/',
  },
  {
    name: 'Fake News Detection Gradio App',
    repo: 'https://github.com/Abhilesh-Vaka/fake-news-gradio-app',
    description:
      'Interactive fake news detector comparing a baseline model with IBM watsonx LLM, returning classifications with human-friendly reasoning.',
    tags: ['NLP', 'LLM', 'Gradio'],
    deployed: 'https://huggingface.co/spaces/AbhileshV/fake-news-gradio-app',
  },
  {
    name: 'Weather Application',
    repo: 'https://github.com/Abhilesh-Vaka/weather-application-open-weather-api',
    description:
      'Real-time weather application using OpenWeather API to fetch and display current weather conditions, forecasts, and location-based data.',
    tags: ['Web App', 'API Integration', 'Streamlit'],
    deployed: 'https://weather-application-open-weather-api.streamlit.app/',
  },
  {
    name: 'Resume Screening Assistance',
    repo: 'https://github.com/Abhilesh-Vaka/resume-screening-assistance',
    description:
      'Automation tool that classifies resumes into job categories (Data Science, Software Dev, HR, etc.) using content analysis and foundation models.',
    tags: ['NLP', 'Automation', 'MLOps'],
  },
  {
    name: 'Image Annotation Dataset',
    repo: 'https://github.com/Abhilesh-Vaka/image-annotation-dataset',
    description:
      'Custom multi-class image annotation dataset with COCO & YOLO formats for both object detection and segmentation practice.',
    tags: ['Computer Vision', 'Dataset', 'Label Studio'],
  },
  {
    name: 'T20 Cricket Analysis',
    repo: 'https://github.com/Abhilesh-Vaka/T20-Cricket-Analysis',
    description:
      'Exploratory data analysis of T20 cricket with player performance trends and match statistics using Python, Pandas, Matplotlib & Seaborn.',
    tags: ['EDA', 'Sports Analytics', 'Python'],
  },
]

function App() {
  return (
    <div className="app-root">
      <header className="nav">
        <div className="nav-title">
          <span className="nav-brand-main">Abhilesh Vaka</span>
          <span className="nav-brand-sub">Data & AI Pirate</span>
        </div>
        <nav className="nav-links">
          <a href="#about">Wanted Poster</a>
          <a href="#experience">Voyages</a>
          <a href="#skills">Abilities &amp; Haki</a>
          <a href="#projects">Bounties (Projects)</a>
          <a href="#certifications">Navy Records</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main className="layout">
        <section id="about" className="hero-section">
          <div className="wanted-wrapper">
            <img
              src="/assets/wanted_poster.png"
              alt="Wanted Poster"
              className="wanted-poster-image"
            />
          </div>

          <div className="hero-copy">
            <p className="hero-kicker">
              I use data analysis as my Observation Haki to sense patterns before they hit the deck.
            </p>
            <h1 className="hero-title">
              Turning messy data into <span>battle-ready insights</span>.
            </h1>
            <p className="hero-text">
              I&apos;m a data &amp; AI practitioner focused on explainable, production-ready
              solutions — from cardiac risk stratification to resume screening assistants and
              fake-news detectors. Through programs like IBM SkillsBuild&apos;s GenAI industry
              experience, I&apos;ve worked hands-on with Watsonx, prompt engineering, and
              responsible AI practices to ship models that stakeholders can actually trust.
            </p>
            <div className="hero-actions">
              <a href="#projects" className="btn btn-primary">
                View My Bounties
              </a>
              <a
                href="https://github.com/Abhilesh-Vaka"
                target="_blank"
                rel="noreferrer"
                className="btn btn-ghost"
              >
                Open GitHub Logbook
              </a>
            </div>
            <div className="hero-meta">
              <span>Data Analytics &amp; BI</span>
              <span>Machine Learning &amp; MLOps</span>
              <span>Explainable AI</span>
            </div>
          </div>
        </section>

        <section id="experience" className="section">
          <div className="section-header">
            <p className="section-kicker">Voyages &amp; Battle Logs</p>
            <h2>Industry-Focused Experience</h2>
            <p className="section-text">
              Practical journeys where I applied generative AI, analytics, and responsible AI
              practices to real-world style problems.
            </p>
          </div>

          <div className="timeline-grid">
            <article className="timeline-card">
              <header className="timeline-header">
                <div>
                  <h3>IBM SkillsBuild – GenAI Industry-Based Learning Experience</h3>
                  <p className="timeline-org">IBM · Virtual Program</p>
                </div>
                <span className="timeline-date">May 2025 · Remote</span>
              </header>
              <ul className="timeline-list">
                <li>
                  Completed an industry-aligned virtual learning program focused on Generative AI.
                </li>
                <li>
                  Worked hands-on with IBM Watsonx.ai and Prompt Lab, simulating enterprise AI
                  applications.
                </li>
                <li>
                  Applied prompt engineering and responsible AI practices to case-based projects.
                </li>
              </ul>
            </article>
          </div>
        </section>

        <section id="skills" className="section">
          <div className="section-header">
            <p className="section-kicker">Abilities &amp; Haki</p>
            <h2>Devil Fruits of a Data Supernova</h2>
            <p className="section-text">
              Each skill cluster is a Devil Fruit or Haki specialization — the powers I use to
              explore the Grand Line of data and AI.
            </p>
          </div>

          <div className="skills-grid">
            {skillCategories.map((category) => (
              <div
                key={category.title}
                className={`skill-card hakitype-${category.hakiType ?? 'neutral'}`}
              >
                <div className="skill-fruit-icon">
                  <span className="fruit-core" />
                </div>
                <div className="skill-content">
                  <div className="skill-heading">
                    <h3>{category.title}</h3>
                  </div>
                  {category.subtitle && <p className="skill-subtitle">{category.subtitle}</p>}
                  <ul className="skill-list">
                    {category.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="projects" className="section">
          <div className="section-header">
            <p className="section-kicker">Bounties &amp; Exploits</p>
            <h2>Highlighted Missions from the New World</h2>
            <p className="section-text">
              A selection of projects that combine analytics, ML, and thoughtful engineering to
              deliver measurable impact.
            </p>
          </div>

          <div className="projects-grid">
            {projects.map((project) => (
              <article key={project.name} className="project-card">
                <header className="project-header">
                  <h3>{project.name}</h3>
                </header>
                <p className="project-description">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="project-tag">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="project-links">
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noreferrer"
                    className="project-link"
                  >
                    View GitHub Repo
                  </a>
                  {project.deployed && (
                    <a
                      href={project.deployed}
                      target="_blank"
                      rel="noreferrer"
                      className="project-link project-link-deployed"
                    >
                      View Live Demo
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="certifications" className="section">
          <div className="section-header">
            <p className="section-kicker">Navy Records &amp; Seals</p>
            <h2>Official Certifications</h2>
            <p className="section-text">
              Verified proof that the World Government (and a few tech giants) recognize these
              abilities.
            </p>
          </div>

          <div className="certs-grid">
            <article className="cert-card">
              <header className="cert-header">
                <h3>Salesforce Certified AI Associate</h3>
                <span className="cert-issuer">Salesforce · Trailhead</span>
              </header>
              <p className="cert-date">Issued March 31, 2025</p>
              <p className="cert-text">
                Foundation-level certification in AI concepts, responsible usage, and Salesforce AI
                ecosystem capabilities.
              </p>
            </article>

            <article className="cert-card">
              <header className="cert-header">
                <h3>GEN AI Using IBM Watsonx</h3>
                <span className="cert-issuer">IBM Career Education Program</span>
              </header>
              <p className="cert-date">Issued June 13, 2025</p>
              <p className="cert-text">
                Hands-on coursework using Watsonx and related tools to build and evaluate generative
                AI solutions for business scenarios.
              </p>
            </article>

            <article className="cert-card">
              <header className="cert-header">
                <h3>Oracle Certified Foundations Associate</h3>
                <span className="cert-issuer">Oracle University</span>
              </header>
              <p className="cert-date">Issued March 13, 2025</p>
              <p className="cert-text">
                Oracle Data Platform 2025 Foundations certification covering core cloud, data, and
                platform concepts.
              </p>
            </article>
          </div>
        </section>

        <section id="extracurriculars" className="section">
          <div className="section-header">
            <p className="section-kicker">Crew Roles &amp; Culture</p>
            <h2>Positions of Responsibility</h2>
            <p className="section-text">
              Leadership and creative roles that sharpened my collaboration, communication, and
              event management skills.
            </p>
          </div>

          <div className="timeline-grid">
            <article className="timeline-card">
              <header className="timeline-header">
                <div>
                  <h3>Vice-Head, Singing Domain</h3>
                  <p className="timeline-org">Sahiti TLA · Vellore, India</p>
                </div>
                <span className="timeline-date">Sept 2022 – Apr 2024</span>
              </header>
              <ul className="timeline-list">
                <li>Coordinated cultural events and performances for college fests.</li>
                <li>
                  Managed cross-functional student teams and schedules, fostering a collaborative
                  environment.
                </li>
              </ul>
            </article>
          </div>
        </section>

        <section id="contact" className="section section-contact">
          <div className="section-header">
            <p className="section-kicker">Allied Crews &amp; New Seas</p>
            <h2>Open to Internships, Collaborations &amp; Roles</h2>
            <p className="section-text">
              Looking to bring Observation Haki–level analytics and practical ML to your crew.
              Reach out for roles, projects, or collaborations.
            </p>
          </div>
          <div className="contact-placeholder">
            <p>You can contact me directly via email or connect over LinkedIn:</p>
            <ul>
              <li>
                Email:{' '}
                <a href="mailto:vakaabhilesh@gmail.com">vakaabhilesh@gmail.com</a>
              </li>
              <li>
                LinkedIn:{' '}
                <a
                  href="https://www.linkedin.com/in/abhilesh-vaka-2a879a257/"
                  target="_blank"
                  rel="noreferrer"
                >
                  linkedin.com/in/abhilesh-vaka-2a879a257
                </a>
              </li>
            </ul>
            <div className="hero-actions">
              <a
                href="https://mail.google.com/mail/?view=cm&to=vakaabhilesh@gmail.com&su=Portfolio%20Inquiry&body=Hello%20Abhilesh,%0D%0A%0D%0A"
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary"
              >
                Send an Email
              </a>
              <a
                href="https://www.linkedin.com/in/abhilesh-vaka-2a879a257/"
                target="_blank"
                rel="noreferrer"
                className="btn btn-ghost"
              >
                View LinkedIn Profile
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <span>© {new Date().getFullYear()} Abhilesh Vaka · Sailing the Data Grand Line.</span>
      </footer>
    </div>
  )
}

export default App
