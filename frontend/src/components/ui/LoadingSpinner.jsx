import { Loader2 } from "lucide-react"

const LoadingSpinner = ({
  size = "md",
  color = "black",
  className = ""
}) => {
  const sizeClass = {
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6"
  }[size]

  const colorClass = {
    black: "text-black",
    white: "text-white",
    gray: "text-gray-500",
    primary: "text-blue-600"
  }[color] || "text-current"

  return (
    <Loader2 
      className={`animate-spin ${sizeClass} ${colorClass} ${className}`}
      aria-hidden="true"
    />
  )
}

export default LoadingSpinner
