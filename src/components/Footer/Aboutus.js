import React from 'react';
import './Aboutus.css'; // Import your CSS file for styling
// Import your cake image

const AboutUs = () => {
  return (
    <div className="about-us">
      <div className="about-us-content">
        <h2>About Us</h2>
        <p>
          Welcome to Cake Delights! We are passionate about baking and bringing joy to your special moments.
          Our team of talented bakers and pastry chefs create delicious and beautifully crafted cakes for all occasions.
        </p>
        <p>
          We thank you for being a part of our sweet journey. We look forward to serving you and making your
          celebrations sweeter with our delectable cakes!
        </p>
        <h2>Our Journey</h2>
        <p>
          Our journey began in 2010 when we opened our first bakery in a small town. Since then, we have been
          dedicated to delivering the finest cakes and pastries to our valued customers. At Cake Delights, we believe in using the finest ingredients, innovative designs, and the utmost care in crafting each cake. Whether it's a birthday, wedding, anniversary, or any special event, our cakes are designed to make your moments even more memorable.
        </p>
        <h2>Baking for Our Community</h2>
        <p>
          We are more than a bakery; we are a part of your community. We take pride in supporting local farmers and businesses. With every bite of our cakes, you're also supporting the local community. Taste the difference that community love makes.
        </p>
      </div>
      <div className="about-us-image">
        <img src="https://media.istockphoto.com/id/1213165121/photo/hispanic-american-female-baker-decorating-vegan-cupcakes.webp?b=1&s=170667a&w=0&k=20&c=eailnveA-ZB67NO1iGEaYY2rNfSkO8Y0CBXvL9HFuek=" alt="Cake" />
        <img src="https://media.istockphoto.com/id/508459346/photo/window-of-desserts-at-a-pastry-shop.webp?b=1&s=170667a&w=0&k=20&c=jtP6i0aJZjYCw2TUTl1_LItiCupSdiwwoBk8NMIltLk=" alt="Community-Focused Bakery" />
      </div>
    </div>
  );
};

export default AboutUs;
