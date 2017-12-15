import React, { Component } from 'react';

const styles = {
  album: {
    overflow: 'hidden',
    width: '220px',
    height: '270px',
    borderRadius: '0 0 2px 2px',
    boxShadow: '0 2px 2px 0 rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.10), 0 3px 1px -2px rgba(0, 0, 0, 0.2)',
    display: 'table'
  },
  imageContainer : {
    margin: '10px auto 0 auto'
  },
  image: {
    maxWidth: '100%',
    height: 'auto',
    display: 'block',
    margin: '0 auto'
  },
  albumText: {
    overflow: 'hidden',
    width: '210px',
    color: '#000'
  },
  name: {
    fontSize: '18px',
    fontWeight: 'bold',
    margin: '5px 1px',
    textAlign: 'center',
    height: '22px',
    overflow: 'hidden'
  },
  description: {
    fontSize: '13px',
    margin: '0',
    textAlign: 'center',
    height: '17px',
    overflow: 'hidden'
  }
};

export class Album extends Component {
  render() {
    return (
      <a className="album-container" style={ styles.album } href={ this.props.album.collectionViewUrl }>
        <div className="image-container" style={ styles.imageContainer }>
          <img className="img-responsive" style={ styles.image } src={ this.props.album.artworkUrl200 } alt={ this.props.album.artistName }/>
        </div>
        <div className="album-text" style={ styles.albumText }>
          <h5 className="name" style={ styles.name }>
          { this.props.album.artistName }
          </h5>
          <p className="description" style={ styles.description }>
            { this.props.album.trackName }
          </p>
        </div>
      </a>
    );
  }
}
