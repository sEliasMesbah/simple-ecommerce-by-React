import WishListCard from "./WishListCard"

export default function WishListMain(){
    var likes = [
        {
            off : "32% off",
            url : "/images/popular/pic1.png",
            name : "T-shirt",
            describe:"Men Black Grey Allover Printed Round Neck ...",
            price:"30.15$",
            offerprice:"25.15"
        },        {
            off : "32% off",
            url : "/images/popular/pic2.png",
            name : "T-shirt",
            describe:"Men Black Grey Allover Printed Round Neck ...",
            price:"30.15$",
            offerprice:"25.15"
        },        {
            off : "32% off",
            url : "/images/popular/pic3.png",
            name : "T-shirt",
            describe:"Men Black Grey Allover Printed Round Neck ...",
            price:"30.15$",
            offerprice:"25.15"
        },        {
            off : "32% off",
            url : "/images/popular/pic4.png",
            name : "T-shirt",
            describe:"Men Black Grey Allover Printed Round Neck ...",
            price:"30.15$",
            offerprice:"25.15"
        },
        {
            off : "32% off",
            url : "/images/popular/pic1.png",
            name : "T-shirt",
            describe:"Men Black Grey Allover Printed Round Neck ...",
            price:"30.15$",
            offerprice:"25.15"
        },                {
            off : "32% off",
            url : "/images/popular/pic3.png",
            name : "T-shirt",
            describe:"Men Black Grey Allover Printed Round Neck ...",
            price:"30.15$",
            offerprice:"25.15"
        },
    ]
    return<>
    <div className="page-content space-top p-b80">
    <div className="container">
        <div className="row g-3">
                {
        likes.map((like)=>(
            <WishListCard data={like} />
        ))
    }
        </div>
    </div>
    </div>

        
    </>
}