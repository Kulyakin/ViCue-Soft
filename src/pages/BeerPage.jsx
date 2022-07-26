import axios from 'axios'
import { observer } from 'mobx-react-lite'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const BeerPage = observer(() => {
    const [beer, setBeer] = useState([])
    const { id } = useParams()

    useEffect(() => {
        axios
            .get(`https://api.punkapi.com/v2/beers/${id}`)
            .then((res) => {
                setBeer(...res.data)
                console.log(beer)
            })
            .catch((error) => console.log(error))
    }, [])

    return (
        <div className="beerpage">
            <div className="beerpage__left">
                <img className="beerpage__img" src={beer?.image_url} alt="" />
                <div className="beerpage__tagline">{beer.tagline}</div>
            </div>
            <div className="beerpage__right">
                <div className="beerpage__title">
                    <h3 className="beerpage__name">{beer.name}</h3>
                    <p>abv: {beer.abv}</p>
                </div>

                <p className="beerpage__description">{beer.description}</p>
                <p>Goes well:</p>
                <div className="beerpage__food">
                    {beer.food_pairing?.join(', ')}
                </div>
            </div>
        </div>
    )
})

export default BeerPage
