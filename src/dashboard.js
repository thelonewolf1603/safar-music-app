import React, { useContext, useState, useEffect } from "react";
import { SigninContext } from "./datacontext";
import { withRouter, useHistory } from "react-router-dom";
import youtube from "./youtube";
import "./dashboard.css";

const Dashboard = (props) => {
  const { currentUser, logout, setLogin } = useContext(SigninContext);
  const [searchval, setSearch] = useState("");
  const [videos, setVideos] = useState([]);
  const [srcurl, setUrl] = useState("");

  async function handleSearch(e) {
    e.preventDefault();
    const response = await youtube.get("/search", {
      params: {
        q: searchval,
      },
    });
    console.log(response.data.items);
    setVideos(response.data.items);
    setUrl(
      "https://www.youtube.com/embed/" + response.data.items[0].id.videoId
    );
  }

  useEffect(() => {
    setLogin(true);
  });
  const [error, setError] = useState("");

  return (
    <div className="dashboard-outer">
      <div className="dashboard-left">
        <div className="video-player">
          {<iframe src={srcurl} allowFullScreen title="Video player" />}
        </div>

        <form className="video-search-form" onSubmit={handleSearch}>
          <input
            className="video-search"
            type="text"
            value={searchval}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
          <button
            className="video-search-button"
            type="submit"
            disabled={!searchval}
          >
            Search
          </button>
        </form>
      </div>
      <div className="dashboard-right">
        <ul className="search-results">
          {videos.map((video) => (
            <li className="search-item">
              <img
                src={video.snippet.thumbnails.high.url}
                onClick={() => {
                  setUrl("https://www.youtube.com/embed/" + video.id.videoId);
                }}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default withRouter(Dashboard);
