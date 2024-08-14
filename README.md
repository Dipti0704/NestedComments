# Nested Comment System

## Introduction
This project is a React-based nested comment system that allows users to post comments, reply to comments, and manage their conversations. It supports various features like adding, editing, deleting comments, and handling nested replies with unlimited depth. The project leverages the Context API for state management and `localStorage` for persistent data storage.

## Key Features
- **Post Comments:** Add new comments with user details.
- **Nested Replies:** Reply to existing comments with no depth limit.
- **Edit/Delete Comments:** Modify or remove comments and their replies.
- **Sort Comments:** Optional feature to sort comments by newest or oldest.
- **Persistent Data:** Stores comments using `localStorage` to ensure data remains after page reloads.
- **Responsive Design:** Optimized for both desktop and mobile views.

## Tech Stack
- **Frontend Framework:** React 18.2.0
- **State Management:** React Context API
- **Date Formatting:** `date-fns` 2.28.0
- **Persistent Storage:** localStorage
- **Styling:** Custom CSS

## Installation and Setup
1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/nested-comments-system.git

2. **Navigate to the project directory:**
   ```bash
   cd nested-comments-system
   
3. **Install the dependencies:**
   ```bash
   npm install
   
4. **Start the development server:**
   ```bash
   npm start
   
5. **Open the application:**
  Visit http://localhost:3000 in your browser.  

  **Usage :**
Adding a Comment: Use the form at the top of the page to add a comment. Enter your name and the comment text, then click "Post Comment."
Replying to a Comment: Click "Reply" under any comment to respond. Enter your details and reply, then submit.
Editing a Comment: Click the "Edit" button next to your comment, modify the text, and save it.
Deleting a Comment: Click the "X" button to delete a comment. The comment and its nested replies will be removed.
Sorting Comments: The comment section supports sorting by newest or oldest.
Project Structure
java

 ```bash
 nested-comments-system/
 ├── public/
 │   ├── index.html
 │   └── favicon.ico
 ├── src/
 │   ├── components/
 │   │   ├── Comment.js
 │   │   ├── CommentForm.js
 │   ├── context/
 │   │   └── CommentContext.js
 │   ├── styles/
 │   │   └── styles.css
 │   ├── App.js
 │   └── index.js
 ├── package.json
 └── README.md
