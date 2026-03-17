import Link from "next/link";
import {
  Zap,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-5">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-white">
                <Zap size={20} strokeWidth={2.5} />
              </div>
              <span className="text-xl font-bold">Raahi</span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Connecting you with trusted local workers for all your service needs. 
              Quality work, just a click away.
            </p>
            <div className="flex items-center gap-3">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 hover:bg-primary transition-colors"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-5">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {["Home", "Services", "How It Works", "About Us", "Contact"].map((link) => (
                <li key={link}>
                  <Link
                    href={link === "Home" ? "/" : `/#${link.toLowerCase().replace(/ /g, "-")}`}
                    className="text-sm text-gray-400 hover:text-white hover:translate-x-1 inline-block transition-all"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-5">
              Services
            </h4>
            <ul className="space-y-3">
              {["Electrician", "Plumber", "Carpenter", "Painter", "Cleaner", "AC Repair"].map((s) => (
                <li key={s}>
                  <Link
                    href="/#services"
                    className="text-sm text-gray-400 hover:text-white hover:translate-x-1 inline-block transition-all"
                  >
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-5">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-primary mt-0.5 shrink-0" />
                <span className="text-sm text-gray-400">
                  Bengaluru, Karnataka, India
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-primary shrink-0" />
                <a href="mailto:hello@raahi.in" className="text-sm text-gray-400 hover:text-white transition-colors">
                  hello@raahi.in
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-primary shrink-0" />
                <a href="tel:+919876543210" className="text-sm text-gray-400 hover:text-white transition-colors">
                  +91 98765 43210
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500">
            © 2026 Raahi. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((link) => (
              <a
                key={link}
                href="#"
                className="text-xs text-gray-500 hover:text-gray-300 transition-colors"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
