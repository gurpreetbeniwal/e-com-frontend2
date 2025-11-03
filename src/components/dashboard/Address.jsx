import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { getAddresses, addAddress, updateAddress, deleteAddress } from "../../../api";

export default function Address() {
  const [showAddAddressForm, setShowAddAddressForm] = useState(false);
  const [addresses, setAddresses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingAddressId, setEditingAddressId] = useState(null);
  
  // 🔥 ADD LOADING STATES FOR FORM SUBMISSIONS
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);
  const [deletingId, setDeletingId] = useState(null);

  const [newAddress, setNewAddress] = useState({
    street_address: "", city: "", state: "", postal_code: "", country: "", phone_number: "", is_default: false,
  });
  const [editAddressData, setEditAddressData] = useState(null);

  // --- DATA FETCHING ---
  const fetchAddresses = async () => {
    try {
      setLoading(true);
      const response = await getAddresses();
      setAddresses(response.data);
    } catch (error) {
      toast.error("Failed to fetch addresses.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAddresses();
  }, []);

  // --- FORM HANDLERS ---
  const handleShowAddAddressForm = () => setShowAddAddressForm(true);
  const handleHideAddAddressForm = () => {
    setShowAddAddressForm(false);
    setNewAddress({ street_address: "", city: "", state: "", postal_code: "", country: "", phone_number: "", is_default: false });
  };
  const handleCancelEditAddress = () => {
    setEditingAddressId(null);
    setEditAddressData(null);
  };

  const handleInputChange = (e, formType = "new") => {
    const { id, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;
    
    if (formType === "new") {
      setNewAddress((prev) => ({ ...prev, [id]: newValue }));
    } else {
      setEditAddressData((prev) => ({ ...prev, [id]: newValue }));
    }
  };

  // 🔥 FIXED: ADD ADDRESS WITH LOADING STATE
  const handleAddAddressSubmit = async (e) => {
    e.preventDefault();
    
    // Prevent multiple submissions
    if (isSubmitting) {
      console.log('⏸️ Already submitting, ignoring...');
      return;
    }

    console.log('📤 Submitting new address:', newAddress);
    setIsSubmitting(true);

    try {
      const response = await addAddress(newAddress);
      console.log('✅ Address added successfully:', response);
      
      toast.success("Address added successfully!");
      handleHideAddAddressForm();
      await fetchAddresses(); // Refresh the list
      
    } catch (error) {
      console.error('❌ Failed to add address:', error);
      toast.error(error.response?.data?.message || "Failed to add address.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleEditAddress = (address) => {
    setEditingAddressId(address.id);
    setEditAddressData({ ...address }); // Create a copy
  };

  // 🔥 FIXED: UPDATE ADDRESS WITH LOADING STATE  
  const handleUpdateAddressSubmit = async (e) => {
    e.preventDefault();
    
    if (isUpdating) {
      console.log('⏸️ Already updating, ignoring...');
      return;
    }

    console.log('📤 Updating address:', editAddressData);
    setIsUpdating(true);

    try {
      await updateAddress(editingAddressId, editAddressData);
      toast.success("Address updated successfully!");
      setEditingAddressId(null);
      setEditAddressData(null);
      await fetchAddresses(); // Refresh the list
      
    } catch (error) {
      console.error('❌ Failed to update address:', error);
      toast.error(error.response?.data?.message || "Failed to update address.");
    } finally {
      setIsUpdating(false);
    }
  };

  // 🔥 FIXED: DELETE ADDRESS WITH LOADING STATE
  const handleDeleteAddress = async (id) => {
    if (deletingId === id) return; // Prevent multiple deletions
    
    if (window.confirm("Are you sure you want to delete this address?")) {
      setDeletingId(id);
      
      try {
        await deleteAddress(id);
        toast.success("Address deleted successfully!");
        await fetchAddresses(); // Refresh the list
        
      } catch (error) {
        console.error('❌ Failed to delete address:', error);
        toast.error(error.response?.data?.message || "Failed to delete address.");
      } finally {
        setDeletingId(null);
      }
    }
  };

  return (
    <div className="my-account-content account-address">
      <h4 className="fw-semibold mb-20">Your addresses ({addresses.length})</h4>
      <div className="widget-inner-address ">
        <button 
          className="tf-btn btn-add-address" 
          onClick={handleShowAddAddressForm}
          disabled={isSubmitting || showAddAddressForm}
        >
          <span className="text-white">Add new address</span>
        </button>

        {/* --- ADD ADDRESS FORM --- */}
        <form 
          action="#" 
          className="wd-form-address show-form-address mb-20" 
          style={{ display: showAddAddressForm ? "block" : "none" }} 
          onSubmit={handleAddAddressSubmit}
        >
          <div className="form-content">
            <fieldset>
              <label htmlFor="new_street_address">Address 1 *</label>
              <input 
                type="text" 
                id="street_address" 
                required 
                value={newAddress.street_address} 
                onChange={(e) => handleInputChange(e, "new")}
                disabled={isSubmitting}
              />
            </fieldset>
            <fieldset>
              <label htmlFor="new_city">City *</label>
              <input 
                type="text" 
                id="city" 
                required 
                value={newAddress.city} 
                onChange={(e) => handleInputChange(e, "new")}
                disabled={isSubmitting}
              />
            </fieldset>
            <fieldset>
              <label htmlFor="new_state">State/Province *</label>
              <input 
                type="text" 
                id="state" 
                required 
                value={newAddress.state} 
                onChange={(e) => handleInputChange(e, "new")}
                disabled={isSubmitting}
              />
            </fieldset>
            <fieldset>
              <label htmlFor="new_postal_code">Postal/ZIP code *</label>
              <input 
                type="text" 
                id="postal_code" 
                required 
                value={newAddress.postal_code} 
                onChange={(e) => handleInputChange(e, "new")}
                disabled={isSubmitting}
              />
            </fieldset>
            <fieldset>
              <label htmlFor="new_country">Country/region *</label>
              <input 
                type="text" 
                id="country" 
                required 
                value={newAddress.country} 
                onChange={(e) => handleInputChange(e, "new")}
                disabled={isSubmitting}
              />
            </fieldset>
            <fieldset>
              <label htmlFor="new_phone_number">Phone *</label>
              <input 
                type="text" 
                id="phone_number" 
                required 
                value={newAddress.phone_number} 
                onChange={(e) => handleInputChange(e, "new")}
                disabled={isSubmitting}
              />
            </fieldset>
            <div className="tf-cart-checkbox">
              <input 
                type="checkbox" 
                className="tf-check" 
                id="is_default" 
                checked={newAddress.is_default} 
                onChange={(e) => handleInputChange(e, "new")}
                disabled={isSubmitting}
              />
              <label htmlFor="is_default">Set as default address</label>
            </div>
          </div>
          <div className="box-btn">
            <button 
              className="tf-btn btn-large" 
              type="submit" 
              disabled={isSubmitting}
            >
              <span className="text-white">
                {isSubmitting ? 'Saving...' : 'Save Address'}
              </span>
            </button>
            <button 
              type="button" 
              className="tf-btn btn-large btn-hide-address d-inline-flex" 
              onClick={handleHideAddAddressForm}
              disabled={isSubmitting}
            >
              <span className="text-white">Cancel</span>
            </button>
          </div>
        </form>

        {/* --- ADDRESS LIST --- */}
        {loading ? <p>Loading addresses...</p> : (
          <ul className="list-account-address tf-grid-layout md-col-2">
            {addresses.map((address) => (
              <li className="account-address-item" key={address.id}>
                <p className="title title-sidebar fw-semibold">
                  {address.is_default && "(Default) "}{address.street_address}
                </p>
                <div className="info-detail">
                  <div className="box-infor">
                    <p className="title-sidebar">{address.street_address}</p>
                    <p className="title-sidebar">{address.city}, {address.state} {address.postal_code}</p>
                    <p className="title-sidebar">{address.country}</p>
                    <p className="title-sidebar">{address.phone_number}</p>
                  </div>
                  <div className="box-btn">
                    <button 
                      className="tf-btn btn-large btn-edit-address" 
                      onClick={() => handleEditAddress(address)}
                      disabled={isUpdating || editingAddressId === address.id}
                    >
                      <span className="text-white">Edit</span>
                    </button>
                    <button 
                      className="tf-btn btn-large btn-delete-address" 
                      onClick={() => handleDeleteAddress(address.id)}
                      disabled={deletingId === address.id}
                    >
                      <span className="text-white">
                        {deletingId === address.id ? 'Deleting...' : 'Delete'}
                      </span>
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
        
        {/* --- EDIT ADDRESS FORM --- */}
        {editingAddressId && editAddressData && (
          <form 
            action="#" 
            className="wd-form-address edit-form-address show" 
            style={{ display: "block" }} 
            onSubmit={handleUpdateAddressSubmit}
          >
            <h5 className="mb-20">Edit Address</h5>
            <div className="form-content">
              <fieldset>
                <label htmlFor="edit_street_address">Address 1 *</label>
                <input 
                  type="text" 
                  id="street_address" 
                  required 
                  value={editAddressData.street_address} 
                  onChange={(e) => handleInputChange(e, "edit")}
                  disabled={isUpdating}
                />
              </fieldset>
              {/* Repeat similar pattern for all other fields */}
              <fieldset>
                <label htmlFor="edit_city">City *</label>
                <input 
                  type="text" 
                  id="city" 
                  required 
                  value={editAddressData.city} 
                  onChange={(e) => handleInputChange(e, "edit")}
                  disabled={isUpdating}
                />
              </fieldset>
              <fieldset>
                <label htmlFor="edit_state">State/Province *</label>
                <input 
                  type="text" 
                  id="state" 
                  required 
                  value={editAddressData.state} 
                  onChange={(e) => handleInputChange(e, "edit")}
                  disabled={isUpdating}
                />
              </fieldset>
              <fieldset>
                <label htmlFor="edit_postal_code">Postal/ZIP code *</label>
                <input 
                  type="text" 
                  id="postal_code" 
                  required 
                  value={editAddressData.postal_code} 
                  onChange={(e) => handleInputChange(e, "edit")}
                  disabled={isUpdating}
                />
              </fieldset>
              <fieldset>
                <label htmlFor="edit_country">Country/region *</label>
                <input 
                  type="text" 
                  id="country" 
                  required 
                  value={editAddressData.country} 
                  onChange={(e) => handleInputChange(e, "edit")}
                  disabled={isUpdating}
                />
              </fieldset>
              <fieldset>
                <label htmlFor="edit_phone_number">Phone *</label>
                <input 
                  type="text" 
                  id="phone_number" 
                  required 
                  value={editAddressData.phone_number} 
                  onChange={(e) => handleInputChange(e, "edit")}
                  disabled={isUpdating}
                />
              </fieldset>
              <div className="tf-cart-checkbox">
                <input 
                  type="checkbox" 
                  className="tf-check" 
                  id="is_default" 
                  checked={editAddressData.is_default} 
                  onChange={(e) => handleInputChange(e, "edit")}
                  disabled={isUpdating}
                />
                <label htmlFor="edit_is_default">Set as default address</label>
              </div>
            </div>
            <div className="box-btn">
              <button 
                className="tf-btn btn-large" 
                type="submit"
                disabled={isUpdating}
              >
                <span className="text-white">
                  {isUpdating ? 'Updating...' : 'Update Address'}
                </span>
              </button>
              <button 
                type="button" 
                className="tf-btn btn-large btn-hide-edit-address d-inline-flex" 
                onClick={handleCancelEditAddress}
                disabled={isUpdating}
              >
                <span className="text-white">Cancel</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
