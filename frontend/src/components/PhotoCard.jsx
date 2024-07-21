

const PhotoCard = ({src='#', alt='photo', dataIndex=0}) => {
  return (
    <div className="img-wrapper" data-index={dataIndex}>
      <a href={src} data-index={dataIndex} data-alt={alt}>
        <img src={src} className="img-responsive" alt={alt}/>
      </a>
      <div className="img-overlay" >
        <i className="fa fa-plus-circle" aria-hidden="true"></i>
      </div>
    </div>
  );
};

export default PhotoCard;