import { Demos } from '../data/mockData';

const Work = () => {
  
  return (
    <div className="items-center text-center min-h-screen min-w-screen px-6 pt-15 pb-42 bg-[url('./assets/MXMDEV-BG.svg')] bg-cover bg-no-repeat bg-center">
      
        <div className="text-center mb-8 pt-12">
          <h2 className="text-4xl font-bold mb-1 text-theme-dark">Our Work</h2>
          <p className="text-black text-2xl max-w-2xl mx-auto mb-4 pb-4">Explore our latest web developments deployed live.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Demos.map((demo, index) => (
            <div key={index} className="bg-transparent border border-white/10 rounded-xl overflow-hidden hover:backdrop-blur-md hover:-translate-y-2 transition duration-300 flex flex-col">
              <div className="h-48 w-full overflow-hidden">
                <img src={demo.image} alt={demo.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-2xl font-bold text-black mb-2">{demo.title}</h3>
                <p className="text-gray-600 text-lg mb-6 flex-grow leading-relaxed">{demo.description}</p>
                <a href={demo.link} target="_blank" rel="noopener noreferrer" className="block w-full text-center py-3 rounded-full font-semibold bg-sky-400 text-white hover:bg-white hover:text-black hover:border-gray-400 hover:shadow-[0_0_15px_rgba(56,189,248,0.5)] text-lg">
                  View
                </a>
              </div>
            </div>
          ))}
        </div>
      
    </div>
  );
};

export default Work;