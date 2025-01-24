import PublicLayout from "@/modules/components/layouts/PublicLayout"
import { PublicRoutes } from "@/modules/router/routes"
import CharacterID from "@/pages/CharacterID"
import Characters from "@/pages/Characters"
import { createBrowserRouter } from "react-router-dom"

const router = createBrowserRouter([
  {
    path: PublicRoutes.character,
    element: <PublicLayout />,
    children: [
      {
        index: true,
        element: <Characters />,
      },
      {
        path: PublicRoutes.characterID,
        element: <CharacterID />
      }
    ]
  }
])

export default router