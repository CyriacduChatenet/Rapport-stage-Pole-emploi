import { Route, Routes } from 'react-router-dom';
import { HomePage } from '../../pages/home/home';
import { AboutPage } from '../../pages/about/about';
import { ContactPage } from '../../pages/contact/contact';
import { ArticlePage } from '../../pages/article/article';
export const RouteManager = () => {
    return (
        <>
        <Routes>
            <Route path = '/' element={<HomePage/>}/>
            <Route path = '/about' element={<AboutPage/>}/>
            <Route path = '/contact' element={<ContactPage/>}/>
            <Route path = '/article' element={<ArticlePage/>}/>
        </Routes>
        </>
    )
}