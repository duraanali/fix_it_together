# Co-Make API
Note: Passwords will never be returned for Safety Reasons. All passwords are hashed for the utmost security. 

# *API OFFLINE/ONLINE*
## GET: /
`https://comake2.herokuapp.com/`

A single "/" will redirect you to a message if the API is running:
```
🗡 ==={ The API that you seek is running 🔥😎🎉}===🗡
```

***

# *USERS LIST*
## GET: /api/users
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
## GET: /api/users/:id
`https://comake2.herokuapp.com/api/users/1`

Will retrieve that specified Users information AND any posts that Users created.
```
Example: /api/users/1
Returns: 
{
  "id": 1,
  "username": "superman",
  "created_at": "2020-02-29 00:30:00",
  "posts": [
    {
      "id": 1,
      "created_at": "2020-02-27 12:00:00",
      "creator_id": 1,
      "title": "Down Power Lines222222",
      "desc": "On Main Street, there's a few down Power Lines from the storm the other night blocking the main roads.",
      "upvotes": 10,
      "downvotes": 3,
      "resolved": "true"
    }
  ]
}
```

***

# *EDIT A SPECIFIC USER*
## PUT: /api/users/:id
`https://comake2.herokuapp.com/api/users/1`

Will edit & update that specified Users information. (Ex. Username, Password, etc)
```
Example: /api/users/1
Returns: 
{
  "id" : 1,
  "username" : "superman"
}
```

***

# *DELETE A SPECIFIC USER*
## DELETE: /api/users/:id
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
## POST: /api/auth/register
`https://comake2.herokuapp.com/api/auth/register`

Users can create accounts by hitting this endpoint. USERNAME and PASSWORD are required.

Usernames MUST be at LEAST 3 characters long. Usernames MUST be Unique (No 2 people can have the same Username).
Passwords MUST be at LEAST 4 characters long. 
```
{
    "username": "brandy",
    "password":"candy"
  }
```

***

# *LOGIN*
## POST: /api/auth/login
`https://comake2.herokuapp.com/api/auth/login`

Users can login to their accounts by hitting this endpoint with USERNAME & PASSWORD. User will recieve a message from the BackEnd saying "Welcome, {username}!", along with their token.
```
{
  "message": "Welcome, brandy!",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0Ijo1LCJ1c2VybmFtZSI6ImJyYW5keSIsImlhdCI6MTU4MjkzODY1NH0.Gtsg2N4nMz" (fake token)
}
```

***

# *POSTS*
## GET: /api/posts
`https://comake2.herokuapp.com/api/posts`

This endpoint will retrieve all Post Data!
```
[{
    "id": 1,
    "created_at": "2020-02-27 12:00:00",
    "creator_id": 1,
    "title": "Down Power Lines",
    "desc": "On Main Street, there's a few down Power Lines from the storm the other night blocking the main roads.",
    "upvotes": 10,
    "downvotes": 3,
    "resolved": "false"
  },
  {
    "id": 3,
    "created_at": "2020-02-28 5:00:00",
    "creator_id": 1,
    "title": "Power Outage",
    "desc": "Power Outage on Justice Street, the whole streets out of power. ",
    "upvotes": 8,
    "downvotes": 0,
    "resolved": "true"
  }]
```

***

# *POSTS*
## GET: /api/posts/:id
`https://comake2.herokuapp.com/api/posts/2`

This endpoint will retrieve a specific posts data.
```
[
  {
    "id": 2,
    "created_at": "2020-02-28 3:00:00",
    "creator_id": 2,
    "title": "Pot Hole Alert",
    "desc": "Pothole on McDonalds lane, just blew a tire driving over it!",
    "upvotes": 5,
    "downvotes": 2,
    "resolved": "false"
  }
]
```

***

# *POSTS*
## POST: /api/posts/
`https://comake2.herokuapp.com/api/posts`

This endpoint will let you add new Posts to the DataBase! You have to be logged in to create a post.

creator_id should be dynamically included in the request body based on logged in user.

```
[
  {
    "creator_id" : 1,
    "title": "Pot Hole Alert",
    "desc": "Pothole on McDonalds lane, just blew a tire driving over it!",
    "upvotes": 5,
    "downvotes": 2,
    "resolved": "false"
  }
]
```

***


# *POSTS*
## PUT: /api/posts/:id
`https://comake2.herokuapp.com/api/posts/1`

This endpoint will let you edit posts.

```

  Example: /api/posts/1

    {
    "title": "Down Power Lines",
    "desc": "On Main Street, there's a few down Power Lines from the storm the other night blocking the main roads.",
    "resolved": "true"
  }

```

***

# *POSTS*
## DELETE: /api/posts/:id
`https://comake2.herokuapp.com/api/posts/7`

This endpoint will let you delete posts.

```

  Example: /api/posts/7

  {
  "message": "The Post has been deleted."
  }

```

***
