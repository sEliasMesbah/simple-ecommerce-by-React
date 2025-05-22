// AddressContext.js
import { createContext, useState, useEffect, useContext } from 'react';

const AddressContext = createContext();

export const AddressProvider = ({ children }) => {
  const storedAddresses = JSON.parse(localStorage.getItem('addresses')) || [];
  const [addresses, setAddresses] = useState(storedAddresses);

  useEffect(() => {
    localStorage.setItem('addresses', JSON.stringify(addresses));
  }, [addresses]);

  const addAddress = (newAddress) => setAddresses([...addresses, newAddress]);

  const removeAddress = (index) => {
    setAddresses(addresses.filter((_, i) => i !== index));
  };

  const editAddress = (index, updatedAddress) => {
    setAddresses(addresses.map((addr, i) => (i === index ? updatedAddress : addr)));
  };

  return (
    <AddressContext.Provider value={{ addresses, addAddress, removeAddress, editAddress }}>
      {children}
    </AddressContext.Provider>
  );
};

export const useAddress = () => useContext(AddressContext);
