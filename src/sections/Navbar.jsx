import logoImage from "../assets/images/logo.svg";
import Button from "../components/Button";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "Features", href: "#features" },
  { label: "Integrations", href: "#integrations" },
  { label: "FAQs", href: "#faqs" },
];

export default function Navbar() {
  return (
    <section className="py-4 mx-4">
      <div className="lg:container  max-w-5xl ">
        <div className="grid w-full grid-cols-2 lg:grid-cols-3 items-center justify-between border border-white/15 rounded-full  p-2 px-4 md:pr-2">
          <div>
            <img
              src={logoImage}
              alt="Layers Logo"
              className="h-9 md:h-auto w-auto "
            />
          </div>

          <div className="lg:flex justify-center items-center hidden ">
            <nav className="flex gap-6 font-medium">
              {navLinks.map((link, index) => (
                <a key={index} href={link.href}>
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div className="flex justify-end gap-2 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-menu md:hidden">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
            <Button
              variant="secondary"
              className="hidden md:inline-flex items-center">
              Sign In
            </Button>
            <Button
              variant="primary"
              className="hidden md:inline-flex items-center">
              Sign In
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
