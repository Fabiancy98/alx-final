# LOGIN SYSTEM WEB API

This is a LOGIN SYSTEM WEB API that allows users to login, register, get and update profile, reset password. It is designed using Node.js(express). You can view the live demo of the project by visiting this link: https://superlative-kashata-ac54cc.netlify.app/

## Features

- Register User
- Login User
- Reset Password
- Update user profile
- Get user details

## Working with the Project

Download this project from above link. Create a configaration file in the project.

After that create a file in the Server Folder with the name config.js and put the below code inside it.

config.js
```
export default {
    JWT_SECRET : "<secret>",
    EMAIL: "steve.franecki@ethereal.email", // testing email & password
    PASSWORD : "sMf46xCzrvdrxvuagc",
    ATLAS_URI: "<MONGODB_ATLAS_URI>"
}
```

> **Note:** The **ATLAS_URI** is important to work this project.

Now, create all these variables in the project and make sure you set ATLAS_URI variable.
Otherwise, the project will not work.


## How to Use

check the swagger.json file

## Project Structure

- `routes`: The main HTML file containing the structure of the web page.
- `controllers`: The CSS file containing the styles for the web page.
- `models`: The JavaScript file containing the functionality for adding and deleting tasks.
- `services`: The JavaScript file containing the functionality for adding and deleting tasks.
- `middleware`: The JavaScript file containing the functionality for adding and deleting tasks.


## License

This project is open-source and available for anyone to use and modify. Enjoy!

# By..
