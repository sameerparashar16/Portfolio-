import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowUpRight, Github, Linkedin, Mail, Menu, X, BrainCircuit, Code2, Server, BookOpen, ExternalLink } from 'lucide-react';
import './styles.css';

const profile = {
  name: 'Sameer Parashar',
  headline: 'Machine Learning • Software Engineering • Research',
  intro: 'I’m a Computer Science student building toward machine learning engineering through hands-on projects, problem solving, backend systems, and research-driven experimentation.',
  college: 'Madhav Institute of Technology & Science (MITS), Gwalior',
  linkedin: 'https://www.linkedin.com/in/sameer-parashar-603536384/',
};

const skills = [
  { icon: BrainCircuit, title: 'Machine Learning', items: ['Deep Learning', 'Model Optimization', 'Research Papers', 'Edge-case thinking'] },
  { icon: Code2, title: 'Programming', items: ['Python', 'C++', 'DSA', 'Problem Solving'] },
  { icon: Server, title: 'Development', items: ['React', 'Node.js', 'Express', 'Prisma / PostgreSQL'] },
  { icon: BookOpen, title: 'Currently Learning', items: ['Keras / TensorFlow', 'Pretrained Models', 'ML Systems', 'Production-minded ML'] },
];

const projects = [
  {
    number: '01',
    title: 'AI Logistics Platform',
    type: 'SIH / Full-Stack Prototype',
    description: 'A logistics-focused web platform exploring maps, routes, operational workflows and a production-style backend architecture.',
    tags: ['React', 'Node.js', 'Maps', 'Backend'],
    featured: true,
  },
  {
    number: '02',
    title: 'Research-to-Implementation ML',
    type: 'Research / Deep Learning',
    description: 'A direction focused on taking ideas from recent ML research, implementing them, then hardening the system against difficult real-world cases.',
    tags: ['Python', 'Keras', 'TensorFlow', 'Research'],
  },
  {
    number: '03',
    title: 'Backend & Auth Systems',
    type: 'Software Engineering',
    description: 'Hands-on work with REST APIs, authentication, validation, databases and deployable backend structure rather than only frontend demos.',
    tags: ['Express', 'Prisma', 'PostgreSQL', 'JWT'],
  },
];

function App() {
  const [open, setOpen] = useState(false);
  const nav = ['About', 'Skills', 'Projects', 'Journey', 'Contact'];
  const close = () => setOpen(false);
  return <>
    <header className="nav-wrap">
      <nav className="nav container">
        <a className="brand" href="#top" onClick={close}>SP<span>.</span></a>
        <button className="menu-btn" onClick={() => setOpen(!open)} aria-label="Toggle menu">{open ? <X/> : <Menu/>}</button>
        <div className={`nav-links ${open ? 'show' : ''}`}>
          {nav.map(n => <a key={n} href={'#'+n.toLowerCase()} onClick={close}>{n}</a>)}
          <a className="nav-cta" href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight size={15}/></a>
        </div>
      </nav>
    </header>

    <main id="top">
      <section className="hero container">
        <div className="hero-copy">
          <div className="eyebrow"><span className="dot"/> CSD Student • MITS Gwalior</div>
          <h1>Building toward<br/><em>real-world ML.</em></h1>
          <p>{profile.intro}</p>
          <div className="hero-actions">
            <a className="button primary" href="#projects">View my work <ArrowUpRight size={17}/></a>
            <a className="button ghost" href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={17}/> LinkedIn</a>
          </div>
          <div className="hero-meta"><span>Currently focused on</span><strong>Machine Learning + difficult engineering problems</strong></div>
        </div>
        <div className="hero-art" aria-hidden="true">
          <div className="grid-lines"/>
          <div className="orb orb-a"/><div className="orb orb-b"/>
          <div className="code-card">
            <div className="code-top"><span/><span/><span/></div>
            <code><b>model</b> = build_model()<br/><b>model</b>.compile(<br/> &nbsp; optimizer=<i>"adam"</i>,<br/> &nbsp; metrics=[<i>"accuracy"</i>]<br/>)<br/><br/><span className="muted"># optimize → test → harden</span></code>
          </div>
        </div>
      </section>

      <section className="statement"><div className="container statement-inner"><span>01 / MINDSET</span><p>Not just making a model work.<br/><strong>Understanding why it fails — and making it reliable.</strong></p></div></section>

      <section id="about" className="section container about">
        <div className="section-label">02 / ABOUT</div>
        <div className="about-grid"><h2>From learner<br/>to <em>builder.</em></h2><div><p>I’m pursuing Computer Science with a growing focus on machine learning. My goal is to move beyond tutorial-level projects by understanding algorithms, implementing research ideas, and learning the engineering details that make systems dependable.</p><p>I also work across DSA, backend development and full-stack prototypes. That combination helps me think about ML as a system — not just a notebook.</p></div></div>
      </section>

      <section id="skills" className="section dark-section"><div className="container"><div className="section-label light">03 / TOOLKIT</div><h2 className="dark-title">What I’m <em>building with.</em></h2><div className="skill-grid">{skills.map(({icon:Icon,title,items})=><article className="skill-card" key={title}><Icon size={24}/><h3>{title}</h3><div className="chips">{items.map(x=><span key={x}>{x}</span>)}</div></article>)}</div></div></section>

      <section id="projects" className="section container"><div className="section-label">04 / SELECTED WORK</div><div className="projects-head"><h2>Projects with<br/><em>a reason to exist.</em></h2><p>I’m deliberately interested in projects where the hard part is not the UI — it is the engineering, data, failure modes and decisions behind the result.</p></div><div className="project-list">{projects.map(p=><article className={`project ${p.featured ? 'featured':''}`} key={p.number}><div className="project-no">{p.number}</div><div><div className="project-type">{p.type}</div><h3>{p.title}</h3><p>{p.description}</p><div className="chips">{p.tags.map(t=><span key={t}>{t}</span>)}</div></div><ArrowUpRight className="project-arrow"/></article>)}</div></section>

      <section id="journey" className="section journey-section"><div className="container"><div className="section-label">05 / JOURNEY</div><div className="timeline"><div className="time-item"><span>NOW</span><div><h3>ML-focused learning</h3><p>Deep learning, Keras/TensorFlow, pretrained models, optimization and research-paper implementation.</p></div></div><div className="time-item"><span>BUILD</span><div><h3>Engineering foundation</h3><p>DSA, Python, C++, REST APIs, authentication, databases and full-stack project work.</p></div></div><div className="time-item"><span>NEXT</span><div><h3>Research → reliable systems</h3><p>Turn interesting ML ideas into reproducible, tested projects that handle the cases real users and companies care about.</p></div></div></div></div></section>

      <section id="contact" className="contact-section"><div className="container contact-inner"><div><div className="section-label light">06 / CONTACT</div><h2>Let’s build something<br/><em>worth talking about.</em></h2></div><div className="contact-links"><a href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin/> LinkedIn <ExternalLink size={15}/></a><a href="mailto:sameerparashar@example.com"><Mail/> Email <ExternalLink size={15}/></a><a href="#projects"><Github/> Projects <ArrowUpRight size={15}/></a></div></div></section>
    </main>
    <footer><div className="container"><span>© {new Date().getFullYear()} Sameer Parashar</span><span>Built with React • Designed for the ML journey</span></div></footer>
  </>;
}

createRoot(document.getElementById('root')).render(<App/>);
