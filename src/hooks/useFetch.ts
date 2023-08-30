import { useEffect, useReducer } from "react"

type Status = "loading" | "error" | "fetched"

interface State<T> {
    status: Status,
    data?: T
}

type Action<T> =
    | { status: "loading" }
    | { status: "error" }
    | { status: "fetched", payload: T }


export function useFetch<T = unknown>(url: string): State<T> {
    const initState: State<T> = {
        status: "loading",
        data: undefined
    }

    const fetchReducer = (prevState: State<T>, action: Action<T>): State<T> => {
        switch (action.status) {
            case "error": {
                return {
                    ...prevState,
                    status: "error"
                }
            }
            case "fetched": {
                return {
                    data: action.payload,
                    status: "fetched"
                }
            }
            case "loading": {
                return {
                    ...prevState,
                    status: "loading"
                }
            }
        }
    }

    const [state, dispatch] = useReducer(fetchReducer, initState)

    useEffect(() => {
        let didCancel = false;

        async function fetchReq() {
            dispatch({ status: "loading" })
            try {

                const resp = await fetch(url)
                if (!resp.ok) throw new Error()

                const data = await resp.json() as T
                if (didCancel) return
                dispatch({ status: "fetched", payload: data })

            } catch {
                if (didCancel) return
                dispatch({ status: "error" })
            }
        }

        fetchReq()

        return () => { didCancel = true; };
    }, [url])
    return state
}