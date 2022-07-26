import { observer } from 'mobx-react-lite'
import React, { useEffect, useState } from 'react'
import BeerList from '../components/BeerList'
import Pagination from '../components/Pagination'
import Loader from '../components/simple/Loader'
import shelfWithBeer from '../store/beerStore'

const MainPage = observer(() => {
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        shelfWithBeer.startSearch()
        setLoading(false)
    }, [])

    return (
        <div>
            {loading ? <Loader /> : <BeerList />}
            <Pagination />
        </div>
    )
})

export default MainPage
