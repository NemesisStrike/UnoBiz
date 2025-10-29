import { BrowserRouter, Route, Routes } from "react-router-dom"
import Dashboard from "../../src/page/dashboard/dashboard"
import DetailUmkm from "../page/detail-umkm/detail-umkm"
import ListUmkm from "../page/list-umkm/list-umkm"

const Routing = () => {
    return (
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<Dashboard/>} />
            <Route path='/detail-umkm' element={<DetailUmkm/>} />
            <Route path='/list-umkm' element={<ListUmkm/>} />
            {/* <Route path='*' element={<NotFound/>} />  */}
        </Routes>
        </BrowserRouter>
    )
}

export default Routing