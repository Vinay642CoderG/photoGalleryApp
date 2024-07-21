
const PhotoCardModel = ({src= '#', alt="test", onModelClose=()=>{}}) => {
  return (
    <div id='model'>
        <button className="close-btn btn text-white" onClick={onModelClose}><i className="fa-solid fa-xmark"></i></button>
        <div className="content">
            <div className='card'>
            <img src={src} alt={alt} />
            </div>
        </div>
    </div>
  )
}

export default PhotoCardModel
