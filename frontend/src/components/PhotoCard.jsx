

const PhotoCard = ({src='#', alt='photo'}) => {
  return (
    <div className="img-wrapper">
      <a href={src}>
        <img src={src} className="img-responsive"/>
      </a>
      <div className="img-overlay">
        <i className="fa fa-plus-circle" aria-hidden="true"></i>
      </div>
    </div>
  );
};

export default PhotoCard;