import { useState, useEffect } from "react";

const mockCheckAuth = () => {
  const token = localStorage.getItem("authToken");
  return !!token;
};

export const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  useEffect(() => {
    const authStatus = mockCheckAuth();
    setIsAuthenticated(authStatus);
  }, []);

  return { isAuthenticated };
};

export default useAuth;
