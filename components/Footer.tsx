import React from "react";
import Link from "next/link";
import { Mail, Phone, MapPin, Twitter, Linkedin, Github } from "lucide-react";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-900 bg-slate-950 text-slate-400">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          
          {/* Logo & Brand Info */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2.5">
              <img
                src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/logo-icon.png`}
                alt="Reeyansh Tech Logo"
                className="h-7 w-7 rounded-lg object-contain bg-slate-900 border border-slate-850 p-1 shadow-md"
              />
              <span className="font-outfit text-xl font-extrabold tracking-tight text-white">
                Reeyansh<span className="bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">Tech</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-slate-400">
              Empowering global enterprises with cutting-edge software solutions, agile engineering teams, and premium UI/UX design.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-200" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-200" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-200" aria-label="GitHub">
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-100 mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about/" className="hover:text-white transition-colors duration-200">About Us</Link>
              </li>
              <li>
                <Link href="/portfolio/" className="hover:text-white transition-colors duration-200">Portfolio</Link>
              </li>
              <li>
                <Link href="/careers/" className="hover:text-white transition-colors duration-200">Careers</Link>
              </li>
              <li>
                <Link href="/blog/" className="hover:text-white transition-colors duration-200">Blog & Insights</Link>
              </li>
            </ul>
          </div>

          {/* Services Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-100 mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services/" className="hover:text-white transition-colors duration-200">Web Development</Link>
              </li>
              <li>
                <Link href="/services/" className="hover:text-white transition-colors duration-200">Mobile Development</Link>
              </li>
              <li>
                <Link href="/services/" className="hover:text-white transition-colors duration-200">UI/UX Product Design</Link>
              </li>
              <li>
                <Link href="/services/" className="hover:text-white transition-colors duration-200">Cloud & DevOps</Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-100 mb-4">Contact Info</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2.5">
                <MapPin className="h-5 w-5 text-indigo-400 shrink-0 mt-0.5" />
                <span>604, Pallavi, Kalyan Nilayam, IDA Jeedimetla, Subhash Nagar, Jeedimetla, Hyderabad, Telangana 500085</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="h-5 w-5 text-indigo-400 shrink-0" />
                <a href="tel:+919666848983" className="hover:text-white transition-colors duration-200">+91 96668 48983</a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="h-5 w-5 text-indigo-400 shrink-0" />
                <a href="mailto:info@reeyanshtech.com" className="hover:text-white transition-colors duration-200">info@reeyanshtech.com</a>
              </li>
            </ul>
          </div>

        </div>

        <div className="mt-12 pt-8 border-t border-slate-900 text-xs flex flex-col sm:flex-row justify-between items-center gap-4">
          <p>© {currentYear} Reeyansh Tech Solutions. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/contact/" className="hover:text-white transition-colors duration-200">Privacy Policy</Link>
            <Link href="/contact/" className="hover:text-white transition-colors duration-200">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
