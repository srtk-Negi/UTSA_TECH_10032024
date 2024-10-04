# Outdoor Events and Trails Showcase

## Overview

Welcome to the Trail Blazers Showcase! This application is designed to display the various events that our company will be hosting, along with detailed information about the different trails available for outdoor enthusiasts. Users can explore exciting events and trails, making it easy to plan their next adventure.

## Tech Stack

This application is built using the following technologies:

- **Frontend**: React with Vite
- **Backend**: FastAPI with Uvicorn
- **Containerization**: Docker

## Features

- **Event Showcase**: View upcoming events hosted by the company.
- **Trail Information**: Access details about various trails for outdoor activities.
- **Interactive Navigation**: Easily navigate through events and trails using dynamic URLs.

## Navigation

To navigate the application, simply modify the URL in your browser:

- For events, append `/events` to the base URL.
- For trails, append `/trails` to the base URL.

For example:

- `http://localhost:5173/events`
- `http://localhost:5173/trails`

## Running the Application

To run this application locally, follow these steps:

### Prerequisites

1. Ensure you have [Docker](https://www.docker.com/get-started) and [Docker Compose](https://docs.docker.com/compose/install/) installed on your machine.

### Steps

1. **Clone the repository**:

   ```bash
   git clone <repository-url>
   cd <repository-directory>
   ```

2. Make the run.sh script executable:

   ```bash
   chmod +x run.sh
   ```

3. Run the application:

   ```bash
   ./run.sh
   ```

The `run.sh` script is designed to automate the process of building and running your application in Docker containers. Here’s a breakdown of what each part of the script does
