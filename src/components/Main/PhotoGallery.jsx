import React from 'react'

//дарк, клиар

function PhotoGallery({image}) {



  return (

        <div className="photo-gallery">
            <img src={image} alt="sneakers" />
        </div>

  )
}

export default PhotoGallery