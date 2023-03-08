const VideoSection = ({ videoKey }) => {
  return (
    <div className="w-full mx-auto my-10 dark:shadow-dark shadow-white">
      <div className="ratio ratio-16x9">
        <iframe
          className="rounded-xl"
          src={`https://www.youtube.com/embed/${videoKey}?autoplay=1&mute=1`}
          title="YouTube video"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default VideoSection;
