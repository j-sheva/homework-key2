const apiKey = '342419ad';
document.addEventListener('DOMContentLoaded', () => {
  document
    .getElementById('search-form')
    .addEventListener('submit', function (event) {
      event.preventDefault();
      const query = document.getElementById('search-query').value;
      const type = document.getElementById('search-type').value;
      searchMovies(query, type, 1);
    });

  async function searchMovies(query, type, page) {
    try {
      const response = await fetch(
        `http://www.omdbapi.com/?s=${query}&type=${type}&page=${page}&apikey=${apiKey}`
      );
      const data = await response.json();

      if (data.Response === 'True') {
        displayMovies(data.Search);
        setupPagination(data.totalResults, query, type, page);
      } else {
        document.getElementById('results').innerHTML =
          '<p>Movie not found!</p>';
        document.getElementById('pagination').innerHTML = '';
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  function displayMovies(movies) {
    const movieList = movies
      .map(
        (movie) => `
            <div class="movie-item">
                <span>${movie.Title} (${movie.Year})</span>
                <button onclick="showDetails('${movie.imdbID}')">Details</button>
            </div>
        `
      )
      .join('');
    document.getElementById('results').innerHTML = movieList;
  }

  function setupPagination(totalResults, query, type, currentPage) {
    const totalPages = Math.ceil(totalResults / 10);
    let paginationHtml = '';
    for (let i = 1; i <= totalPages; i++) {
      paginationHtml += `<button onclick="searchMovies('${query}', '${type}', ${i})">${i}</button>`;
    }
    document.getElementById('pagination').innerHTML = paginationHtml;
  }
});

async function showDetails(imdbID) {
  try {
    const response = await fetch(
      `http://www.omdbapi.com/?i=${imdbID}&apikey=${apiKey}`
    );
    const data = await response.json();

    if (data.Response === 'True') {
      const detailsHtml = `
                <h2>${data.Title}</h2>
                <p>${data.Plot}</p>
                <p><strong>Year:</strong> ${data.Year}</p>
                <p><strong>Genre:</strong> ${data.Genre}</p>
                <p><strong>Director:</strong> ${data.Director}</p>
            `;
      document.getElementById('movie-details').innerHTML = detailsHtml;
    } else {
      document.getElementById('movie-details').innerHTML =
        '<p>Movie details not found!</p>';
    }
  } catch (error) {
    console.error('Error fetching movie details:', error);
  }
}
