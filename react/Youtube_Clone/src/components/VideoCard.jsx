import React from "react";

function VideoCard({
  thumbnail,
  channelImg,
  title,
  channelName,
  views,
  timeAgo,
}) {
  return (
    <div className="video">
      <a className="thumbnail-link" href="#">
        <img src={thumbnail} className="thumbnail" alt={title} />
        <div className="timer">10:10</div>
      </a>
      <div className="information">
        <a href="#">
          <img src={channelImg} alt={channelName} className="channel-img" />
        </a>
        <div className="metadata">
          <h4 className="title">
            <a href="#">{title}</a>
          </h4>
          <p className="channel-name">
            <a href="#">{channelName}</a>
          </p>
          <div className="view-counter">
            <span>{views}</span> • <span>{timeAgo}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoCard;
