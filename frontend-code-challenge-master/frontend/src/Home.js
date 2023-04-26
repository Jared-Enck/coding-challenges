import { Link } from "react-router-dom"

export default function Home() {
  return (
    <div className="container-sm">
      <div className="text-center">
        <h1>
          Yodlr Design Challenge        
        </h1>
        <hr/>
        <p>
          <Link to={"/signup"}>Registration Page</Link><br/>
          <Link to={"/admin"}>Admin Page</Link>
        </p>
      </div>
    </div>
  )
}