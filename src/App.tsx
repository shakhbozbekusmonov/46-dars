import SiteFooter from '@/components/SiteFooter';
import SiteHeader from '@/components/SiteHeader';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

const App = () => {
    return (
        <BrowserRouter>
            <SiteHeader />
            <Routes>
                <Route path="/menyu" element={<div>Menyu</div>} />
                <Route path="/" element={<Navigate to="/menyu" />} />
                <Route path="/bolalar-uchun" element={<div>Bolalar uchun</div>} />
                <Route path="/filiallar" element={<div>Filiallar</div>} />

                <Route path="/cart" element={<div>Cart</div>} />

                <Route path="*" element={<div>404</div>} />
            </Routes>
            <SiteFooter />
        </BrowserRouter>
    );
};

export default App;
