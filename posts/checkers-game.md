---
title: Checkers game
excerpt: A text-based version of the classic checkers board game in which the user is either playing against the computer or another human player 
image: checkers-board.png
isFeatured: true
date: '2023-5-15'
---

Our vision for this game was to make a text-based version of the classic checkers board game in which the user is either playing against the computer or another human player. 
- In the beginning of the game, the user(s) will be given the opportunity to go through an interactive tutorial that will explain the rules of the game to them by entering y when prompted. However, if they choose to go straight to the game, they may also do so as well by entering n. 
- Then, the user(s) can choose if they want to play in singleplayer mode or multiplayer mode. When prompted, choose single player by entering 1 and multiplayer by entering 2. 
  - In the former case, the user will be playing against a computer player, who will be making its moves based on a set of predetermined rules. The moves that the computer will make is based on the level that the user chooses to play at: easy (enter 1), medium (enter 2), or hard (enter 3). 
- The game is played entirely within the terminal, with the board being displayed as a grid of squares and the pieces represented by text characters. The user can interact with the game using simple text commands entered via the keyboard. 
  - The game begins with the board set up in its starting position, with player 1 playing the blue pieces and player 2 playing the magenta pieces. 
  - The user will be prompted to select the piece they wish to move by entering its coordinates on the board, and as well as the destination square in the format move r,c to r,c. 
  - In multiplayer mode, the other player is then prompted to move their piece.
  - In singleplayer mode, the computer will then make its move, selecting a piece and moving it based on its predetermined rules. 
- The game will continue in this manner, with the user and computer or other player taking turns moving their pieces until one player captures all of their opponent's pieces or is unable to make any more moves. 
- Throughout the game, the user can see the current state of the board, including the positions of all uncaptured pieces and the number of pieces each player has left. The computer's moves will also be displayed on the board, so the user can see how it is responding to their moves. 
- At any point in the game, users can type help  next to > to get a refresher on the rules of the game. They can also type quit to exit the game. 

### Screenshots of game below!

![Screenshot of tutorial](capturing-tutorial.png)

![Screenshot of game prompt](play-checkers.png)

Download and play the game [here](https://github.coecis.cornell.edu/jg874/3110-final-project)!
