import axios from 'axios';
const token ="eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMWJmZGRjMjliYzNkNjY2NmU2ZDA5YTgwZGQ4ZjcyZiIsInN1YiI6IjY2MjhhMmMxNGE0YmY2MDE4ODc3M2YzMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.li3BgMoXLhR2N9vDQVnDpMmeRO3gY81oTDh-vMgDF2k";

export function movie() {
    return axios.get(process.env.VUE_APP_ENDPOINT + '/movie/popular' , {
      headers: {
        Authorization:`Bearer ${token}`,
      },
    });
  }
  

  export function getGenre() {
    return axios.get(process.env.VUE_APP_ENDPOINT + '/genre/movie/list' , {
      headers: {
        Authorization:`Bearer ${token}`,
      },
    });
    
  }

  export function getMovie(movieId, params) {
    return axios.get(`${process.env.VUE_APP_ENDPOINT}/movie/${movieId}`, {
      params: params ,
      headers: {
        Authorization: `Bearer ${token}`,
      },
      // Pass the params object to the params property of the axios config
    });
  }
  
  export function fetchSearch(term) {
    return axios.get(process.env.VUE_APP_ENDPOINT + '/search/movie?query=' + term, {
      headers: {
        Authorization:`Bearer ${token}`,
      },
    });
    
  }
  export function getPerson(page) {
    return axios.get(process.env.VUE_APP_ENDPOINT + '/person/popular?page='+ page, {
      headers: {
        Authorization:`Bearer ${token}`,
      },
    });
    
  }
  export function getPersonDetails(person_id) {
    return axios.get(`${process.env.VUE_APP_ENDPOINT}/person/${person_id}`, {
      headers: {
        Authorization:`Bearer ${token}`,
      },
    });
    
  }

  export function getPersonDetailsCredits(person_id, combined_credits) {
    return axios.get(`${process.env.VUE_APP_ENDPOINT}/person/${person_id}/${combined_credits}` , {
      
      headers: {
        Authorization:`Bearer ${token}`,
      },
    });
    
  }

  export function getUpcomingMovie() {
    return axios.get(process.env.VUE_APP_ENDPOINT + '/movie/upcoming', {
      headers: {
        Authorization:`Bearer ${token}`,
      },
    });
    
  }