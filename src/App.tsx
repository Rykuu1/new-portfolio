import { FC } from 'react';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

interface SocialLinkProps {
  href: string;
  icon: string;
  children: React.ReactNode;
}

interface WorkLinkProps {
  href: string;
  children: React.ReactNode;
}

const NavLink: FC<NavLinkProps> = ({ href, children }) => (
  <li>
    <a
      href={href}
      className="text-helldiver-gold/80 no-underline text-base transition-colors duration-300 uppercase font-semibold tracking-wide hover:text-helldiver-gold hover:drop-shadow-[0_0_10px_rgba(255,215,0,0.8)]"
    >
      {children}
    </a>
  </li>
);

const SocialLink: FC<SocialLinkProps> = ({ href, icon, children }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-3 px-8 py-5 bg-helldiver-gold/5 text-helldiver-gold no-underline rounded font-bold border-2 border-helldiver-gold/30 transition-all duration-300 uppercase tracking-wide relative overflow-hidden before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-transparent before:via-helldiver-gold/20 before:to-transparent before:transition-all before:duration-500 hover:bg-helldiver-gold hover:text-black hover:border-helldiver-gold hover:-translate-y-1 hover:scale-105 hover:shadow-[0_0_25px_rgba(255,215,0,0.4)] hover:before:left-full"
  >
    <span className="text-2xl">{icon}</span>
    {children}
  </a>
);

const WorkLink: FC<WorkLinkProps> = ({ href, children }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="px-6 py-3 bg-transparent border-2 border-helldiver-gold text-helldiver-gold no-underline rounded font-bold transition-all duration-300 uppercase tracking-wide hover:bg-helldiver-gold hover:text-black"
  >
    {children}
  </a>
);

const App: FC = () => {
  return (
    <div className="w-full font-sans relative">
      <nav className="fixed top-0 w-full bg-black/95 backdrop-blur-md px-[5%] py-6 flex justify-between items-center z-[1000] border-b-2 border-helldiver-gold shadow-[0_4px_20px_rgba(255,215,0,0.2)] animate-slide-in-left">
        <div className="text-2xl font-bold text-helldiver-gold uppercase tracking-[2px] animate-flicker">
          Angeluv Adolfo
        </div>
        <ul className="flex gap-8 list-none">
          <NavLink href="#home">Home</NavLink>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#works">Works</NavLink>
          <NavLink href="#contact">Contact</NavLink>
        </ul>
      </nav>

      <section
        id="home"
        className="min-h-screen flex items-center px-[5%] py-20 bg-gradient-to-br from-helldiver-dark to-black relative overflow-hidden before:absolute before:w-[800px] before:h-[800px] before:bg-[radial-gradient(circle,rgba(255,215,0,0.15)_0%,transparent_70%)] before:rounded-full before:-top-[200px] before:-right-[200px] before:pointer-events-none before:animate-pulse-glow after:absolute after:w-[600px] after:h-[600px] after:bg-[radial-gradient(circle,rgba(255,68,0,0.1)_0%,transparent_70%)] after:rounded-full after:-bottom-[150px] after:-left-[150px] after:pointer-events-none after:animate-pulse-glow"
      >
        <div className="flex items-center justify-between gap-16 w-full max-w-7xl mx-auto relative z-10 flex-col-reverse md:flex-row text-center md:text-left">
          <div className="flex-1 animate-slide-in-left">
            <h1 className="text-5xl md:text-6xl mb-4 text-helldiver-gold leading-tight uppercase font-black tracking-[3px] drop-shadow-[0_0_20px_rgba(255,215,0,0.5)]">
              Hi, I'm Angeluv Adolfo
            </h1>
            <p className="text-2xl text-helldiver-orange mb-4 uppercase font-bold tracking-[2px]">
              Designer & Creative Developer
            </p>
            <p className="text-lg text-helldiver-gold/80 mb-8 leading-relaxed">
              Building digital experiences where creativity meets technology. I work with design and code
              to bring ideas to life, one project at a time.
            </p>
            <a
              href="#contact"
              className="inline-block px-8 py-4 bg-helldiver-gold text-black no-underline rounded font-bold transition-all duration-300 uppercase tracking-[2px] border-2 border-helldiver-gold relative overflow-hidden before:absolute before:top-1/2 before:left-1/2 before:w-0 before:h-0 before:bg-helldiver-orange/30 before:rounded-full before:-translate-x-1/2 before:-translate-y-1/2 before:transition-all before:duration-500 hover:bg-transparent hover:text-helldiver-gold hover:-translate-y-0.5 hover:scale-105 hover:shadow-[0_10px_25px_rgba(255,215,0,0.4)] hover:before:w-[300px] hover:before:h-[300px]"
            >
              Get in touch
            </a>
          </div>
          <div className="flex-shrink-0 w-full md:w-[350px] animate-slide-in-right">
            <img
              src="/image copy.png"
              alt="Angeluv Adolfo"
              className="w-full h-[250px] md:h-[350px] object-cover rounded border-4 border-helldiver-gold shadow-[0_0_30px_rgba(255,215,0,0.3)] animate-pulse-glow"
            />
          </div>
        </div>
      </section>

      <section
        id="about"
        className="min-h-screen flex items-center px-[5%] py-20 bg-helldiver-black relative"
      >
        <div className="max-w-7xl mx-auto w-full">
          <h2 className="text-5xl mb-12 text-helldiver-gold text-center uppercase font-black tracking-[4px] drop-shadow-[0_0_20px_rgba(255,215,0,0.3)] animate-fade-in relative before:content-['//_'] before:text-helldiver-orange before:mr-2 after:content-['_//'] after:text-helldiver-orange after:ml-2">
            About Me
          </h2>
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <p className="text-xl leading-relaxed text-helldiver-gold/90 mb-6">
              Currently in my third year studying Information Technology at Western Institute of Technology,
              I've always been fascinated by how technology shapes our world. What started as a passion for
              gaming has evolved into a deep curiosity about the creative and technical processes behind
              game development.
            </p>
            <p className="text-xl leading-relaxed text-helldiver-gold/90">
              I spend my time learning about game engines, experimenting with different programming languages,
              and understanding what makes games engaging. My goal is to create my own games while continuing
              to grow at the intersection where creativity meets code.
            </p>
          </div>
        </div>
      </section>

      <section
        id="works"
        className="min-h-screen flex items-center px-[5%] py-20 bg-gradient-to-br from-helldiver-dark to-black relative overflow-hidden before:absolute before:w-[700px] before:h-[700px] before:bg-[radial-gradient(circle,rgba(255,215,0,0.1)_0%,transparent_70%)] before:rounded-full before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:pointer-events-none"
      >
        <div className="max-w-7xl mx-auto w-full">
          <h2 className="text-5xl mb-12 text-helldiver-gold text-center uppercase font-black tracking-[4px] drop-shadow-[0_0_20px_rgba(255,215,0,0.3)] animate-fade-in relative before:content-['//_'] before:text-helldiver-orange before:mr-2 after:content-['_//'] after:text-helldiver-orange after:ml-2">
            My Works
          </h2>
          <div className="flex gap-12 items-center bg-helldiver-gold/5 p-8 rounded backdrop-blur-md border-2 border-helldiver-gold/30 transition-all duration-300 relative z-10 animate-slide-in-right before:absolute before:top-0 before:left-0 before:w-1 before:h-full before:bg-gradient-to-b before:from-helldiver-gold before:to-helldiver-orange before:opacity-0 before:transition-opacity before:duration-300 hover:-translate-y-2 hover:translate-x-2 hover:shadow-[0_0_30px_rgba(255,215,0,0.4)] hover:border-helldiver-gold hover:before:opacity-100 flex-col md:flex-row">
            <div className="flex-shrink-0 w-full md:w-[300px]">
              <img
                src="/image copy copy copy.png"
                alt="Todo App Project"
                className="w-full h-[200px] object-cover rounded border-2 border-helldiver-gold"
              />
            </div>
            <div className="flex-1">
              <h3 className="text-3xl text-helldiver-gold mb-4 uppercase font-black tracking-[2px]">
                Todo Application
              </h3>
              <p className="text-lg text-helldiver-gold/80 mb-6 leading-relaxed">
                A task management application I built to help organize daily activities. Features include adding,
                editing, and tracking tasks with a clean, user-friendly interface built using modern JavaScript frameworks.
              </p>
              <div className="flex gap-4 flex-wrap">
                <WorkLink href="https://todo-ebgd.onrender.com/">View Live</WorkLink>
                <WorkLink href="https://github.com/Rykuu1/todo">View Code</WorkLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="min-h-screen flex items-center px-[5%] py-20 bg-helldiver-black"
      >
        <div className="max-w-7xl mx-auto w-full">
          <h2 className="text-5xl mb-12 text-helldiver-gold text-center uppercase font-black tracking-[4px] drop-shadow-[0_0_20px_rgba(255,215,0,0.3)] animate-fade-in relative before:content-['//_'] before:text-helldiver-orange before:mr-2 after:content-['_//'] after:text-helldiver-orange after:ml-2">
            Get In Touch
          </h2>
          <div className="flex justify-center gap-8 flex-wrap">
            <SocialLink href="https://www.facebook.com/angeluv.adolfo.9" icon="📘">
              Facebook
            </SocialLink>
            <SocialLink href="https://github.com/Rykuu1" icon="💻">
              GitHub
            </SocialLink>
            <SocialLink href="https://x.com/Rykuu111" icon="🐦">
              X (Twitter)
            </SocialLink>
          </div>
        </div>
      </section>

      <footer className="py-8 px-[5%] text-center bg-black border-t-2 border-helldiver-gold">
        <p className="text-helldiver-gold/60 text-sm uppercase tracking-wide">
          &copy; 2025 Angeluv Adolfo. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default App;
