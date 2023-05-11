import { useRouter } from "next/router"
import { comments } from "@/data/comments"
export default function Comment({ comment }){
    const router = useRouter()

    if (router.isFallback) {
        return(
            <div>Loading...</div>
        )
    }

    return(
        <div key={comment.id}>
            <h1>{comment.id} {comment.text}</h1>
        </div>
    )
}

export async function getStaticProps(context){
    const {params} = context
    const {commentId} = params
    //dont do this
    // const response = await fetch(`/api/comments/${commentId}`)
    // const data = await response.json()
    const comment = comments.find((comment) => comment.id === parseInt(commentId))
    console.log(comment)

    return{
        props: {
            comment,
        },
    }
}   
 
export async function getStaticPaths(){
    return {
        paths:[
            {params: {commentId: "1"}},
            {params: {commentId: "2"}},
            {params: {commentId: "3"}}
        ],
        fallback: false
    }
}
