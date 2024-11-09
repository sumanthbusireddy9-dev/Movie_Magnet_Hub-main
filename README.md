I have implemented the website using Replit IDE. The backend files are pushed to a different repository - https://github.com/Vennela-Vasireddy/Movie_Magnet_Hub_Back_End

Movie Review Website

Summary:

This full-stack web application empowers users to explore popular movies, search for specific titles, view their reviews, and contribute their own thoughts and opinions. It seamlessly integrates with the TMDB API for movie data and utilizes a robust MongoDB database to manage user-generated reviews.

Key Features:

Displays a grid of popular movies, paginated for efficient browsing.
Provides a search functionality to locate movies by title.
Movie Details:
Presents movie title, poster image, and a link to view reviews.
Reviews:
Displays user-submitted reviews for each movie, allowing users to share their perspectives.
Enables users to create new reviews with their username and review text.
Allows users to edit or delete their own reviews, fostering a sense of ownership and control.
Backend API:
Offers a RESTful API for front-end interaction with review data, ensuring a well-structured and maintainable codebase.
MongoDB Integration:
Stores and retrieves reviews efficiently using a flexible NoSQL database, accommodating potential growth and future feature additions.

Technology Stack:

Front-End: HTML5, CSS, Bootstrap 5, JavaScript, Fetch API
Back-End: Node.js, Express.js, MongoDB

For a clear understanding of project structure 

In the provided code:
JavaScript fetches movie data from the TMDB API and creates movie card elements.
HTML elements (div, img, h6, etc.) are used to construct the visual structure of the cards.

API: 
Endpoints represent different things you can ask the API to do or provide.
Responses from endpoints are often in JSON format, easily readable for both humans and machines.
Used JavaScript's fetch function to send requests to these endpoints and retrieve data.

In the TMDB API:
There are 2 endpoints 
1. apiLink endpoint:
It's a specific URL - When you use this endpoint (make a request to it), you'll receive a list of popular movies.
2. searchApi endpoint:
It's a URL with a placeholder - When you make a request with a filled-in query, you'll receive search results matching that title.
There's no strict maximum number of API endpoints in a project
