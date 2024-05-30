# Instagram Clone

This project is a practice exercise for building an Instagram clone using ReactJS, utilizing fake APIs to fetch data. Below is a list of screens and tasks to guide the development process.

## Screens

1. **Login Screen**
   - User authentication (login form)
   - Error handling for invalid credentials

2. **Signup Screen**
   - User registration form
   - Input validation and error handling

3. **Home Feed**
   - Display a list of posts
   - Infinite scrolling for loading more posts
   - Like, comment, and share buttons
   - Navigation bar (home, search, profile)

4. **Post Detail Screen**
   - Display a single post with comments
   - Add new comments
   - Like the post

5. **Create Post Screen**
   - Form to upload an image and add a caption
   - Image preview before posting

6. **Profile Screen**
   - Display user’s posts
   - Edit profile button
   - Followers and following count

7. **Edit Profile Screen**
   - Form to update user details (profile picture, bio, etc.)

8. **Search Screen**
   - Search bar to find users or posts
   - Display search results

9. **Notifications Screen**
   - List of notifications (likes, comments, follows)

## Tasks

1. **Set Up Project**
   - Initialize a new React project using Create React App or Vite
   - Install necessary dependencies (React Router, Axios, etc.)

2. **Create Fake API**
   - Use a service like JSONPlaceholder or Mocky to create fake endpoints
   - Set up Axios or Fetch to make requests to the fake API

3. **Authentication**
   - Implement login and signup forms
   - Set up state management for user authentication (e.g., using Context API or Redux)

4. **Routing**
   - Configure React Router for navigation between screens

5. **Home Feed**
   - Fetch posts from the fake API
   - Implement infinite scrolling for loading more posts
   - Add like, comment, and share functionality

6. **Post Detail**
   - Fetch single post data and comments
   - Add new comment functionality

7. **Create Post**
   - Implement image upload and caption input
   - Preview image before posting

8. **Profile**
   - Fetch user’s posts and details
   - Implement profile editing

9. **Search**
   - Implement search functionality to fetch users or posts based on input

10. **Notifications**
    - Fetch and display notifications

npm create vite@latest . -- --template react
