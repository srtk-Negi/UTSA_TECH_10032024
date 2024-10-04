"""Contains the API routes for the trails endpoint."""

import json
import random

from fastapi import APIRouter

router = APIRouter()


@router.get("/trails")
def read_trails():
    """Return a random trail from the mock data."""
    with open("mock_data/trails.json") as file:
        trails_dict = json.load(file)
        random_trail = random.choice(trails_dict)
    return random_trail
