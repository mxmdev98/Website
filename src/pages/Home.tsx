import { ServiceFeatures } from "../data/mockData";

const Home = () => {
  
  return (
    
      <div className="items-center text-center min-h-screen min-w-screen px-6 pt-25 pb-50 overflow-y-auto bg-[url('./assets/MXMDEV-BG.svg')] bg-cover bg-no-repeat bg-center">
      
      {/* Hero Section - Centered Vertically*/}
      <section className="items-center justify-center text-center px-6 pb-10 md:pt-15">
        <h1 className="text-3xl font-bold mt-10 text-theme-dark">
          Get Found. Get Noticed. <br />
          <span className="text-theme-dark text-4xl font-extrabold pb-5">
            Elevate Your Online Presence
          </span>
        </h1>
        
        <p className=" text-black text-xl pt-6 pb-6">
          We build and deploy fast, secure, and SEO-optimized web applications specifically for <big>PNG SME </big>businesses. <br /> From <big>small</big> business <big>sites</big> to <big>complex applications</big> <br />
                We prioritize <big>affordablity</big> to help your SME business <big>succeed online</big>. 
        </p>
        
        <div className="gap-12 flex justify-center pb-4">
          <a href="/services" className="px-6 py-2 rounded-full bg-sky-400 text-lg text-white hover:bg-white hover:text-black hover:shadow-[0_0_15px_rgba(56,189,248,0.5)]">
            View Services
          </a>
          <a href="/work" className="px-6 py-2 rounded-full bg-sky-400 text-lg text-white hover:bg-white hover:text-black hover:shadow-[0_0_15px_rgba(56,189,248,0.5)]">
            See Our Work
          </a>
        </div>
      
        <h2 className="text-black font-bold text-center mb-10 pt-8">Why Choose Us?</h2>  
        <div className="text-center grid grid-cols-3 gap-10 ">
        
          {ServiceFeatures.map((feature, index) => (
            <div key={index} className="flex-col text-center gap-6 rounded-2xl backdrop-blur-md border-theme-accent transition-colors hover:scale-105">
              <span className="text-xl">{feature.Icon}</span>
              
                <h3 className="flex text-xl font-bold text-black text-center justify-center">{feature.title}</h3> 
             
            </div>
          ))}
        </div>
      </section> 
    </div>
    
   );
}

export default Home;