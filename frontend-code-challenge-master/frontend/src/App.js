import "./styles/App.css"
import AllRoutes from "./AllRoutes"
import DataHandler from './DataHandler'

export default function App() {
  return (
    <div className="App">
      <DataHandler>
        <AllRoutes />
      </DataHandler>
    </div>
  )
}