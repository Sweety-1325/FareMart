
const OfferFlash = () => {
  return (
    <div className="container my-4 " style={{paddingTop:"40px"}} >
        <h2 className="my-4">Offer Zone</h2>
      <div id="carouselExampleCaptions" className="carousel slide "  
      style={{justifyContent:"center",margin:"0 auto",display:"flex",maxHeight:"600px",maxWidth:"700px"}}>
        <div className="carousel-indicators ">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner my-2" style={{objectFit: "contain",height:"500px",width:"800px"}}>
          <div className="carousel-item active " style={{height:"500px",width:"700px"}}>
            <img src="https://images.unsplash.com/photo-1607082349566-187342175e2f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHNhbGUlMjBwaGFtcGxldHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" className="d-block h-100 w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>Opens 9am to 9pm</h5>
              <p>
                Visit Fare+Mart for great savings!!
              </p>
            </div>
          </div>
          <div className="carousel-item " style={{height:"500px",width:"700px"}}>
            <img src="https://media.istockphoto.com/id/157579379/photo/grocery-coupons-iv.jpg?s=1024x1024&w=is&k=20&c=azxEJnWvp0iPoZngupzuNBS6vxWJihWDBwHKczWO21E=" className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h4 style={{color:"black"}}>Offers</h4>
              <p style={{fontWeight:"bold",color:"black"}}>
                Upto 70% off
              </p>
            </div>
          </div>
          <div className="carousel-item" style={{height:"500px",width:"700px"}}>
            <img src="https://media.istockphoto.com/id/1302359371/photo/percentage-sign-coming-out-from-yellow-megaphone-on-blue-background.jpg?b=1&s=170667a&w=0&k=20&c=c898kSnJhORiM4x_5chOsthmXmfNbkwR-GSJtZpXmMg=" className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>Walk into our store or contact us for more Details</h5>
              <p>
                faremartquery@gmail.com
              </p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};
export default OfferFlash;
