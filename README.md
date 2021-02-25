# Futurama Quizes

There are how many front end frameworks out there?!

## The Goal

To help up my skills I will try to build the same application in new frameworks. There are a ton of front end frameworks out there, the most popular ones are Vue, React, Angular, and Svelte.

## The App

The app will be a straight forward quiz application about Furutama. We can use the [Sample API - Futurama Questions](https://api.sampleapis.com/futurama/questions) as the data source. Basic features of the app are as follows: 

- Welcome Screen
- Question Screens
- Review Screen

### Welcome Screen

This will gather basic user information that will power the rest of the app. This information should be stored in the local storage for future reference. The data that needs to be captured is as follows:

- Display Name
  - Default: User
- Difficulty Level
  - Options: Easy | Medium | Hard
  - Default: Medium
- Number of Questions
  - Options: Min: 5 | Max: Questions Length
  - Default: 10

### Questions Screen

The questions will be displayed one question at a time with a list of possible answers. The user should be unable to go to next question unless an answer is selected. Before navigating to the next question, the user should be notified if correct or incorrect, and the score should update accordingly.

### Review Screen

A simple display of the users results. How many they answered correctly vs how many were asked, and based on their difficulty setting if they passed or failed.

