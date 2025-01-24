import { Outlet } from "react-router-dom"
import Navbar from "@/modules/components/Navbar"

const PublicLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  )
}
export default PublicLayout