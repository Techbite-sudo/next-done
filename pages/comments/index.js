import { useState } from "react"

export default function CommentsPage(){
    const [comments, setComments] = useState([])  

    const fetchComments = async () => {
        const response = await fetch('/api/comments')
        const data = await response.json()
        setComments(data)

    }

    return(
        <div>
            <button onClick={fetchComments}>
                Load Comments
            </button>
            {comments.map((comment) => {
                return(
                    <div key={comment.id}>
                        <h2>{comment.id} {comment.text}</h2>
                    </div>
                )
            })}

        </div>
    )
}