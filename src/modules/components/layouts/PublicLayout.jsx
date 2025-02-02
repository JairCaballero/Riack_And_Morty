import { Outlet } from "react-router-dom"
import Navbar from "@/modules/components/PublicHeader/Navbar"
import { FiltersProvider } from "@/modules/characters/context/Filters"

const PublicLayout = () => {
  return (
    <FiltersProvider>
      <div>
        <Navbar />
        <Outlet />
      </div>
    </FiltersProvider>
  )
}
export default PublicLayout