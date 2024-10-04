"""Entry module for our FastAPI app."""

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from backend.api import events, trails

app = FastAPI()


origins = [
    "http://localhost:5173",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(events.router, prefix="/api/events")
app.include_router(trails.router, prefix="/api/trails")
