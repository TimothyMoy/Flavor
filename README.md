#Overview

##Why Recipes?
I was motivated to build this project because I've been cooking at lot more at home since quarentine started. I wanted to have a place to keep track of the recipes that my wife likes to eat.

##App summary?
This website is to help users create and manage recipes. The technologies I plan to use is the MERN stack.

#Core functionality
User Stories:
User can see a list of recipe titles & descriptions 
User can click on a recipe title to display a recipe card
containing the following:
Recipe Title
Recipe Description

Users can sign in and register
Users can create a new recipe once they are signed in.
Users can edit their own recipes.

##Next Steps
User stories Bonus
User can comment to upload their results on the recipe
User can search for recipes
Meal type
Number of people it serves
Difficulty level
Preparation Steps
Ingredient list

##Tech used

##MongoAtlas
  To store recipe data
  To create and read user id, username, and encrypted passwords.

##React
  To create components for each page.

##ReactStrap
  Used to style website including forms, navbar, and cards.
  Styling error handling.

##What is one feature you're particularly proud of? (show code)

```Javascript
// Simple Validation
  if( !email || !password) {
    return res.status(400).json({ msg: 'Please enter all fields' })
  }
```
#Challenges you faced
  React was more challenging then I initially thought. I enjoy the components aspect and managing the different building blocks.

  I spent way too much time on authorization and fixing small typos.

  I added readux in as well, which might not have been the smartest move.

  I should have time blocked more and asked for more help. on Tuesday, I could create, read an delete a recipe. So I thought showing recipe information and updating it would be easy. It was not.

#Credits
##Code
  Kenny's auth tutorial really helped create login.

##Logo
  Freepik for initial icon of orange. (I made some tweaks after)

##Images
  Unsplash for food images.

