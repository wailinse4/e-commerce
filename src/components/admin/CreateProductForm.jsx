import { motion } from "framer-motion"
import { PlusCircle, Upload, Loader } from "lucide-react"

const categories = [
  "Laptops",
  "iPads",
  "Phones",
  "Watches",
  "Audio",
  "TVs",
  "Gaming",
  "Accessories",
  "Storage",
  "Smart Home",
  "Wearables"
]

const CreateProductForm = () => {

  return (
    <motion.div
      className="bg-white shadow-lg rounded-xl p-8 mb-8 max-w-xl mx-auto border border-gray-200"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-2xl font-semibold mb-6 text-gray-900">Create New Product</h2>

      <form className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Product Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="mt-1 block w-full bg-white border border-gray-200 rounded-lg shadow-sm py-2.5 px-4 text-gray-900 focus:outline-none focus:ring-2 focus:ring-black focus:border-black"
            required
          />
        </div>

        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            rows="3"
            className="mt-1 block w-full bg-white border border-gray-200 rounded-lg shadow-sm py-2.5 px-4 text-gray-900 focus:outline-none focus:ring-2 focus:ring-black focus:border-black"
            required
          />
        </div>

        <div>
          <label htmlFor="price" className="block text-sm font-medium text-gray-700">
            Price
          </label>
          <input
            type="number"
            id="price"
            name="price"
            step="0.01"
            className="mt-1 block w-full bg-white border border-gray-200 rounded-lg shadow-sm py-2.5 px-4 text-gray-900 focus:outline-none focus:ring-2 focus:ring-black focus:border-black"
            required
          />
        </div>

        <div>
          <label htmlFor="category" className="block text-sm font-medium text-gray-700">
            Category
          </label>
          <div className="mt-1 relative">
            <select
              id="category"
              name="category"
              className="block w-full appearance-none bg-white border border-gray-300 rounded-md py-2 px-3 pr-8 text-gray-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-black focus:border-black"
              required
            >
              <option value="">Select a category</option>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <svg
                className="h-4 w-4 text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M10 12a1 1 0 01-.707-.293l-3-3a1 1 0 011.414-1.414L10 9.586l2.293-2.293a1 1 0 111.414 1.414l-3 3A1 1 0 0110 12z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
        </div>

        <div className="mt-1 flex items-center">
          <input
            type="file"
            id="image"
            className="sr-only"
            accept="image/*"
          />
          <label
            htmlFor="image"
            className="cursor-pointer bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-900 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
          >
            <Upload className="h-5 w-5 inline-block mr-2" />
            Upload Image
          </label>
        </div>

        <button
          type="submit"
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-black hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
        >
          <PlusCircle className="mr-2 h-5 w-5" />
          Create Product
        </button>
      </form>
    </motion.div>
  )
}

export default CreateProductForm
