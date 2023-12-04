from typing import Generator, List
from fastapi import APIRouter, Form, File
from fastapi.responses import StreamingResponse
from pydantic import BaseModel


router = APIRouter(prefix="/users")


class ReadUserResponse(BaseModel):
    user_id: int
    name: str


@router.get(
    path="/{user_id}",
    description="""
    A function that reads a user based on the provided user ID.

    Parameters:
        user_id (int): The ID of the user.

    Returns:
        ReadUserResponse: The response containing the user ID and name.
    """,
)
def read_user(user_id: int) -> ReadUserResponse:
    return {"user_id": user_id, "name": "test"}


class Message(BaseModel):
    id: str
    text: str
    file_url: str


class ReadUserMessagesResponse(BaseModel):
    messages: List[Message]


@router.get(
    path="/{user_id}/messages",
    description="""
    Read user messages.

    Args:
        user_id (int): The ID of the user.

    Returns:
        ReadUserMessagesResponse: An instance of the ReadUserMessagesResponse
            class containing the user messages.

    Raises:
        None.

    Description:
        This function is used to read user messages. It takes the user ID as
        input and returns an instance of the ReadUserMessagesResponse class
        containing the user messages.
    """,
)
def read_user_messages(user_id: int) -> ReadUserMessagesResponse:
    # TODO: implement read user messages
    return ReadUserMessagesResponse(
        messages=[Message(id="dsadd", text="test", file_url="test")]
    )


class CreateUserMessageInput(BaseModel):
    id: str
    text: str
    file_url: str


@router.post(
    path="/{user_id}/messages",
    description="""
    Create a new message for a user.

    Args:
        user_id (int): The ID of the user.
        input (CreateUserMessageInput): The input data for creating the user message.

    Returns:
        ReadUserMessagesResponse: The response containing the user's updated messages.
    """,
)
def create_user_message(
    user_id: int, input=CreateUserMessageInput
) -> ReadUserMessagesResponse:
    # TODO: implement create user message
    return ReadUserMessagesResponse(
        messages=[Message(id=1, text="test", file_url="test")]
    )


@router.get(
    path="/{user_id}/messages/subscribe",
    description="""
    Subscribe to user messages.

    This function subscribes to user messages for a given user ID. It returns a generator that yields messages as they are received.

    :param user_id: The ID of the user to subscribe to messages.
    :type user_id: int
    :return: A generator that yields Message objects.
    :rtype: Generator[Message, None, None]
    """,
)
def subscribe_user_messages(user_id: int) -> Generator[Message, None, None]:
    def gen():
        # TODO: implement subscribe user messages
        messages = []
        for message in messages:
            yield message

    return StreamingResponse(gen(), media_type="text/event-stream")


class SaveUserItineraryInput(BaseModel):
    content: str


class SaveUserItineraryResponse(BaseModel):
    status: int
    success: bool
    itinerary_id: str


@router.post(
    path="/{user_id}/itineraries",
    description="""
    Saves a user's itinerary.

    Args:
        user_id (int): The ID of the user.
        input (SaveUserItineraryInput): The input data for saving the user's itinerary.

    Returns:
        SaveUserItineraryResponse: The response containing the status, success flag, and itinerary ID.
    """,
)
def save_user_itinerary(
    user_id: int, input=SaveUserItineraryInput
) -> SaveUserItineraryResponse:
    # TODO: implement save user itinerary
    return SaveUserItineraryResponse(status=200, success=True, itinerary_id="test")


class SaveUserLocationInput(BaseModel):
    latitude: float
    longitude: float


class SaveUserLocationResponse(BaseModel):
    status: int
    success: bool


@router.post(
    path="/{user_id}/locations",
    description="""
    Save a user's location.

    Args:
        user_id (int): The ID of the user.
        input (SaveUserLocationInput): The input data for saving the user's location.

    Returns:
        SaveUserItineraryResponse: The response object indicating the status and success of saving the user's location.
    """,
)
def save_user_location(
    user_id: int, input=SaveUserLocationInput
) -> SaveUserItineraryResponse:
    # TODO: implement save user location

    return SaveUserLocationResponse(status=200, success=True)