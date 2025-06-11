import { createBrowserRouter, type RouteObject } from 'react-router-dom'
import { RoutePaths } from './types.ts'
import type { ReactElement } from 'react'
import { HomePage } from '../pages/home'
import { FavoriteRecipesPage } from '../pages/favorite-recipes'
import { RecipeDetailsPage } from '../pages/recipe-details'
import { NotFoundPage } from '../pages/not-found'
import { AppShell } from '../components/layout/app-shell.tsx'

const routesMap: Record<RoutePaths, ReactElement> = {
  [RoutePaths.Home]: <HomePage />,
  [RoutePaths.Favorites]: <FavoriteRecipesPage />,
  [RoutePaths.RecipeDetails]: <RecipeDetailsPage />,
  [RoutePaths.NotFound]: <NotFoundPage />,
}

const routes: Array<RouteObject> = Object.entries(routesMap).map(
  ([path, element]) => ({
    path,
    element,
  }),
)

const routeConfig: Array<RouteObject> = [
  {
    path: '',
    element: <AppShell />,
    children: routes,
  },
]

export const router = createBrowserRouter(routeConfig)
