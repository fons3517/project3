export const getMe = (token) => {
  return fetch("/api/users/me", {
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  });
};

export const createUser = (userData) => {
  return fetch("/api/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });
};

export const loginUser = (userData) => {
  return fetch("/api/users/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });
};
export const searchTrailApi = (lat, lon) => {
  return fetch(
    `https://trailapi-trailapi.p.rapidapi.com/trails/explore/?lat${lat}=&lon=${lon}`,
    {
      method: "GET",
      headers: {
        "x-rapidapi-host": "trailapi-trailapi.p.rapidapi.com",
        "x-rapidapi-key": `${process.env.trailkey}`,
      },
    }
  );
};
