import { Box, Typography } from '@mui/material';
import '../Admin/Admin.css';
import { CiMail, CiUnlock } from 'react-icons/ci';
function AdminLogin() {
    const modalStyle = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '0px solid #000',
        boxShadow: 24,
        p: 5,
        outline: 'none',
    };
    return (
        <>
        <section className="admin_login_bg">
        <div
                aria-labelledby="login-modal-title"
                aria-describedby="login-modal-description"
                className="registermodal"
            >
                <Box sx={modalStyle}>
                    <Typography variant="h6" textAlign="center">
                        Login
                    </Typography>
                    <form className="registerform">
                        <div className="registerinput">
                            <CiMail />
                            <input placeholder="Email" type="email" required />
                        </div>
                        <div className="registerinput">
                            <CiUnlock />
                            <input placeholder="Password" type="password" required />
                        </div>
                        <button class="w-100">
                            <div class="banner w-100">
                                <a href="#1" class='butn butn__new'><span>Login</span></a>
                            </div>
                        </button>
                    </form>
                </Box>
            </div>
        </section>
        </>
    )
}
export default AdminLogin;
