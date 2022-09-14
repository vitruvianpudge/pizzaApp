import { useEffect, useState } from 'react'
import Categories from '../components/Categories'
import Sort from '../components/Sort'
import PizzaBlock from '../components/PizzaBlock'
import MyLoader from '../components/PizzaBlock/Skeleton'

function Home() {

    const [items, setItems] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        fetch('https://631dfe08789612cd07b47412.mockapi.io/items')
            .then(res => (res.json()))
            .then(json => {
                setItems(json)
                setIsLoading(false)
            })
    }, [])


    return (
        <>
            <div className="content__top">
                <Categories />
                <Sort />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {isLoading
                    ? [... new Array(10)].map(() => (<MyLoader />))
                    : items.map((obj) => (
                        <PizzaBlock key={obj.title} {...obj} />
                    ))
                }
            </div>
        </>
    )
}

export default Home