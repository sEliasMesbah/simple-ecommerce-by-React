import Card from "./Card"

export default function ProductCards(){
    var cards = [
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
        <div className="container">
            <div className="row g-3">
                {cards.map((product) => (
                    <Card data={product} /> 
                ))}
            </div>
        </div>
    </>
}