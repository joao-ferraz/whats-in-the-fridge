import * as C from './styles'
import { useState } from 'react'

export const MealItem = (props) => {

    const [recepieView, setRecepieView] = useState(false)
    const [mealData, setMealData] = useState(null)


    const urlAdress = 'https://themealdb.com/api/json/v1/1/lookup.php?i='
    const apiAdress = urlAdress + props.id

    fetch(apiAdress).then((res) => {
        if(!res.ok){
            console.log("erro em fetchin id")
        }
        return res.json()
    })
    .then((data) => {
        setMealData(data)
    })
 


    return(
        <C.BlockContainer>
        <C.Container onClick={() => setRecepieView(!recepieView)}>
                <img src={props.thumb}/>
                <h2>{props.title}</h2>
        </C.Container>
                {recepieView ? 
                <p className='receita'>{mealData.meals[0]?.strInstructions}</p> 
                : null}
        </C.BlockContainer>
    );
}