import { useEffect, useState } from "react"


export const useAsync = (functionAsync, dependencias = []) => { 

    const [data,setData] = useState()
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState()

    useEffect( () => {
        setIsLoading(true)

        functionAsync().then(res => {
            setData(res)
        }).catch(err =>{
            setError(err)
        }).finally(() => {
            setIsLoading(false)
        })

    }, dependencias)

    return{
        data,
        isLoading,
        error
    }

}