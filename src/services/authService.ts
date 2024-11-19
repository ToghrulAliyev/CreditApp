// services/authService.ts
export const login = async (username: string, password: string) => {
  try {
    const response = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });

    if (!response.ok) {
      throw new Error("Login failed!");
    }

    const data = await response.json();
    const token = data.token;

    localStorage.setItem("authToken", token);

    return { success: true };
  } catch (error) {
    console.error("Unknown error:", error);
    return { success: false, error: "An unexpected error occurred" };
  }
};
