API Documentation
1. POST /api/auth/signup
Description: Registers a new user with the provided name, email, and password.

Method: POST
URL: /api/auth/signup
"http://localhost:3000/api/auth/signup"
Request Body:
json
Copy code
{
  "name": "John Doe",
  "email": "johndoe@example.com",
  "password": "password123"
}
name: User's full name (String)
email: User's email address (String)
password: User's password (String)
Response:
Success (200 OK):
json
Copy code
{
  "message": "User registered successfully",
  "token": "<JWT_TOKEN>"
}
Error (400 Bad Request):
json
Copy code
{
  "message": "Invalid input data. All fields are required."
}
Error (409 Conflict):
json
Copy code
{
  "message": "User already exists"
}
2. POST /api/auth/login
Description: Logs in a user with their email and password.

Method: POST
URL: http://localhost:3000/api/auth/login
Request Body:
json
Copy code
{
  "email": "johndoe@example.com",
  "password": "password123"
}
email: User's email address (String)
password: User's password (String)
Response:
Success (200 OK):
json
Copy code
{
  "message": "Login successful",
  "token": "<JWT_TOKEN>"
}
Error (401 Unauthorized):
json
Copy code
{
  "message": "Invalid credentials"
}
3. PUT /api/users/update-profile
Description: Allows users to update their profile details.

Method: PUT
URL: http://localhost:3000/api/users/update-profile
Request Body:
json
Copy code
{
  "name": "John Doe Updated",
  "mobileNumber": "1234567890",
  "bio": "Updated bio",
  "availability": ["9:00-12:00", "14:00-17:00"]
}
name: Updated full name (String)
mobileNumber: Updated mobile number (String)
bio: Updated bio (String)
availability: Array of time slots when the user is available (Array of Strings)
Response:
Success (200 OK):
json
Copy code
{
  "message": "Profile updated successfully",
  "user": {
    "name": "John Doe Updated",
    "mobileNumber": "1234567890",
    "bio": "Updated bio",
    "availability": ["9:00-12:00", "14:00-17:00"]
  }
}
Error (400 Bad Request):
json
Copy code
{
  "message": "Invalid input data. Please check the data you provided."
}
Error (401 Unauthorized):
json
Copy code
{
  "message": "Unauthorized access"
}
4. POST /api/notifications/send
Description: Sends a notification to one or more users. Notifications can be marked as critical or non-critical.

Method: POST
URL: http://localhost:3000/api/notifications/send
Request Body:
json
Copy code
{
  "message": "Reminder: Meeting at 3 PM",
  "userIds": ["user1_id", "user2_id"],
  "critical": false
}
message: The notification message (String)
userIds: Array of user IDs to send the notification (Array of Strings)
critical: Boolean to mark if the notification is critical (Boolean)
Response:
Success (200 OK):
json
Copy code
{
  "message": "Notification sent successfully",
  "notificationId": "12345"
}
Error (400 Bad Request):
json
Copy code
{
  "message": "Invalid user IDs or message"
}
Error (401 Unauthorized):
json
Copy code
{
  "message": "Unauthorized access"
}
5. GET /api/notifications/received
Description: Retrieves the list of notifications that the logged-in user has received.

Method: GET
URL: http://localhost:3000/api/notifications/received
Request Headers:
plaintext
Copy code
Authorization: Bearer <JWT_TOKEN>
Response:
Success (200 OK):
json
Copy code
{
  "notifications": [
    {
      "message": "Reminder: Meeting at 3 PM",
      "timestamp": "2025-02-02T12:00:00Z",
      "status": "queued"
    },
    {
      "message": "Your account was updated",
      "timestamp": "2025-02-01T14:30:00Z",
      "status": "delivered"
    }
  ]
}
Error (401 Unauthorized):
json
Copy code
{
  "message": "Unauthorized access"
}
