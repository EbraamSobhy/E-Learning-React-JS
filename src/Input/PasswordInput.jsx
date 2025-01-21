import { useState } from "react";
import PropTypes from "prop-types";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import './PasswordInput.css';

const PasswordInput = ({ value, onChange, placeholder }) => {
    const [isShowPassword, setIsShowPassword] = useState(false);

    const toggleShowPassword = () => {
        setIsShowPassword(!isShowPassword);
    };

    return (
        <div className="password-input-container">
            <input
                value={value}
                onChange={onChange}
                type={isShowPassword ? "text" : "password"}
                placeholder={placeholder || "Password"}
                className="password-input"
            />
            {isShowPassword ? (
                <FaRegEye
                    size={22}
                    className="password-icon active"
                    onClick={toggleShowPassword}
                />
            ) : (
                <FaRegEyeSlash
                    size={22}
                    className="password-icon"
                    onClick={toggleShowPassword}
                />
            )}
        </div>
    );
};

// Prop types for validation
PasswordInput.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
};

export default PasswordInput;
