import { makeAutoObservable, autorun, get } from 'mobx'
import axios from 'axios'

class Beer {
    shelfWithBeer = []
    nextBooks = []

    page = 1
    maxElemens = 8

    constructor() {
        makeAutoObservable(this)
    }

    startSearch(searchValue) {
        axios
            .get(
                `https://api.punkapi.com/v2/beers?beer_name=${
                    !searchValue ? 'a' : searchValue
                }&page=${this.page}&per_page=${this.maxElemens}`
            )
            .then((res) => {
                this.shelfWithBeer = [...res.data]
                this.page = 1
            })
            .catch((error) => console.log(error))
    }

    loadMore(searchValue) {
        this.page += 1
        axios
            .get(
                `https://api.punkapi.com/v2/beers?beer_name=${
                    !searchValue ? 'a' : searchValue
                }&page=${this.page}&per_page=${this.maxElemens}`
            )
            .then((res) => {
                this.nextBeer = [...res.data]
                const copy = this.shelfWithBeer
                copy.push(...this.nextBeer)
                this.shelfWithBeer = [...copy]
            })
            .catch((error) => console.log(error))
    }
}

export default new Beer()
