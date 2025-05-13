import ContentWrapper from "../../components/layout/ContentWrapper";

export const metadata = {
  generator: "Next.js",
  applicationName: "Sam O'Brien | UI and Front End Development Blog",
  referrer: "origin-when-cross-origin",
  keywords: ["Sam O'Brien", "TypeScript", "React", "JavaScript"],
  authors: [{ name: "Sam O'Brien" }],
  creator: "Sam O'Brien",
  openGraph: {
    title: "About Me | Sam O'Brien",
    description:
      "Learn more about Sam O'Brien, a software engineer specializing in front-end development and technical writing.",
    url: "https://samobrien.me/about",
    siteName: "Sam O'Brien | UI and Front End Development Blog",
  },
};

export default function About() {
  return (
    <ContentWrapper className="bg-gradient-to-b from-black to-[#0a0f08]">
      <div className="container mx-auto px-4 max-w-4xl">
        <header className="text-center mb-16 pt-20">
          <h1 className="text-5xl font-bold mb-5 bg-gradient-to-r from-white to-[#5cdb95] bg-clip-text text-transparent leading-tight">
            About Me
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg leading-relaxed">
            Front End Engineer, builder, and continuous learner.
          </p>
        </header>

        <div className="prose prose-lg prose-invert mx-auto">
          <section className="mb-12">
            <h2 className="text-[#5cdb95]">Background</h2>
            <p>
              I'm Samuel O’Brien, a front-end software engineer with over 7
              years of experience creating performant, data-driven web
              applications using React, Next.js, and TypeScript. I’ve worked on
              high performing fullstack & frontend teams at startups and
              enterprises, where I’ve built advanced charting tools, large-scale
              AI/ML evaluation tools, and accessibility-compliant component
              systems.
            </p>
            <p>
              I'm passionate about clean code, performance, and accessible user
              experiences. I love building high throughput, native-feeling UIs
              that empower users, as well as tools that unlock developer
              productivity.
            </p>
            <p>
              Outside of coding, I love to get outside, take photographs, read
              books, and learn as much as possible. Catch me on the trails
              during the warmer months, or start a friend streak on Duolingo 🦉
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-[#5cdb95]">What I Do</h2>
            <p>I specialize in front end web development, with expertise in:</p>
            <ul>
              <li>React & Next.js ecosystem</li>
              <li>TypeScript & Modern JavaScript</li>
              <li>UI/UX Design principles</li>
              <li>Performance optimization</li>
              <li>Accessibility & WCAG 2.2</li>
              <li>Technical writing & documentation</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-[#5cdb95]">My Journey</h2>
            <p>
              My journey in tech began with a curiosity about how things work on
              the web. This curiosity has driven me to continuously learn and
              explore new technologies, mostly self taught, since middle school.
              I've tinkered with web technologies since the days of table
              layouts and Flash animations. Over the years, I've transitioned to
              a professional developer, providing my skills to startup and
              enterprise teams.
            </p>
          </section>
        </div>

        <div className="text-center mt-16 mb-20">
          <a
            href="https://github.com/SamOBrienUI"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-[rgba(92,219,149,0.5)] 
            text-white hover:bg-[rgba(92,219,149,0.1)] transition-all duration-300 mr-4"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/samuelobrien25"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-[rgba(92,219,149,0.5)] 
            text-white hover:bg-[rgba(92,219,149,0.1)] transition-all duration-300"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </ContentWrapper>
  );
}
