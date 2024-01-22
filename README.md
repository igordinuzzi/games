# Igor's Arcade games

Welcome to "Igor's Arcade," a meticulously crafted collection of games I've developed to offer an engaging and diverse gaming experience. As a developer, I have poured my passion and skills into creating each game, ensuring they cater to a variety of interests and challenge levels. In "Minesweeper," I've implemented a classic puzzle-solving framework that tests strategic thinking. "Stacker" showcases my focus on timing and precision, encouraging players to achieve new heights in skillful gameplay. And with "Ducker," I've blended agility with strategic navigation, offering an adventurous escape into an arcade-style setting. My aim with Igor's Arcade is to provide an entertaining platform where every player, regardless of their gaming prowess, can find something that resonates with their interests and challenges them in new ways. Join me in this gaming adventure and experience the dedication and creativity behind each game!

Live page [Visit Igor's Arcade Games](https://igordinuzzi.github.io/games/)

### Homepage features

The homepage for "Games by Igor Dinuzzi" is designed to offer a user-friendly and engaging experience. Here are its key functionalities:

1. **Responsive Design:** Utilizes Bootstrap CSS to ensure the webpage is responsive across various devices, providing a seamless experience whether viewed on a desktop, tablet, or mobile phone.

2. **Interactive Header:**
   - **Logo Display:** Features a logo in the header for brand recognition.
   - **Navigation Links:** Includes direct links to the individual game pages ("Minesweeper," "Stacker," and "Ducker"), facilitating easy navigation and access to the games.

3. **Introductory Section:**
   - **Welcome Message:** Presents a welcoming title and paragraph using animate.css for engaging fadeIn effects, introducing users to Igor's Arcade and the variety of games available.
   - **Visual Appeal:** Enhanced by stylish CSS animations and a modern layout.

4. **Games Display:**
   - **Individual Game Columns:** Each game (Minesweeper, Stacker, Ducker) is showcased in its own column with corresponding images and descriptions, engaging users with a visual and textual preview of each game.
   - **Play Buttons:** Offers "Play" buttons for each game, allowing users to easily access the game pages.

5. **Footer with GitHub Link:**
   - **Social Media Integration:** Includes a link to Igor's GitHub profile, fostering community engagement and offering insights into the development process.

6. **Animation and Interactivity:**
   - Uses animate.css for smooth animations when displaying game columns.
   - Incorporates hover effects for an interactive user experience.

7. **SEO and Accessibility:**
   - **Semantic HTML:** Ensures better search engine indexing and accessibility.
   - **Alt Tags for Images:** Enhances accessibility for users with screen readers.

8. **JavaScript and Bootstrap Integration:**
   - **Dynamic Behavior:** JavaScript script for additional interactive features or game integrations.
   - **Bootstrap JavaScript:** Ensures responsive and interactive components like modals or collapsible menus work correctly.

This homepage serves as an inviting gateway into Igor's Arcade, offering a blend of modern design, smooth navigation, and enticing previews of the games available.

### Minesweeper
**Game Description:**
Minesweeper is a classic puzzle game where the objective is to clear a rectangular grid containing hidden "mines" without detonating any of them. The game is won by revealing all the cells on the grid that do not contain mines.

**Functionalities:**
- **Grid Setup:** The game presents a grid of cells. Some cells contain hidden mines.
- **Gameplay Mechanics:** Players click on cells to reveal what is underneath. A number on a cell indicates the number of mines in the adjacent cells.
- **Bomb Detection:** Clicking on a cell with a bomb results in game over.
- **Flagging:** Players can place flags on cells they suspect contain mines to avoid accidentally clicking them.
- **Winning the Game:** The game is won when all non-mine cells are revealed.

### Stacker
**Game Description:**
Stacker is an arcade game that challenges players to stack moving blocks on top of one another. The goal is to reach the top of the screen with a tower of blocks.

**Functionalities:**
- **Moving Blocks:** Blocks move horizontally across the screen.
- **Stacking Mechanic:** Players must time their clicks to stop and stack the blocks directly above the previous layer.
- **Increasing Difficulty:** As players advance, the blocks move faster, increasing the difficulty of the game.
- **Winning Condition:** Successfully stacking blocks to the top of the screen results in a win.
- **Losing Condition:** If the blocks are misaligned and the tower becomes too narrow to continue, the game ends.

### Ducker
**Game Description:**
Ducker is an adventure arcade game where players navigate a duck character through various obstacles to reach a destination. The game requires agility and strategic planning.

**Functionalities:**
- **Character Movement:** Players control the duck's movement, dodging obstacles and making strategic decisions.
- **Dynamic Obstacles:** The game features moving obstacles such as cars and buses, adding complexity to the gameplay.
- **Levels and Progression:** As players advance, the levels become more challenging with increasing obstacle speed and complexity.
- **Timer:** A timer adds pressure, requiring quick decision-making.
- **Winning Condition:** Successfully guiding the duck to the end of the level results in progression to the next stage.
- **Losing Condition:** Colliding with an obstacle or running out of time results in game over.

Each game offers a unique set of challenges and gameplay mechanics, providing players with diverse and engaging experiences.

### User Flow for "Games by Igor Dinuzzi" Homepage

The user flow describes the path a user takes through the homepage to engage with the content and access the games.

1. **Landing on the Homepage:**
   - The user is greeted with a visually appealing homepage featuring the header and a welcoming introductory message.

2. **Exploring Game Options:**
   - The user scrolls down to view the game options (Minesweeper, Stacker, Ducker) presented in individual columns.
   - Each game has a descriptive image, title, and a brief summary.

3. **Selecting a Game:**
   - The user chooses a game by clicking on the respective "Play" button or the game image.

4. **Navigating to Game Page:**
   - Upon clicking the "Play" button or game image, the user is redirected to the selected game’s page where they can start playing.

5. **Returning to Homepage:**
   - If the user wants to choose another game, they can return to the homepage using their browser’s back function or the navigation links.

6. **Visiting GitHub Profile:**
   - Interested in learning more about the developer, the user can click on the GitHub link in the footer to visit Igor's GitHub profile.

### Task Flow for Playing Minesweeper

The task flow describes the specific actions a user takes to play Minesweeper, starting from the homepage.

1. **Accessing Minesweeper:**
   - User lands on the homepage and scrolls to the Minesweeper section.

2. **Starting Minesweeper:**
   - User clicks on the “Play Minesweeper” button or the Minesweeper image, which redirects them to the Minesweeper game page.

3. **Engaging with the Game:**
   - Upon reaching the Minesweeper page, the user is presented with the game grid.
   - The user clicks on cells to reveal numbers or mines.
   - The user uses logic and strategy to avoid mines and clear the board.

4. **Completing/Restarting the Game:**
   - If the user successfully clears all cells without mines, they win.
   - If the user clicks on a mine, the game ends.
   - The user can choose to restart the game for a new challenge.

This task flow highlights the user’s journey from choosing to play Minesweeper on the homepage, engaging with the game, and either completing it or starting a new game.

### Technologies

For the development of "Games by Igor Dinuzzi," a variety of modern technologies and tools were used to ensure a seamless, interactive, and visually appealing gaming experience. Here's a breakdown of the key technologies utilized:

1. **HTML5:**
   - The core structure of the website and games is built using HTML5, providing a semantic and accessible markup.

2. **CSS3:**
   - Styling and visual presentation of the website are accomplished with CSS3, including layout design, colors, fonts, and responsive design features.

3. **Bootstrap 4:**
   - A popular front-end framework used for developing responsive and mobile-first websites. It simplifies the layout and design process, particularly for grid systems, navigation, and UI elements.

4. **JavaScript:**
   - JavaScript is used for dynamic content and interactive elements on the website and within the games, including game logic, animations, and user interactions.

5. **Animate.css:**
   - A library of ready-to-use, cross-browser animations for adding effects to elements on the webpage, enhancing user engagement and experience.

6. **FontAwesome:**
   - This icon toolkit is used to incorporate various icons into the website, such as social media icons and other UI elements, for enhanced visual appeal and user guidance.

7. **jQuery (Slim version):**
   - A fast, small, and feature-rich JavaScript library. It's used in conjunction with Bootstrap JavaScript to manipulate HTML documents and handle events efficiently.

8. **Popper.js:**
   - A library used for managing poppers in web applications, essential for the tooltips and popovers used in Bootstrap components.

9. **Git:**
   - Version control system used for tracking changes in the source code during development. Git allows for efficient collaboration and version tracking.

10. **GitHub:**
    - Provides hosting for software development and version control using Git, enabling the sharing and collaboration of code.

11. **Visual Studio Code:**
    - An advanced source-code editor used for writing HTML, CSS, and JavaScript with useful features like debugging, syntax highlighting, and version control integration.

These technologies and tools were carefully chosen to build a robust, interactive, and user-friendly gaming platform. They collectively contribute to the functionality, aesthetic appeal, and overall performance of "Games by Igor Dinuzzi."

### Learning outcomes

As a developer student working on "Games by Igor Dinuzzi," I have achieved several learning outcomes that have significantly contributed to my growth and understanding in various aspects of web development. These outcomes include:

1. **Understanding and Applying HTML5 and CSS3:**
   - Gained practical knowledge in structuring web pages using HTML5 and styling them with CSS3, including the use of semantic elements and responsive design techniques.

2. **Mastering Responsive Web Design with Bootstrap:**
   - Learned how to implement responsive layouts and UI components using Bootstrap, enhancing my ability to create mobile-first and cross-device compatible web pages.

3. **JavaScript Proficiency:**
   - Developed a deeper understanding of JavaScript, especially in manipulating the DOM, handling events, and implementing game logic, which are crucial for interactive web applications.

4. **Animation Techniques:**
   - Explored the use of CSS animations and Animate.css to add engaging visual effects, improving user experience and interface dynamism.

5. **Integrating External Libraries and Frameworks:**
   - Learned how to integrate and utilize external resources like FontAwesome, jQuery, and Popper.js, enhancing the functionality and aesthetic appeal of web projects.

6. **Version Control with Git and GitHub:**
   - Gained experience in using Git for version control and GitHub for code collaboration and sharing, essential skills for modern web development.

7. **Debugging and Problem-Solving:**
   - Enhanced my debugging skills and learned to effectively troubleshoot and solve coding issues, which is critical for the development process.

8. **Project Planning and Time Management:**
   - Developed better project planning and time management skills, learning how to break down projects into manageable tasks and prioritize them effectively.

9. **User Experience (UX) and User Interface (UI) Design Principles:**
   - Acquired a deeper understanding of UX/UI design principles, focusing on creating user-friendly and intuitive interfaces.

10. **Implementing Game Mechanics:**
    - Gained hands-on experience in creating engaging game mechanics and understanding the fundamentals of game design.

11. **Cross-Browser Compatibility:**
    - Learned the importance of ensuring that web applications work consistently across different browsers, leading to a better grasp of web standards and compatibility issues.

12. **SEO Best Practices:**
    - Gained insights into SEO best practices, understanding the importance of optimizing websites for search engines.

Through the development of "Games by Igor Dinuzzi," I have not only enhanced my technical skills but also learned the importance of creativity, attention to detail, and user-centric design in web development. These learning outcomes have prepared me for future challenges and opportunities in the field.

### Testing for "Games by Igor Dinuzzi"

The testing process for "Games by Igor Dinuzzi" was comprehensive and thorough, covering various aspects to ensure a high-quality, user-friendly, and robust gaming experience. Below are the key areas of testing:

#### 1. Cross-Browser Compatibility:
- **Objective:** To ensure the website and games function consistently across different web browsers.
- **Method:** Tested on major browsers including Chrome, Firefox, Safari, and Edge.
- **Results:** The website displayed and operated consistently across all tested browsers with minor adjustments made for browser-specific behaviors.

#### 2. Mobile Responsiveness:
- **Objective:** To verify that the website is responsive and provides a good user experience on various devices.
- **Method:** Tested using Chrome DevTools for simulating different screen sizes and on actual devices like smartphones and tablets.
- **Results:** The website was responsive across all tested screen sizes. All interactive elements were accessible and functional.

#### 3. User Interface and User Experience:
- **Objective:** To ensure the UI/UX is intuitive, engaging, and accessible.
- **Method:** Conducted user testing with a group of volunteers to gather feedback on the design, navigation, and overall user experience.
- **Results:** Positive feedback was received for the layout, color scheme, and ease of navigation. Suggestions for minor improvements were implemented.

#### 4. Game Functionality:
- **Objective:** To test the functionality and logic of each game (Minesweeper, Stacker, Ducker).
- **Method:** Each game was played multiple times, testing various scenarios and edge cases.
- **Results:** All games operated as expected. Found and fixed a few bugs related to game logic and scoring.

#### 5. Performance Testing:
- **Objective:** To ensure the games and website load efficiently without significant delays.
- **Method:** Used tools like Google Lighthouse and WebPageTest for performance analysis.
- **Results:** Scores were generally high, with optimizations made for better loading times and efficiency.

#### 6. Accessibility:
- **Objective:** To confirm that the website is accessible to users with disabilities.
- **Method:** Used accessibility testing tools like WAVE and manual testing with screen readers.
- **Results:** Made improvements for screen reader compatibility and keyboard navigation. Ensured sufficient color contrast and added alt text to images.

#### 7. Security and Data Validation:
- **Objective:** To ensure that user data is handled securely and forms are validated.
- **Method:** Tested all forms and user input fields for proper validation.
- **Results:** All forms were secure, and appropriate validation was implemented.

#### 8. Link and Navigation Testing:
- **Objective:** To confirm that all internal and external links function correctly.
- **Method:** Manually tested all links in the website.
- **Results:** All links were functional and directed to the correct pages or external sites.

#### 9. JavaScript and Console Error Checking:
- **Objective:** To ensure there are no JavaScript errors or warnings.
- **Method:** Console log testing in various browsers.
- **Results:** Resolved a few minor JavaScript warnings. No critical errors were found.

#### Conclusion:
The comprehensive testing approach for "Games by Igor Dinuzzi" helped identify and resolve various issues, enhancing the overall quality, performance, and user experience of the website and games. The process was instrumental in ensuring a reliable and enjoyable gaming platform for users.

### Deployment for "Games by Igor Dinuzzi"

The deployment process of "Games by Igor Dinuzzi" involved several steps to ensure the website and games were successfully published and accessible to users. Below is an outline of the deployment process:

#### Initial Development:
- **Local Development Environment:** The website and games were developed in a local environment using Visual Studio Code as the code editor.
- **Version Control:** Git was used for version control throughout the development process, with changes regularly committed and pushed to a GitHub repository.

#### Preparing for Deployment:
- **Code Review:** Conducted a thorough review of the codebase for consistency, readability, and removal of unnecessary comments or debug code.
- **Testing:** Completed a final round of testing (as detailed in the Testing section) to ensure everything was functioning correctly.
- **Optimization:** Optimized assets such as images and minified CSS and JavaScript files for better performance and faster loading times.

#### Deployment to GitHub Pages:
- **GitHub Repository:** A repository was created on GitHub to host the website and games.
- **GitHub Pages Setup:** Enabled GitHub Pages in the repository settings, selecting the main branch as the source for deployment.
- **Domain Configuration:** Configured the custom domain (if applicable) and updated DNS settings.
- **Deployment:** The site was automatically deployed upon pushing the final version of the code to the GitHub repository.

#### Post-Deployment:
- **Verification:** Verified that the website was accessible and functioning correctly on the live URL.
- **Monitoring:** Continuously monitored the website for any issues or bugs that might arise post-deployment.
- **Updates and Maintenance:** Established a process for updating the website and games, ensuring any new changes were tested locally before being pushed to the live site.

#### Rollback Plan:
- In case of any critical issues post-deployment, a rollback plan was in place to revert the website to the previous stable version using Git.

#### Continuous Integration/Continuous Deployment (CI/CD):
- While not initially implemented, CI/CD practices using tools like GitHub Actions could be considered for future updates to automate the testing and deployment process.

The deployment of "Games by Igor Dinuzzi" was meticulously planned and executed, ensuring a smooth transition from development to a live, accessible gaming platform. The process emphasized the importance of thorough testing, optimization, and post-deployment monitoring to maintain a high-quality user experience.
