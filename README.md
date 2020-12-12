# MotoShare
A platform to rent-share motorcycles.
https://aqueous-badlands-56300.herokuapp.com/

## Set Up
1. Clone the repository. 
2. Navigate to the local repository.
#### Set up Local Database
3. Create local folder 'localdb'
4. Run `mongod --dbpath localdb`
#### Build and run server
5. Run `npm run-script setup`
6. Run `npm run-script build-run` 

## Instructions to the TA
You begin with the home page. From here you can login as a user or admin. (Details given in the Login Section below)

- Once logged in as a <b>User</b>, the person can press on the ‘ACTIONS’ button on the top of the screen.
- In the ‘ACTIONS’ menu, you can go either to the ‘My account’ page which has info about your account(Hard coded), ‘My ads’ which contain ads for bikes posted by you and ‘Log out’.
- On the same page, the user can also click on “SEARCH’ in Search Motorcycles section.(No need to enter any data as the button’s action is hardcoded)
- Results page is opened and is all the ads that result after the user searches for a bike. He can click on any of the ads and be welcomed to a complete description page for the ad.
- The Complete Description Ad page will have info about the ad and also the seller. You can click on the seller section to be taken to the seller’s page to get info about him/her.
- Finally, you can see your posted ads either through a button on the 'My ads' page, or by pressing the MotoShare icon in the top left, returning to the home page and clicking 'post an ad' in the how it works section.
The new opened page will give you the functionality to post a new ad.
- For logging in as the <b>admin</b>, go to the login page by pressing login button at the top. Enter ‘admin’ as user and the same as password. Then you’ll be greeted to the admin side of the website.(For now, we have the same login page for user and admin but in the next phase, we’ll create a different hidden login page for admins)
---
## Api Routes
### User Routes:
- **GET** /api/users
  * Get all users
  * expects: no req body
  * returns: array of user objects:
  ```json
  [{
    "reviews": [],
    "bikes": [],
    "_id": "5fd28ef0c732a14b0883f7bb",
    "email": "email@string.com",
    "password": "$2a$10$DIFifY8EzYDXVTveJ8Pg7.BZCjHMwMyI4XL7moN0ML2TYFIFmo8S2",
    "name": "name string",
    "location": "",
    "rating": -1,
    "rentedTo": 0,
    "__v": 0
  }]
  ```
- **POST** /api/users
  * Creates new user
  * expects: 
  ```json
  {
    "email": "email@string.com",
    "password": "passwordstring",
    "name": "name string"
  }
  ```
  * returns: A user object:
  ```json
  {
    "reviews": [],
    "bikes": [],
    "_id": "5fd28ef0c732a14b0883f7bb",
    "email": "email@string.com",
    "password": "$2a$10$DIFifY8EzYDXVTveJ8Pg7.BZCjHMwMyI4XL7moN0ML2TYFIFmo8S2",
    "name": "name string",
    "location": "",
    "rating": -1,
    "rentedTo": 0,
    "__v": 0
  }
  ```
- **GET** /api/users/login
  * Gets user by email/password
  * expects: 
  ```json
  {
    "email": "email@string.com",
    "password": "passwordstring"
  }
  ```
  * returns: user object if found:
  ```json
  {
    "reviews": [],
    "bikes": [],
    "_id": "5fd28ef0c732a14b0883f7bb",
    "email": "email@string.com",
    "password": "$2a$10$DIFifY8EzYDXVTveJ8Pg7.BZCjHMwMyI4XL7moN0ML2TYFIFmo8S2",
    "name": "name string",
    "location": "",
    "rating": -1,
    "rentedTo": 0,
    "__v": 0
  }
  ```
- **GET** /api/users/:id
  * Gets user by id
  * expects: no body
  * returns: user object if found
- **POST** /api/users/:id/reviews
  * Posts a review for user of given id
  * expects: 
  ```json
  {
    "rating": 5,
    "review": "The review as a string"
  }
  ```
- **PATCH** /api/users/:id/image
  * Updates a user's image
  * expects:
  ```json
  {
    "image_id": "the image's id string",
    "image_url": "the image's url string"
  }
  ```
  * returns: review and updated user if found:
  ```json
  {
    "review": {
        "rating": 5,
        "review": "The review as a string"
    },
    "user": {
        "reviews": [
            "The review as a string"
        ],
        "bikes": [],
        "_id": "5fd28ef0c732a14b0883f7bb",
        "email": "email@string.com",
        "password": "$2a$10$DIFifY8EzYDXVTveJ8Pg7.BZCjHMwMyI4XL7moN0ML2TYFIFmo8S2",
        "name": "name string",
        "location": "",
        "rating": 5,
        "rentedTo": 0,
        "__v": 0
    }
  }
  ```
- **DELETE** /api/users/:id
  * Deletes a user by id
  * expects: no body
  * returns: deleted user and deleted bikes:
  ```json
  {
    "user": {
        "reviews": [],
        "bikes": [],
        "_id": "5fd290c2c732a14b0883f7bc",
        "email": "to@delete.com",
        "password": "$2a$10$j9pb26Gtk6zls2Z6ReSVk.aqViRrf/l76cZ.Jsej4zbhen40zQwI2",
        "name": "to delete",
        "location": "",
        "rating": -1,
        "rentedTo": 0,
        "__v": 0
    },
    "deletedBikes": []
  }
  ```

### Bike routes:
- **GET** /api/bikes
  * Gets all bikes
  * expects: no body
  * returns: array of bike objects:
  ```json
  [{
        "reviews": [],
        "prevRenters": [],
        "_id": "5fd291fbc732a14b0883f7bd",
        "name": "name string",
        "price": 5,
        "location": "location details",
        "licence": "licence plate string",
        "description": "Description of Bike",
        "image_id": "image_id string",
        "image_url": "image_url string",
        "owner": "5fd28ef0c732a14b0883f7bb",
        "__v": 0
  }]
  ```
- **POST** /api/bikes/user/:id
  * Creates a new bike for given user id
  * expects: 
  ```json
  {
    "name": "name string",
    "price": 5,
    "avail-from": "yyyy-mm-dd",
    "avail-to": "yyyy-mm-dd",
    "location": "location details",
    "licence_plate": "licence plate string",
    "description": "Description of Bike",
    "image_id": "image_id string",
    "image_url": "image_url string"
  }
  ```
  * returns: Bike object and owner user object:
  ```json
  {
    "bike": {
        "reviews": [],
        "prevRenters": [],
        "_id": "5fd291fbc732a14b0883f7bd",
        "name": "name string",
        "price": 5,
        "location": "location details",
        "licence": "licence plate string",
        "description": "Description of Bike",
        "image_id": "image_id string",
        "image_url": "image_url string",
        "owner": "5fd28ef0c732a14b0883f7bb"
    },
    "owner": {
        "reviews": [
            "The review as a string"
        ],
        "bikes": [
            "5fd291fbc732a14b0883f7bd"
        ],
        "_id": "5fd28ef0c732a14b0883f7bb",
        "email": "email@string.com",
        "password": "$2a$10$DIFifY8EzYDXVTveJ8Pg7.BZCjHMwMyI4XL7moN0ML2TYFIFmo8S2",
        "name": "name string",
        "location": "",
        "rating": 5,
        "rentedTo": 0,
        "__v": 1
    }
  }
  ```
- **POST** /api/bikes/:id
  * Updates bike info for given bike id
  * expects: 
  ```json
  {
    "name": "name string",
    "price": 10,
    "avail-from": "yyyy-mm-dd",
    "avail-to": "yyyy-mm-dd",
    "location": "location details",
    "licence_plate": "licence plate string",
    "description": "Description of Bike",
    "image_id": "image_id string",
    "image_url": "image_url string"
  }
  ```
  * returns: updated bike object
  ```json
  {
    "reviews": [],
    "prevRenters": [],
    "_id": "5fd291fbc732a14b0883f7bd",
    "name": "name string",
    "price": 10,
    "location": "new location details",
    "licence": "licence plate string",
    "description": "Description of Bike",
    "image_id": "new image_id string",
    "image_url": "image_url string",
    "owner": "5fd28ef0c732a14b0883f7bb",
    "__v": 0
  }
  ```
- **GET** /api/bikes/:id
  * Gets bike by id
  * expects: no body
  * retusn: bike object if found
- **DELETE** /api/bikes/:id
  * Deletes bike by id
  * expects: no body
- **POST** /api/bikes/:id/reviews
  * Posts a review for bike by id
  * expects:
  ```json
  {
    "rating": 5,
    "review": "review string"
  }
  ```
  * returns: updated bike object
- **POST** /api/bikes/:id/rent
  * Rent a bike to a user
  * expects: 
  ```json
  {
    "uid": "id of existing user"
  }
  ```
  * returns: updated bike object
- **POST** /api/bikes/:id/return
  * Returns a bike from current renter
  * expects: no body
  * returns: updated bike object
---
## Login Credentials and Sample Users & Bikes
|  Name	|UserName| Password	|  Location 	|  Bikes 	|  Rating 	|  RentedTo 	|        Reviews      	    |  UserID 	                | UserType |
|:-----:|:------:|:--------:|:----------:|:-------:|:--------:|:----------:|:------------------------:|:------------------------:|:--------:|
| admin | admin  | admin    | Toronto    | []      |    -1    |      0     | []                       | 5fd4222e70326d36bcb52ad2 | admin  |
| user1	| user1  | user1    | Toronto	   | []      |    -1    |      0     | ["User1 is good"]	       | 5fd422c570326d36bcb52ad3 | Normal |
| user2 | user2  | user2    | Toronto	   | []      |    -1    |      0     | ["User2 is good"]	       | 5fd42783eba0262aacc22ad8 | Normal |
| user3 | user3  | user3    | Waterloo	  | []      |    -1    |      0     | ["User3 is good"]	       | 5fd427afeba0262aacc22ad9 | Normal |
| user4	| user4  | user4    | Waterloo	  | []      |    -1    |      0     | ["User4 is good"]	       | 5fd427d2eba0262aacc22ada | Normal |
| user5 | user5  | user5    | Toronto	   | []      |    -1    |      0     | ["User5 is good"]	       | 5fd4283feba0262aacc22adb | Normal |
| user6	| user6  | user6    | Waterloo	  | []      |    -1    |      0     | ["User6 is good"]	       | 5fd4286aeba0262aacc22adc | Normal |
| user7 | uesr7  | user7    | Waterloo	  | []      |    -1    |      0     | ["User7 is good"]	       | 5fd42884eba0262aacc22add | Normal |
| user8 | user8  | user8    | Toronto	   | []      |    -1    |      0     | ["User8 is good"]	       | 5fd42896eba0262aacc22ade | Normal |
| user9 | user9  | user9    | Waterloo	  | []      |    -1    |      0     | ["User9 is good"]	       | 5fd428adeba0262aacc22adf | Normal |

|  Name	| Availibility Start | Availibility End   |  Location |  Owner 	|Price|Licence|Reviews|  Renter 	| Previous Renters | image_id | image_url | Rating | Description |
|:-----:|:------------------:|:------------------:|:---------:|:-------:|:---:|:-----:|:-----:|:--------:|:----------------:|:--------:|:---------:|:------:|:------------------:|
| bike0 | December 1st, 2020 | December 1st, 2020 | Toronto   | user1   |  1  |0001   |  []   |   null   | [] | motorc_nvtdlh  | https://res.cloudinary.com/jblcloud/image/upload/v1607737396/motorc_nvtdlh.png | 0 | "A Bike" | |
| bike1	| December 2nd, 2020 | December 2nd, 2020 | Toronto	  | user2   |  2  |0002   |  []   |   null   | [] | motorc_nvtdlh | https://res.cloudinary.com/jblcloud/image/upload/v1607737396/motorc_nvtdlh.png | 0 | "A Bike" | |
| bike2 | December 3rd, 2020 | December 3rd, 2020 | Waterloo	  | user3   |  3  |0003   |  []   |   null   | [] | motorc_nvtdlh | https://res.cloudinary.com/jblcloud/image/upload/v1607737396/motorc_nvtdlh.png | 0 | "A Bike" | |
| bike3 | December 4th, 2020 | December 4th, 2020 | Waterloo	 | user4   |  4  |0004   |  []   |   null   | [] | motorc_nvtdlh | https://res.cloudinary.com/jblcloud/image/upload/v1607737396/motorc_nvtdlh.png | 0 | "A Bike" | |
| bike4	| December 5th, 2020 | December 5th, 2020 | Toronto	 | user5   |  5  |0005   |  []   |   null   | [] | motorc_nvtdlh | https://res.cloudinary.com/jblcloud/image/upload/v1607737396/motorc_nvtdlh.png | 0 | "A Bike" | |
| bike5 | December 6th, 2020 | December 6th, 2020 | Waterloo	  | user6   |  6  |0006   |  []	  |   null   | [] | motorc_nvtdlh | https://res.cloudinary.com/jblcloud/image/upload/v1607737396/motorc_nvtdlh.png | 0 | "A Bike" | |
| bike6	| December 7th, 2020 | December 7th, 2020 | Waterloo	 | user7   |  7  |0007   |  []	  |   null   | [] | motorc_nvtdlh | https://res.cloudinary.com/jblcloud/image/upload/v1607737396/motorc_nvtdlh.png | 0 | "A Bike" | |
| bike7 | December 8th, 2020 | December 8th, 2020 | Toronto	 | user8   |  8  |0008   |  []  	|   null   | [] | motorc_nvtdlh | https://res.cloudinary.com/jblcloud/image/upload/v1607737396/motorc_nvtdlh.png | 0 | "A Bike" | |
| bike8 | December 9th, 2020 | December 9th, 2020 | Waterloo	  | user9   |  9  |0009   |  []	  |   null   | [] | motorc_nvtdlh | https://res.cloudinary.com/jblcloud/image/upload/v1607737396/motorc_nvtdlh.png | 0 | "A Bike" | |
| bike9 | December 10th, 2020| December 10th, 2020| Waterloo	 | user9   |  10 |0010   |  []	  |   null   | [] | motorc_nvtdlh | https://res.cloudinary.com/jblcloud/image/upload/v1607737396/motorc_nvtdlh.png | 0 | "A Bike" | |

### Admin:
**Username**: admin \
**Password**: admin

## Consistency in theme
 We are using Blue, Green and white as the colors for our theme.

## Features
### User Features
- User can create an account 
- User can login to created account
- User can post ads
- User can view his/her posted ads
- User can delete his/her ads
- User can view ads other users have posted

**Note**: Each view that requires sample data has different data. Data will be passed through views using server calls in phase 2. 

### Admin Features
- Admin can view data of the webapp

## Additional Libraries Used 
- React
- Materialize CSS
- Material UI
- Easy Scroll
- jQuery

## Citations
- [Red Motorcycle Picture](https://thumbor.forbes.com/thumbor/trim/0x360:4501x2892/fit-in/711x399/smart/https://specials-images.forbesimg.com/imageserve/5c0a960ca7ea43705919981f/0x0.jpg)
- Tutorial to have movie at the background [Youtube](https://www.youtube.com/watch?v=I2UBjN5ER4s)
- Non copyright image sources: [pixabay](https://pixabay.com), [pexels](https://www.pexels.com)
- [Material UI Table Examples](https://material-ui.com/components/tables/)
