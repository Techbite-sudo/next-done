import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'


export default function Home() {
  const router = useRouter()

  const handleClick = () => {
    console.log('clicked')
    router.push('/product')
    
  }

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
    <button onClick={handleClick}>
      Place order
    </button>
    <Link href={'/posts'}>
        <h1>Post</h1>
    </Link>
   </>
  )
}
