const BASE_URL =
  "https://linkzen-backend-2.onrender.com/api/v1/url";

export const createShortUrl = async (payload) => {

  const response = await fetch(
    `${BASE_URL}/shorten`,
    {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(payload),
    }
  );

  const data = await response.json();

  if (!response.ok) {

    const firstError =
      Object.values(data)[0];

    throw new Error(firstError);
  }

  return data;
};

export const getUrlStats = async (shortCode) => {

  const response = await fetch(
    `${BASE_URL}/stats/${shortCode}`
  );

  const data = await response.json();

  if (!response.ok) {

    throw new Error(
      "Failed to fetch stats"
    );
  }

  return data;
};

export const getAllUrls = async () => {

  const response = await fetch(
    `${BASE_URL}/all`
  );

  const data = await response.json();

  if (!response.ok) {

    throw new Error(
      "Failed to fetch URLs"
    );
  }

  return data;
};