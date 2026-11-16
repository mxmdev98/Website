import { Link } from 'react-router-dom';
import { FacebookIcon, GitIcon, WhatsappIcon } from './Icons';

const Footer = () => {
  return (
    <footer className="w-full bg-theme-dark text-theme-text pt-10 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 items-start">

        {/* Brand */}
        <div>
          <h3 className="text-xl font-bold text-theme-accent mb-3">MXM DEV</h3>
          <p className="text-gray-300 text-sm leading-relaxed">
            Web Development & Technologies. <br/>
            Port Moresby, National Capital District.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-bold text-theme-accent mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>
              <Link to="/services" className="hover:text-theme-accent transition-colors block">
                Services
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-theme-accent transition-colors block">
                Forms
              </Link>
            </li>
            <li>
              <Link to="/terms" className="hover:text-theme-accent transition-colors block">
                Terms of Service
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-lg font-bold text-theme-accent mb-3">Contact</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li className="flex items-start gap-2.5">
              <span aria-hidden="true" className="leading-6">📍</span>
              <span>Port Moresby, National Capital District</span>
            </li>
            <li className="flex items-center gap-2.5">
              <span aria-hidden="true" className="leading-6">📞</span>
              <span>(675) 7236 9174 / 8345 5547</span>
            </li>
            <li>
              <Link to="/contact" className="flex items-center gap-2.5 hover:text-theme-accent transition-colors">
                <span aria-hidden="true" className="leading-6">✉️</span> info@mxmdev.cloud
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h4 className="text-lg font-bold text-theme-accent mb-3">Social Links</h4>
          <div className="flex items-center gap-4">
            <a href="https://www.facebook.com/mxmdev" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="flex items-center justify-center text-white hover:text-theme-accent transition-colors">
              <FacebookIcon />
            </a>
            <a href="https://wa.me/67583455547" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="flex items-center justify-center text-white hover:text-theme-accent transition-colors">
              <WhatsappIcon />
            </a>
            <a href="https://www.github.com/mxmdev98" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="flex items-center justify-center text-white hover:text-theme-accent transition-colors">
              <GitIcon />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
