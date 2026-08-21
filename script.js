const API_URL = "https://coverage-gis-records-warrior.trycloudflare.com";

fetch(`${API_URL}/api/movies`)
  .then(response => response.json())
  .then(movies => {
      console.log("Loaded movies:", movies);
      // Add your code to display movies on the page here
  });