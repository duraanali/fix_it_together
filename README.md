# Gabi School Build Week
# FIX IT TOGETHER 


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
      "title": "Down Power Lines",
      "desc": "On Main Street, there's a few down Power Lines from the storm the other night blocking the main roads.",
      "upvotes": 10,
      "downvotes": 3,
      "resolved": "false",
      "creator_name": "superman"
    }
  ]
}
```

***

# *EDIT A SPECIFIC USER*
## PUT: /api/users/:id
`https://comake2.herokuapp.com/api/users/1`
## RESTRICTED: REQUIRES HEADER
```
authorization: token
```

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
## RESTRICTED: REQUIRES HEADER
```
authorization: token
```

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

Usernames MUST be at LEAST 3 characters long. Usernames MUST be Unique (No 2 people can have the same Username). Passwords MUST be at LEAST 4 characters long. 

```
{
    "username": "brandy",
    "password":"candy"
  }

Available Fields:
{
  username: "", 
  password: "", 
  first_name:"", 
  last_name:"", 
  email:"", 
  zipcode: "", 
  city:"", 
  state:""}

```

***

# *LOGIN*

## POST: /api/auth/login
`https://comake2.herokuapp.com/api/auth/login`

Users can login to their accounts by hitting this endpoint with USERNAME & PASSWORD. User will recieve a message from the BackEnd saying "Welcome, {username}!", along with their token.

```
{
  "message": "Welcome, brandy!",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0Ijo1LCJ1c2VybmFtZSI6ImJyYW5keSIsImlhdCI6MTU4MjkzODY1NH0.Gtsg2N4nMz" (fake token),
  "user_id": 5
}
```

***

# *POSTS*

## GET: /api/posts
`https://comake2.herokuapp.com/api/posts`

This endpoint will retrieve all Post Data!
```
[
   {
    "id": 1,
    "created_at": "2020-02-27 12:00:00",
    "creator_id": 1,
    "title": "Down Power Lines",
    "desc": "On Main Street, there's a few down Power Lines from the storm the other night blocking the main roads.",
    "upvotes": 10,
    "downvotes": 3,
    "resolved": "false",
    "zipcode": "37660",
    "city": "Kingsport",
    "state": "TN",
    "creator_name": "superman"
  },
  {
    "id": 3,
    "created_at": "2020-02-28 5:00:00",
    "creator_id": 1,
    "title": "Power Outage",
    "desc": "Power Outage on Justice Street, the whole streets out of power. ",
    "upvotes": 8,
    "downvotes": 0,
    "resolved": "true",
    "zipcode": "37877",
    "city": "Talbott",
    "state": "TN",
    "creator_name": "superman"
  }
]
```

***

# *POSTS*

## GET: /api/posts/:id
`https://comake2.herokuapp.com/api/posts/1`

This endpoint will retrieve a specific posts data.
```
[
  {
    "id": 1,
    "created_at": "2020-02-27 12:00:00",
    "creator_id": 1,
    "title": "Down Power Lines",
    "desc": "On Main Street, there's a few down Power Lines from the storm the other night blocking the main roads.",
    "upvotes": 10,
    "downvotes": 3,
    "resolved": "false",
    "zipcode": "37660",
    "city": "Kingsport",
    "state": "TN",
    "creator_name": "superman"
  }
]
```

***

# *POSTS*

## POST: /api/posts/
`https://comake2.herokuapp.com/api/posts`
## RESTRICTED: REQUIRES HEADER
```
authorization: token
```

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
    "resolved": "false",
    "zipcode": "37813",
    "city": "Morristown",
    "state": "TN"
  }
]
```

***


# *POSTS*

## PUT: /api/posts/:id
`https://comake2.herokuapp.com/api/posts/1`
## RESTRICTED: REQUIRES HEADER
```
authorization: token
```

This endpoint will let you edit posts.
"creator_id" is notNullable()

```

  Example: /api/posts/1

    {
    "title": "Down Power Lines",
    "desc": "On Main Street, there's a few down Power Lines from the storm the other night blocking the main roads.",
    "resolved": "true",
    "zipcode": "37813",
    "city": "Morristown",
    "state": "TN",
    "creator_id": "1";
  }

```

***

# *POSTS*

## DELETE: /api/posts/:id
`https://comake2.herokuapp.com/api/posts/7`
## RESTRICTED: REQUIRES HEADER
```
authorization: token
```

This endpoint will let you delete posts.

```

  Example: /api/posts/7

  {
  "message": "The Post has been deleted."
  }

```

***

# *IMAGES*
## POST: /api/posts/:id/image
`https://comake2.herokuapp.com/api/posts/1/image`

This endpoint will let you upload .jpg / .jpeg images to your Posts. 
Images can be viewed in this Repo by navigating to the 'public' folder, and then the 'uploads' folder.
The URL should return in your console.
```
Key: "Image" (File Type, not Text Type)
Value: "issue-1.jpg"

will return 
{
    "Url": "https://comake2.herokuapp.com/api/posts/1/image/issue-1.jpg"
}
```
