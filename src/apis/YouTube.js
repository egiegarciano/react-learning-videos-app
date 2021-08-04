import axios from 'axios';

const KEY = 'AIzaSyCw15qeacGrkFtNgPVsvYXCd9pE7brDNY8';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY
  }
});
