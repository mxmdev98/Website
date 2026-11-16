import { ServiceFeatures } from "../data/mockData";

const Home = () => {
  
  return (

    <div className="flex-1 w-full px-4 sm:px-6 pt-24 pb-16 bg-[url('./assets/MXMDEV-BG.svg')] bg-cover bg-no-repeat bg-center">
      <div className="max-w-7xl mx-auto">

      {/* Hero Section - Centered Vertically*/}
      <section className="flex flex-col items-center justify-center text-center px-2 pb-10">
        <h1 className="text-3xl font-bold mt-6 text-theme-dark">
          Get Found. Get Noticed. <br />
          <span className="text-theme-dark text-4xl font-extrabold pb-5">
            Elevate Your Online Presence
          </span>
        </h1>

        <p className="text-black text-base sm:text-xl pt-6 pb-6 max-w-3xl">
          We build and deploy fast, secure, and SEO-optimized web applications specifically for <big>PNG SME </big>businesses. <br /> From <big>small</big> business <big>sites</big> to <big>complex applications</big> <br />
                We prioritize <big>affordablity</big> to help your SME business <big>succeed online</big>.
        </p>

        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 pb-4">
          <a href="/services" className="px-6 py-2 rounded-full bg-sky-400 text-lg text-white hover:bg-white hover:text-black hover:shadow-[0_0_15px_rgba(56,189,248,0.5)]">
            View Services
          </a>
          <a href="/work" className="px-6 py-2 rounded-full bg-sky-400 text-lg text-white hover:bg-white hover:text-black hover:shadow-[0_0_15px_rgba(56,189,248,0.5)]">
            See Our Work
          </a>
        </div>

        <h2 className="text-black font-bold text-center mb-8 pt-8">Why Choose Us?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 w-full max-w-4xl mx-auto">

          {ServiceFeatures.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center gap-3 rounded-2xl backdrop-blur-md border-theme-accent transition-colors hover:scale-105 p-4">
              <span className="text-xl">{feature.Icon}</span>
                <h3 className="text-xl font-bold text-black text-center">{feature.title}</h3>
            </div>
          ))}
        </div>
      </section>
      </div>
    </div>

   );
}

export default Home;