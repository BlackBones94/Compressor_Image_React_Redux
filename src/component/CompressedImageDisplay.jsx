import React from 'react';
import { useSelector, useDispatch  } from 'react-redux';
import { removeCompressedImage } from '../utils/imagesSlice';
import Button from './Buttons';


const CompressedImagesDisplay = () => {
    const dispatch = useDispatch();
    const compressedImages = useSelector(state => state.images.compressedImages);
  
    const downloadImage = (imageSrc, imageName) => {
      const link = document.createElement("a");
      link.href = imageSrc;
      link.download = imageName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    };
  
    const handleRemoveImage = (index) => {
      dispatch(removeCompressedImage(index));
    };
  
    return (
      <div>
        {compressedImages.map((image, index) => (
          <div key={index} className="image-container">
            <img src={image} alt={`Compressed #${index}`}/>
            <div className="button-group">
                <Button 
                  onClick={() => downloadImage(image, `compressed_image_${index}.png`)}
                  className="button download-button"
                >
                  Télécharger
                </Button>
                <Button 
                  onClick={() => handleRemoveImage(index)}
                  className="button delete-button"
                >
                  Supprimer
                </Button>

            </div>

          </div>
        ))}
      </div>
    );
  };
  
  export default CompressedImagesDisplay;