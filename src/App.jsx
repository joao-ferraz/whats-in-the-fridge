import { useState, useEffect } from 'react'
import './App.css'
import {Header} from './Components/Header/'
import {InputBlock} from './Components/InputBlock'
import {MealItem} from './Components/MealItem'
import * as C from './App.js'


function App() {

  const [data, setData] = useState('');
  const [input, setInput] = useState('carrot')

  const urlAdress = 'https://themealdb.com/api/json/v1/1/filter.php?i='
  let apiAdress = urlAdress  + input

  useEffect(() => {
    fetch(apiAdress)
    .then((res) => {
      if(!res.ok){
        console.log("erro no fetching")
      }
      return res.json()
    })
    .then((dados) => {
      setData(dados)
    })
  }, [input])

  const handleNewInput = (inputText) => {
    setInput(inputText)
    apiAdress = urlAdress  + input
  }


  return (
    <div>
      <Header />
      <InputBlock onEnter={handleNewInput}/>
      <C.Container>
          {data.meals?.map((meal, index) => (
            <MealItem title={meal.strMeal} id={meal.idMeal} thumb={meal.strMealThumb} />
          ))}
      </C.Container>
    </ div>
  )
}

export default App
