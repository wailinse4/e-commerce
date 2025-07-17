import { motion, AnimatePresence } from "framer-motion"
import { Search as SearchIcon, X } from "lucide-react"
import { useState, useRef, useEffect } from "react"
import { useNavigate } from "react-router-dom"

const slideIn = {
  hidden: { y: -30, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: {
      type: "spring",
      damping: 20,
      stiffness: 150,
      mass: 0.8,
      velocity: 0.5
    }
  },
  exit: { 
    y: -30, 
    opacity: 0,
    transition: {
      type: "spring",
      damping: 25,
      stiffness: 150,
      mass: 0.8,
      velocity: 0.5
    }
  }
}

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: [0.4, 0, 0.2, 1]
    }
  },
  exit: { 
    opacity: 0,
    transition: {
      duration: 0.25,
      ease: [0.4, 0, 0.2, 1]
    }
  }
}

const SearchModal = ({ isOpen, onClose }) => {
  const [searchQuery, setSearchQuery] = useState('')
  const searchInputRef = useRef(null)
  const navigate = useNavigate()

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        searchInputRef.current?.focus()
      }, 100)
    }
  }, [isOpen])

  const handleSearch = (e) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`)
      setSearchQuery('')
      onClose()
    }
  }

  if (!isOpen) return null

  return (
    <AnimatePresence>
      <>
        <motion.div
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={fadeIn}
          className="fixed inset-0 bg-black/30 backdrop-blur-sm z-30"
          onClick={onClose}
        />
        
        <motion.div
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={slideIn}
          className="fixed inset-x-0 top-0 bg-white z-40 shadow-lg pt-24 px-4 pb-8"
        >
          <div className="container mx-auto max-w-4xl">
            <form onSubmit={handleSearch} className="relative">
              <div className="relative">
                <SearchIcon 
                  size={24} 
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none"
                />
                <input
                  ref={searchInputRef}
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search E-Commerce"
                  className="w-full py-5 pl-14 pr-12 text-xl border-b border-gray-200 focus:outline-none focus:border-gray-400 transition-colors duration-200"
                  autoComplete="off"
                />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => setSearchQuery('')}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 p-1 text-gray-400 hover:text-black"
                  >
                    <X size={24} />
                  </button>
                )}
              </div>
            </form>
            
            <div className="py-4">
              <p className="text-sm text-gray-500 px-2 py-2">Quick Links</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                <button className="text-left p-3 hover:bg-gray-100 rounded-md transition-colors duration-200">
                  <p className="font-medium">New Arrivals</p>
                  <p className="text-sm text-gray-500">Shop the latest products</p>
                </button>
                <button className="text-left p-3 hover:bg-gray-100 rounded-md transition-colors duration-200">
                  <p className="font-medium">Deals & Offers</p>
                  <p className="text-sm text-gray-500">Limited time offers</p>
                </button>
              </div>
            </div>
          </div>
          
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 text-gray-500 hover:text-black transition-colors duration-200"
            aria-label="Close search"
          >
            <X size={24} />
          </button>
        </motion.div>
      </>
    </AnimatePresence>
  )
}

export default SearchModal
