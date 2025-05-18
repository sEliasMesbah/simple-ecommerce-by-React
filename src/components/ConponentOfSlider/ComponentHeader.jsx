import { Link } from "react-router-dom"
export default function ComponentHeader(){
    return<>
    <header className="header shadow header-fixed border-0">
    <div className="container">
        <div className="header-content">
            <div className="left-content">
                <Link to="/" className="back-btn">
                    <i className="icon feather icon-chevron-left"></i>
                </Link>
               
            </div>
            <div className="mid-content">
            <h6 className="title">Component</h6>
            </div>
            <div className="right-content">
                <Link to ="/ search" className="search-btn">
                    <i className="icon feather icon-search"></i></Link>
            </div>
        </div>
    </div>
</header>
</>

}