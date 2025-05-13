import { Link } from "react-router-dom";

export default function CartHeader(){
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
					<h6 className="title">Cart</h6>
				</div>
				<div className="right-content">
					<a href="javascript:void(0);">
						<i className="icon feather icon-more-vertical-"></i>
					</a>
				</div>
			</div>
		</div>
	</header>
        </>
}