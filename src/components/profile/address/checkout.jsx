// src/components/profile/address/CheckOut.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAddress } from './AddressContext';

export default function CheckOut() {
    const [address, setAddress] = useState({
        name: '',
        phone: '',
        pin: '',
        address: '',
        locality: '',
        city: '',
        state: '',
    });

    const { addAddress } = useAddress(); // استفاده از addAddress از Context
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setAddress((prev) => ({ ...prev, [name]: value }));
    };

    const handleSave = () => {
        addAddress(address); // ذخیره آدرس جدید در Context
        navigate('/address'); // بازگشت به صفحه آدرس
    };

    return (
        <>
            <div className="page-wrapper">
                <header className="header shadow header-fixed border-0">
                    <div className="container">
                        <div className="header-content">
                            <div className="left-content">
                                <Link to="/address" className="back-btn">
                                    <i className="icon feather icon-chevron-left"></i>
                                </Link>
                                <h6 className="title">Add delivery address</h6>
                            </div>
                        </div>
                    </div>
                </header>
                <div className="page-content space-top p-b80">
                    <div className="container">
                        <h6 className="title font-w700 border-bottom pb-2 mb-3">Contact Details</h6>
                        <div className="mb-3">
                            <label className="form-label" for="name">Full Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                className="form-control"
                                placeholder="Type Your Name"
                                value={address.name}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label" for="phone">Mobile No.</label>
                            <input
                                type="number"
                                id="phone"
                                name="phone"
                                className="form-control"
                                placeholder="Type Your mobile no."
                                value={address.phone}
                                onChange={handleChange}
                            />
                        </div>

                        {/* آدرس و اطلاعات دیگر */}
                        <h6 className="title font-w700 border-bottom pb-2 mb-3">Address</h6>
                        <div className="mb-3">
                            <label className="form-label" for="pin">Pin Code</label>
                            <input
                                type="text"
                                id="pin"
                                name="pin"
                                className="form-control"
                                placeholder="Pin Code"
                                value={address.pin}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label" for="address">Address</label>
                            <input
                                type="text"
                                id="address"
                                name="address"
                                className="form-control"
                                placeholder="Address"
                                value={address.address}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label" for="location">Locality/Town</label>
                            <input
                                type="text"
                                id="location"
                                name="locality"
                                className="form-control"
                                placeholder="Locality/Town"
                                value={address.locality}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="row gx-3">
                            <div className="col-6">
                                <div className="mb-3">
                                    <label className="form-label" for="City">City/District</label>
                                    <input
                                        type="text"
                                        id="City"
                                        name="city"
                                        className="form-control"
                                        placeholder="City/District"
                                        value={address.city}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="mb-3">
                                    <label className="form-label" for="state">State</label>
                                    <input
                                        type="text"
                                        id="state"
                                        name="state"
                                        className="form-control"
                                        placeholder="State"
                                        value={address.state}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                        </div>

                        {/* ذخیره آدرس */}
                        <div className="footer fixed">
                            <div className="container">
                                <button className="btn btn-primary w-100" onClick={handleSave}>
                                    Save Address
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
