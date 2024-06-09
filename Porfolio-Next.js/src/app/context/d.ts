/* import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext()

export const ThemeContextProvider = ({ children }) => {

    const [darkMode, setDarkMode] = useState(localStorage.getItem('Mode') ? localStorage.getItem('Mode') : false)

    const changeTheme = () => {
        setDarkMode(!darkMode)
    }

    useEffect(() => {
        localStorage.setItem('Mode', darkMode)
    }, [darkMode])

    return (
        <ThemeContext.Provider value={{ darkMode, changeTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}
 */
