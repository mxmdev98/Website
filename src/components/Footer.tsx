import { Link } from 'react-router-dom';
import { FacebookIcon, GitIcon, WhatsappIcon } from './Icons';

const Footer = () => {
  return (
    <footer className="fixed bottom-0 w-full bg-theme-dark text-theme-text h-35 pt-4 pb-4">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-12 overflow-y-auto">
  
        <div>
          <h3 className="font-bold text-xl text-theme-accent">MXM DEV</h3>
          <p className="text-gray-300 text-sm leading-relaxed">
            Web Development & Technologies. <br/>
            Port Moresby, National Capital District. 
          </p>
        </div>

        <div>
          <h4 className="text-lg mb-1 text-theme-accent">Quick Links</h4>
          <ul className="space-y-1 text-sm text-gray-300">
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

        <div>
          <h4 className="text-lg mb-1 text-theme-accent">Contact</h4>
          <div className="space-y-1 text-sm">
            <p className="flex items-start text-gray-300">
              <span className="mr-4 ">📍</span> Port Moresby, National Capital District
            </p>
            <p className="flex items-center text-gray-300">
              <span className="mr-2.5 ">📞</span> Phone: +(675) 7070 7796
            </p>
            <a href="/contact" className="flex items-center text-gray-300 hover:text-theme-accenttransition-colors">
              <span className="mr-2.5">✉️</span> Contact Us
            </a>
          </div>
        </div>

        <div className="">
            <h4 className="text-lg justify-left text-theme-accent">Social Links</h4>
                <div className="flex wrap items-start pt-2 gap-4">
                    <span>
                        <a href="https://www.facebook.com/mxmdev" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center text-white">
                        <FacebookIcon />
                        </a>
                    </span>
                    <span>
                        <a href="https://wa.me/+67575230967" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center text-white">
                        <WhatsappIcon />
                        </a>
                    </span>
                    <span>
                        <a href="https://www.github.com/mxmdev98" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center -translate-y-1.5 text-white">
                        <GitIcon/>
                        </a>
                    </span>
                    </div>
        </div>
      </div>
      
      
      {/*Copyright Bar 
      <div className="text-center pt-1 border-t border-white/5 text-xs text-theme-muted">
        &copy; {new Date().getFullYear()} MXM DEV. All rights reserved.
      </div> */}
    </footer>
  );
};

export default Footer;