import BeerPage from './pages/BeerPage'

import { BEERPAGE_ROUTE } from './utils/constants'

export const allRoutes = [
    {
        path: BEERPAGE_ROUTE + '/:id',
        component: <BeerPage />
    }
]
