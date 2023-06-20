import React from "react"
const Header = () => {
  return (
    <div>
      <h1>Half Stack application development</h1>
    </div>
  )
}
const Part = (prep) => {
  return (
    <div>
      <p>{prep.part} {prep.exercises}</p>
    </div>
  )
}
const Content = (prep) => {
  return (
    <div>
      <Part part={prep.part[0]} exercises={prep.exercises[0]}/>
      <Part part={prep.part[1]} exercises={prep.exercises[1]}/>
      <Part part={prep.part[2]} exercises={prep.exercises[2]}/>
    </div>
  )
}
const Total = (prep) =>{
  let ans = prep.a+prep.b+prep.c
  return (
    <div>
      <p>{ans}</p>
    </div>
  )
}

const App = () => {
  const part=[
    'Fundamentals of React',
    'Using props to pass data',
    'State of a component'
  ]
  const exercises=[
    10,7,14
  ]

  return (
    <div>
      <Header/>
      <Content part={part} exercises={exercises}/>
      <Total a={exercises[0]} b={exercises[1]} c={exercises[2]} />
    </div>
  )
}

export default App