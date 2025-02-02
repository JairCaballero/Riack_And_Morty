import { createBrowserRouter } from "react-router-dom"
import { PublicRoutes } from "@/router/routes"

import PublicLayout from "@/shared/components/layout/PublicLayout"

import { NotFound } from "@/shared/pages/NotFound"
import Characters from "@/modules/characters/pages/Characters"
import CharacterDetail from "@/modules/characters/pages/CharacterDetail"

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