import { Link } from "react-router-dom";

export default function CategoriHeader(){
    return<>
        <header className="header shadow header-fixed border-0">
			<div className="container">
				<div className="header-content">
					<div className="left-content">
						<Link to="/" className="back-btn">
							<i className="icon feather icon-chevron-left"></i>
						</Link>
						<h6 className="title">All Categories</h6>
					</div>
					<div className="mid-content">
					</div>
					<div className="right-content">
						<a href="search.html" className="search-icon">
							<i className="icon feather icon-search"></i>
						</a>
					</div>
				</div>
			</div>
		</header>
    </>
}