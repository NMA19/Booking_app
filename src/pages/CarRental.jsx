import ButtonUsage from "../components/ui/Button.jsx"
import List from '../components/ui/List.jsx'

const Car = () => {
    return (
      <div className="bg-red-900 p-1 h-[200px]">
      <h1 className="m-4 relative left-20 text-white font-bold">
       TravelEase
      </h1>
      <ButtonUsage />
      <List/>
    </div>
    )
  }
  export default Car;