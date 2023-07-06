const isDevelopment = process.env.NODE_ENV === "development";

const urlConfigs = {
  development: "https://spotify23.p.rapidapi.com/",
  production: "https://spotify23.p.rapidapi.com/",
};

export default urlConfigs[isDevelopment ? "development" : "production"];
