import { Link } from "react-router-dom"

export const LogIn = () => {
  return(
    <main>
      <h1>LogIn Component</h1>
      <Link to="/signup">
        Sign Up instead
      </Link>
    </main>
  )
} 