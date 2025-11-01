import { useAddress } from "./AddressContext";
import { Link } from "react-router-dom";

export default function Address() {
    const { addresses, removeAddress, editAddress } = useAddress();

    // ویرایش آدرس
    const handleEdit = (index) => {
        const newAddress = prompt("Enter the new address:", addresses[index].address);
        if (newAddress) {
            // اگر آدرس جدید وارد شد، آن را به‌روز می‌کنیم
            editAddress(index, { ...addresses[index], address: newAddress });
        }
    };

    
    

    // حذف آدرس
    const handleRemove = (index) => {
        if (window.confirm("Are you sure you want to remove this address?")) {
            removeAddress(index);
        }
    };

    return (
        <div className="page-wrapper">
            <header className="header shadow header-fixed border-0">
                <div className="container">
                    <div className="header-content">
                        <div className="left-content">
                            <Link to="/profile" className="back-btn">
                                <i className="icon feather icon-chevron-left"></i>
                            </Link>
                            <h6 className="title">Address</h6>
                        </div>
                        <div className="mid-content"></div>
                        <div className="right-content"></div>
                    </div>
                </div>
            </header>

            <div className="page-content space-top p-b80">
                <div className="container hovering">
                    <Link to="/checkout" className="btn btn-outline-primary btn-block mb-3">
                        + Add New Address
                    </Link>

                    <h6 className="title">Default Address</h6>

                    {/* نمایش آدرس‌ها */}
                    {addresses.length > 0 ? (
                        addresses.map((address, index) => (
                            <div key={index} className="card address-card">
                                <div className="card-header border-0">
                                    <span className="name text-secondary font-w500">{address.name}</span>
                                    <div className="badge badge-primary">OFFICE</div>
                                </div>
                                <div className="card-body">
                                    <ul>
                                        <li>{address.street}</li>
                                        <li>{address.city}</li>
                                        <li>{address.state}</li>
                                        <li>{address.zipCode}</li>
                                    </ul>
                                    <span>Mobile: {address.mobile}</span>
                                </div>
                                <div className="card-footer">
                                    <button
                                        className="footer-link text-danger"
                                        onClick={() => handleRemove(index)}
                                    >
                                        Remove
                                    </button>
                                    <button
                                        className="footer-link"
                                        onClick={() => handleEdit(index)}
                                    >
                                        Edit
                                    </button>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p>No addresses available.</p>
                    )}
                </div>
            </div>
        </div>
    );
}
