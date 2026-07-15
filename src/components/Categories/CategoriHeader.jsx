import { Link } from "react-router-dom";

export default function CategoriHeader(){
    return<>
        <header className="header shadow header-fixed border-0">
			<div className="container">
				<div className="header-content">
					<div className="left-content">
						<Link to="/home" className="back-btn">
							<i className="icon feather icon-chevron-left"></i>
						</Link>
						<h6 className="title">All Categories</h6>
					</div>
					<div className="mid-content">
					</div>
					<div className="right-content">
						<Link to="/search" className="search-icon">
							<i className="icon feather icon-search"></i>
						</Link>
					</div>
				</div>
			</div>
		</header>
    </>
}
// import { Link } from "react-router-dom";
// import { useEffect } from "react";

// export default function CategoriHeader() {
// 	// برای به‌روزرسانی آیکون‌ها بعد از رندر
// 	useEffect(() => {
// 		if (window.feather) {
// 			window.feather.replace();
// 		}
// 	}, []);

// 	return (
// 		<>
// 			<header className="header shadow header-fixed border-0 bg-white">
// 				<div className="container px-3">
// 					<div className="header-content d-flex align-items-center justify-content-between py-2">

// 						{/* Left: Back + Title */}
// 						<div className="left-content d-flex align-items-center gap-3">
// 							<Link to="/home" className="back-btn">
// 								<i data-feather="chevron-left" className="icon"></i>
// 							</Link>
// 							<h6 className="title mb-0">All Categories</h6>
// 						</div>

// 						{/* Mid: خالی (برای آینده) */}
// 						<div className="mid-content"></div>

// 						{/* Right: Search */}
// 						<div className="right-content">
// 							<Link to="/search" className="search-icon">
// 								<i data-feather="search" className="icon"></i>
// 							</Link>
// 						</div>
// 					</div>
// 				</div>
// 			</header>

// 			{/* Spacer برای جلوگیری از پوشاندن محتوا توسط هدر ثابت */}
// 			<div style={{ height: '70px' }}></div>
// 		</>
// 	);
// }