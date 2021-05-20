import axios from "axios";
const KEY = process.env.REACT_APP_YOUTUBE_API; // mention your youtube API key here

const youtube = axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3/",
  params: {
    part: "snippet",
    maxResults: 5,
    key: "AIzaSyAbjKDFsgkjPWJAZqc1y8-_HeiFLldEF6k",
  },
});

export default youtube;
