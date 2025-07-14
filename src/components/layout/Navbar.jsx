import { ShoppingCart, User, LogIn, LogOut, Lock, Search, UserPlus } from "lucide-react"
import { Link } from "react-router-dom"

const IconWrapper = ({ children, to, onClick }) => (
  <Link
    to={to}
    onClick={onClick}
    className='p-2 rounded-full hover:bg-gray-200 transition-colors duration-300 ease-in-out text-black flex items-center justify-center'
  >
    {children}
  </Link>
)

const Navbar = () => {
  // Temporary variable - replace with your actual auth logic
  const isAuthenticated = true

  return (
    <header className='fixed top-0 left-0 w-full bg-white shadow-md z-40 border-b border-gray-200'>
      <div className='container mx-auto px-4 py-4'>
        <div className='flex flex-wrap justify-between items-center'>
          <Link to='/' className='text-2xl font-extrabold text-black flex items-center space-x-2'>
            E-Commerce
          </Link>

          <nav className='flex items-center gap-x-4'>
            {isAuthenticated ? (
              <>
                <IconWrapper to={"/search"}>
                  <Search size={20} />
                </IconWrapper>

                <IconWrapper to={"/cart"}>
                  <ShoppingCart size={20} />
                </IconWrapper>

                <IconWrapper to={"/profile"}>
                  <User size={20} />
                </IconWrapper>

                <IconWrapper to={"/admin"}>
                  <Lock size={20} />
                </IconWrapper>

                <IconWrapper to={"/logout"}>
                  <LogOut size={20} />
                </IconWrapper>
              </>
            ) : (
              <>
                <IconWrapper to={"/login"}>
                  <LogIn size={20} />
                </IconWrapper>
                
                <IconWrapper to={"/signup"}>
                  <UserPlus size={20} />
                </IconWrapper>
              </>
            )}
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Navbar
