

# URL_SHORTENER

A simple URL Shortener service built using Node.js, Express, and MongoDB. This project provides a basic URL shortening service where users can submit long URLs and get back a shorter, easier-to-share version. The service also redirects users when they visit a shortened URL.

## Features

- Shortens long URLs.
- Redirects shortened URLs to the original long URL.
- Tracks the number of visits to each shortened URL.
- Simple RESTful API for URL shortening and redirection.

## Technologies Used
- Node.js - JavaScript runtime for building scalable network applications.
- Express.js - Fast, unopinionated, minimalist web framework for Node.js.
- MongoDB - NoSQL database for storing URL mappings.
- Mongoose - MongoDB object modeling tool for Node.js.
- dotenv - Module to load environment variables from a .env file into process.env.

# API Endpoints

## POST /url
- `POST /url`: The POST /url route in your URL Shortener application is responsible for creating a new shortened URL. When a user submits a long URL, this route will generate a unique short code (or urlCode), save the long URL with its corresponding short URL to the database, and return the shortened URL.
  ```
   {
      "longUrl": "https://www.example.com"
   }

## Get /analytics/:shortId
- `Get /analytics/:shortId`: To implement the GET /analytics/:shortId endpoint for your URL Shortener, you would want to provide analytics for each shortened URL based on its shortId (or urlCode). This could include information such as:

- The total number of clicks (redirects) on that shortened URL.
- The original long URL.
- The creation date of the shortened URL.

## Get /:shortId
- Get /:shortId : The GET /:shortId route in your URL Shortener application is responsible for redirecting a user from a shortened URL to the original long URL. When a user visits the shortened URL (e.g., http://localhost:5000/abcdef), this route should look up the shortId (or urlCode) in the database, retrieve the corresponding long URL, increment the click count, and then redirect the user.
