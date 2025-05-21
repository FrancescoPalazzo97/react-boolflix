import { createContext, useState, useContext } from 'react'

const LibraryContext = createContext()

const LibraryProvider = ({ children }) => {

    const [all, setAll] = useState(null)
    const [search, setSearch] = useState('')

    return (
        <LibraryContext.Provider value={{ all, setAll, search, setSearch }}>
            {children}
        </LibraryContext.Provider>
    )

}

const useLibraryContext = () => {
    const context = useContext(LibraryContext);
    return context;
}

export { LibraryProvider, useLibraryContext };