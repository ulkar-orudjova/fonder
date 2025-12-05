import { Link } from "react-router-dom";
import ArrowRight from "../../../../assets/images/icons/arrow-right.svg?react";
import { forwardRef } from "react";
import type { IProduct } from "../../Models/ShopModel";

interface ShopProductsProps {
  products: IProduct[];
}

const ShopProducts = forwardRef<HTMLDivElement, ShopProductsProps>(
  ({ products }, ref) => {
    return (
      <section data-aos = "fade-up"  ref={ref} className="shop-products">
        <div className="container">
          <div className="row">
            {products.map((product) => (
              <div className="product-card" key={product._id}>
                <Link to={`/shop-details/${product._id}`}>
                  <div className="card-img">
                    <img src={product.productImage} alt={product.name} />
                    <div className="card-button">
                      <ArrowRight className="arrow-right" />
                    </div>
                  </div>
                  <div className="card-info">
                    <h3 className="card-title">{product.name}</h3>
                    <div className="card-info-right">
                      <h5 className="card-price">${product.price},000</h5>
                      <p className="card-text">2 Weeks</p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
);

ShopProducts.displayName = "ShopProducts";

export default ShopProducts;
