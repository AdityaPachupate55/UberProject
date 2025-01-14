# User Registration Endpoint

## POST /users/register

### Description
This endpoint is used to register a new user. It validates the input data, hashes the password, and creates a new user in the database.

### Request Body
The request body should be a JSON object with the following structure:
```json
{
  "fullname": {
    "firstname": "string (required, min 3 characters)",
    "lastname": "string (optional, min 3 characters)"
  },
  "email": "string (required, valid email format)",
  "password": "string (required, min 6 characters)"
}
```

### Responses

#### Success
- **Status Code:** 201 Created
- **Response Body:**
  ```json
  {
    "token": "string (JWT token)",
    "user": {
      "_id": "string",
      "fullname": {
        "firstname": "string",
        "lastname": "string"
      },
      "email": "string",
      "socketId": "string (optional)"
    }
  }
  ```

#### Validation Errors
- **Status Code:** 400 Bad Request
- **Response Body:**
  ```json
  {
    "errors": [
      {
        "msg": "string (error message)",
        "param": "string (parameter name)",
        "location": "string (location of the parameter)"
      }
    ]
  }
  ```

### Example Request
```bash
curl -X POST http://localhost:3000/users/register \
-H "Content-Type: application/json" \
-d '{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "password123"
}'
```

### Example Response
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "_id": "60d0fe4f5311236168a109ca",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    "socketId": null
  }
}
```

# User Login Endpoint

## POST /users/login

### Description
This endpoint allows users to log in to the application.

### Request Body
The request body should be a JSON object with the following structure:
```json
{
  "email": "string (required, valid email format)",
  "password": "string (required, min 6 characters)"
}
```

### Responses

#### Success
- **Status Code:** 200 OK
- **Response Body:**
  ```json
  {
    "token": "string (JWT token)",
    "user": {
      "_id": "string",
      "email": "string",
      "name": "string"
    }
  }
  ```

#### Validation Errors
- **Status Code:** 400 Bad Request
- **Response Body:**
  ```json
  {
    "errors": [
      {
        "msg": "string (error message)",
        "param": "string (parameter name)",
        "location": "string (location of the parameter)"
      }
    ]
  }
  ```

#### Authentication Errors
- **Status Code:** 401 Unauthorized
- **Response Body:**
  ```json
  {
    "message": "Invalid email or password"
  }
  ```

### Example Request
```bash
curl -X POST http://localhost:3000/users/login \
-H "Content-Type: application/json" \
-d '{
  "email": "john.doe@example.com",
  "password": "password123"
}'
```

### Example Response
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "_id": "60d0fe4f5311236168a109ca",
    "email": "john.doe@example.com",
    "name": "John Doe"
  }
}
```

# Captain Registration Endpoint

## POST /captains/register

### Description
This endpoint is used to register a new captain. It validates the input data, hashes the password, and creates a new captain in the database.

### Request Body
The request body should be a JSON object with the following structure:
```json
{
  "fullname": {
    "firstname": "string (required, min 3 characters)",
    "lastname": "string (optional, min 3 characters)"
  },
  "email": "string (required, valid email format)",
  "password": "string (required, min 6 characters)",
  "vehicle": {
    "color": "string (required, min 3 characters)",
    "plate": "string (required, min 3 characters)",
    "capacity": "number (required, min 1)",
    "vehicleType": "string (required, one of 'car', 'motorcycle', 'auto')"
  }
}
```

### Responses

#### Success
- **Status Code:** 201 Created
- **Response Body:**
  ```json
  {
    "token": "string (JWT token)",
    "captain": {
      "_id": "string",
      "fullname": {
        "firstname": "string",
        "lastname": "string"
      },
      "email": "string",
      "vehicle": {
        "color": "string",
        "plate": "string",
        "capacity": "number",
        "vehicleType": "string"
      },
      "socketId": "string (optional)",
      "status": "string (one of 'active', 'inactive')"
    }
  }
  ```

#### Validation Errors
- **Status Code:** 400 Bad Request
- **Response Body:**
  ```json
  {
    "errors": [
      {
        "msg": "string (error message)",
        "param": "string (parameter name)",
        "location": "string (location of the parameter)"
      }
    ]
  }
  ```

### Example Request
```bash
curl -X POST http://localhost:3000/captains/register \
-H "Content-Type: application/json" \
-d '{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "password123",
  "vehicle": {
    "color": "Red",
    "plate": "XYZ 1234",
    "capacity": 4,
    "vehicleType": "car"
  }
}'
```

### Example Response
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "captain": {
    "_id": "60d0fe4f5311236168a109ca",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    "vehicle": {
      "color": "Red",
      "plate": "XYZ 1234",
      "capacity": 4,
      "vehicleType": "car"
    },
    "socketId": null,
    "status": "inactive"
  }
}
```
