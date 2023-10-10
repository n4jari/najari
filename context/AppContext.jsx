'use client'
import { createContext, useState } from "react"

export const AppContext = createContext()

export const AppProvider = ({ children }) => {
    const [open, setOpen] = useState(true)
    const toggle = () => {
        setOpen(prev => !prev)
    }
    return (
        <AppContext.Provider value={{ open, toggle }}>
            <div>{children}</div>
        </AppContext.Provider>
    )
}
