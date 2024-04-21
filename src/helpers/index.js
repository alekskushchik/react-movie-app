const BASE_URL = "https://api.themoviedb.org/3/";

export const getApiConfig = (url = BASE_URL) => {
  return {
    baseUrl: url,
    prepareHeaders: (headers) => {
      headers.append("Authorization", `Bearer ${import.meta.env.VITE_AUTHORIZATION_KEY}`);
      headers.append("accept", "application/json");
    },
  };
};

export const convertToHoursMinutes = (minutes) => {
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;
  return { hours, remainingMinutes };
};
