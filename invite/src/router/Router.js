import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { Location } from "../pages/Location";
import { Gift } from "../pages/Gift";

export const Router = () => {
  return(
    <BrowserRouter>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path={`/local`} element={<Location/>}/>
        <Route path={`/presente`} element={<Gift/>}/>
      </Routes>
    </BrowserRouter>
  )
}