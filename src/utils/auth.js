export const getUserFromStorage = () => {
  const user = localStorage.getItem('user');
  return user ? JSON.parse(user) : null;
};

export const isAdmin = () => {
  const user = getUserFromStorage();
  return user?.role === 'admin';
};