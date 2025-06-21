import { useState } from "react";
import { authService, LoginCredentials } from "@/services/authService";
import { LoginResponse } from "@/types/Auth";
import { User } from "@/types/User";

export function useAuth() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const login = async (credentials: LoginCredentials): Promise<LoginResponse | null> => {
    setLoading(true);
    setError(null);
    try {
      return await authService.login(credentials);
    } catch (err: any) {
      setError(err?.response?.data?.message || "Login failed");
      return null;
    } finally {
      setLoading(false);
    }
  };

  const fetchCurrentUser = async (): Promise<User | null> => {
    setLoading(true);
    setError(null);
    try {
      return await authService.fetchCurrentUser();
    } catch (err: any) {
      setError("Failed to fetch user");
      return null;
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  };

  return {
    login,
    fetchCurrentUser,
    logout,
    loading,
    error,
  };
}
