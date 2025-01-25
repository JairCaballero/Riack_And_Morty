import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import router from '@/modules/core/router/router'
import { FiltersProvider } from '@/modules/characters/context/Filters'
import './index.css'

createRoot(document.getElementById('root')).render(
  // <StrictMode>
    <FiltersProvider>
      <RouterProvider router={router} />
    </FiltersProvider>
  // </StrictMode>
)
