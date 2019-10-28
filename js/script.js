const apiUrl = 'https://api.exchangeratesapi.io/latest';
const perPage = 10;

let originalExchangeData = null;
let filteredExchangeData = null;

// Kick off the API call on page load once the page DOM has loaded
document.addEventListener('DOMContentLoaded', () => {
  onLoadApiCall();
  setUpFilter();
});

let onLoadApiCall = () => {
  fetch(apiUrl)
    .then(response => response.json())
    .then(data => processResults(data));
}

let processResults = (data) => {
  const heading = document.getElementById('heading');
  heading.innerHTML = '1 ' + currencies[data.base].description + ' equals...';

  // Store the results for use with filtering and pagination
  originalExchangeData = Object.entries(data.rates);

  // Dispaly the first perPage entries of the results and set up pagination
  displayResults();
  setUpPagination();
}

// Display results, with optional page for pagination
let displayResults = (page = 1, dataToDisplay = originalExchangeData) => {
  let thisStartItem = (page - 1) * perPage;

  const exchangeRateList = document.getElementById('rate-list');

  // Clear out existing list items
  while (exchangeRateList.lastChild) {
    exchangeRateList.removeChild(exchangeRateList.lastChild);
  }

  // Loop through the stored currency data and display it on the page
  dataToDisplay.slice(thisStartItem, thisStartItem + perPage).forEach((rate, index) => {

    let [ symbol, value ] = rate;
    let symbolDescription = currencies[symbol].description;

    let newListItem = document.createElement('li');
    newListItem.innerHTML = symbol+ ' (' + symbolDescription + '): ' + parseFloat(value).toFixed(5);
    exchangeRateList.appendChild(newListItem);
  });
}

let setUpFilter = () => {
  const filterField = document.getElementById('filter-string');

  // Filter the results list based on what the user enteres into the filter field
  filterField.addEventListener('keyup', (e) => {
    let filteredResults = filterResults(e.target.value.toUpperCase());

    displayResults(1, filteredResults);
    setUpPagination(filteredResults);
  });
}

let setUpPagination = (dataToDisplay = originalExchangeData) => {
  const pageNumberHolder = document.getElementById('page-numbers');

  // Clear out any old page numbers, such as when filtering
  while (pageNumberHolder.lastChild) {
    pageNumberHolder.removeChild(pageNumberHolder.lastChild);
  }

  for (let i = 1; i <= Math.ceil(dataToDisplay.length / perPage); i++) {
    var newPaginationLink = document.createElement('a');
    newPaginationLink.innerHTML = i;
    newPaginationLink.href = '#';
    newPaginationLink.onclick = function(e) {
      e.preventDefault();
      displayResults(i);
    };

    pageNumberHolder.appendChild(newPaginationLink);
  }
}

let filterResults = (filterString = '') => {
  return originalExchangeData.filter(rate => rate[0].includes(filterString));
}
