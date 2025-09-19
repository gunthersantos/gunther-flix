# Gunther Flix 🎬

Gunther Flix is a **React.js web application** inspired and improved from the course by **Sujeito Programador** and his project **Prime Flix**. This application allows users to browse movies, view detailed information, save favorites, and navigate through pages with a modern interface. The app uses the [The Movie Database (TMDb) API](https://www.themoviedb.org/) to fetch up-to-date movie information.

---

## 🌟 Features

- Browse movies that are currently playing.
- View detailed information for each movie:
  - Synopsis
  - Rating
  - Backdrop image
- Save favorite movies locally using `localStorage`.
- Remove movies from the favorites list.
- Pagination to navigate between pages.
- Animated 404 error page using **Framer Motion**.

---

## 🛠 Technologies Used

- **React.js** – Main library for building the interface.
- **React Router DOM** – Page navigation.
- **Axios** – For consuming the TMDb API.
- **React Toastify** – Success and error notifications.
- **React Loading Skeleton** – Loading placeholders for movies.
- **Framer Motion** – Animation for the 404 page.
- **CSS3 / Flexbox / Grid** – Responsive styling.
- **LocalStorage** – Storing favorite movies in the browser.

---

## 🚀 Highlighted Features

### Home
- Displays currently playing movies.
- Pagination to navigate through pages.
- Loading skeletons while data is being fetched.

### Movie
- Full movie details.
- Button to save the movie to favorites.
- Direct link to the trailer on YouTube.

### Favorites
- List of saved movies.
- Option to remove movies from the list.
- Friendly message if no movies are saved yet.

### Error (404)
- Custom page for invalid URLs.
- Smooth animation using **Framer Motion**.

---

## 📁 Project Structure

<img width="252" height="850" alt="image" src="https://github.com/user-attachments/assets/6b68dd97-0c79-4d20-9675-ad1550d77980" />

---

## 📸 Screenshots

[Home Page Desktop] *Browse currently playing movies* <br>
<img width="942" height="811" alt="image" src="https://github.com/user-attachments/assets/2d88d96c-d5d3-403a-a50b-e1265d5f9da0" /> <br>
[Home Page Mobile] *Browse currently playing movies* <br>
<img width="215" height="620" alt="image" src="https://github.com/user-attachments/assets/ef26b4a5-ca21-465a-8ec8-b24483123228" /> <br>

[Movie Details Desktop] *View synopsis, rating, and trailer links* <br>
<img width="942" height="811" alt="image" src="https://github.com/user-attachments/assets/34558cbd-ca48-4a72-a572-d34ace1bb3af" /> <br>
[Movie Details Mobile] *View synopsis, rating, and trailer links* <br>
<img width="215" height="620" alt="image" src="https://github.com/user-attachments/assets/eb5575e5-50a1-4b45-b6fa-a0a377711787" />  <br>

[Favorites Desktop] *Saved and Remove favorite movies* <br>
<img width="942" height="811" alt="image" src="https://github.com/user-attachments/assets/1fed2d20-7d98-4de9-bce8-c63ebf675687" /> <br>
[Favorites Mobile] *Saved and Remove favorite movies* <br>
<img width="215" height="620" alt="image" src="https://github.com/user-attachments/assets/924d17e6-c7cc-429f-92c8-8fd7f8d0aa78" /> <br>

[404 Page Desktop] *Animated 404 page using Framer Motion* <br>
<img width="942" height="811" alt="image" src="https://github.com/user-attachments/assets/6e089dfb-a949-49fa-919f-b831d512ab61" /> <br>
[Favorites Mobile] *Animated 404 page using Framer Motion* <br>
<img width="215" height="620" alt="image" src="https://github.com/user-attachments/assets/3217fc97-040e-4e4f-9c0e-d759a900bc48" />  <br>

---

## ⚡ Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/gunther-flix.git
cd gunther-flix
Install dependencies:

bash
Copiar código
npm install
# or
yarn install
Create a .env file in the root folder with your TMDb API key:

ini
Copiar código
REACT_APP_TMDB_API_KEY=YOUR_API_KEY_HERE
Run the project:

bash
Copiar código
npm start
# or
yarn start
The app will be available at http://localhost:3000.

📌 Notes
Make sure you have a valid TMDb API key.

Favorites are saved locally in the browser using localStorage.

The project is fully responsive for all screen sizes.

💌 Contact
Developed by Gunther.
For questions or suggestions, feel free to reach out via GitHub.

🔗 Useful Links
TMDb API Documentation

React.js

React Router DOM

React Toastify

Framer Motion
