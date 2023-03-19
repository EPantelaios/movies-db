#### App was created with Vite

#### `Libraries and Tools used in the SPA:`
- React
- React Router Dom (Routing)
- React Context API (Store)
- Chakra-UI (Styling and some animations)
- Framer Motion (Page transitions and animations)
- React Icons (For some extra icons)
- Jest (For testing)
- React Testing Library (For testing)
- ESLint and Prettier (Development only)
- Docker (Containerize the app)

#### `How to run the app:` 
1) Run Development Server Locally (needs NodeJS installed) <br/>
git clone https://github.com/EPantelaios/movies-db.git <br/>
cd movies-db <br/>
npm install <br/>
npm run dev <br/>
visit localhost on port 5173

2) Run via Docker (needs Docker installed) <br/>
git clone https://github.com/EPantelaios/movies-db.git <br/>
cd movies-db <br/>
docker-compose up <br/>
visit localhost on port 5173

2) Visit url (hosted on Vercel) <br/>
https://moviesdb.epantelaios.vercel.app/


#### `App description:`
The "Movies DB" is a web application that allows users to search for movies and display detailed information about them. The app uses the OMDb API to retrieve data about movies, such as their title, year, and poster. Users can search for movies by entering a keyword in the search bar, and the app will display a list of matching results. Users can then click on a movie to view more details, including a plot summary, the director and cast, and imdb rating. The app also provides a "Favorites" feature, allowing users to save movies they like and revisit them later.

#### `Technical description:`
During the development of the "Movies DB" app, several design choices were made to create a clean and user-friendly interface. The search bar was designed to be prominent, allowing users to quickly find movies of interest. The movie results are displayed in a vertical layout using infinite scrolling feature, with each movie's poster, title, and year easily visible. The details page was designed to provide a comprehensive overview of the movie's information, with easy-to-read text and clear sections for different types of data. The Favorites feature was implemented using local storage, allowing users to save movies to their browser and access them at any time. Also, as a unique attribute so that the user can see the details of a specific movie, I use 'imdbID'.
Some problems I had to deal with are the management of the local storage when it should be executed, as well as the right management of the 'infinite scrolling' feature. Also, I had some doubts about how the ideal and most user-friendly display of the movie card with the partial information about the movie should looks like.
