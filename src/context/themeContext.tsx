import React, {createContext, useEffect, useState} from "react"

const getInitialTheme = () => {
    if (typeof window !== "undefined" && window.localStorage) {
        const storedPrefs = window.localStorage.getItem("color-theme")
        if (typeof storedPrefs === "string") {
            return storedPrefs
        }
        const userMedia = window.matchMedia("(prefers-color-scheme: dark)")
        if (userMedia.matches) {
            return "dark"
        }
    }
    return "light";
}

interface ContextProps {
    theme: string
    setTheme: Function
}

export const ThemeContext = createContext<ContextProps>({
    theme: '',
    setTheme: () => null,
})

interface ThemeProviderProps {
    initialTheme: string,
    children: React.ReactNode
}

export const ThemeProvider = (props: ThemeProviderProps) => {
    const [theme, setTheme] = useState(getInitialTheme);
    const rawSetTheme = (rawTheme:any) => {
        const root = window.document.documentElement;
        const isDark = rawTheme === "dark"
        root.classList.remove(isDark ? "light" : "dark")
        root.classList.add(rawTheme)
        localStorage.setItem("color-theme", rawTheme)
        console.log("rawTheme", rawTheme, "theme", theme)
    }
    if (props.initialTheme) {
        rawSetTheme(props.initialTheme)
    }

    useEffect(() => {
        rawSetTheme(theme);
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {props.children}
        </ThemeContext.Provider>
    );
}