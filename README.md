# IT3133-Assignment-04

## Animal Matching Game

An interactive game built with React, where players match a target animal's name with its image from a grid of animal cards. The game is designed to be fun, educational, and easy to extend.

## Features

### Dynamic Gameplay:

  - Randomly selects a target animal each round.
  - Allows users to refresh the game or shuffle the animal grid.

### Interactive Grid:

  - Players select the matching animal image from a grid of animal cards.
  - Displays win/lose results based on the selection.

### Responsive Design:

  - Optimized for different screen sizes using a CSS grid layout.

### Customizable Options:

  - Dynamic grid layout (e.g., number of columns).
  - Customizable styles for animal cards and result display.

  ## Tech Stack

  - Frontend: React.
  - Styles: CSS.
  - Assets: Images stored locally for animal illustrations.
  - Data: Animal data in JSON format.
    
 ## Project Structure
```
 AnimalMatchingGame/
│
├── public/                   # Public assets (e.g., favicon)
│
├── src/
│   ├── assets/               # Images and CSS files
│   │   ├── css/
│   │   │   ├── Game.css
│   │   │   ├── Animal.css
|   |   |   ├── Result.css
│   │   └── img/              # Animal images
│   │
│   ├── components/           # React components
│   │   ├── Game.js
│   │   ├── AnimalCards.js
│   │   └── Result.js
│   │
│   ├── data/
│   │   └── AnimalsDb.js      # JSON-like file with animal data
│   │
│   └── App.jsx               # Main application component
│
└── README.md                 # Project documentation

```
## Getting Started

### Prerequisites

Ensure you have the following installed:
- [Node.js](https://nodejs.org/)
- npm or yarn (comes with Node.js)

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/lakshitha213/IT3133-Assignment-04
   cd animal-game
   ```
2. **install dependencies**:
```
    npm install
```
3. **Start the development server**:
```
    npm start
```
4. **Open the game in your browser**: Visit http://localhost:3000.

##  Usage

### Gameplay

1. A random animal name is displayed at the top of the game.
2. Players select an animal image from the grid that matches the name.
3. Results (`WIN` or `LOSE`) are displayed based on the selection.
4. Use the **Refresh Game** button to shuffle the grid and reset the game.

### Customization

- **Animal Grid**: Modify the number of columns and gap spacing in the `AnimalCard` component props:
  ```js
  <AnimalCard animals={animalList} columns={3} gap="15px" borderColor="blue" />
  ```
### Styling

  Customize the styles in the following CSS files to suit your design preferences:

- `Game.css`: Contains styles for the overall game layout, including headers and result display.
- `AnimalCard.css`: Contains styles for the animal grid, card layout, and individual animal images.
- `Result.css`: Contains styles for the result display section.

###Output
![Screenshot(414)](https://github.com/lakshitha213/IT3133-Assignment-04/blob/main/Screenshot%20(414).png)
![Screenshot(415)](https://github.com/lakshitha213/IT3133-Assignment-04/blob/main/Screenshot%20(415).png)

