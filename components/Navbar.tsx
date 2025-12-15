import DarkModeToggle from "./DarkModeToggle";

export default function Navbar() {
  return (
    <nav className="w-full p-4 flex justify-between items-center border-b dark:border-gray-700">
      <h1 className="text-xl font-bold">Princeton Epeagba's Portfolio</h1>

      <div className="flex items-center gap-4">
        <a href="#about" className="text-black-500 hover:text-blue-700" title="Go to About section">About</a>
        <a href="#skills" className="text-black-500 hover:text-blue-700" title="Go to Skills section">Skills</a>
        <a href="#projects" className="text-black-500 hover:text-blue-700" title="Go to Projects section">Projects</a>
        <a href="#contact" className="text-black-500 hover:text-blue-700" title="Go to Contact section">Contact</a>
      </div>
    </nav>
  );
}
