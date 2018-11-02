<h1 align="center" font-size="80"> Mars Mining </h1>
<p align="center">
  <a href="http://www.mars-mining.herokuapp.com">
    <img alt="Mars Mining Logo" src="https://s3.us-east-2.amazonaws.com/mars-mining/mars-mining.jpeg" />
  </a>
</p>

<p align="center">
Mars Mining is a Create React App that displays the location of bots and mining nodes on a grid. Mars Mining is a front-end Application that retrieves its data from an endpoint provided by Headlight Talent Agency.
</p>

<p align="center">
  Mars Mining is the creation of <a href="https://www.linkedin.com/in/brothman7000" > Benji Rothman. </a> 
</p>


## Access
You can [access](http://www.mars-mining.herokuapp.com) the web application at <http://www.mars-mining.herokuapp.com>

## My approach

I used Create React App to boostrap the project. I wanted an application that worked as soon as possible. I recognize that the App is fatter (more bytes of unnecessary data) because I boostrapped the project with Create-React-App.

I started out by reading the documentation. I wanted to know what the problem was. I quickly learned that a large amount of boiler plate had been given to use in vanilla javascript. I opened the boiler plate code side by side with my new create-react-app in VS Code. I copy and pasted code where possible, adjusting and changing the syntax to work with React. 

The most fun and stressful part was when I implemented robot moving animations because it was the first task where I had no guidance nor direction. I had an idea: manually track DOM Cell Nodes in state. This allowed me to change cell's classes instead of re-drawing the cells. Consequently, CSS `transitions` on `background-color` will create an attractive and informative animation.

However, I had no idea whether I would be sucessful. I kept fiddling with the data, worried I would have to erase everything because I no longer had working code. And then, thirty minutes before the deadline, the code worked! I said thank you, stood up, stretched, and transitioned to the `Write Up` portion of the challenge. 

## Tradeoffs I made

Using `Create-React-App` instead of setting up my repo from scratch. (Unnecessary Code)

Rushing through coding and not re-factoring to reduce technical debt. I chose to focus on making the code work over cleaning up my code.

I ran out of time and did not catch the brief power outages when the data is unacessible.

## User Interface

*How did you implement the user interface? Is it clear how to tell bots from nodes? Is it presented in a way you’d be comfortable sharing informally with co-workers? Are there any interesting choices taken?*

#### Border-Based Cells in a Grid

I used the `border` property of `CSS` to create an black outline around each cell. This creates the appreance of cells in a Grid.

#### Informal Sharing with Coworkers

I am about to show my classmates Mars Mining the moment I finish and submit the project. I am proud of my work and want to share it with my friends.

## Extensibility and Future Features

*How hard would it be to change your implementation if conditions changed? For example, if the grid was 100x100 instead of 20x20, how hard would that be to implement? What if bots could stack on top of each other? What if we wanted to add one of the “Going further” features - how hard would that be?*

#### 100x100 Grid instead of 20X20

Mars Mining can handle a change in grid due to the dynamic nature of its code. I store the `GRID_ROW` and `GRID_COLUMN` length as variables. Then I iterate over those values to setup the grid with a `FOR` loop. If the `GRID_ROW` and `GRID_COLUMN` values increased (or decreased), Mars Mining would automatically calculate and adjust for the change. 

#### Bots Stacking On Top of Each Other

This may be more difficult with sprites. Without sprites, I could add different shades of red depending on how many robots are on a cell. I can also add a number in the upper-left corner for how many robots are on the cell. This would be a `NumOfRobots` presentational React component.

#### Mineral Counts on Nodes and Bots

This can be done by creating a presentational React Component called `MineralCount`. MineralCount is given the MineralCount information of a node or bot, and renders a `<p>` tag with a number in it, the `mineral count`. I would use `CSS` to style the number to rest in the upper-right corner. I would experiment with font-size and using a bright color to ensure visibility of the `MineralCount` component. 

#### A Trail of Where a Bot has Been

One possible idea to implement this feature is to have different background colors for squares depending on how long ago the robot was there:

1. A robot is currently on a square: Red
2. A robot was on a sqaure **ONE** turn ago: Pink

We would transition the color from red until white. I would experiment with how many turns are needed to become white. At first, I would test five. Then I would iterate until I find the most visually appealing design. 

#### Design Improvements

If I had more time, I would add a sprite for robots. The sprite would be smaller than the cell. I would have a separate sprite for a robot mining, i.e. when a robot lands on mineral node. 

I might also remove the borders around each cell. I would add a background image that allows me to display nodes and robots. A node might become it's own sprite as well. This allows the user to see the robots move around the map without seeing the grid system the robots us, i.e. a cleaner (less unnecessary visual information) User Interface.

## How to Use

1. Visit the website at http://www.mars-mining.herokuapp.com!
2. Enjoy the beautiful colors! 

## Credits

This software uses code from several open source packages, including the following:

* [React](https://github.com/facebook/react)

* [Create-React-App](https://github.com/facebook/create-react-app)

* [Axios](https://github.com/axios/axios)
