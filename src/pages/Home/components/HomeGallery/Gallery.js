import React, { useState } from 'react';

function Gallery() {
  const containerStyles = {
    padding: '85px 0',
    margin: '0 auto',
    width: '1120px',
  };

  
  const galleryWrapStyles = {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    height: '300px',
  };

  const imageStyles = {
    flex: 1,
    height: '100%',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    transition: 'flex 0.8s ease',
  };

  const imageHoverStyles = {
    flex: 7,
  };

  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleImageClick = (index) => {
    setHoveredIndex(index);
  };

  return (
    <div style={containerStyles}>
            <h3 className='text-center part-title'>Our Gallery</h3>
            <div className="divider-part">
                <div className="divider"></div>
            </div>
      <div style={galleryWrapStyles}>
        <div
          style={{
            ...imageStyles,
            ...(hoveredIndex === 0 ? imageHoverStyles : null),
            backgroundImage:
              'url("https://images.squarespace-cdn.com/content/v1/600388b4259ef06ca93a16b2/aaa65a7e-2ac1-442c-b9ed-a5d3e59450f5/Mauve+and+brown+buttercream+flowers.jpg?format=500w")',
          }}
          onClick={() => handleImageClick(0)}
        ></div>
        <div
          style={{
            ...imageStyles,
            ...(hoveredIndex === 1 ? imageHoverStyles : null),
            backgroundImage:
              'url("https://images.squarespace-cdn.com/content/v1/600388b4259ef06ca93a16b2/ba713409-7934-40d0-94de-003726a3507b/frozen.jpg?format=500w")',
          }}
          onClick={() => handleImageClick(1)}
        ></div>
        <div
          style={{
            ...imageStyles,
            ...(hoveredIndex === 2 ? imageHoverStyles : null),
            backgroundImage:
              'url("https://images.squarespace-cdn.com/content/v1/600388b4259ef06ca93a16b2/c5759880-b909-4ee2-ab5b-1671c8e097c5/81254712_180449929994461_6710083343018957549_n.jpg?format=500w")',
          }}
          onClick={() => handleImageClick(2)}
        ></div>
        <div
          style={{
            ...imageStyles,
            ...(hoveredIndex === 3 ? imageHoverStyles : null),
            backgroundImage:
              'url("https://images.squarespace-cdn.com/content/v1/600388b4259ef06ca93a16b2/dc19bfa0-5cda-41f5-8c53-c340042f40b0/145950942_906846760076638_3840988711610071958_n.jpg?format=500w")',
          }}
          onClick={() => handleImageClick(3)}
        ></div>
        <div
          style={{
            ...imageStyles,
            ...(hoveredIndex === 4 ? imageHoverStyles : null),
            backgroundImage:
              'url("https://images.squarespace-cdn.com/content/v1/600388b4259ef06ca93a16b2/bb5a322e-30e4-405a-89ec-82fa81d96cd5/First+birthday+1.jpg?format=500w")',
          }}
          onClick={() => handleImageClick(4)}
        ></div>
         <div
          style={{
            ...imageStyles,
            ...(hoveredIndex === 3 ? imageHoverStyles : null),
            backgroundImage:
              'url("https://images.squarespace-cdn.com/content/v1/600388b4259ef06ca93a16b2/d988c461-1c5e-4b47-9c42-b51c82b2e68f/pippa+cake.jpg?format=500w")',
          }}
          onClick={() => handleImageClick(3)}
        ></div>
         <div
          style={{
            ...imageStyles,
            ...(hoveredIndex === 3 ? imageHoverStyles : null),
            backgroundImage:
              'url("https://images.squarespace-cdn.com/content/v1/600388b4259ef06ca93a16b2/cbee4522-2c43-4376-bce6-9fd8809a5480/christmas.jpg?format=500w")',
          }}
          onClick={() => handleImageClick(3)}
        ></div>
         <div
          style={{
            ...imageStyles,
            ...(hoveredIndex === 3 ? imageHoverStyles : null),
            backgroundImage:
              'url("https://images.squarespace-cdn.com/content/v1/600388b4259ef06ca93a16b2/2b103a26-fd77-4290-ba0a-5b70d282cf00/bear+-+Copy.jpg?format=500w")',
          }}
          onClick={() => handleImageClick(3)}
        ></div>
         <div
          style={{
            ...imageStyles,
            ...(hoveredIndex === 3 ? imageHoverStyles : null),
            backgroundImage:
              'url("https://images.squarespace-cdn.com/content/v1/600388b4259ef06ca93a16b2/811e821a-1030-46cb-a0ce-2a7492d081eb/IMG_20200613_082041.jpg?format=500w")',
          }}
          onClick={() => handleImageClick(3)}
        ></div>
         <div
          style={{
            ...imageStyles,
            ...(hoveredIndex === 3 ? imageHoverStyles : null),
            backgroundImage:
              'url("https://images.squarespace-cdn.com/content/v1/600388b4259ef06ca93a16b2/4c904b00-51d1-4240-a686-51458ff08821/IMG_20200529_123151.jpg?format=500w")',
          }}
          onClick={() => handleImageClick(3)}
        ></div>
        <div
          style={{
            ...imageStyles,
            ...(hoveredIndex === 3 ? imageHoverStyles : null),
            backgroundImage:
              'url("https://images.squarespace-cdn.com/content/v1/600388b4259ef06ca93a16b2/45752549-b43c-4f7b-88d4-5b5b080a6340/tiffany+box.jpg?format=500w")',
          }}
          onClick={() => handleImageClick(3)}
        ></div>
        <div
          style={{
            ...imageStyles,
            ...(hoveredIndex === 3 ? imageHoverStyles : null),
            backgroundImage:
              'url("https://images.squarespace-cdn.com/content/v1/600388b4259ef06ca93a16b2/3512189a-03bc-4f10-86fa-45c402b99228/PXL_20200926_180418967.PORTRAIT-01.COVER.jpg?format=500w")',
          }}
          onClick={() => handleImageClick(3)}
        ></div>
        <div
          style={{
            ...imageStyles,
            ...(hoveredIndex === 3 ? imageHoverStyles : null),
            backgroundImage:
              'url("https://images.squarespace-cdn.com/content/v1/600388b4259ef06ca93a16b2/258e16df-65fb-4298-b142-cb6200195438/moll+bday.jpg?format=500w")',
          }}
          onClick={() => handleImageClick(3)}
        ></div>
        <div
          style={{
            ...imageStyles,
            ...(hoveredIndex === 3 ? imageHoverStyles : null),
            backgroundImage:
              'url("https://images.squarespace-cdn.com/content/v1/600388b4259ef06ca93a16b2/15cee471-13e1-47a0-b4ed-8a46d709ab84/IMG_20200829_185539.jpg?format=500w")',
          }}
          onClick={() => handleImageClick(3)}
        ></div>
        <div
          style={{
            ...imageStyles,
            ...(hoveredIndex === 3 ? imageHoverStyles : null),
            backgroundImage:
              'url("https://images.squarespace-cdn.com/content/v1/600388b4259ef06ca93a16b2/2b378267-bc7f-4063-b8ec-98f66e4fa05f/IMG_20200814_183809.jpg?format=500w")',
          }}
          onClick={() => handleImageClick(3)}
        ></div>
      </div>
    </div>
  );
}

export default Gallery;
