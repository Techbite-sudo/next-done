import Link from "next/link"

export default function PostList({ posts }){
    return(
        <div>
            <h1>List of Posts</h1>
            {posts.map((post) => {
                return(
                    <div key={post.id}>
                        <Link href={`posts/${post.id}`}>
                            <p>{post.id}</p>
                        </Link>
                        <p>{post.title}</p>
                        <p>{post.body}</p>
                        <hr/>
                    </div>
                )
            })}
        </div>
    )
}
    
export async function getStaticProps(){
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await response.json()
    
    return{
        props: {
            posts: data,
        },
    }
}