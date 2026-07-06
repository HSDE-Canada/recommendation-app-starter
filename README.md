# Week 2 - Recommendation App

## Project Goal
Build a recommendation app that gives the user a different activity suggestion based on the mood they select.

This project focuses on user input, variables, conditions, and functions.

## Final Demo
By the end, the app should:

- let the user click one mood card
- visually mark the selected mood card
- store the selected mood using the card’s `data-mood` value
- warn the user if they click Get Recommendation before choosing a mood
- show a different recommendation for happy, relaxed, curious, and energetic
- let the user close the result card

## Instructions
Work in the `starter` folder of this repository.

Do not add new features. Focus only on this week’s concepts: variables, user choices, comparison operators, `if`, `else if`, `else`, and functions.

## Challenge 1: Remove the selected class from every mood card
Inside the mood card click event, remove the `selected` class from every mood card.

## Challenge 2: Add the selected class to the clicked card
Inside the same click event, add the `selected` class to the card the user clicked.

## Challenge 3: Store the selected mood
Inside the same click event, store the clicked card’s `data-mood` value in the `selectedMood` variable.

## Challenge 4: Check whether a mood was selected
Inside the Get Recommendation button event, write the condition that checks whether `selectedMood` is still empty.

## Challenge 5: Check for the happy mood
Inside `showRecommendation(mood)`, write the condition that checks whether the selected mood is `happy`.

## Challenge 6: Check for the relaxed mood
Inside `showRecommendation(mood)`, write the condition that checks whether the selected mood is `relaxed`.

## Challenge 7: Check for the curious mood
Inside `showRecommendation(mood)`, write the condition that checks whether the selected mood is `curious`.

## Challenge 8: Check for the energetic mood
Inside `showRecommendation(mood)`, write the condition that checks whether the selected mood is `energetic`.

## Extension Challenges
After the required app works, you may personalize the existing recommendation content.
