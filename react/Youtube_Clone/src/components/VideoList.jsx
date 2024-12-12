import React from "react";
import VideoCard from "./VideoCard";


function VideoList() {
  const videos = [
    {
      thumbnail: "https://unsplash.it/370/200",
      channelImg: "image/profile.jpg",
      title: "Vlog",
      channelName: "Atul Ranjan",
      views: "30M views",
      timeAgo: "2 weeks ago",
    },
    {
      thumbnail: "https://unsplash.it/370/200",
      channelImg: "https://unsplash.it/36/36",
      title: "Tech News",
      channelName: "Tech World",
      views: "12K views",
      timeAgo: "1 week ago",
    },
    {
      thumbnail: "https://unsplash.it/370/200",
      channelImg: "https://unsplash.it/36/36",
      title: "Tech News",
      channelName: "Tech World",
      views: "12K views",
      timeAgo: "1 week ago",
    },
    {
      thumbnail: "https://unsplash.it/370/200",
      channelImg: "https://unsplash.it/36/36",
      title: "Tech News",
      channelName: "Tech World",
      views: "12K views",
      timeAgo: "1 week ago",
    },
    {
      thumbnail: "https://unsplash.it/370/200",
      channelImg: "https://unsplash.it/36/36",
      title: "Tech News",
      channelName: "Tech World",
      views: "12K views",
      timeAgo: "1 week ago",
    },
    {
      thumbnail: "https://unsplash.it/370/200",
      channelImg: "https://unsplash.it/36/36",
      title: "Tech News",
      channelName: "Tech World",
      views: "12K views",
      timeAgo: "1 week ago",
    },
    {
      thumbnail: "https://unsplash.it/370/200",
      channelImg: "https://unsplash.it/36/36",
      title: "Tech News",
      channelName: "Tech World",
      views: "12K views",
      timeAgo: "1 week ago",
    },
    {
      thumbnail: "https://unsplash.it/370/200",
      channelImg: "https://unsplash.it/36/36",
      title: "Tech News",
      channelName: "Tech World",
      views: "12K views",
      timeAgo: "1 week ago",
    },
    {
      thumbnail: "https://unsplash.it/370/200",
      channelImg: "https://unsplash.it/36/36",
      title: "Tech News",
      channelName: "Tech World",
      views: "12K views",
      timeAgo: "1 week ago",
    },
    {
      thumbnail: "https://unsplash.it/370/200",
      channelImg: "https://unsplash.it/36/36",
      title: "Tech News",
      channelName: "Tech World",
      views: "12K views",
      timeAgo: "1 week ago",
    },
  ];

  return (
    <div className="video-wrapper">
      {videos.map((video, index) => (
        <VideoCard key={index} {...video} />
      ))}
    </div>
  );
}

export default VideoList;
