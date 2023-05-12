import Image from "next/image"
import img from '../public/1.jpg'

export default function Pets(){
    return(
        <div>
            <h1>Pets</h1>
            <Image src={img} placeholder="blur" alt="pets" width="280" height="420"/>
            <hr/>
            {['1','2','3','4','5'].map((path) =>{
                return(
                    <div key={path}>
                        <Image src={`/${path}.jpg`} alt="pets" width="280" height="420"/>
                    </div>
                )
            })}
        </div>
    )
}