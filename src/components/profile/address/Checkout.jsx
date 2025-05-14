export default function CheckOut() {
    return (
        <>
            <div class="page-wrapper">
                <header class="header shadow header-fixed border-0">
                    <div class="container">
                        <div class="header-content">
                            <div class="left-content">
                                <a href="javascript:void(0);" class="back-btn">
                                    <i class="icon feather icon-chevron-left"></i>
                                </a>
                                <h6 class="title">Add delivery address</h6>
                            </div>
                            <div class="mid-content">
                            </div>
                            <div class="right-content">
                            </div>
                        </div>
                    </div>
                </header>

                <div class="page-content space-top p-b80">
                    <div class="container">
                        <h6 class="title font-w700 border-bottom pb-2 mb-3">Contact Details</h6>
                        <div class="mb-3">
                            <label class="form-label" for="name">Full Name</label>
                            <input type="text" id="name" class="form-control" placeholder="Type Your Name" />
                        </div>
                        <div class="mb-3">
                            <label class="form-label" for="phone">Mobile No.</label>
                            <input type="number" id="phone" class="form-control" placeholder="Type Your mobile no." />
                        </div>

                        <h6 class="title font-w700 border-bottom pb-2 mb-3">Address</h6>
                        <div class="mb-3">
                            <label class="form-label" for="pin Code">Pin Code</label>
                            <input type="text" id="pin" class="form-control" placeholder="Pin Code" />
                        </div>
                        <div class="mb-3">
                            <label class="form-label" for="address">Address</label>
                            <input type="text" id="address" class="form-control" placeholder="Address" />
                        </div>
                        <div class="mb-3">
                            <label class="form-label" for="location">Locality/Town</label>
                            <input type="text" id="location" class="form-control" placeholder="Locality/Town" />
                        </div>
                        <div class="row gx-3">
                            <div class="col-6">
                                <div class="mb-3">
                                    <label class="form-label" for="City">City/District</label>
                                    <input type="text" id="City" class="form-control" placeholder="City/District" />
                                </div>
                            </div>
                            <div class="col-6">
                                <div class="mb-3">
                                    <label class="form-label" for="state">State</label>
                                    <input type="text" id="state" class="form-control" placeholder="State" />
                                </div>
                            </div>
                        </div>
                        <h6 class="title font-w700 border-bottom pb-2 mb-3">Save Address As</h6>
                        <div class="confirm-address">
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="confirmAddress" id="confirmAddress1" />
                                <label class="form-check-label" for="confirmAddress1">
                                    Home
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="confirmAddress" id="confirmAddress2" checked />
                                <label class="form-check-label" for="confirmAddress2">
                                    Work
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="footer fixed">
                    <div class="container">
                        <a href="payment.html" class="btn btn-primary w-100">Save Address</a>
                    </div>
                </div>
            </div>
        </>
    )
}