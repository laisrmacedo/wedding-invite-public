import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { Location } from "../pages/Location";
import { Gift } from "../pages/Gift";
import { Presence } from "../pages/Presence";

export const Router = () => {
  return(
    <BrowserRouter>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path={`/local`} element={<Location/>}/>
        <Route path={`/presentes`} element={<Gift/>}/>
        <Route path={`/confirmacao`} element={<Presence/>}/>
      </Routes>
    </BrowserRouter>
  )
}