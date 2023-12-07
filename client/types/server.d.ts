/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */


export interface paths {
  "/itineraries/{itinerary_id}": {
    /** Read Itinerary */
    get: operations["read_itinerary_itineraries__itinerary_id__get"];
  };
  "/users/{user_id}": {
    /**
     * Read User
     * @description A function that reads a user based on the provided user ID.
     *
     *     Parameters:
     *         user_id (int): The ID of the user.
     *
     *     Returns:
     *         ReadUserResponse: The response containing the user ID and name.
     */
    get: operations["read_user_users__user_id__get"];
  };
  "/users/{user_id}/trips/{trip_id}/messages": {
    /**
     * Read User Messages
     * @description Read user messages.
     *
     *     Args:
     *         user_id (int): The ID of the user.
     *
     *     Returns:
     *         ReadUserMessagesResponse: An instance of the ReadUserMessagesResponse
     *             class containing the user messages.
     *
     *     Raises:
     *         None.
     *
     *     Description:
     *         This function is used to read user messages. It takes the user ID as
     *         input and returns an instance of the ReadUserMessagesResponse class
     *         containing the user messages.
     */
    get: operations["read_user_messages_users__user_id__trips__trip_id__messages_get"];
    /**
     * Create User Message
     * @description Create a new message for a user.
     *
     *     Args:
     *         user_id (int): The ID of the user.
     *         input (CreateUserMessageInput): The input data for creating the user message.
     *
     *     Returns:
     *         ReadUserMessagesResponse: The response containing the user's updated messages.
     */
    post: operations["create_user_message_users__user_id__trips__trip_id__messages_post"];
  };
  "/users/{user_id}/trips": {
    /**
     * Read User Trips
     * @description Read trips that belong to a user
     */
    get: operations["read_user_trips_users__user_id__trips_get"];
    /**
     * Create User Trip
     * @description Create a new trip for a user
     */
    post: operations["create_user_trip_users__user_id__trips_post"];
  };
  "/users/{user_id}/trips/{trip_id}/messages/subscribe": {
    /**
     * Subscribe User Messages
     * @description Subscribe to user messages.
     *
     *     This function subscribes to user messages for a given user ID. It returns a generator that yields messages as they are received.
     *
     *     :param user_id: The ID of the user to subscribe to messages.
     *     :type user_id: int
     *     :return: A generator that yields Message objects.
     *     :rtype: Generator[Message, None, None]
     */
    get: operations["subscribe_user_messages_users__user_id__trips__trip_id__messages_subscribe_get"];
  };
  "/trips/{trip_id}/itineraries": {
    /**
     * Read Trip Itineraries
     * @description Get a itinerary from a trip
     */
    get: operations["read_trip_itineraries_trips__trip_id__itineraries_get"];
  };
  "/": {
    /** Read Root */
    get: operations["read_root__get"];
  };
}

export type webhooks = Record<string, never>;

export interface components {
  schemas: {
    /** CreateUserMessageInput */
    CreateUserMessageInput: {
      /** Text */
      text?: string;
      /** File Url */
      file_url?: string;
    };
    /** CreateUserMessageResponse */
    CreateUserMessageResponse: {
      /** Success */
      success: boolean;
      /** Code */
      code: number;
    };
    /** CreateUserTripResponse */
    CreateUserTripResponse: {
      /** Success */
      success: boolean;
      /** Code */
      code: number;
      /** Tripid */
      tripId: string;
    };
    /** HTTPValidationError */
    HTTPValidationError: {
      /** Detail */
      detail?: components["schemas"]["ValidationError"][];
    };
    /**
     * Place
     * @description Represents a Place record
     */
    Place: {
      /** Id */
      id: string;
      /**
       * Createdat
       * Format: date-time
       */
      createdAt: string;
      /**
       * Updatedat
       * Format: date-time
       */
      updatedAt: string;
      reviews?: components["schemas"]["Review"];
      Trip?: components["schemas"]["Trip"];
      /** Tripid */
      tripId?: string;
      /** Reviewid */
      reviewId: string;
    };
    /** ReadTripItinerariesResponse */
    ReadTripItinerariesResponse: {
      /** Itineraries */
      itineraries: components["schemas"]["typings__index__Itinerary"][];
      /** Trip Id */
      trip_id: string;
    };
    /** ReadUserMessagesResponse */
    ReadUserMessagesResponse: {
      /** Messages */
      messages: components["schemas"]["typings__index__Message"][];
    };
    /** ReadUserResponse */
    ReadUserResponse: {
      /** User Id */
      user_id: string;
      /** Name */
      name: string;
    };
    /** ReadUserTripsResponse */
    ReadUserTripsResponse: {
      /** Trips */
      trips: components["schemas"]["Trip"][];
    };
    /**
     * Review
     * @description Represents a Review record
     */
    Review: {
      /** Id */
      id: string;
      /**
       * Createdat
       * Format: date-time
       */
      createdAt: string;
      /**
       * Updatedat
       * Format: date-time
       */
      updatedAt: string;
      by?: components["schemas"]["User"];
      /** Rating */
      rating: number;
      /** Content */
      content?: string;
      /** Place */
      Place?: components["schemas"]["Place"][];
      /** Userid */
      userId: string;
    };
    /**
     * Trip
     * @description Represents a Trip record
     */
    Trip: {
      /** Id */
      id: string;
      /**
       * Createdat
       * Format: date-time
       */
      createdAt: string;
      /**
       * Updatedat
       * Format: date-time
       */
      updatedAt: string;
      /** Destination */
      destination?: string;
      /**
       * Startdate
       * Format: date-time
       */
      startDate?: string;
      /**
       * Enddate
       * Format: date-time
       */
      endDate?: string;
      itinerary?: components["schemas"]["prisma__models__Itinerary"];
      /** Purpose */
      purpose?: string;
      /** Budget */
      budget?: string;
      /** Places */
      places?: components["schemas"]["Place"][];
      createdBy?: components["schemas"]["User"];
      /** Userid */
      userId?: string;
      /** Messages */
      messages?: components["schemas"]["prisma__models__Message"][];
      /** Itineraryid */
      itineraryId?: string;
      /** Imageurl */
      imageUrl?: string;
    };
    /**
     * User
     * @description Represents a User record
     */
    User: {
      /** Id */
      id: string;
      /**
       * Createdat
       * Format: date-time
       */
      createdAt: string;
      /**
       * Updatedat
       * Format: date-time
       */
      updatedAt: string;
      /** Trips */
      trips?: components["schemas"]["Trip"][];
      /** Review */
      Review?: components["schemas"]["Review"][];
    };
    /** ValidationError */
    ValidationError: {
      /** Location */
      loc: (string | number)[];
      /** Message */
      msg: string;
      /** Error Type */
      type: string;
    };
    /**
     * Itinerary
     * @description Represents a Itinerary record
     */
    prisma__models__Itinerary: {
      /** Id */
      id: string;
      /**
       * Createdat
       * Format: date-time
       */
      createdAt: string;
      /**
       * Updatedat
       * Format: date-time
       */
      updatedAt: string;
      /** Content */
      content?: string;
      /** Trip */
      Trip?: components["schemas"]["Trip"][];
    };
    /**
     * Message
     * @description Represents a Message record
     */
    prisma__models__Message: {
      /** Id */
      id: string;
      /**
       * Createdat
       * Format: date-time
       */
      createdAt: string;
      /**
       * Updatedat
       * Format: date-time
       */
      updatedAt: string;
      /** Content */
      content: string;
      /** Isbot */
      isBot: boolean;
      Trip?: components["schemas"]["Trip"];
      /** Tripid */
      tripId?: string;
    };
    /** Itinerary */
    routers__itineraries__Itinerary: {
      /** Itinerary Id */
      itinerary_id: string;
      /** Content */
      content: string;
    };
    /** Itinerary */
    typings__index__Itinerary: {
      /** Itinerary Id */
      itinerary_id: string;
      /** Content */
      content: string;
    };
    /** Message */
    typings__index__Message: {
      /** Id */
      id: string;
      /** Text */
      text: string;
      /** Is User */
      is_user: boolean;
    };
  };
  responses: never;
  parameters: never;
  requestBodies: never;
  headers: never;
  pathItems: never;
}

export type $defs = Record<string, never>;

export type external = Record<string, never>;

export interface operations {

  /** Read Itinerary */
  read_itinerary_itineraries__itinerary_id__get: {
    parameters: {
      path: {
        itinerary_id: string;
      };
    };
    responses: {
      /** @description Successful Response */
      200: {
        content: {
          "application/json": components["schemas"]["routers__itineraries__Itinerary"];
        };
      };
      /** @description Validation Error */
      422: {
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
    };
  };
  /**
   * Read User
   * @description A function that reads a user based on the provided user ID.
   *
   *     Parameters:
   *         user_id (int): The ID of the user.
   *
   *     Returns:
   *         ReadUserResponse: The response containing the user ID and name.
   */
  read_user_users__user_id__get: {
    parameters: {
      path: {
        user_id: string;
      };
    };
    responses: {
      /** @description Successful Response */
      200: {
        content: {
          "application/json": components["schemas"]["ReadUserResponse"];
        };
      };
      /** @description Validation Error */
      422: {
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
    };
  };
  /**
   * Read User Messages
   * @description Read user messages.
   *
   *     Args:
   *         user_id (int): The ID of the user.
   *
   *     Returns:
   *         ReadUserMessagesResponse: An instance of the ReadUserMessagesResponse
   *             class containing the user messages.
   *
   *     Raises:
   *         None.
   *
   *     Description:
   *         This function is used to read user messages. It takes the user ID as
   *         input and returns an instance of the ReadUserMessagesResponse class
   *         containing the user messages.
   */
  read_user_messages_users__user_id__trips__trip_id__messages_get: {
    parameters: {
      query?: {
        order?: "asc" | "desc";
        limit?: number;
        after?: string;
        before?: string;
      };
      path: {
        user_id: string;
        trip_id: string;
      };
    };
    responses: {
      /** @description Successful Response */
      200: {
        content: {
          "application/json": components["schemas"]["ReadUserMessagesResponse"];
        };
      };
      /** @description Validation Error */
      422: {
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
    };
  };
  /**
   * Create User Message
   * @description Create a new message for a user.
   *
   *     Args:
   *         user_id (int): The ID of the user.
   *         input (CreateUserMessageInput): The input data for creating the user message.
   *
   *     Returns:
   *         ReadUserMessagesResponse: The response containing the user's updated messages.
   */
  create_user_message_users__user_id__trips__trip_id__messages_post: {
    parameters: {
      path: {
        user_id: string;
        trip_id: string;
      };
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["CreateUserMessageInput"];
      };
    };
    responses: {
      /** @description Successful Response */
      200: {
        content: {
          "application/json": components["schemas"]["CreateUserMessageResponse"];
        };
      };
      /** @description Validation Error */
      422: {
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
    };
  };
  /**
   * Read User Trips
   * @description Read trips that belong to a user
   */
  read_user_trips_users__user_id__trips_get: {
    parameters: {
      query?: {
        upcoming?: boolean;
      };
      path: {
        user_id: string;
      };
    };
    responses: {
      /** @description Successful Response */
      200: {
        content: {
          "application/json": components["schemas"]["ReadUserTripsResponse"];
        };
      };
      /** @description Validation Error */
      422: {
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
    };
  };
  /**
   * Create User Trip
   * @description Create a new trip for a user
   */
  create_user_trip_users__user_id__trips_post: {
    parameters: {
      path: {
        user_id: string;
      };
    };
    responses: {
      /** @description Successful Response */
      200: {
        content: {
          "application/json": components["schemas"]["CreateUserTripResponse"];
        };
      };
      /** @description Validation Error */
      422: {
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
    };
  };
  /**
   * Subscribe User Messages
   * @description Subscribe to user messages.
   *
   *     This function subscribes to user messages for a given user ID. It returns a generator that yields messages as they are received.
   *
   *     :param user_id: The ID of the user to subscribe to messages.
   *     :type user_id: int
   *     :return: A generator that yields Message objects.
   *     :rtype: Generator[Message, None, None]
   */
  subscribe_user_messages_users__user_id__trips__trip_id__messages_subscribe_get: {
    parameters: {
      path: {
        user_id: string;
        trip_id: string;
      };
    };
    responses: {
      /** @description Successful Response */
      200: {
        content: {
          "application/json": string[];
        };
      };
      /** @description Validation Error */
      422: {
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
    };
  };
  /**
   * Read Trip Itineraries
   * @description Get a itinerary from a trip
   */
  read_trip_itineraries_trips__trip_id__itineraries_get: {
    parameters: {
      path: {
        trip_id: string;
      };
    };
    responses: {
      /** @description Successful Response */
      200: {
        content: {
          "application/json": components["schemas"]["ReadTripItinerariesResponse"];
        };
      };
      /** @description Validation Error */
      422: {
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
    };
  };
  /** Read Root */
  read_root__get: {
    responses: {
      /** @description Successful Response */
      200: {
        content: {
          "application/json": unknown;
        };
      };
    };
  };
}
