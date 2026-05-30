const BASE_URL =
  "https://linkzen-backend-2.onrender.com/api/v1/url";

export const createShortUrl = async (payload) => {

  const token =
    localStorage.getItem("token");

  const response = await fetch(
    `${BASE_URL}/shorten`,
    {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
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

  const token =
    localStorage.getItem("token");

  const response = await fetch(
    `${BASE_URL}/stats/${shortCode}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
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

  const token =
    localStorage.getItem("token");

  const response = await fetch(
    `${BASE_URL}/all`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  const data = await response.json();

  if (!response.ok) {

    throw new Error(
      "Failed to fetch URLs"
    );
  }

  return data;
};

export const deleteUrl = async (
  shortCode
) => {

  const token =
    localStorage.getItem("token");

  const response = await fetch(
    `${BASE_URL}/${shortCode}`,
    {
      method: "DELETE",

      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  if (!response.ok) {

    throw new Error(
      "Failed to delete URL"
    );
  }

  return await response.text();
};

export const updateExpiry = async (
  shortCode,
  expiryInDays
) => {

  const token =
    localStorage.getItem("token");

  const response = await fetch(
    `${BASE_URL}/${shortCode}/expiry`,
    {
      method: "PUT",

      headers: {
        "Content-Type":
          "application/json",

        Authorization:
          `Bearer ${token}`,
      },

      body: JSON.stringify({
        expiryInDays,
      }),
    }
  );

  const data =
    await response.json();

  if (!response.ok) {

    throw new Error(
      "Failed to update expiry"
    );
  }

  return data;
};


export const getAnalytics = async () => {

  const token =
    localStorage.getItem("token");

  const response = await fetch(
    `${BASE_URL}/analytics`,
    {
      headers: {
        Authorization:
          `Bearer ${token}`,
      },
    }
  );

  const data =
    await response.json();

  if (!response.ok) {

    throw new Error(
      "Failed to fetch analytics"
    );
  }

  return data;
};

export const getUrlAnalytics = async (
  shortCode
) => {

  const token =
    localStorage.getItem("token");

  const response = await fetch(
    `${BASE_URL}/analytics/${shortCode}`,
    {
      headers: {
        Authorization:
          `Bearer ${token}`,
      },
    }
  );

  const data =
    await response.json();

  if (!response.ok) {

    throw new Error(
      "Failed to fetch URL analytics"
    );
  }

  return data;
};