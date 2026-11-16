import { Link } from 'react-router-dom';
import {ServicePackage} from '../data/mockData';
interface ServicePackage {
  title: string;
  price: string;
  subtitle: string;
  features: string[];
}

const Services = () => {

  return (
    <div className="flex-1 w-full px-4 sm:px-6 pt-24 pb-16 bg-[url('./assets/MXMDEV-BG.svg')] bg-cover bg-no-repeat bg-center">
      <div className="max-w-7xl mx-auto">
        <div className="mb-4">
          <div className="text-center mt-6">
            <h2 className="text-4xl font-bold text-theme-dark mb-2">Service Offers</h2>
            <p className="text-black max-w-2xl mx-auto text-xl sm:text-2xl">We offer tailored solutions to fit your business needs, from simple static sites to complex, automated enterprise platforms.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-8 mx-auto">
            {ServicePackage.map((pkg, index) => (
              <div key={index} className="flex flex-col p-6 border border-white/10 rounded-2xl hover:border-theme-accent/50 hover:scale-102 hover:shadow-lg hover:backdrop-blur-md transition duration-300">
                <div className="text-3xl font-extrabold text-theme-dark mb-2 text-left">{pkg.price}</div>
                <div className="text-md uppercase tracking-wider text-sky-600 mb-2 font-semibold text-left">{pkg.subtitle}</div>

                <ul className="mb-2 flex-1 space-y-1 items-start text-left">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-start text-gray-800 text-sl">
                      <span className="text-sky-500 mr-2 font-bold">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="flex items-center justify-center pt-8">
          <Link
            to="/contact?service=General Inquiry"
            className="inline-block px-8 py-3 rounded-full bg-sky-400 text-white hover:bg-white hover:text-black hover:shadow-[0_0_15px_rgba(56,189,248,0.5)] text-lg"
          >Get A Quote</Link>
        </div>
      </div>
    </div>
  );
};

export default Services;