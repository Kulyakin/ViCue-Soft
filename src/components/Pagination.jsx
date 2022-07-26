import React from 'react'
import shelfWithBeer from '../store/beerStore'

const Pagination = () => {
    return (
        <div className="pagination">
            <button
                className="pagination__button"
                onClick={() => shelfWithBeer.loadMore()}
            >
                load more
            </button>
        </div>
    )
}

export default Pagination