const BASE_URL =
  "https://linkzen-backend-2.onrender.com/api/v1/auth";

export const signupUser = async (userData) => {

  const response = await fetch(
    `${BASE_URL}/signup`,
    {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(userData),
    }
  );

  const data = await response.json();

  if (!response.ok) {

    throw new Error(
      data.message || "Signup failed"
    );
  }

  return data;
};

export const loginUser = async (userData) => {

  const response = await fetch(
    `${BASE_URL}/login`,
    {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(userData),
    }
  );

  const data = await response.json();

  if (!response.ok) {

    throw new Error(
      data.message || "Login failed"
    );
  }

  return data;
};