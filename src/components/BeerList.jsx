import { observer } from 'mobx-react-lite'
import React from 'react'
import Beer from './Beer'
import beer from '../store/beerStore'

const BeerList = observer(() => {
    return (
        <div className="beerlist">
            {beer.shelfWithBeer.map((bottle) => (
                <Beer
                    key={bottle.id}
                    beername={bottle.name}
                    description={bottle.description}
                    img={bottle.image_url}
                    id={bottle.id}
                />
            ))}
        </div>
    )
})

export default BeerList
