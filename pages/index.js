import Image from 'next/image'
import Link from 'next/link'



export default function Home() {
  return (
    <>
    <h1>Home page</h1>
    <Link href={"/blog"}>
        <h1>Blog</h1>
    </Link>
    <hr/>
    <Link href={"/product"}>
        <h1>Products</h1>
    </Link>
   </>
  )
}
