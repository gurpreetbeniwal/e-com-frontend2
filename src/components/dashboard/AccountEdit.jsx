import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { getUserProfile, updateUserProfile, changePassword } from "../../../api";

export default function AccountEdit() {
  // State for user's personal information
  const [userInfo, setUserInfo] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone_number: "",
  });

  // State for the password change form
  const [passwordInfo, setPasswordInfo] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  // Fetch user data when the component loads
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await getUserProfile();
        setUserInfo(response.data);
      } catch (error) {
        toast.error("Could not load your profile data.");
      }
    };
    fetchUserData();
  }, []);

  // Handler for input changes in both forms
  const handleInputChange = (e, formType) => {
    const { name, value } = e.target;
    if (formType === "userInfo") {
      setUserInfo((prev) => ({ ...prev, [name]: value }));
    } else {
      setPasswordInfo((prev) => ({ ...prev, [name]: value }));
    }
  };

  // Handler for updating user information
  const handleUpdateInfo = async (e) => {
    e.preventDefault();
    try {
      const response = await updateUserProfile({
        first_name: userInfo.first_name,
        last_name: userInfo.last_name,
        phone_number: userInfo.phone_number,
      });
      toast.success(response.data.message);
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to update profile.");
    }
  };

  // Handler for changing the password
  const handleChangePassword = async (e) => {
    e.preventDefault();
    try {
      const response = await changePassword(passwordInfo);
      toast.success(response.data.message);
      // Clear password fields after successful change
      setPasswordInfo({ currentPassword: "", newPassword: "", confirmPassword: "" });
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to change password.");
    }
  };

  return (
    <div className="my-account-content account-details">
      <div className="wrap">
        <h4 className="fw-semibold mb-20">Information</h4>
        <form onSubmit={handleUpdateInfo} className="form-account-details">
          <div className="form-content">
            <div className="cols">
              <fieldset>
                <input
                  type="text"
                  name="first_name"
                  placeholder="First Name"
                  value={userInfo.first_name}
                  onChange={(e) => handleInputChange(e, "userInfo")}
                />
              </fieldset>
              <fieldset>
                <input
                  type="text"
                  name="last_name"
                  placeholder="Last Name"
                  value={userInfo.last_name}
                  onChange={(e) => handleInputChange(e, "userInfo")}
                />
              </fieldset>
            </div>
            <div className="cols">
              <fieldset>
                {/* Email is typically not editable */}
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={userInfo.email}
                  readOnly
                  disabled
                />
              </fieldset>
              <fieldset>
                <input
                  type="tel"
                  name="phone_number"
                  placeholder="Phone"
                  value={userInfo.phone_number || ""}
                  onChange={(e) => handleInputChange(e, "userInfo")}
                />
              </fieldset>
            </div>
          </div>
           <div className="box-btn" style={{marginTop:"10px"}}>
            <button type="submit" className="tf-btn btn-large">
              <span className="text-white">Save Information</span>
            </button>
          </div>
        </form>
      </div>
      <div className="wrap">
        <h4 className="fw-semibold mb-20">Change Password</h4>
        <form onSubmit={handleChangePassword} className="def form-reset-password">
          <fieldset>
            <input
              type="password"
              name="currentPassword"
              placeholder="Current Password*"
              value={passwordInfo.currentPassword}
              onChange={(e) => handleInputChange(e, "password")}
              required
            />
          </fieldset>
          <fieldset>
            <input
              type="password"
              name="newPassword"
              placeholder="New Password*"
              value={passwordInfo.newPassword}
              onChange={(e) => handleInputChange(e, "password")}
              required
            />
          </fieldset>
          <fieldset>
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm New Password*"
              value={passwordInfo.confirmPassword}
              onChange={(e) => handleInputChange(e, "password")}
              required
            />
          </fieldset>
          <div className="box-btn">
            <button type="submit" className="tf-btn btn-large">
              <span className="text-white">Update Password</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
