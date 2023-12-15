// import './searchbar.css';

import InfoStories, { people } from "../../stories/Info.stories.js";

/**
 * creating search bar
 * @param {} param0 
 * @returns 
 */
export const createSearchbar = ({isMessage}) =>{
  const searchcontainer = document.createElement('div');
  searchcontainer.className = 'search-container';
    const searchBar = document.createElement('div');
    searchBar.className = 'searchbar';
    const search = document.createElement('input');
    search.type = 'text';
    search.className = 'search';
    let data;
    let peoplelist;
    let companies;
    let jobs;
    fetch('../../data/search.json')
    .then((response) => response.json())
    .then((json) => {
         data = json;
         peoplelist = json.search.people;
         companies = json.search.companies;
         jobs = json.search.jobs;
        }
    );
    const searchevent = document.createElement('div');
    searchevent.className = 'searchevent';
    
    search.addEventListener('input', (event) => {
      let peopleresults = [];
    let companyresults = [];
    let jobsresult = [];
    
    searchevent.innerHTML = ""
    // document.getElementsByClassName('searchevent')[0] && document.getElementsByClassName('searchevent')[0].remove();
    console.log("aaaa",peopleresults,searchevent)
    console.log(document.getElementsByClassName('info-snippet'))
      let searchString = event.target.value.toLowerCase()
      if(searchString.length)
      {
        const overlay = document.getElementById('overlay');
        overlay.classList.add('show');
        overlay.style.pointerEvents = 'none';

        searchevent.classList.remove('search-hide')
        for(let i=0;i<peoplelist.length;i++) {
          // console.log(peoplelist[i].info.name);
          if(peoplelist[i].info.name.toLowerCase().includes(searchString))
          {
            if(peopleresults.length>2)
            break
            peopleresults.push(peoplelist[i]);
          }
        }
        for(let i=0;i<companies.length;i++) {
          // console.log(peoplelist[i].info.name);
          if(companies[i].info.name.toLowerCase().includes(searchString))
          {
            if(companyresults.length>2)
            break
            companyresults.push(companies[i]);
          }
        }
        for(let i=0;i<jobs.length;i++) {
          // console.log(peoplelist[i].info.name);
          if(jobs[i].info.name.toLowerCase().includes(searchString))
          {
            if(jobsresult.length>2)
            break
            jobsresult.push(jobs[i]);
          }
        }
      } else {
        const overlay = document.getElementById('overlay');
        overlay.classList.remove('show');
        overlay.style.pointerEvents = 'auto';
        searchevent.classList.add('search-hide')
      }
      const peoplesearchresult = document.createElement('div');
      peoplesearchresult.className = 'search-result-content';
      const companyseachresult = document.createElement('div');
      companyseachresult.className = 'search-result-content';
      const jobsearchresult = document.createElement('div');
      jobsearchresult.className = 'search-result-content';
      const viewmore = document.createElement('span');
      viewmore.className = 'viewmore'
      viewmore.innerText = 'View All (2756)';
      const viewmore2 = document.createElement('span');
      viewmore2.className = 'viewmore'
      viewmore2.innerText = 'View All (2756)';
      const viewmore3 = document.createElement('span');
      viewmore3.className = 'viewmore'
      viewmore3.innerText = 'View All (2756)';
      

      const peopletitle = document.createElement('span');
      peopletitle.className = 'list-title'
      peopletitle.innerText = 'People';
      const compaytitle = document.createElement('span');
      compaytitle.className = 'list-title'
      compaytitle.innerText = 'Companies';
      const jobtitle = document.createElement('span');
      jobtitle.className = 'list-title'
      jobtitle.innerText = 'Jobs';
      peopleresults.length && peoplesearchresult.appendChild(peopletitle) 
        peopleresults.map( item => {
          let element = InfoStories.render(item)
          element.classList.add('search-snippet')
          peoplesearchresult.appendChild(element)
        })
        peopleresults.length && peoplesearchresult.appendChild(viewmore3) 
        companyresults.length && companyseachresult.appendChild(compaytitle)
          companyresults.map( item => {
            let element = InfoStories.render(item)
          element.classList.add('search-snippet')
            companyseachresult.appendChild(element)
          })
          companyresults.length && companyseachresult.appendChild(viewmore2)
          jobsresult.length && jobsearchresult.appendChild(jobtitle)
            jobsresult.map( item => {
              let element = InfoStories.render(item)
          element.classList.add('search-snippet')
              jobsearchresult.appendChild(element)
            })
            
            
            jobsresult.length && jobsearchresult.appendChild(viewmore)
              searchevent.appendChild(peoplesearchresult)
              searchevent.appendChild(companyseachresult)
              searchevent.appendChild(jobsearchresult)
        searchcontainer.appendChild(searchevent);
            
  } )
    const magnify = document.createElement('i');
    magnify.className = 'fa fa-bold fa-magnifying-glass';
    searchBar.appendChild(search);
    searchBar.appendChild(magnify);
    searchcontainer.appendChild(searchBar);

    return searchcontainer;
}