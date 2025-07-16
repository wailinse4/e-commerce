import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Lock, ArrowLeft, CheckCircle } from "lucide-react";

const ResetPasswordPage = () => {
  // Form submission handled by parent component

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
              <motion.div 
                className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-gray-100 mb-4"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.1, duration: 0.5 }}
              >
                <Lock className="h-6 w-6 text-gray-900" />
              </motion.div>
              <motion.h2 
                className="text-2xl font-semibold text-gray-900"
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                Reset your password
              </motion.h2>
              <motion.p 
                className="mt-2 text-sm text-gray-600"
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                Create a new password for your account
              </motion.p>
            </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                <form className="space-y-6">
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                        New Password
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <Lock className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                          id="password"
                          name="password"
                          type="password"
                          required
                          minLength="6"
                          className="appearance-none block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black focus:border-black sm:text-sm transition-colors duration-200"
                          placeholder="Enter new password"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
                        Confirm Password
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <CheckCircle className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                          id="confirmPassword"
                          name="confirmPassword"
                          type="password"
                          required
                          minLength="6"
                          className="appearance-none block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black focus:border-black sm:text-sm transition-colors duration-200"
                          placeholder="Confirm new password"
                        />
                      </div>
                    </div>
                  </div>

                  <motion.div 
                    whileTap={{ scale: 0.98 }}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                  >
                    <button
                      type="submit"
                      className="w-full flex justify-center py-3 px-4 border border-transparent rounded-xl shadow-sm text-sm font-medium text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black transition-colors duration-200"
                    >
                      Reset Password
                    </button>
                  </motion.div>
                </form>
              </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ResetPasswordPage;