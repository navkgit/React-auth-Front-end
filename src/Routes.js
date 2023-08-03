import { BrowserRouter as Router,Route,Routes,Navigate } from 'react-router-dom';
import { UserInfoPage } from './pages/UserInfoPage';
import LogInPage from './pages/LogInPage';
import SignUpPage from './pages/SignUpPage';
import { PrivateRoute } from './auth/PrivateRoute';

export const Routers = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<PrivateRoute> <UserInfoPage/> </PrivateRoute>} />

                <Route path='/login' element={<LogInPage />} />
                <Route path='/signup' element={<SignUpPage />} />
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </Router>
    );
}