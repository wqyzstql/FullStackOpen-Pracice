import React from "react"
const Header = () => {
  return (
    <div>
      <h1>Half Stack application development</h1>
    </div>
  )
}
const Content = (prep) => {
  return (
    <div>
      <p>{prep.part} {prep.exercises}</p>
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
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header/>
      <Content part={part1} exercises={exercises1}/>
      <Content part={part2} exercises={exercises2}/>
      <Content part={part3} exercises={exercises3}/>
      <Total a={exercises1} b={exercises2} c={exercises3} />
    </div>
  )
}

export default App