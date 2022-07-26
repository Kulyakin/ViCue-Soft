import { observer } from 'mobx-react-lite'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { BEERPAGE_ROUTE } from '../utils/constants'

const Book = observer(({ beername, description, img, id }) => {
    const navigate = useNavigate()
    return (
        <div
            className="beer"
            onClick={() => navigate(BEERPAGE_ROUTE + '/' + id)}
        >
            <div className="beer__img">
                <img className="beer__img-file" src={img} alt="no img" />
            </div>
            <div className="beer__bottom">
                <h3 className="beer__bottom-name">{beername.slice(0, 30)}</h3>
                <div className="beer__bottom-info">
                    {description.length > 140
                        ? description.slice(0, 140) + '...'
                        : description}
                </div>
            </div>
        </div>
    )
})

export default Book
