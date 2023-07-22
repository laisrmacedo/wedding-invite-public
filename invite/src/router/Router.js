import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { Location } from "../pages/Location";

export const Router = () => {
  return(
    <BrowserRouter>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path={`/local`} element={<Location/>}/>
      </Routes>
    </BrowserRouter>
  )
}