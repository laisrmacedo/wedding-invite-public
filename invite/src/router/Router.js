import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { Location } from "../pages/Location";
import { Gift } from "../pages/Gift";
import { Presence } from "../pages/Presence";
import { NewGuest } from "../pages/NewGuest";
import { Error } from "../pages/Error";

export const Router = () => {
  return(
    <BrowserRouter>
      <Routes>
        {/* <Route index element={<Home/>}/> */}
        <Route path={`/:name/:n`} element={<Home/>}/>
        <Route path={`/:name/:n/local`} element={<Location/>}/>
        <Route path={`/:name/:n/presentes`} element={<Gift/>}/>
        <Route path={`/:name/:n/confirmacao`} element={<Presence/>}/>
        <Route path={`/novo-convidado/b9iIKbnSmD4M`} element={<NewGuest/>}/>
        <Route path='*' element={<Error/>}/>
      </Routes>
    </BrowserRouter>
  )
}