require("dotenv").config();
console.log("API_KEY:", process.env.API_KEY);
const express = require("express");
const axios = require("axios");

const app = express();
const PORT = 3000;

app.get("/weather", async (req, res) => {
  const city = req.query.city;
  if (!city) return res.status(400).json({ error: "City is required" });

  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.API_KEY}&units=metric`
    );

    const data = response.data;
    res.json({
      city: data.name,
      temperature: data.main.temp,
      condition: data.weather[0].description,
      humidity: data.main.humidity,
    });
} catch (err) {
  console.error(err.response?.data || err.message);
  res.status(500).json({ error: "Error fetching weather data" });
}
});

app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
