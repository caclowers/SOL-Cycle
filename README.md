
# *SOL-Cycle*

### Welcome, Friends!
___
#### Finding the current UV Index on a weather website is almost universally cumbersome.
#### **_SOL-Cycle_** is a web application which creates an *easy-to-navigate* UV Index search experience.

## For Site Users
After registering (including a City/State) and logging in, the User is greeted with a large number which represents the UV Index for the location that they registered on their account.  

If the User wants to check the UV in another location he/she can click the button marked 'Locations'. This opens a modal with three options:

+ Add a Location
+ Change Location
+ Delete Location

New locations are saved to the User account and appear in the Change and Delete dropdown menus

The User can also check the '7 Day Forecast'. Clicking this button will open a different modal which contains a graph of the next seven days' UV Index. The graph represents the daily high value.

For informational purposes, there is a 'What is UV?' button. Clicking this button directs the User to the 'What is UV?' View.  
This View contains information regarding the various steps of the 1-11+ scale.  


## For Developers

Open this repo in your favorite editor  
Open two command windows



In one window:  
`npm install`  
`npm run server`  

Then, in the other:  
`npm run client`


## Deployment

1. Create a new Heroku project
1. Link the Heroku project to the project GitHub Repo
1. Create an Herkoku Postgres database
1. Connect to the Heroku Postgres database from Postico
1. Create the necessary tables
1. Add an environment variable for `SERVER_SESSION_SECRET` with a nice random string for security
1. In the deploy section, select manual deploy
