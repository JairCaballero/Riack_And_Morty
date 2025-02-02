import { Outlet } from "react-router-dom"
import { FiltersProvider } from "@/modules/characters/context/Filters"
import Header from "@/shared/components/Header/Header"

const PublicLayout = () => {
  return (
    <FiltersProvider>
      <div>
        <Header />
        <Outlet />
      </div>
    </FiltersProvider>
  )
}
export default PublicLayout