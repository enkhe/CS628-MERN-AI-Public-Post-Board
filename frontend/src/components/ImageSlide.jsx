import Carousel from 'react-bootstrap/Carousel';
import Modal from 'react-bootstrap/Modal';
import {  useState } from 'react';

function ImageSlide({images}) {
  const [selectedImage,setSelectedImage]=useState(0)
  const [showModal,setShowModal]=useState(false)
  
    return (
    <div>
        <Carousel slide={false} interval={null} onSelect={setSelectedImage}>
        
        {images?.map((image)=>{
                return (
                    <Carousel.Item>
                        <img src={image} alt="Can't show" width="500px" height="300px" onClick={()=>setShowModal(true)}/>
                    </Carousel.Item>
                )
        })}
        </Carousel>
        <Modal
            show={showModal}
            style={{textAlign:"center"}}
            onHide={()=>setShowModal(false)}
            size="xl"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton> </Modal.Header>
            <Modal.Body>
            <img src={images?.[selectedImage]} alt="Can't show" style={{maxWidth:"100%", maxHeight:"100%"}}/>
            </Modal.Body>
    
            </Modal>
  </div>
  );
}

export default ImageSlide;