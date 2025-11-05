import { Route, Routes } from "react-router-dom"
import pages from "../constants/pagesList"


const FonderRouter = () => {
  return (
    <Routes>
       {pages.filter(page => page.is_visible).map((item) => (
        <Route path={item.path} element={item.element}/>
       ))}
    </Routes>
  )
}

export default FonderRouter