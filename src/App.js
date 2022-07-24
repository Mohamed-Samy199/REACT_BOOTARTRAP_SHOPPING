import React, { useState } from 'react'
import Category from './Components/Category/Category'
import "./App.css"
import styled, { ThemeProvider } from 'styled-components'
import { darkTheme, GlopalStyles, lightTheme } from './Components/Dack/Themes'

const StyledApp = styled.div``

const App = () => {
    const [theme , setTheme] = useState("light")

    const themeToggel =()=>{
        theme === "light" ? setTheme("dark") : setTheme("light")
    }
    return (
        <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <GlopalStyles/>
        <StyledApp><Category themeToggel = {themeToggel}/></StyledApp>
        </ThemeProvider>
    )
}

export default App
