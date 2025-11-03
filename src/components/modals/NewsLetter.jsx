import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function PrimeMembershipPopup() {
  const modalElement = useRef();
  const navigate = useNavigate();
  const [modalInstance, setModalInstance] = useState(null);

  useEffect(() => {
    const showModal = async () => {
      const bootstrap = await import("bootstrap");
      const modalEl = document.getElementById("primeMembershipPopup");
      const myModal = new bootstrap.Modal(modalEl, {
        keyboard: false,
        backdrop: 'static'
      });

      setModalInstance(myModal);

      // Show the modal after a delay
      await new Promise((resolve) => setTimeout(resolve, 3000));
      myModal.show();

      // Add cleanup handler for when modal is closed (by any method)
      const handleHidden = () => {
        // Clean up backdrop and body styles
        const backdrop = document.querySelector('.modal-backdrop');
        if (backdrop) {
          backdrop.remove();
        }
        document.body.classList.remove('modal-open');
        document.body.style.removeProperty('overflow');
        document.body.style.removeProperty('padding-right');
      };

      modalEl.addEventListener('hidden.bs.modal', handleHidden);

      // Cleanup on unmount
      return () => {
        modalEl.removeEventListener('hidden.bs.modal', handleHidden);
      };
    };

    showModal();
  }, []);

  const handleJoinPrime = () => {
    const modalEl = document.getElementById("primeMembershipPopup");
    
    // Listen for modal fully hidden event before navigating
    const handleHiddenForNav = () => {
      navigate("/premiummembership");
      modalEl.removeEventListener('hidden.bs.modal', handleHiddenForNav);
    };
    
    // Add event listener
    modalEl.addEventListener('hidden.bs.modal', handleHiddenForNav);
    
    // Hide modal
    if (modalInstance) {
      modalInstance.hide();
    }
  };

  return (
    <div
      ref={modalElement}
      id="primeMembershipPopup"
      className="modal modalCentered fade auto-popup modal-def modal-prime"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content text-center">
          <span
            className="icon icon-close icon-close-popup link"
            data-bs-dismiss="modal"
          />
          
          <div className="modal-body p-4">
            <div className="prime-badge mb-3">
              <i className="fas fa-crown" style={{ fontSize: "3rem", color: "#FFD700" }} />
            </div>

            <div className="heading mb-4">
              <h4 className="fw-bold text-gradient mb-2">
                Unlock Prime Benefits!
              </h4>
              <p className="body-md-2 text-muted">
                Join Prime Membership and enjoy exclusive benefits
              </p>
            </div>

            <div className="benefits-list text-start mb-4">
              <div className="benefit-item d-flex align-items-start mb-3">
                <i className="fas fa-check-circle text-success me-3 mt-1" />
                <div>
                  <h6 className="fw-semibold mb-1">Exclusive Flash Sales</h6>
                  <p className="small text-muted mb-0">
                    Access to members-only flash sales with up to 90% off
                  </p>
                </div>
              </div>

              <div className="benefit-item d-flex align-items-start mb-3">
                <i className="fas fa-check-circle text-success me-3 mt-1" />
                <div>
                  <h6 className="fw-semibold mb-1">Free Shipping</h6>
                  <p className="small text-muted mb-0">
                    Unlimited free shipping on all orders
                  </p>
                </div>
              </div>

              <div className="benefit-item d-flex align-items-start mb-3">
                <i className="fas fa-check-circle text-success me-3 mt-1" />
                <div>
                  <h6 className="fw-semibold mb-1">Early Access</h6>
                  <p className="small text-muted mb-0">
                    Get early access to new products and special deals
                  </p>
                </div>
              </div>

              <div className="benefit-item d-flex align-items-start">
                <i className="fas fa-check-circle text-success me-3 mt-1" />
                <div>
                  <h6 className="fw-semibold mb-1">Priority Support</h6>
                  <p className="small text-muted mb-0">
                    24/7 priority customer support
                  </p>
                </div>
              </div>
            </div>

            <div className="box-btn d-flex gap-2">
              <button
                onClick={handleJoinPrime}
                className="tf-btn w-100 btn-gradient"
              >
                <span className="text-white fw-semibold">
                  <i className="fas fa-crown me-2" />
                  Join Prime Now
                </span>
              </button>
            </div>
{/* 
            <p className="small text-muted mt-3 mb-0">
              Already a member?{" "}
              <a href="/login" className="link-primary fw-semibold">
                Sign In
              </a>
            </p> */}
          </div>
        </div>
      </div>

      <style jsx>{`
        .modal-prime .modal-content {
          border-radius: 20px;
          border: none;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
        }

        .text-gradient {
          background: linear-gradient(135deg, #ff3d3d 0%, #ff3d3d 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .btn-gradient {
          background: linear-gradient(135deg, #ff3d3d 0%, #ff3d3d 100%);
          border: none;
          transition: all 0.3s ease;
        }

        .btn-gradient:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 20px rgba(102, 126, 234, 0.3);
        }

        .benefit-item {
          padding: 0.5rem;
          border-radius: 8px;
          transition: all 0.2s ease;
        }

        .benefit-item:hover {
          background: rgba(102, 126, 234, 0.05);
        }

        .icon-close-popup {
          position: absolute;
          top: 15px;
          right: 15px;
          width: 30px;
          height: 30px;
          cursor: pointer;
          z-index: 1;
          opacity: 0.6;
          transition: opacity 0.3s;
        }

        .icon-close-popup:hover {
          opacity: 1;
        }

        .icon-close-popup::before,
        .icon-close-popup::after {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 20px;
          height: 2px;
          background: #333;
          transform: translate(-50%, -50%) rotate(45deg);
        }

        .icon-close-popup::after {
          transform: translate(-50%, -50%) rotate(-45deg);
        }

        @media (max-width: 576px) {
          .modal-body {
            padding: 1.5rem !important;
          }

          .benefit-item h6 {
            font-size: 0.95rem;
          }

          .benefit-item .small {
            font-size: 0.8rem;
          }
        }
      `}</style>
    </div>
  );
}
