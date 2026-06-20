# Weather App

React weather application developed as a weekly frontend project during the Epicode Full-Stack Development program.

The goal of the project was to build a weather app that allows users to search for a city and view current weather information and forecasts using the OpenWeather API.

## Project overview

This application allows users to:

* search for a city;
* view current weather information;
* access forecast details for the following days;
* navigate from a search/home page to a city detail page;
* interact with a responsive weather-focused interface.

## Tech stack

* React
* Vite
* JavaScript
* HTML5
* CSS3
* OpenWeather API

## Main features

* City search
* Current weather display
* Forecast details
* Dedicated detail page for selected city
* API-based data fetching
* Responsive layout

## API

The project uses the OpenWeather API:

```text
https://openweathermap.org/api
```

An API key is required to run the project locally.

## Local setup

1. Clone the repository:

```bash
git clone https://github.com/Samuel-Valentini/U3-W2-D5-p.git
cd U3-W2-D5-p
```

2. Install dependencies:

```bash
npm install
```

3. Configure the OpenWeather API key.

Create a local environment file if required by the project configuration and add your API key according to the variable name used in the source code.

Example:

```env
VITE_OPENWEATHER_API_KEY=your_api_key_here
```

4. Start the development server:

```bash
npm run dev
```

## Notes

This project was completed as a weekly frontend assignment during the Epicode Full-Stack Development program.

Although it was part of a weekly module, the assignment was designed to be completed within a single working day, during course hours.

The focus was on applying the concepts studied during the week and delivering a working project under time constraints.

The assignment focused on React, API integration, routing between pages and weather data visualization.
