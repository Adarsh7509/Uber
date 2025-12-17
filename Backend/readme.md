# API Documentation

## Endpoint: `/users/register`

### Description

This endpoint is used to register a new user in the system. It validates the input data, hashes the password, and creates a new user record in the database. Upon successful registration, it returns a JSON Web Token (JWT) and the user details.

### Method

`POST`

### Request Body

The request body should be a JSON object with the following fields:

| Field                | Type   | Required | Description                                        |
| -------------------- | ------ | -------- | -------------------------------------------------- |
| `fullname.firstname` | String | Yes      | The first name of the user (minimum 3 characters). |
| `fullname.lastname`  | String | No       | The last name of the user (minimum 3 characters).  |
| `email`              | String | Yes      | The email address of the user (must be valid).     |
| `password`           | String | Yes      | The password for the user (minimum 3 characters).  |

### Response

#### Success (201 Created)

- **Description**: User registered successfully.
- **Response Body**:
  ```json
  {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "user": {
      "_id": "64f1c2e8b5d6c9a1f8e7d123",
      "fullname": {
        "firstname": "John",
        "lastname": "Doe"
      },
      "email": "john.doe@example.com"
    }
  }
  ```

#### Error (400 Bad Request)

- **Description**: Validation errors in the input data.
- **Response Body**:
  ```json
  {
    "errors": [
      {
        "msg": "Error message",
        "param": "Field name",
        "location": "body"
      }
    ]
  }
  ```

#### Error (500 Internal Server Error)

- **Description**: Server error during user registration.
- **Response Body**:
  ```json
  {
    "error": "Internal server error"
  }
  ```

### Example Request

```bash
curl -X POST http://localhost:PORT/users/register \
-H "Content-Type: application/json" \
-d '{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "securepassword"
}'
```

### Example Response

#### Success Response

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "_id": "64f1c2e8b5d6c9a1f8e7d123",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com"
  }
}
```

#### Error Response

```json
{
  "errors": [
    {
      "msg": "First name must be at least 3 character long",
      "param": "fullname.firstname",
      "location": "body"
    }
  ]
}
```

### Notes

- Ensure the `Content-Type` header is set to `application/json`.
- Replace `PORT` with the actual port number where the server is running.
