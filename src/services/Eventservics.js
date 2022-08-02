import axios from 'axios'
// single axios instance for our app (apiClient)
const apiClient = axios.create({
  baseURL: 'https://my-json-server.typicode.com/Bilalnazir777/real-world-vue3', //baseurl for all call;
  withCredentials: false,

  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json', //for authentication and configuration
  },
})

export default {
  getEvents(perpage, page) {
    return apiClient.get('/events?_limit= ' + perpage + '&_page=' + page)
  },
  getEvent(id) {
    return apiClient.get('/events/' + id)
  },
}
