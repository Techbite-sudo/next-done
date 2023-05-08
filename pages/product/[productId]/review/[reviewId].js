import { useRouter } from "next/router"


export default function ReviewPage(){
    const router = useRouter()

    // const reviewId = router.query.reviewId
    // const productId = router.query.productId
    const { reviewId, productId} = router.query

    return(
        <div>
            <h1>Review {reviewId} for product {productId}</h1>
        </div>
    )
} 