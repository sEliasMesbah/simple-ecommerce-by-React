import CategoriCard from "./CategoryCard"

export default function CategoriMain(){
    var Catdatas = [
        {
            url : "/images/category/pic1.png",
            title: "Man T-shirt",
            number:"240"
        },
        {
            url : "/images/category/pic2.png",
            title: "Jackets",
            number:"140"
        },
        {
            url : "/images/category/pic3.png",
            title: "Shoes",
            number:"340"
        },
        {
            url : "/images/category/pic4.png",
            title: "Sunglasses",
            number:"440"
        },
        {
            url : "/images/category/pic5.png",
            title: "Winter",
            number:"540"
        }
    ]
    return<>
    <div className="page-content space-top p-b60">
        <div className="container">
            <div className="row">
                {Catdatas.map((data)=>(
                    <CategoriCard data={data} />
                ))}
            </div>
        </div>
    </div>
    
    </>
}