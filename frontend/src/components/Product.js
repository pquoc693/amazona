import React from 'react';
import { Link } from 'react-router-dom';
import Rating from './Rating';

export default function Product(props) {
  const { product } = props;
  return (
    // <div key={product._id} className="card">
    //   <Link to={`/product/${product._id}`}>
    //     <img className="medium" src={product.image} alt={product.name} />
    //   </Link>
    //   <div className="card-body">
    //     <Link to={`/product/${product._id}`}>
    //       <h2>{product.name}</h2>
    //     </Link>
    //     <Rating
    //       rating={product.rating}
    //       numReviews={product.numReviews}
    //     ></Rating>
    //     <div className="row">
    //       <div className="price">${product.price}</div>
    //       <div>
    //         {/* <Link to={`/seller/${product.seller._id}`}>
    //           {product.seller.seller.name}
    //         </Link> */}
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className="card" key={product._id}>
                <a href={`product/${product._id}`}>
                  <img className="medium" src={product.image} alt="product" />
                </a>
                <div className="card-body">
                  <a href={`product/${product._id}`}>
                    <h2>{product.name}</h2>
                  </a>
                  {/* <div className="rating">
                    <span> <i className="fa fa-star"></i> </span>
                    <span> <i className="fa fa-star"></i> </span>
                    <span> <i className="fa fa-star"></i> </span>
                    <span> <i className="fa fa-star"></i> </span>
                    <span> <i className="fa fa-star"></i> </span>
                  </div> */}
                  <Rating rating={product.rating}
                            numReViews={product.numReViews}/>
                  <div className="price">{product.price}</div>
                </div>
              </div>
  );
}