import React from 'react';
import { useDropzone } from 'react-dropzone';
import imageCompression from 'browser-image-compression';
import { useDispatch } from 'react-redux';
import { setCompressedImages } from '../utils/imagesSlice';

const ImageDropzone = () => {
  const dispatch = useDispatch();

  const onDrop = async (acceptedFiles) => {
    const compressedImages = await Promise.all(acceptedFiles.map(async (file) => {
      const options = {
        maxSizeMB: 1,
        maxWidthOrHeight: 1920,
        useWebWorker: true
      };

    // maxSizeMB: C'est la taille maximale en mégaoctets (MB) pour l'image compressée. 
    // Dans cet exemple, la taille maximale est définie à 1 MB. Cela signifie que la bibliothèque 
    // essaiera de compresser l'image pour qu'elle ne dépasse pas cette taille.
    // maxWidthOrHeight: C'est la dimension maximale en pixels pour la largeur ou la hauteur 
    // de l'image. Si l'image originale dépasse cette dimension, elle sera redimensionnée 
    // pour que sa plus grande dimension (largeur ou hauteur) soit égale à maxWidthOrHeight, 
    // qui est ici 1920 pixels.
    // useWebWorker: Lorsque cette option est définie sur true, la compression de l'image 
    // est effectuée dans un Web Worker, ce qui peut améliorer les performances en exécutant 
    // la compression en arrière-plan sans bloquer le thread principal de l'interface utilisateur.

      try {
        const compressedFile = await imageCompression(file, options);
        return URL.createObjectURL(compressedFile);
      } catch (error) {
        console.error(error);
        return null;
      }
    }));

    dispatch(setCompressedImages(compressedImages.filter(Boolean)));
  };

  const { getRootProps, getInputProps } = useDropzone({ accept: 'image/*', onDrop });

  return (
    <div {...getRootProps()} style={{ border: '2px dashed black', padding: '20px', textAlign: 'center' }}>
      <input {...getInputProps()} />
      <p>Glissez-déposez des images ici, ou cliquez pour sélectionner des images</p>
    </div>
  );
};

export default ImageDropzone;