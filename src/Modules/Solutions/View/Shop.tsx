import { useEffect, useRef, useState } from "react"
import ShopAbout from "./sections/ShopAbout"
import ShopCustomProject from "./sections/ShopCustomProject"
import ShopHero from "./sections/ShopHero"
import ShopProducts from "./sections/ShopProducts"
import { ShopService } from "../Service/ShopService"
import type { IProduct } from "../Models/ShopModel"
import Loading from "../../../components/Loading"


const Shop = () => {
  const productsRef = useRef<HTMLDivElement | null>(null);

  const scrollToProducts = () =>{
     productsRef.current?.scrollIntoView({behavior:"smooth"});
  };

const [loading, setLoading] = useState(false);
const [products, setProducts] = useState<IProduct[]>([]);

const getData = async () =>{
  setLoading(true)
  try{
    const res = await ShopService.productList()
    setProducts(res)
  } catch(error){
    console.log(error)
  }finally{
    setLoading(false)
  }
};

useEffect(() =>{
  if(products.length === 0){
    getData();
  }
}, []);

if(loading){
  return <Loading/>
}

  return (
    <>
      <ShopHero onShopClick={scrollToProducts}/>
      <ShopProducts  ref={productsRef} products={products} />
      <ShopCustomProject/>
      <ShopAbout/>
    </>
  )
}

export default Shop