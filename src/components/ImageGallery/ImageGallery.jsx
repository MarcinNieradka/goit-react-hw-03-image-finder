import React, { Component } from 'react';
import clsx from 'clsx';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';

class ImageGallery extends Component {
  render() {
    const { images, onImageClick } = this.props;

    return (
      <ul className={clsx('ImageGallery')}>
        {images.map(
          ({ id, largeImageURL, webformatURL, likes, downloads, comments }) => {
            // console.log(id);
            return (
              <ImageGalleryItem
                downloads={downloads}
                likes={likes}
                key={id}
                comments={comments}
                largeImageURL={largeImageURL}
                webformatURL={webformatURL}
                onSingleImageClick={onImageClick}
              />
            );
          }
        )}
      </ul>
    );
  }
}

export default ImageGallery;
