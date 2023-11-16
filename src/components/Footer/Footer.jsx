import React from 'react';



const YourComponent = () => {
  return (
    <div>
      <style>
        {`
          .main {
            height: 1vh;
          }

          .hover-effect1 {
            min-height: 20px;
            background: ;
            text-align: center;
          }

          .hover-effect1 ul {
            padding-top: 1px;
          }

          .hover-effect1 ul li {
            display: inline-block;
          }

          .hover-effect1 ul li a {
            font-size: 30px;
            text-align: center;
            color: #fff;
            margin: 0px 10px;
            line-height: 50px;
            display: inline-block;
            width: 50px;
            height: 50px;
            background: #dc3545;
            transition: all .6s ease;
          }

          .hover-effect1 ul li:hover a {
            border-radius: 50%;
            background: #dc3545;
            transform: rotate(360deg);
          }
        `}
      </style>

      <meta name="viewport" content="width=device-width" />
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
        integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
        crossOrigin="anonymous"
      />
      <script
        src="https://kit.fontawesome.com/4d0b4c932e.js"
        crossOrigin="anonymous"
      ></script>

      <div className="main"></div>
      <footer
        id="Footer"
        style={{ backgroundColor: '' }}
        className="page-footer font-small stylish-color-dark pt-4"
      >
        <div
          style={{ backgroundColor: '' }}
          className="container text-center text-md-left"
        >
          <div className="row">
            <div className="col-md-4 mx-auto">
              <h5 className="text-uppercase font-weight-bold mt-3 mb-4">
                About our Shop
              </h5>
              <hr
                className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"
                style={{ width: '70px' }}
              />
              <p>
              Our journey began with a simple mission - to craft cakes that not only taste heavenly but also look like works of art. We believe that every cake should be a masterpiece, made with love and attention to detail. Whether you're celebrating a birthday, wedding, anniversary, or any other occasion, we are here to make it sweeter and more memorable.
              </p>
            </div>
            <hr className="clearfix w-100 d-md-none" />
            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase font-weight-bold">Products</h6>
              <hr
                className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"
                style={{ width: '70px' }}
              />
              <p>
                <a href="#!">Cakes</a>
              </p>
              <p>
                <a href="#!">Chocolates</a>
              </p>
              <p>
                <a href="#!">Sweets</a>
              </p>
              <p>
                <a href="#!">Cookies</a>
              </p>
            </div>
            <hr className="clearfix w-100 d-md-none" />
            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase font-weight-bold">Links</h6>
              <hr
                className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"
                style={{ width: '70px' }}
              />
              <p>
                <a href="#!">About us</a>
              </p>
              <p>
                <a href="#!">All Items</a>
              </p>
              <p>
                <a href="#!">Trending Cakes</a>
              </p>
              <p>
                <a href="#!">Designer Cakes</a>
              </p>
              <p>
                <a href="#!">Best Seller</a>
              </p>
              <p>
                <a href="#!">Cookies</a>
              </p>
              <p>
                <a href="#!">Sweets</a>
              </p>
              <p>
                <a href="#!">Login</a>
              </p>
              <p>
                <a href="#!">Feedback</a>
              </p>
            </div>
            <hr className="clearfix w-100 d-md-none" />
            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase font-weight-bold">Contact</h6>
              <hr
                className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"
                style={{ width: '60px' }}
              />
              <p>
                <i className="fas fa-home mr-3"></i> Perundurai, Erode
              </p>
              <p>
                <i className="fas fa-envelope mr-3"></i>cakesinbakes@gmail.com
              </p>
              <p>
                <i className="fas fa-phone mr-3"></i> + 91 80254 52000
              </p>
              <p>
                <i className="fas fa-print mr-3"></i> + 91 80254 55000
              </p>
            </div>
          </div>
        </div>
        <hr />
       
        <hr style={{ margin: '0' }} />
        

        <div style={{ backgroundColor: '' }} className="footer-copyright text-center py-3">
          Copyright© 2023: Design and Develop by Mouni
        </div>
      </footer>
    </div>
  );
};

export default YourComponent;
