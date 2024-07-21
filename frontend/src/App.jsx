import React, { useRef, useState } from "react";
import "./App.css";
import PhotoCard from "./components/PhotoCard";
import PhotoCardModel from "./components/PhotoCardModel";

const photosData = [
  {src: '500.png', alt: 'photo1'},
  {src: '600.png', alt: 'photo2'},
  {src: '700.png', alt: 'photo3'},
  {src: '800.png', alt: 'photo4'},
  {src: '900.png', alt: 'photo5'},
  {src: '1000.png', alt: 'photo6'},
  {src: '1100.png', alt: 'photo7'},
  {src: '1200.png', alt: 'photo8'},
];

const App = () => {
  const currImgOverlayEle = useRef(null);
  const currModelImgIndex = useRef(-1);
  const [showModel, setShowModel] = useState(false);
  const [modelSrc, setModalData] = useState({src: '#', alt: 'img'});

  function handleImageMouseOver (e){
    const targetEle = e.target.closest('.img-wrapper')?.querySelector('.img-overlay');
    if(targetEle){
      targetEle.style.opacity = 1;
      currImgOverlayEle.current = targetEle;
    }
  }
  function handleImageMouseOut (e){
    const targetEle = e.target.closest('.img-wrapper')?.querySelector('.img-overlay');
    if(currImgOverlayEle.current && targetEle){
      currImgOverlayEle.current.style.opacity = 0;
    }
  }
  
  function handleImageClick (e){
    const targetEle = e.target.closest('.img-wrapper');
    setShowModel(true);
    if(targetEle){
      currModelImgIndex.current = parseInt(targetEle.querySelector('a')?.dataset?.index);
      setModalData({
        src: currImgOverlayEle.current.previousElementSibling.getAttribute('href'),
        alt: currImgOverlayEle.current.previousElementSibling?.dataset?.alt,
      });
    }
  }

  function onModelClose (){
    setShowModel(false)
  }

  function onLeftArrowClick(){
    if(currModelImgIndex.current > 0){
      currModelImgIndex.current-=1;
      setModalData(
        {
          src: photosData[currModelImgIndex.current].src,
          alt: photosData[currModelImgIndex.current].alt,
        }
      )
    }
  }
  function onRightArrowClick(){
    if(currModelImgIndex.current < photosData.length-1){
      currModelImgIndex.current+=1;
      setModalData({
        src: photosData[currModelImgIndex.current].src,
        alt: photosData[currModelImgIndex.current].alt,
      })
    }

  }
  return (
    <section id="gallery">
      <div className="container">
        <div id="app-title">
          <h1>My Photo Gallary</h1>
        </div>
        <div id="image-gallery" onClick={handleImageClick} onMouseOver={handleImageMouseOver} onMouseOut={handleImageMouseOut}>
          <div className="row">
            {
              photosData?.map((val, i)=>(
              <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12 image" key={'cont'+i}>
                <PhotoCard src={val.src} alt={val.alt} dataIndex={i} key={val.alt+'galary'+i} />
              </div>
              ))
            }
          </div>
        </div>
      </div>
      {
        showModel&&<PhotoCardModel src={modelSrc.src} alt={modelSrc.alt} onModelClose={onModelClose} onLeftArrowClick={onLeftArrowClick} onRightArrowClick={onRightArrowClick}/>
      }
    </section>
  );
};

export default App;
