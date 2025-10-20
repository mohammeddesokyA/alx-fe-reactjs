export const useAuth = () => {
  const user = { loggedIn: true }; // غيّرها حسب الحالة
  return user && user.loggedIn;
};
