import { useRouter } from "next/router"

export default function Docs(){
    const router = useRouter()
    const { params = [] } = router.query
    console.log(params)
    console.log(params.length)

    if (params.length === 3) {
        return(
            <div>
                <h1>Viewing docs for feature{params[0]}, concept{params[1]} and example{params[2]}</h1>
            </div>
        )
    } else if (params.length === 2) {
        return(
            <div>
                <h1>Viewing docs for feature{params[0]}, concept{params[1]}</h1>
            </div>
        )
    }else if (params.length === 1) {
        return(
            <div>
                <h1>Viewing docs for feature{params[0]}</h1>
            </div>
        )
    }else{
        return (
            <div>
                <h1>Docs Home Page</h1>
            </div>
        )
    }
   
}