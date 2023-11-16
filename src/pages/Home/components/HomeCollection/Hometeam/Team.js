import React from 'react';

const YourComponent = () => {
  const cardStyle = {
    position: 'relative',
    width: '300px',
    height: '350px',
    background: '#fff',
    margin: '0 auto',
    borderRadius: '4px',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.2)',
  };

  const imgBxStyle = {
    position: 'absolute',
    top: '10px',
    left: '10px',
    bottom: '10px',
    right: '10px',
    background: '#222',
    transition: '0.5s',
    zIndex: '1',
  };

  const imgStyle = {
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  };

  const detailsStyle = {
    position: 'absolute',
    left: '10px',
    right: '10px',
    bottom: '10px',
    height: '60px',
    textAlign: 'center',
  };

  const h2Style = {
    margin: '0',
    padding: '0',
    fontWeight: '600',
    fontSize: '20px',
    color: '#777',
    textTransform: 'uppercase',
  };

  const spanStyle = {
    fontWeight: '500',
    fontSize: '16px',
    color: '#f38695',
    display: 'block',
    marginTop: '5px',
  };

  return (
    <div className="body">
      <div className="box">
        <div style={cardStyle}>
          <div style={imgBxStyle}>
            <img
              src="https://images.unsplash.com/photo-1532123675048-773bd75df1b4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
              alt="images"
              style={imgStyle}
            />
          </div>
          <div style={detailsStyle}>
            <h2 style={h2Style}>
              SomeOne Famous
              <br />
              <span style={spanStyle}>Director</span>
            </h2>
          </div>
        </div>

        <div style={cardStyle}>
          <div style={imgBxStyle}>
            <img
              src="https://images.unsplash.com/photo-1549417229-aa67d3263c09?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
              alt="images"
              style={imgStyle}
            />
          </div>
          <div style={detailsStyle}>
            <h2 style={h2Style}>
              SomeOne Famous
              <br />
              <span style={spanStyle}>Producer</span>
            </h2>
          </div>
        </div>

        <div style={cardStyle}>
          <div style={imgBxStyle}>
            <img
              src="https://images.unsplash.com/photo-1548094878-84ced0f6896d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
              alt="images"
              style={imgStyle}
            />
          </div>
          <div style={detailsStyle}>
            <h2 style={h2Style}>
              SomeOne Famous
              <br />
              <span style={spanStyle}>Actor</span>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YourComponent;
