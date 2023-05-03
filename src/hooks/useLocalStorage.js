import { useState } from "react"


function useLocalStorage(key, initialValue) {
    const [localStorageValue, setLocalStorageValue] = useState(() => getLocalStorageValue(key, initialValue))
    
    const setValue = (value) => {
        //Check if function
        const valueToStore = value instanceof Function ? value(localStorageValue) : value

        //Set to state
        setLocalStorageValue(value)
        //Set to LS
        localStorage.setItem(key, JSON.stringify(valueToStore)) 
    }

    function getLocalStorageValue(key,initialValue) {
        const itemFromStorage = localStorage.getItem(key)

        return itemFromStorage ? JSON.parse(itemFromStorage) : initialValue
    }
    return  [localStorageValue, setValue]
}

export default useLocalStorage