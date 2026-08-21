// Replace this with your current active Cloudflare tunnel URL
const API_URL = "https://coverage-gis-records-warrior.trycloudflare.com";

document.addEventListener("DOMContentLoaded", () => {
    const moviesContainer = document.getElementById("movies-container");
    
    // If you are on the movies page, fetch and display the list
    if (moviesContainer) {
        fetch(`${API_URL}/api/movies`)
            .then(response => response.json())
            .then(movies => {
                moviesContainer.innerHTML = ""; // Clear loading text
                
                if (movies.length === 0) {
                    moviesContainer.innerHTML = "<p>No movies found in vault.</p>";
                    return;
                }

                movies.forEach(movie => {
                    const movieElement = document.createElement("div");
                    movieElement.className = "movie-item";
                    
                    // Create clickable link/entry for each movie
                    movieElement.innerHTML = `
                        <h3>${movie.filename}</h3>
                        <a href="${API_URL}/stream/${encodeURIComponent(movie.filename)}" target="_blank" class="watch-btn">
                            Watch / Stream
                        </a>
                    `;
                    moviesContainer.appendChild(movieElement);
                });
            })
            .catch(error => {
                console.error("Error loading movies:", error);
                moviesContainer.innerHTML = "<p>Failed to load movies from server. Make sure the Python server and tunnel are running!</p>";
            });
    }
});