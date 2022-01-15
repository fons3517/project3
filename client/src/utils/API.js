

export const getMe = (token) => {
  return fetch("/api/users/me", {
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`
    }
  });
};

export const createUser = (userData) => {
  return fetch("/api/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(userData)
  });
};

export const loginUser = (userData) => {
  return fetch("/api/users/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(userData)
  });
};

export const locationApi = (searchInput) => {
  return fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${searchInput}&appid=${process.env.REACT_APP_WAPI}`
  );
};

export const searchTrailApi = (latLocation, lonLocation) => {
  return fetch(
    `https://trailapi-trailapi.p.rapidapi.com/trails/explore/?lat=${latLocation}&lon=+${lonLocation}`,
    {
      method: "GET",
      headers: {
        "x-rapidapi-host": "trailapi-trailapi.p.rapidapi.com",
        "x-rapidapi-key": process.env.REACT_APP_HTAPI
      }
    }
  )
};
