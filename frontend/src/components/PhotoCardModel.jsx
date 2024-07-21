
const PhotoCardModel = ({src= '#', alt="test", onModelClose=()=>{}, onLeftArrowClick=()=>{},
onRightArrowClick=()=>{}}) => {
  return (
    <div id='model'>
        <button className="close-btn btn text-white" onClick={onModelClose}><i className="fa-solid fa-xmark"></i></button>
        <div className="content">
          <button onClick={onLeftArrowClick} className="left-arrow-btn btn text-white"><i className="fas fa-angle-left"></i></button>
            <div className='card'>
            <img src={src} alt={alt} />
            </div>
          <button onClick={onRightArrowClick} className="right-arrow-btn btn text-white"><i className="fas fa-angle-right"></i></button>
        </div>
    </div>
  )
}

export default PhotoCardModel
