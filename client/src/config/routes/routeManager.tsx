import { Route, Routes } from 'react-router-dom';
import { HomePage } from '../../pages/home/home';
export const RouteManager = () => {
    return (
        <>
        <Routes>
            <Route path = '/' element={<HomePage/>}/>
        </Routes>
        </>
    )
}