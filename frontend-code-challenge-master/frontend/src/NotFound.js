import { Link } from "react-router-dom"

export default function NotFound() {
  return (
    <div className="mt-4 text-center">
      <h2>
        404 Sorry, can't find what you're looking for.
      </h2>
      <Link to={'/'}>Home</Link>
    </div>
  )
}