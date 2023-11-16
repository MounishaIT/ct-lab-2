import React from 'react';

const YourComponent = () => {
  const containerStyle = {
    boxSizing: 'border-box',
    padding: 0,
    margin: 0,
  };

  const bodyStyle = {
    width: '80%', // Adjust the width here
    height: '100vh',
    margin: '0px auto',
    fontFamily: 'poppins',
  };

  const headerStyle = {
    height: '20%',
    display: 'flex',
    alignItems: 'center',
    columnGap: '50px',
  };

  const sectionStyle = {
    flex: '1',
  };

  const titleStyle = {
    fontSize: '36px',
  };

  const contentStyle = {
    fontSize: '16px',
    textTransform: 'uppercase',
  };

  const pStyle = {
    fontSize: '14px',
  };

  const mainStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    columnGap: '50px',
    rowGap: '70px',
    padding: '50px 0px',
  };

  const profileStyle = {
    display: 'flex',
    justifyContent: 'center',
    position: 'relative',
  };

  const figureStyle = {
    width: '85%',
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
  };

  const imgStyle = {
    width: '80%',
    borderRadius: '50%',
  };

  const figcaptionStyle = {
    fontSize: '16px',
    fontWeight: '500',
    marginTop: '12px',
    textTransform: 'capitalize',
    cursor: 'pointer',
  };

  const afterStyle = {
    content: 'attr(data-value)',
    width: '100%',
    transformOrigin: '0 0',
    transform: 'rotate(90deg)',
    position: 'absolute',
    textTransform: 'uppercase',
    fontSize: '12px',
    right: '-92%',
  };

  const footerStyle = {
    height: '5%',
    color: '#BDBDBD',
    display: 'grid',
    placeItems: 'center',
    fontSize: '12px',
  };

  const linkStyle = {
    textDecoration: 'none',
    color: 'inherit',
  };

  return (
    <div style={containerStyle}>
      <header style={headerStyle}>
        <div style={sectionStyle} className="title">
          <h3 style={titleStyle}>The creative crew</h3>
        </div>
        <div style={sectionStyle} className="content">
          <h5 style={contentStyle}>who we are</h5>
          <p style={pStyle}>
            We are a team of creatively diverse, driven, innovative individuals working in various locations from around the world.
          </p>
        </div>
      </header>

      <main style={mainStyle}>
        <div style={profileStyle} className="profile">
          <figure style={figureStyle} data-value="product owner">
            <img src="https://rvs-team-page.onrender.com/photo1.png" alt="" style={imgStyle} />
            <figcaption style={figcaptionStyle}>bill mahoney</figcaption>
          </figure>
        </div>

        <div style={profileStyle} className="profile">
          <figure style={figureStyle} data-value="art director">
            <img src="https://rvs-team-page.onrender.com/photo2.png" alt="" style={imgStyle} />
            <figcaption style={figcaptionStyle}>saba cabrera</figcaption>
          </figure>
        </div>

        <div style={profileStyle} className="profile">
          <figure style={figureStyle} data-value="tech lead">
            <img src="https://rvs-team-page.onrender.com/photo3.png" alt="" style={imgStyle} />
            <figcaption style={figcaptionStyle}>shae le</figcaption>
          </figure>
        </div>

        <div style={profileStyle} className="profile">
          <figure style={figureStyle} data-value="ux designer">
            <img src="https://rvs-team-page.onrender.com/photo4.png" alt="" style={imgStyle} />
            <figcaption style={figcaptionStyle}>skylah lu</figcaption>
          </figure>
        </div>

        <div style={profileStyle} className="profile">
          <figure style={figureStyle} data-value="developer">
            <img src="https://rvs-team-page.onrender.com/photo5.png" alt="" style={imgStyle} />
            <figcaption style={figcaptionStyle}>griff richards</figcaption>
          </figure>
        </div>

        <div style={profileStyle} className="profile">
          <figure style={figureStyle} data-value="developer">
            <img src="https://rvs-team-page.onrender.com/photo6.png" alt="" style={imgStyle} />
            <figcaption style={figcaptionStyle}>stan john</figcaption>
          </figure>
        </div>
      </main>

      <footer style={footerStyle}>
        <p>
          Created by - <a href="https://vetri-suriya.web.app/" style={linkStyle}><span>Vetri Suriya</span></a>
        </p>
      </footer>
    </div>
  );
};

export default YourComponent;
