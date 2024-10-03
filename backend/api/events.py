"""Contains the API endpoints for the events resource."""

import json

from fastapi import APIRouter

router = APIRouter()


@router.get("/events")
def read_events():
    """Read all events."""
    with open("mock_data/events.json") as file:
        events_dict = json.load(file)
        events = events_dict["events"]
    return events
