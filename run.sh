#!/bin/bash

docker-compose up --build
sleep 10
BACKEND_RESPONSE=$(curl -s -o /dev/null -w "%{http_code}" http://localhost:8000/api/events/events)

if [ "$BACKEND_RESPONSE" -eq 200 ]; then
    echo "FastAPI backend is running successfully."
else
    echo "Failed to start FastAPI backend."
    exit 1
fi


FRONTEND_RESPONSE=$(curl -s -o /dev/null -w "%{http_code}" http://localhost:5173)

if [ "$FRONTEND_RESPONSE" -eq 200 ]; then
    echo "React frontend is running successfully."
else
    echo "Failed to start React frontend."
    exit 1
fi

echo "Both services started successfully!"
