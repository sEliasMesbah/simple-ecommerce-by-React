import { createContext, useState, useEffect, useContext } from 'react';

// ایجاد Context
const AddressContext = createContext();

export const AddressProvider = ({ children }) => {
  // بازیابی داده‌ها از localStorage در ابتدا
  const storedAddresses = JSON.parse(localStorage.getItem('addresses')) || [];

  const [addresses, setAddresses] = useState(storedAddresses);

  // وقتی آدرس‌ها تغییر می‌کنند، آن‌ها را در localStorage ذخیره کن
  useEffect(() => {
    localStorage.setItem('addresses', JSON.stringify(addresses));
  }, [addresses]);

  // افزودن آدرس جدید
  const addAddress = (newAddress) => {
    setAddresses([...addresses, newAddress]);
  };

  // حذف آدرس
  const removeAddress = (index) => {
    const updatedAddresses = addresses.filter((_, i) => i !== index);
    setAddresses(updatedAddresses);
  };

  // ویرایش آدرس
  const editAddress = (index, updatedAddress) => {
    const updatedAddresses = addresses.map((address, i) =>
      i === index ? updatedAddress : address
    );
    setAddresses(updatedAddresses);
  };

  return (
    <AddressContext.Provider value={{ addresses, addAddress, removeAddress, editAddress }}>
      {children}
    </AddressContext.Provider>
  );
};

// هوک استفاده از Context
export const useAddress = () => useContext(AddressContext);
