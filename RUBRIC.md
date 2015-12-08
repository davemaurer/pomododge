Abstract

Build a game that is playable in the browser. There is no server-side component for this project. You'll be using client-side JavaScript exclusively to complete this project.

This project is inspired by Minicade.

Goals

Use client-side to drive both the design and implementation of code
Use jQuery to traverse and manipulate the DOM
Use test-driven design to build a client-side applicaiton
Restrictions

You can use any of the following libraries:

jQuery
Mocha
Underscore
Moment.js
Numeral.js
D3
(Other libraries may be used only with instructor approval.)

You can use any of the following build tools:

Webpack
Grunt
Gulp
Game Options

You can choose to implement any of the games listed below.

Connect Four
Lights Out
Othello/Reversi
2048
Tetris
Snake
Tron
(Other idea and suggestions are available with instructor approval.)

Playability Features

We want your game to be full-featured and playable -- not just a proof of concept of the gameplay and rendering features.

To this end, make sure to include sufficient UX to allow the user to fully interact with the game. This would include:

Indicate when the game is over and won or lost
Allow the user to start a new game
Include a clean UI surrounding the actual game interface itself
Score Tracking: How this works will vary by game, but at the end of the game, generate a score for the winning player
Extensions

Scoreboard -- track scores across multiple game sessions. Since we aren't incorporating a server for our games, client-side storage like a cookie or LocalStorage will suffice.
Create multiple rounds of difficulty. (consider increasing factors such as game speed, randomness of starting setup, etc)
Create an AI player that can play as the second player (except in 2048).
Multiplayer support -- either by sharing a keyboard (2 sets of key inputs) or, as an extra-difficult extension, via websockets between multiple browsers
Evaluation Rubric

150 out of a total of 300 points are included in the rubric below. The additional 150 feature points will be determined during iteration planning with instructors during check-ins.

Functional Expectations

35 points - Application is fully playable and exceeds the expecations set by instructors
25 points - Application is fully playable without crashes or bugs
10 points - Application has some missing functionality but no crashes
0 points - Application crashes during normal usage
User Interface

15 points - The application is pleasant, logical, and easy to use. There no holes in functionality and the application stands on it own to be used by the instructor without guidance from the developer.
10 points - The application has many strong pages/interactions, but a few holes in lesser-used functionality.
5 points - The application shows effort in the interface, but the result is not effective. The evaluator has some difficulty using the application when reviewing the features in the user stories.
0 points - The application is confusing or difficult to use.
Testing

30 points - Project has a running test suite that exercises the application at multiple levels. The test suite convers almost all aspects of the application and uses mocks and stubs when appropriate.
25 points - Project has a running test suite that tests and multiple levels but fails to cover some features. All controller actions are covered by tests. The application makes some use of integration testing.
10 points - Project has sporadic use of tests and multiple levels. The application contains numerous holes in testing and/or many features are untested.
0 points - There is little or no evidence of testing in this application.
JavaScript Style

30 points - Application has exceptionally well-factored code with little or now duplication and all components separated out into logical components. There zero instances where an instructor would recommend taking a different approach.
20 points - Application is thoughtfully put together with some duplication and no major bugs. Developer can speak to choices made in the code and knows what every line of code is doing.
15 points - Your application has a significant amount of duplication and one or major bugs.
5 points - Your client-side application does not function. Developer writes code with unnecessary variables, operations, or steps which do not increase clarity.
0 points - There is little or no client-side code. Developer writes code that is difficult to understand. Application logic shows poor decomposition with too much logic mashed together.
Workflow

25 points - The developer effectively uses Git branches and many small, atomic commits that document the evolution of their application.
15 points - The developer makes a series of small, atomic commits that document the evolution of their application. There are no formatting issues in the code base.
10 points - The developer makes large commits covering multiple features that make it difficult for the evaluator to determine the evolution of the application.
5 points - The developer commited the code to version control in only a few commits. The evaluator cannot determine the evolution of the application.
0 points - The application was not checked into version control.
Code Sanitation

The output from JSHint shows…

15 points - Zero complaints
10 points - Five or fewer complaints
5 points - Six to ten complaints
0 points - More than ten complaints
