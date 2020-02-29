# Co-Make API
Note: Passwords will never be returned for Safety Reasons. All passwords are hashed for the utmost security. 

# *API OFFLINE/ONLINE*
### GET: /
`https://comake2.herokuapp.com/`

A single "/" will redirect you to a message if the API is running:
```
🗡 ==={ The API that you seek is running 🔥😎🎉}===🗡
```

***

# *USERS LIST*
### GET: /api/users
`https://comake2.herokuapp.com/api/users`

Will retrieve a list of ALL users.
```
[{
    "id": 1,
    "username": "superman"
  },
  {
    "id": 2,
    "username": "joker"
  },
  {
    "id": 3,
    "username": "username"
  }]
```

***

# *SPECIFIC USER*
### GET: /api/users/:id
`https://comake2.herokuapp.com/api/users/1`

Will retrieve that specified User
```
Example: /api/users/1
Returns: 
{
  "id": 1,
  "username": "superman",
  "created_at": "2020-02-29 00:30:00"
}
```

***

# *DELETE A SPECIFIC USER*
### DELETE: /api/users/:id
`https://comake2.herokuapp.com/api/users/1`

Will delete that specified User
```
Example: /api/users/1
Returns: 
{
  "message": "The User has been deleted."
}
```

***

# *REGISTER*
### POST: /api/auth/register
`https://comake2.herokuapp.com/api/auth/register`

Users can create accounts by hitting this endpoint. USERNAME and PASSWORD are required.
```
{
    "username": "brandy",
    "password":"candy"
  }
```

***

# *LOGIN*
### POST: /api/auth/login
`https://comake2.herokuapp.com/api/auth/login`

Users can login to their accounts by hitting this endpoint with USERNAME & PASSWORD. User will recieve a message from the BackEnd saying "Welcome, {username}!", along with their token.
```
{
  "message": "Welcome, brandy!",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0Ijo1LCJ1c2VybmFtZSI6ImJyYW5keSIsImlhdCI6MTU4MjkzODY1NH0.Gtsg2N4nMz" (fake token)
}
```