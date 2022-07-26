import { observer } from 'mobx-react-lite'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import shelfWithBeer from '../store/beerStore'

const Search = observer(() => {
    const [searchValue, setSearchValue] = useState('')
    const navigate = useNavigate()
    const handleSearch = (event) => {
        if (event.key === 'Enter') {
            shelfWithBeer.startSearch(searchValue)
            console.log(searchValue)
        }
    }

    return (
        <header className="header">
            <h1 className="header__h1" onClick={() => {
                navigate('/#')
                shelfWithBeer.page = 1}}>
                Search for beer
            </h1>
            <div className="header__search-input">
                <input
                    className="input"
                    type="text"
                    placeholder=" Enter beer"
                    value={searchValue}
                    onChange={(event) => {
                        setSearchValue(event.target.value)
                    }}
                    onKeyDown={(event) => handleSearch(event)}
                />
            </div>
        </header>
    )
})

export default Search
