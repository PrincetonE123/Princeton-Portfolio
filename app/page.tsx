import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectGrid from "@/components/ProjectGrid";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";
import { SiHandshake } from "react-icons/si";
import Image from "next/image";


export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow p-6 max-w-4xl mx-auto">
        <section className="mb-10 flex flex-col sm:flex-row items-center gap-6 rounded-full object-cover border shadow-sm">
          <Image
            src="/Princeton_Epeagba.png"
            alt="Headshot of Princeton Epeagba"
            width={180}
            height={180}
            className="rounded-full object-cover"
            priority
          />
          <h1 className="text-4xl font-bold mb-2">Hi, I’m Princeton 👋</h1>
          <p className="text-lg-leading-relaxed text-gray-700">
            Welcome to my portfolio! 
          </p>
        </section>

        <section id="about" className="mb-10">
          <h2 className="text-2xl font-bold mb-2">About Me</h2>
          <p>
            I'm a fullstack software developer who's 
            passionate about designing and building useful applications.
            I graduated from the University of South Alabama with a degree in Computer Science.
          </p>
        </section>

        <section id="skills" className="mb-10">
          <h2 className="text-2xl font-bold mb-2">Skills</h2>
          <ul className="list-disc list-inside">
            <li>Python</li>
            <li>C# (.NET, WinForms)</li>
            <li>FastAPI (Python, Backend)</li>
            <li>SQL (PostgreSQL, MySQL, SQLite)</li>
            <li>JavaScript</li>
            <li>React / Next.js</li>
            <li>HTML & CSS (Tailwind CSS, Web Development)</li>
            <li>Git & GitHub (Version Control, Collaboration)</li>
          </ul>
        </section>

        <ProjectGrid />

        <section id="contact" className="mt-10">
          <h2 className="text-2xl font-bold mb-4">Contact</h2>
          <div className="space-y-2">

            <p className="flex items-center gap-2">
              <FaEnvelope className="text-xl text-black-00 hover:text-blue-600" />
              <span>Email:</span>
              <a
                href="mailto:princeepeagba@gmail.com"
                className="text-blue-600 underline"
              >
                princeepeagba@gmail.com
              </a>
            </p>

            <p className="flex items-center gap-2">
              <FaLinkedin className = "text-xl text-black-700 hover:text-blue-600"/>
              <span>LinkedIn:</span>
              <a
                href="https://www.linkedin.com/in/princeton-epeagba-650290260/"
                className="text-blue-600 underline"
              >
                linkedin.com/in/princeton-epeagba-650290260
              </a>
            </p>

            <p className="flex items-center gap-2">
              <SiHandshake className = "text-xl text-black-700 hover:text-blue-600"/>
              <span>Handshake:</span>
              <a
                href="https://southalabama.joinhandshake.com/profiles/h87cug"
                className="text-blue-600 underline"
              >
                southalabama.joinhandshake.com/profiles/h87cug
              </a>
            </p>

            <p className="flex items-center gap-2">
              <FaGithub className = "text-xl text-black-700 hover:text-blue-600"/>
              <span>GitHub:</span>
              <a
                href="https://github.com/PrincetonE123"
                className="text-blue-600 underline"
              >
                github.com/PrincetonE123
              </a>
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
