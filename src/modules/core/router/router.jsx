import PublicLayout from "@/modules/components/layouts/PublicLayout"
import { PublicRoutes } from "@/modules/core/router/routes"
import CharacterDetail from "@/pages/CharacterDetail"
import Characters from "@/pages/Characters"
import { NotFound } from "@/pages/NotFound"
import { createBrowserRouter } from "react-router-dom"

const router = createBrowserRouter([
  {
    path: PublicRoutes.character,
    element: <PublicLayout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Characters />,
      },
      {
        path: `${PublicRoutes.characterID}/:id`,
        element: <CharacterDetail />
      }
    ]
  }
])

export default router