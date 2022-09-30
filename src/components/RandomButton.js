import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'

const RandomButton = () => {

    const [id, setId] = useState('')

    useEffect(() => {
        const getRandomDrink = async () => {
            try{
                const response = await fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")
                const data = await response.json()
                const drinkId = data.drinks[0].idDrink
                setId(drinkId)

            } catch(error){
                console.log(error)
            }
        }
        getRandomDrink()
    }, [])

    return (
        <section className="random-button">
            <Link to={`/cocktail/${id}`} className='btn btn-primary'>
                Random Drink
            </Link>
        </section>
    )
}
   
export default RandomButton
   