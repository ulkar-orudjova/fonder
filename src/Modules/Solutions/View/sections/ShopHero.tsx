import type { FC } from "react";
import ArrowDown from "../../../../assets/images/icons/arrow-down.svg?react"

interface ShopHeroProps {
  onShopClick: () => void;
}

const ShopHero: FC<ShopHeroProps> = ({onShopClick}) => {
  return (
     <section className="shop-hero">
        <div className="container">
            <div className="row">
                <h1 className="title">Shop Solutions for Growing brands</h1>
                <p className="sub-title">❶ Build your cart   ❷ Connect with our team   ❸ Start your project</p>
            </div>
            <button onClick={onShopClick} className="shop-hero-btn" >
                <ArrowDown/>
            </button>
        </div>
    </section>
  )
}

export default ShopHero