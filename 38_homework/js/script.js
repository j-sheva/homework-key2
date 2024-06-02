const apiKey = 'YOUR_API_KEY'; // Заміни на свій API ключ

$(document).ready(function () {
  $('#search-form').on('submit', function (event) {
    event.preventDefault();
    const query = $('#search-query').val();
    const type = $('#search-type').val();
    searchMovies(query, type, 1);
  });

  function searchMovies(query, type, page) {
    $.ajax({
      url: `http://www.omdbapi.com/?s=${query}&type=${type}&page=${page}&apikey=${apiKey}`,
      method: 'GET',
      success: function (response) {
        if (response.Response === 'True') {
          displayMovies(response.Search);
          setupPagination(response.totalResults, query, type, page);
        } else {
          $('#results').html('<p>Movie not found!</p>');
          $('#pagination').html('');
        }
      },
    });
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
    $('#results').html(movieList);
  }

  function setupPagination(totalResults, query, type, currentPage) {
    const totalPages = Math.ceil(totalResults / 10);
    let paginationHtml = '';
    for (let i = 1; i <= totalPages; i++) {
      paginationHtml += `<button onclick="searchMovies('${query}', '${type}', ${i})">${i}</button>`;
    }
    $('#pagination').html(paginationHtml);
  }
});

function showDetails(imdbID) {
  $.ajax({
    url: `http://www.omdbapi.com/?i=${imdbID}&apikey=${apiKey}`,
    method: 'GET',
    success: function (response) {
      if (response.Response === 'True') {
        const detailsHtml = `
                    <h2>${response.Title}</h2>
                    <p>${response.Plot}</p>
                    <p><strong>Year:</strong> ${response.Year}</p>
                    <p><strong>Genre:</strong> ${response.Genre}</p>
                    <p><strong>Director:</strong> ${response.Director}</p>
                `;
        $('#movie-details').html(detailsHtml);
      } else {
        $('#movie-details').html('<p>Movie details not found!</p>');
      }
    },
  });
}
