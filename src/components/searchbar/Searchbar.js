// import './searchbar.css';

export const createSearchbar = ({isMessage}) =>{
    const searchBar = document.createElement('div');
    searchBar.className = 'searchbar';
    const search = document.createElement('input');
    search.type = 'text';
    search.className = 'search';
    const magnify = document.createElement('i');
    magnify.className = 'fa fa-bold fa-magnifying-glass';
    searchBar.appendChild(search);
    searchBar.appendChild(magnify);
    return searchBar;
}

{/* <div class="searchbar">
  <input type="text" class="search">
  <i class="fa fa-bold fa-magnifying-glass"></i>
</div> */}