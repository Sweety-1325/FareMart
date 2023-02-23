import { Link } from "react-router-dom";
const TopProducts = () => {
  return (
    <div>
      <h2>Hot Products</h2>
      <div className="my-4 mx-4 row" style={{paddingLeft:"50px",paddingRight:"50px"}}>
        <div className="card mx-4" style={{width: " 18rem"}}>
          <img src="https://www.kiranamarket.com/pub/media/catalog/product/cache/03ef87980eaad8d4b708b267224682e1/7/1/71h8lz7xmsl._sl1500_.jpg" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title" style={{fontWeight:"bolder"}}>Dairy Milk Silk</h5>
            <h6 style={{color:"#12a32f"}}>Offer Price- 79</h6>
            <p  style={{color:"red",textDecoration:"line-through", textDecorationColor:"#12a32f"}}>MRP- 85</p>
            <Link href="#" className="btn btn-primary">
              Add to cart
            </Link>

          </div>
          
        </div>

        <div className="card mx-4" style={{width: " 18rem"}}>
          <img src="https://www.kiranamarket.com/pub/media/catalog/product/cache/03ef87980eaad8d4b708b267224682e1/7/1/71h8lz7xmsl._sl1500_.jpg" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title" style={{fontWeight:"bolder"}}>Dairy Milk Silk</h5>
            <h6 style={{color:"#12a32f"}}>Offer Price- 79</h6>
            <p  style={{color:"red",textDecoration:"line-through", textDecorationColor:"#12a32f"}}>MRP- 85</p>
            <Link href="#" className="btn btn-primary">
              Add to cart
            </Link>

          </div>
          
        </div>

        <div className="card mx-4" style={{width: " 18rem"}}>
          <img src="https://www.kiranamarket.com/pub/media/catalog/product/cache/03ef87980eaad8d4b708b267224682e1/7/1/71h8lz7xmsl._sl1500_.jpg" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title" style={{fontWeight:"bolder"}}>Dairy Milk Silk</h5>
            <h6 style={{color:"#12a32f"}}>Offer Price- 79</h6>
            <p  style={{color:"red",textDecoration:"line-through", textDecorationColor:"#12a32f"}}>MRP- 85</p>
            <Link href="#" className="btn btn-primary">
              Add to cart
            </Link>

          </div>
          
        </div>
    </div>
</div>
    
  );
};
export default TopProducts;
