export default function CheckOut() {
    return <>
        <div className="page-wrapper">

            <header className="header shadow header-fixed border-0">
                <div className="container">
                    <div className="header-content">
                        <div className="left-content">
                            <a href="javascript:void(0);" className="back-btn">
                                <i className="icon feather icon-chevron-left"></i>
                            </a>
                            <h6 className="title">Add delivery address</h6>
                        </div>
                        <div className="mid-content">
                        </div>
                        <div className="right-content">
                        </div>
                    </div>
                </div>
            </header>
            <div className="page-content space-top p-b80">
                <div className="container">
                    <h6 className="title font-w700 border-bottom pb-2 mb-3">Contact Details</h6>
                    <div className="mb-3">
                        <label className="form-label" for="name">Full Name</label>
                        <input type="text" id="name" className="form-control" placeholder="Type Your Name" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label" for="phone">Mobile No.</label>
                        <input type="number" id="phone" className="form-control" placeholder="Type Your mobile no." />
                    </div>

                    <h6 className="title font-w700 border-bottom pb-2 mb-3">Address</h6>
                    <div className="mb-3">
                        <label className="form-label" for="pin Code">Pin Code</label>
                        <input type="text" id="pin" className="form-control" placeholder="Pin Code" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label" for="address">Address</label>
                        <input type="text" id="address" className="form-control" placeholder="Address " />
                    </div>
                    <div className="mb-3">
                        <label className="form-label" for="location">Locality/Town</label>
                        <input type="text" id="location" className="form-control" placeholder="Locality/Town" />
                    </div>
                    <div className="row gx-3">
                        <div className="col-6">
                            <div className="mb-3">
                                <label className="form-label" for="City">City/District</label>
                                <input type="text" id="City" className="form-control" placeholder="City/District" />
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="mb-3">
                                <label className="form-label" for="state">State</label>
                                <input type="text" id="state" className="form-control" placeholder="State" />
                            </div>
                        </div>
                    </div>
                    <h6 className="title font-w700 border-bottom pb-2 mb-3">Save Address As</h6>
                    <div className="confirm-address">
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="confirmAddress" id="confirmAddress1" />
                            <label className="form-check-label" for="confirmAddress1">
                                Home
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="confirmAddress" id="confirmAddress2" checked />
                            <label className="form-check-label" for="confirmAddress2">
                                Work
                            </label>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer fixed">
                <div className="container">
                    <a href="payment.html" className="btn btn-primary w-100">Save Address</a>
                </div>
            </div>

        </div>
    </>
}