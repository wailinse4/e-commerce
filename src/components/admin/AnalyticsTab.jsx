import { motion } from "framer-motion"
import { Users, Package, ShoppingCart, DollarSign } from "lucide-react"
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts"

import mockAnalyticsData from "../../data/mockAnalyticsData"

const AnalyticsTab = () => {
  const { analyticsData, dailySalesData } = mockAnalyticsData

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <AnalyticsCard
          title="Total Users"
          value={analyticsData.users.toLocaleString()}
          icon={Users}
          color="from-gray-100 to-white"
        />
        <AnalyticsCard
          title="Total Products"
          value={analyticsData.products.toLocaleString()}
          icon={Package}
          color="from-gray-100 to-white"
        />
        <AnalyticsCard
          title="Total Sales"
          value={analyticsData.totalSales.toLocaleString()}
          icon={ShoppingCart}
          color="from-gray-100 to-white"
        />
        <AnalyticsCard
          title="Total Revenue"
          value={`$${analyticsData.totalRevenue.toLocaleString()}`}
          icon={DollarSign}
          color="from-gray-100 to-white"
        />
      </div>

      <motion.div
        className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-300"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={dailySalesData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" stroke="#4B5563" />
            <YAxis yAxisId="left" stroke="#4B5563" />
            <YAxis yAxisId="right" orientation="right" stroke="#4B5563" />
            <Tooltip />
            <Legend />
            <Line
              yAxisId="left"
              type="monotone"
              dataKey="sales"
              stroke="#111827" // dark gray / black
              activeDot={{ r: 8 }}
              name="Sales"
            />
            <Line
              yAxisId="right"
              type="monotone"
              dataKey="revenue"
              stroke="#374151" // gray-700
              activeDot={{ r: 8 }}
              name="Revenue"
            />
          </LineChart>
        </ResponsiveContainer>
      </motion.div>
    </div>
  )
}

export default AnalyticsTab

const AnalyticsCard = ({ title, value, icon: Icon, color }) => (
  <motion.div
    className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-300 overflow-hidden relative"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <div className="flex justify-between items-center relative z-10">
      <div>
        <p className="text-gray-600 text-sm mb-1 font-semibold">{title}</p>
        <h3 className="text-gray-900 text-3xl font-bold">{value}</h3>
      </div>
    </div>
    <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-20`} />
    <div className="absolute -bottom-4 -right-4 text-gray-400 opacity-40">
      <Icon className="h-32 w-32" />
    </div>
  </motion.div>
)
