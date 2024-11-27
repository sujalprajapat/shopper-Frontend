import React, { useState } from 'react';
import { Box, Modal, Typography } from '@mui/material';
import { CiMail, CiPhone, CiUnlock, CiUser } from 'react-icons/ci';
function UserLogin({ isOpen, onClose }) {
    const [activeModal, setActiveModal] = useState('login');
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
            {/* Login Modal */}
            <Modal
                open={isOpen && activeModal === 'login'}
                onClose={onClose}
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
                        <a
                            href="#2"
                            className="register_link"
                            onClick={(e) => {
                                e.preventDefault();
                                setActiveModal('register');
                            }}
                        >
                            Don't have an account?
                        </a>
                    </form>
                </Box>
            </Modal>

            {/* Register Modal */}
            <Modal
                open={isOpen && activeModal === 'register'}
                onClose={onClose}
                aria-labelledby="register-modal-title"
                aria-describedby="register-modal-description"
                className="registermodal"
            >
                <Box sx={modalStyle}>
                    <Typography variant="h6" textAlign="center">
                        New Account
                    </Typography>
                    <form className="registerform">
                        <div className="registerinput">
                            <CiUser />
                            <input placeholder="Username" required />
                        </div>
                        <div className="registerinput">
                            <CiPhone />
                            <input placeholder="Phone Number" required />
                        </div>
                        <div className="registerinput">
                            <CiMail />
                            <input placeholder="Email" type="email" required />
                        </div>
                        <div className="registerinput">
                            <CiUnlock />
                            <input placeholder="Password" type="password" required />
                        </div>
                        <div className="registerinput">
                            <CiUnlock />
                            <input placeholder="Confirm Password" type="password" required />
                        </div>
                        <button class="w-100">
                            <div class="banner w-100">
                                <a href="#3" class='butn butn__new'><span>Sign Up</span></a>
                            </div>
                        </button>
                        <a
                            href="#4"
                            className="register_link"
                            onClick={(e) => {
                                e.preventDefault();
                                setActiveModal('login');
                            }}
                        >
                            Already have an account?
                        </a>
                    </form>
                </Box>
            </Modal>
        </>
    );
}

export default UserLogin;
