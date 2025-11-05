import { useRef } from "react"
import ShopAbout from "./sections/ShopAbout"
import ShopCustomProject from "./sections/ShopCustomProject"
import ShopHero from "./sections/ShopHero"
import ShopProducts from "./sections/ShopProducts"


const Shop = () => {
  const productsRef = useRef<HTMLDivElement | null>(null);

  const scrollToProducts = () =>{
     productsRef.current?.scrollIntoView({behavior:"smooth"});
  };

  return (
    <>
      <ShopHero onShopClick={scrollToProducts}/>
      <ShopProducts ref={productsRef}/>
      <ShopCustomProject/>
      <ShopAbout/>
    </>
  )
}

export default Shop