import React from 'react'
import AppRouter from "./routes/AppRouter";
import Snowfall from 'react-snowfall';

const App = () => {
  return (
    <>
      <Snowfall />
      <AppRouter />
    </>
  )
}

export default App