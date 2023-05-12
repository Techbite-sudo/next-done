import Footer from "@/components/Footer"
import Head from "next/head"

export default function About(){
    return(
        <div>
            <Head>
                <title>About Us</title>
                <meta name="description" content="About Us" />

            </Head>
            <h1>About page</h1>
        </div>
    )
}

About.getLayout = function PageLayout(page){
    return(
        <>
            {page}
            <Footer/>
        </>
    )
}