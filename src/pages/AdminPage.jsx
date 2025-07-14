import { useState } from "react"
import { motion } from "framer-motion"
import { BarChart, PlusCircle, ShoppingBasket } from "lucide-react"

import CreateProductForm from "../components/admin/CreateProductForm"
import ProductsList from "../components/admin/ProductsList"
import AnalyticsTab from "../components/admin/AnalyticsTab"

const tabs = [
  { id: "create", label: "Create Product", icon: PlusCircle },
  { id: "products", label: "Products", icon: ShoppingBasket },
  { id: "analytics", label: "Analytics", icon: BarChart },
]

const AdminPage = () => {
  const [activeTab, setActiveTab] = useState("create")

  return (
    <div className="min-h-screen relative overflow-hidden bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto bg-white rounded-2xl shadow-sm p-6 lg:p-8">
        <div className="relative z-10">
          <motion.h1
            className="text-2xl font-extrabold text-black text-center mb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Admin Dashboard
          </motion.h1>

          <motion.div
            className="flex justify-center mb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                type="button"
                className={`flex items-center px-4 py-2 mx-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                  activeTab === tab.id
                    ? "bg-black text-white shadow-md"
                    : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
                }`}
              >
                <tab.icon className={`mr-2 h-5 w-5 ${activeTab === tab.id ? "text-white" : "text-gray-700"}`} />
                {tab.label}
              </button>
            ))}
          </motion.div>

          {activeTab === "create" && <CreateProductForm />}
          {activeTab === "analytics" && <AnalyticsTab />}
          {activeTab === "products" && <ProductsList />}
        </div>
      </div>
    </div>
  )
}

export default AdminPage;
