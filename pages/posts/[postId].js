import { useRouter } from "next/router"

export default function Post({ post }){
    return(
        <div>
            <h1>Post</h1>
            <div key={post.id}>
                <p>{post.id}</p>
                <p>{post.body}</p>
                <p>{post.title}</p>
                <hr/>
            </div>
        </div>
    )
}

export async function getStaticProps(context){
    const {params} = context

    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
    const data  =await response.json()
    console.log(data)

    return{
        props: {
            post: data,
        },
    }
}

export async function getStaticPaths(){
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await response.json()
    const paths = data.map((post) => {
        return{
            params: {
                postId: `${post.id}`
            }
        }
    })
    return{
        // paths: [
        //     {
        //         params: { postId: "1" }
        //     },
        //     {
        //         params: { postId: "2" }
        //     },
        //     {
        //         params: { postId: "3"}
        //     },
        // ],
        paths,
        fallback: false
    }
}
   