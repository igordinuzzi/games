@import url('https://fonts.googleapis.com/css2?family=Darker+Grotesque:wght@400;700&family=Merriweather&family=Press+Start+2P&display=swap');

:root {
    --primary-color: #353c56; /* A soothing green */
    --secondary-color: #F4A261; /* A warm, soft orange */
    --accent-color: #2A9D8F; /* A vibrant teal */
    --background-color: #ffc2f8;
    --text-color: #353c56; /* A deep, dark blue */
    --text-light: #E9ECEF; /* A very light gray, for text on dark backgrounds */
    --border-color: #353c56; /* A bold, reddish-orange */
    --hover-color: #161a23;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
  padding: 16px;
  font-family: 'Darker Grotesque', sans-serif;
  line-height: 1;
  color: rgb(0, 23, 50);
  background-color: var(--background-color);
  display: flex; /* Enable flexbox */
  justify-content: center; /* Center horizontally */
  align-items: center; /* Center vertically */
  min-height: 100vh; /* Full viewport height */
}

.top-header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: var(--primary-color);
  color: var(--text-light);
  z-index: 1000; /* Ensure it stays on top of other elements */
}
    
.logo-container img {
  height: 50px; /* Adjust as needed */
}
    
.home-link-container a {
  color: var(--text-light);
  text-decoration: none;
  font-size: 24px;
  font-weight: bold;
  background-color: var(--accent-color);
  border-radius: 20px;
  padding: 4px 20px 8px 20px;
  transition: background-color 0.3s ease, color 0.3s ease; /* Smooth transition for hover effect */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2); /* Optional: subtle shadow for depth */
  display: inline-block; /* Align better with text and allow padding */
  text-align: center; /* Ensure text is centered */
}
    
.home-link-container a:hover, .home-link-container a:focus {
  background-color: var(--secondary-color); /* Change background on hover/focus */
  color: var(--text-color); /* Change text color on hover/focus */
}
      

h1 {
  font-size: 3em;
}
  

.btn {
  font-size: 2em;
  font-family: 'Darker Grotesque', sans-serif;
  font-weight: bold;
  padding: 4px 20px 8px 20px;
  cursor: pointer;
  border-radius: 20px;
  border: none; /* Add this line to remove the border */
  background-color: var(--primary-color);
  color: var(--text-light);
  display: block; /* Make the button a block-level element */
  margin-left: auto;
  margin-right: auto;
  width: fit-content; /* This will size the button according to its content */
  margin-top: 20px;
}

.btn:hover {
  background-color: var(--hover-color);
}

.score {
  display: flex;
  justify-content: space-between;
  font-size: 32px;
  margin-bottom: 20px;
}

/* # Game grid */

.game-board {
  position: relative;
  margin-bottom: 8px;
}

.game-container {
  max-width: calc((48px * 6) + 4px); /* Set a maximum width for larger screens */
  width: 100%; /* Allow the container to scale on smaller screens */
  margin-left: auto;
  margin-right: auto;
  margin-top: 100px;
  margin-bottom: 100px;
}

.grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%; /* Full width of the container */
  background-color: var(--text-light);
}

.cell {
  flex-basis: calc(16.66% - 2px); /* 1/6th of the grid width minus a small gap */
  height: 48px; /* Fixed height */
  cursor: pointer;
  outline: 1px dashed var(--primary-color);
  margin: 1px; /* Small margin for spacing */
  flex-grow: 0;
  flex-shrink: 0;
}


.bar {
  background-color: var(--primary-color);
  border-radius: 8px;
}

/* # Game over */
.end-game-screen {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(244, 162, 97, 0.5);
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 16px;
}

.win {
  background-color: var(--accent-color);
  color: var(--text-light);
}

.end-game-text {
  font-size: 3em;
  font-family: 'Press Start 2P', cursive;
  text-transform: uppercase;
}

/* # Utilities */

.hidden {
  display: none;
}

.bottom-footer {
	position: fixed;
	bottom: 0;
	left: 0;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 10px;
	background-color: var(--primary-color);
	color: var(--text-light);
	z-index: 1000; /* Ensure it stays on top of other elements */
  }
  
  .bottom-footer a {
	color: var(--text-light);
	text-decoration: none;
	font-weight: bold;
  }
  
  .bottom-footer a:hover {
	color: var(--secondary-color);
  }
  
  /* Font Awesome icons */
  .fa-brands {
	margin-right: 5px;
  }
  
  

@media (max-width: 600px) {

    body {
      padding-top: 70px; /* Adjust this value as needed */
    }

    .top-header, .bottom-footer {
        flex-direction: column;
        text-align: center;
        gap: 10px;
    }

    .top-header {
      margin-bottom: 0px;
    }

    .logo-container img {
        height: 40px; /* Smaller logo for smaller screens */
    }

    .home-link-container a {
        font-size: 14px; /* Smaller font size for smaller screens */
    }

    .game-container, .grid {
        width: 100%; /* Adjust for smaller screens */
        padding: 0; /* Remove additional padding */
        margin-top: 40px;
    }

    .cell {
      flex-basis: calc(33.33% - 2px); /* Increase width for smaller screens */
      height: calc((100vw - 24px) / 12); /* Adjust height based on viewport width */
    }

    .btn {
        padding: 8px 24px; /* Larger padding for better touch targets */
    }
}
