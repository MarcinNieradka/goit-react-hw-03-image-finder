import React, { Component } from 'react';
import { fetchImages } from 'services';
import ImageGallery from '../ImageGallery/ImageGallery';
import Button from '../Button/Button';
import Loader from '../Loader/Loader';
import Modal from '../Modal/Modal';
import clsx from 'clsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

class Searchbar extends Component {
  state = {
    searchValue: '',
    images: [],
    page: 1,
    isLoading: false,
    error: null,
    showModal: false,
    selectedImage: null,
  };

  handleChange = e => {
    this.setState({ searchValue: e.target.value });
  };

  handleFormSubmit = async e => {
    e.preventDefault();
    const { searchValue } = this.state;
    if (searchValue.trim() !== '') {
      this.setState({ isLoading: true, error: null, page: 1, images: [] });
      try {
        await this.fetchData(searchValue);
      } catch (error) {
        this.setState({ error, isLoading: false });
      }
    }
  };

  handleLoadMore = async () => {
    const { searchValue, page } = this.state;
    this.setState({ isLoading: true, error: null });
    try {
      await this.fetchData(searchValue, page + 1);
    } catch (error) {
      this.setState({ error, isLoading: false });
    }
  };

  handleImageClick = image => {
    this.setState({ showModal: true, selectedImage: image });
  };

  handleCloseModal = () => {
    this.setState({ showModal: false, selectedImage: null });
  };

  fetchData = async (searchValue, page = 1) => {
    const newImages = await fetchImages(searchValue, page);
    this.setState(prevState => ({
      images: [...prevState.images, ...newImages],
      isLoading: false,
      page,
    }));
  };

  render() {
    const { searchValue, images, isLoading, error, showModal, selectedImage } =
      this.state;

    const hasImages = images.length > 0;

    return (
      <div className="container">
        <header className={clsx('Searchbar')}>
          <form className={clsx('SearchForm')} onSubmit={this.handleFormSubmit}>
            <input
              className={clsx('SearchForm-input')}
              onChange={this.handleChange}
              type="text"
              name="searchValue"
              value={searchValue}
            />
            <button className={clsx('SearchForm-button')} type="submit">
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </form>
        </header>
        {isLoading && <Loader />}
        {error && <div>Oops, something went wrong</div>}
        {hasImages && (
          <ImageGallery images={images} onImageClick={this.handleImageClick} />
        )}
        {hasImages && !isLoading && !error && (
          <Button onClick={this.handleLoadMore} />
        )}
        {showModal && (
          <Modal image={selectedImage} onCloseModal={this.handleCloseModal} />
        )}
      </div>
    );
  }
}

export default Searchbar;
