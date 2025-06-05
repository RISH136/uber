# User Registration Endpoint

## POST `/users/register`

Registers a new user in the system.

---

### Request Body

Send a JSON object with the following structure:

```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "yourpassword"
}
```

#### Fields

- `fullname.firstname` (string, required): User's first name (min 3 characters)
- `fullname.lastname` (string, required): User's last name (min 3 characters)
- `email` (string, required): User's email (must be valid)
- `password` (string, required): User's password (min 6 characters)

---

### Responses

#### Success (201 Created)

```json
{
  "token": "<jwt_token>",
  "user": {
    "_id": "<user_id>",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    "socketId": null
  }
}
```

#### Validation Error (400 Bad Request)

```json
{
  "errors": [
    {
      "msg": "First name must be at least 3 characters long",
      "param": "fullname.firstname",
      "location": "body"
    },
    ...
  ]
}
```

#### User Already Exists (400 Bad Request)

```json
{
  "message": "User already exist"
}
```

---

### Example Request

```bash
curl -X POST http://localhost:5000/users/register \
  -H "Content-Type: application/json" \
  -d '{
    "fullname": { "firstname": "John", "lastname": "Doe" },
    "email": "john.doe@example.com",
    "password": "yourpassword"
  }'
```

# User Registration Endpoint

## POST `/users/register`

Registers a new user in the system.

---

### Request Body

Send a JSON object with the following structure:

```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "yourpassword"
}
```

#### Fields

- `fullname.firstname` (string, required): User's first name (min 3 characters)
- `fullname.lastname` (string, required): User's last name (min 3 characters)
- `email` (string, required): User's email (must be valid)
- `password` (string, required): User's password (min 6 characters)

---

### Responses

#### Success (201 Created)

```json
{
  "token": "<jwt_token>",
  "user": {
    "_id": "<user_id>",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    "socketId": null
  }
}
```

#### Validation Error (400 Bad Request)

```json
{
  "errors": [
    {
      "msg": "First name must be at least 3 characters long",
      "param": "fullname.firstname",
      "location": "body"
    },
    ...
  ]
}
```

#### User Already Exists (400 Bad Request)

```json
{
  "message": "User already exist"
}
```

---

### Example Request

```bash
curl -X POST http://localhost:5000/users/register \
  -H "Content-Type: application/json" \
  -d '{
    "fullname": { "firstname": "John", "lastname": "Doe" },
    "email": "john.doe@example.com",
    "password": "yourpassword"
  }'
```

# User Registration Endpoint

## POST `/users/register`

Registers a new user in the system.

---

### Request Body

Send a JSON object with the following structure:

```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "yourpassword"
}
```

#### Fields

- `fullname.firstname` (string, required): User's first name (min 3 characters)
- `fullname.lastname` (string, required): User's last name (min 3 characters)
- `email` (string, required): User's email (must be valid)
- `password` (string, required): User's password (min 6 characters)

---

### Responses

#### Success (201 Created)

```json
{
  "token": "<jwt_token>",
  "user": {
    "_id": "<user_id>",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    "socketId": null
  }
}
```

#### Validation Error (400 Bad Request)

```json
{
  "errors": [
    {
      "msg": "First name must be at least 3 characters long",
      "param": "fullname.firstname",
      "location": "body"
    },
    ...
  ]
}
```

#### User Already Exists (400 Bad Request)

```json
{
  "message": "User already exist"
}
```

---

### Example Request

```bash
curl -X POST http://localhost:5000/users/register \
  -H "Content-Type: application/json" \
  -d '{
    "fullname": { "firstname": "John", "lastname": "Doe" },
    "email": "john.doe@example.com",
    "password": "yourpassword"
  }'
```