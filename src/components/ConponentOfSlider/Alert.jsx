import { Link } from "react-router-dom";

export default function Alert() {
  return (
    <div className="page-wrapper">
      <header className="header shadow header-fixed border-0 onepage">
        <div className="container">
          <div className="header-content">
            <div className="left-content">
              <Link to="/" className="back-btn">
                <i className="icon feather icon-chevron-left"></i>
              </Link>
              <h6 className="title">Alerts</h6>
            </div>
            <div className="mid-content"></div>
            <div className="right-content">
              <Link to="/search" className="search-icon">
                <i className="icon feather icon-more-vertical-"></i>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <div className="page-content space-top">
        <div className="container">
          <div 
            className="card dz-card style-1" 
            style={{backgroundImage: "url('/images/bg-shape.png')"}}
          >
            <div className="card-body">
              <div className="dz-media dz-flex-box">
                <img src="/images/bootstrap-logo.png" alt="Bootstrap Logo" />
              </div>
              <div className="dz-content">
                <h5 className="card-title">Bootstrap Elements</h5>
                <Link to="/contentArea" className="element-name scroll">
                  Alerts style
                </Link>
              </div>
              <span className="version">BS - v5.3</span>
            </div>
          </div>

          <div className="row" id="contentArea">
            {/* Default Alerts */}
            <div className="col-12">
              <div className="card">
                <div className="card-header">
                  <h5 className="card-title">Default Alert</h5>
                </div>
                <div className="card-body">
                  <div className="alert alert-primary alert-dismissible fade show">
                    <svg 
                      viewBox="0 0 24 24" 
                      width="20" 
                      height="20" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      fill="none" 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      className="me-2"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <path d="M8 14s1.5 2 4 2 4-2 4-2" />
                      <line x1="9" y1="9" x2="9.01" y2="9" />
                      <line x1="15" y1="9" x2="15.01" y2="9" />
                    </svg>
                    <strong>Welcome!</strong> Message has been sent.
                    <button 
                      type="button" 
                      className="btn-close" 
                      data-bs-dismiss="alert" 
                      aria-label="Close"
                    >
                      <span><i className="icon feather icon-x" /></span>
                    </button>
                  </div>

                  {/* Other alerts with same pattern */}
                  
                  <div className="alert alert-danger alert-dismissible fade show">
                    <svg 
                      viewBox="0 0 24 24" 
                      width="20" 
                      height="20" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      fill="none" 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      className="me-2"
                    >
                      <polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2" />
                      <line x1="15" y1="9" x2="9" y2="15" />
                      <line x1="9" y1="9" x2="15" y2="15" />
                    </svg>
                    <strong>Error!</strong> Message sending failed.
                    <button 
                      type="button" 
                      className="btn-close" 
                      data-bs-dismiss="alert" 
                      aria-label="Close"
                    >
                      <span><i className="icon feather icon-x" /></span>
                    </button>
                  </div>

                </div>
              </div>
            </div>

            {/* Solid Alerts */}
            <div className="col-12">
              <div className="card">
                <div className="card-header">
                  <h5 className="card-title">Solid Color Alerts</h5>
                </div>
                <div className="card-body">
                  <div className="alert alert-primary solid alert-dismissible fade show">
                    <svg 
                      viewBox="0 0 24 24" 
                      width="20" 
                      height="20" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      fill="none" 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      className="me-2"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <path d="M8 14s1.5 2 4 2 4-2 4-2" />
                      <line x1="9" y1="9" x2="9.01" y2="9" />
                      <line x1="15" y1="9" x2="15.01" y2="9" />
                    </svg>
                    <strong>Welcome!</strong> Message has been sent.
                    <button 
                      type="button" 
                      className="btn-close" 
                      data-bs-dismiss="alert" 
                      aria-label="Close"
                    >
                      <span><i className="icon feather icon-x" /></span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Alt Alerts */}
            <div className="col-12">
              <div className="card">
                <div className="card-header">
                  <h5 className="card-title">Alerts Alt</h5>
                </div>
                <div className="card-body">
                  <div className="alert alert-primary alert-dismissible alert-alt fade show">
                    <button 
                      type="button" 
                      className="btn-close" 
                      data-bs-dismiss="alert" 
                      aria-label="Close"
                    >
                      <span><i className="icon feather icon-x" /></span>
                    </button>
                    <strong>Success!</strong> Message has been sent.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}