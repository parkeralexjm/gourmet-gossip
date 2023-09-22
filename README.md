# Gourmet Gossip

## Description

Gourmet Gossip is a recipe sharing website where users can create, edit and delete recipes and leave reviews for recipes that they enjoy.

[Nadjaob](https://github.com/nadjaob), [jchesher92](https://github.com/jchesher92) and I were given 7 days to complete our project as a group. We initially researched and created a wireframe on [figma](https://www.figma.com/file/qrek2uENdq7sUzyKiliVPP/Project-3?type=design&node-id=0%3A1&mode=design&t=yuz0fOXCGQmQYVJc-1). We then divided tasks up using trello to identify which features we would work on. James would focus on back-end, Nadja on front-end and I would float between picking up features as needed.

## Deployment Link

[Live deployment here](https://gourmet-gossip-665d7e750e14.herokuapp.com/)

## Project Brief

- Build a full-stack application by making your own backend and your own front-end
- Use an Express API to serve your data from a Mongo database
- Consume your API with a separate front-end built with React
- Be a complete product which most likely means multiple relationships and CRUD functionality for at least a couple of models
- Implement thoughtful user stories/wireframes that are significant enough to help you know which features are core MVP and which you can cut
- Have a visually impressive design to kick your portfolio up a notch and have something to wow future clients & employers. ALLOW time for this.
- Be deployed online so it's publicly accessible.

## Code Process

### Day 1

Research, wireframing, trello board

### Day 2

Create models, initially seed database, help controllers

### Day 3

Create basic login and register pages, apply simple styling and added authentication routes to prevent multiple users with the same username or email address. Validate both passwords are the same and store as a hash using bcrypt.

### Day 4

Create profile page for users, add ‘addedby’ field to display the recipes that each individual user has created. Add a redirect if the user is not logged in. 

### Day 5

Top rated feature, include virtual field on the model to calculate the average ratings of each recipe’s reviews. Displayed as a carousel on the homepage

### Day 6

Assist James with favourites page

### Day 7

Final styling and editing changes
Added new fonts to titles
Restyled login and register pages to display a message and fixed the padding/margins for mobile
Restructured seed to include vegan recipes
Removed all console.logs and forms that were causing browser errors (duplicate id’s)
Added the diet button as an overlay for the recipe card page to gain more space for the description.
Renamed intermediate to medium in order to prevent line breaks on recipe cards

## Challenges

## Future Improvements

- Allow users to change their password/username/email

- Add a top contributor page with the user that has the highest ratings

- Add a diet choice for users to sort by preferences

- Add a shopping list function for users to add ingredients to their list for later.
