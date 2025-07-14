import { motion } from "framer-motion"
import { Link } from "react-router-dom"

const HeroSection = () => {
  return (
    <section className="relative w-full h-screen max-h-[900px] overflow-hidden">
      {/* Background image */}
      <img
        src="https://picsum.photos/1920/1080?blur=2"
        alt="Hero Background"
        className="absolute inset-0 w-full h-full object-cover brightness-75"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/60"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center max-w-5xl mx-auto">
        <motion.h1
          className="text-white text-5xl md:text-7xl font-extrabold tracking-tight drop-shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Experience Next-Level Performance
        </motion.h1>

        <motion.p
          className="mt-6 text-gray-300 max-w-xl text-lg md:text-xl drop-shadow-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Discover innovation redefined with our latest technology. Designed to
          inspire, engineered to perform.
        </motion.p>

        <Link to="/products">
          <motion.button
            className="mt-10 px-10 py-4 bg-emerald-500 hover:bg-emerald-600 rounded-full text-white text-lg font-semibold shadow-lg transition"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Shop Now
          </motion.button>
        </Link>
      </div>
    </section>
  )
}

export default HeroSection
