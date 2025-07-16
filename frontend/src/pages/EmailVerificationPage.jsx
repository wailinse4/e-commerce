import { useState } from "react"
import { motion } from "framer-motion"
import { Link, useSearchParams } from "react-router-dom"
import { ArrowLeft } from "lucide-react"
import { toast } from "react-hot-toast"
import { useAuth } from "../context/AuthContext"

const EmailVerificationPage = () => {
  const [code, setCode] = useState(['', '', '', '', '', ''])
  const [searchParams] = useSearchParams()
  const email = searchParams.get('email')
  const { verifyEmail, isVerifying } = useAuth()

  const handleCodeChange = (index, value) => {
    console.log('handleCodeChange', { index, value }) // Debug log
    
    // Only allow numbers
    if (value && !/^\d*$/.test(value)) {
      console.log('Invalid input, only numbers allowed')
      return
    }
    
    // Update the code array with the new value
    const newCode = [...code]
    newCode[index] = value
    setCode(newCode)
    
    // Auto-focus next input if there's a value and we're not at the last input
    if (value && index < 5) {
      console.log('Moving to next input')
      const nextInput = document.getElementById(`code-${index + 1}`)
      if (nextInput) {
        nextInput.focus()
        nextInput.select()
      }
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    const verificationCode = code.join('')
    if (verificationCode.length !== 6) {
      toast.error('Please enter a 6-digit verification code')
      return
    }
    
    try {
      await verifyEmail(verificationCode)
      toast.success('Email verified successfully!')
    } catch (error) {
      toast.error(error.response?.data?.message || 'Verification failed')
    }
  }
  return (
    <div className="fixed inset-0 overflow-hidden">
      <div className="h-full flex items-center justify-center bg-gray-50 px-4 py-8">
        <div className="w-full max-w-md my-auto">
          <motion.div
            className="bg-white rounded-3xl shadow-lg p-8 relative z-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-center mb-8">
              <motion.h2 
                className="text-2xl font-semibold text-gray-900"
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1, duration: 0.5 }}
              >
                Verify Your Email
              </motion.h2>
              <motion.p 
                className="mt-2 text-sm text-gray-600"
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                We've sent a 6-digit code to your email
              </motion.p>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <div className="flex justify-between gap-3 mb-4">
                    {[0, 1, 2, 3, 4, 5].map((index) => (
                      <motion.div
                        key={index}
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.1 * index }}
                      >
                        <input
                          id={`code-${index}`}
                          type="text"
                          maxLength="1"
                          value={code[index]}
                          onChange={(e) => {
                            console.log('onChange', { value: e.target.value }) // Debug log
                            handleCodeChange(index, e.target.value)
                          }}
                          onKeyDown={(e) => {
                            console.log('onKeyDown', { key: e.key }) // Debug log
                            // Handle backspace to move to previous input
                            if (e.key === 'Backspace' && !e.target.value && index > 0) {
                              const prevInput = document.getElementById(`code-${index - 1}`)
                              if (prevInput) {
                                prevInput.focus()
                                prevInput.select()
                              }
                            }
                          }}
                          onFocus={(e) => e.target.select()}
                          className="w-12 h-12 text-center text-lg border border-gray-300 rounded-xl focus:outline-none focus:ring-1 focus:ring-black focus:border-black transition-colors"
                          inputMode="numeric"
                          pattern="[0-9]*"
                          disabled={isVerifying}
                        />
                      </motion.div>
                    ))}
                  </div>
  
                  {email && (
                    <div className="text-center text-sm text-gray-500 mb-4">
                      Sent to {email}
                    </div>
                  )}
                  <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
                    <span>Didn't receive a code?</span>
                    <button 
                      type="button" 
                      className="font-medium text-gray-900 hover:text-gray-700 transition-colors disabled:opacity-50"
                      disabled={isVerifying}
                    >
                      Resend code
                    </button>
                  </div>
                </div>
  
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={isVerifying}
                  className="flex w-full justify-center rounded-xl bg-gray-900 px-4 py-3 text-sm font-medium text-white shadow-sm hover:bg-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isVerifying ? 'Verifying...' : 'Verify Email'}
                </motion.button>
              </form>
  
              <motion.div 
                className="mt-6 pt-6 border-t border-gray-200"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <Link 
                  to="/login" 
                  className="flex items-center justify-center text-sm text-gray-600 hover:text-gray-900 transition-colors"
                >
                  <ArrowLeft className="h-3.5 w-3.5 mr-1.5" />
                  Back to login
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default EmailVerificationPage