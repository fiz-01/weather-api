# Weather API

A simple Node.js REST API to retrieve real-time weather data using OpenWeatherMap. The project is containerized with Docker and configured with CI/CD via GitHub Actions.

---

## Features

- Fetch current weather by city
- Health check endpoint
- Environment-based API key handling
- Docker support
- GitHub Actions for automated build and deployment

---

## Getting Started

### Prerequisites

- Node.js (v18+)
- Docker
- OpenWeatherMap API key

---

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/fiz-01/weather-api.git
    cd weather-api
    ```

2. Create a `.env` file in the root directory:
    ```env
    API_KEY=your_openweathermap_api_key
    ```

3. Install dependencies:
    ```bash
    npm install
    ```

4. Run the application:
    ```bash
    node src/app.js
    ```

The server will start at `http://localhost:3000`.

---

## API Endpoints

### `GET /weather?city=CityName`

Returns current weather information for the given city.

**Example:**
```bash
curl "http://localhost:3000/weather?city=Dhaka"
```

**Response:**
```json
{
  "city": "Dhaka",
  "temperature": 30.03,
  "condition": "moderate rain",
  "humidity": 74
}
```

---

### `GET /health`

Health check endpoint.

**Response:**
```json
{
  "status": "ok"
}
```

---

## Environment Variables

Create a `.env` file with the following variable:

| Variable   | Description                     |
|------------|---------------------------------|
| `API_KEY`  | Your OpenWeatherMap API key     |

> Do not commit your `.env` file. Use `.env.example` for structure and documentation.

---

## Docker

### Build the Docker image:
```bash
docker build -t mostafiz01/weather-api:latest .
```

### Run the container:
```bash
docker run -d --name weather-api-img --env-file .env -p 3000:3000 mostafiz01/weather-api:latest
```

API will be available at `http://localhost:3000`.

---

## CI/CD with GitHub Actions

This project uses GitHub Actions to:

- Build the Docker image
- Push to Docker Hub on every push to the `main` branch

### Required GitHub Secrets:

| Secret Name      | Description               |
|------------------|---------------------------|
| `DOCKER_USERNAME`| Your Docker Hub username  |
| `DOCKER_TOKEN`   | Docker Hub access token   |

---


## License

N/A