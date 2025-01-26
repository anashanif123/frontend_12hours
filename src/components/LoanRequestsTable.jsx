import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

// Reusable Loan Requests Component
const LoanRequestsTable = ({ loanType, loanData }) => {
  const navigate = useNavigate(); // Hook for navigation
  const [selectedSubcategory, setSelectedSubcategory] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("All");
  const [filteredRequests, setFilteredRequests] = useState(loanData);
  const [selectedRequest, setSelectedRequest] = useState(null); // Track selected request for modal
  const [modalVisible, setModalVisible] = useState(false); // Control modal visibility
  const [actionStatus, setActionStatus] = useState(""); // Track loan action (Accepted/Rejected)

  // Loan requests ko filter karte hain subcategory aur status ke hisaab se
  const filterRequests = () => {
    let filtered = loanData;

    if (selectedSubcategory) {
      filtered = filtered.filter(
        (request) => request.subcategory === selectedSubcategory
      );
    }

    if (selectedStatus && selectedStatus !== "All") {
      filtered = filtered.filter(
        (request) => request.status === selectedStatus
      );
    }

    setFilteredRequests(filtered);
  };

  // Re-run the filter when either subcategory or status changes
  React.useEffect(() => {
    filterRequests();
  }, [selectedSubcategory, selectedStatus]);

  // Handle modal open
  const openModal = (request) => {
    setSelectedRequest(request);
    setModalVisible(true);
  };

  // Handle modal close
  const closeModal = () => {
    setModalVisible(false);
    setSelectedRequest(null);
    setActionStatus(""); // Reset action status when closing modal
  };

  // Handle loan action (Accept/Reject)
  const handleAction = (action) => {
    setActionStatus(action);
  };

  // Handle Send action (finalizing)
  const handleSend = () => {
    // Update loan status, send token, etc. (this is where backend integration would happen)
    alert(`Loan ${actionStatus}: Token Sent`);
    closeModal(); // Close modal after action
  };

  // Handle Back button click
  const handleBack = () => {
    navigate(-1); // Navigate back to the previous page
  };

  return (
    <section style={{ color: "#4B5563", fontFamily: "sans-serif" }}>
      <div style={{ padding: "20px" }}>
        {/* Header Section */}
        <div
          style={{
            backgroundColor: "#1F2937",
            padding: "20px",
            textAlign: "center",
            color: "white",
          }}
        >
          <h1>Saylani Microfinance Loan Requests</h1>
          <p>
            Manage and process loan requests for various categories like
            Wedding, Education, Business, and more.
          </p>
        </div>

        {/* Back Button */}
        <div style={{ marginBottom: "20px" }}>
          <button
            onClick={handleBack}
            style={{
              padding: "10px 15px",
              backgroundColor: "#6B7280",
              color: "#fff",
              fontWeight: "bolder",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
              marginTop: "10px  ",
            }}
          >
            Back
          </button>
        </div>

        {/* Loan Request Table */}
        <h1 style={{ color: "#4B5563" }}>{loanType} Loan Requests</h1>

        {/* Combined Filters (Subcategory and Status) */}
        <div style={{ marginBottom: "20px", display: "flex", gap: "10px" }}>
          <div>
            <label style={{ fontSize: "16px" }}>Filter by Subcategory:</label>
            <select
              value={selectedSubcategory}
              onChange={(e) => setSelectedSubcategory(e.target.value)}
              style={{
                padding: "8px",
                marginLeft: "10px",
                borderRadius: "4px",
                border: "1px solid #D1D5DB",
              }}
            >
              <option value="">Select Subcategory</option>
              {loanData
                .map((request) => request.subcategory)
                .filter((value, index, self) => self.indexOf(value) === index)
                .map((subcategory, index) => (
                  <option key={index} value={subcategory}>
                    {subcategory}
                  </option>
                ))}
            </select>
          </div>

          <div>
            <label style={{ fontSize: "16px" }}>Filter by Status:</label>
            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              style={{
                padding: "8px",
                marginLeft: "10px",
                borderRadius: "4px",
                border: "1px solid #D1D5DB",
              }}
            >
              {["All", "Accepted", "Pending"].map((status, index) => (
                <option key={index} value={status}>
                  {status}
                </option>
              ))}
            </select>
          </div>
        </div>

        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr>
              <th style={{ borderBottom: "2px solid #ddd", padding: "10px" }}>
                Applicant
              </th>
              <th style={{ borderBottom: "2px solid #ddd", padding: "10px" }}>
                CNIC
              </th>
              <th style={{ borderBottom: "2px solid #ddd", padding: "10px" }}>
                Subcategory
              </th>
              <th style={{ borderBottom: "2px solid #ddd", padding: "10px" }}>
                Loan Amount (PKR)
              </th>
              <th style={{ borderBottom: "2px solid #ddd", padding: "10px" }}>
                Loan Period
              </th>
              <th style={{ borderBottom: "2px solid #ddd", padding: "10px" }}>
                Initial Deposit (10%)
              </th>
              <th style={{ borderBottom: "2px solid #ddd", padding: "10px" }}>
                Status
              </th>
              <th style={{ borderBottom: "2px solid #ddd", padding: "10px" }}>
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredRequests.map((request) => (
              <tr key={request.id}>
                <td style={{ padding: "10px", textAlign: "center" }}>
                  {request.applicant}
                </td>
                <td style={{ padding: "10px", textAlign: "center" }}>
                  {request.cnic}
                </td>
                <td style={{ padding: "10px", textAlign: "center" }}>
                  {request.subcategory}
                </td>
                <td style={{ padding: "10px", textAlign: "center" }}>
                  {request.loanAmount} Lakh
                </td>
                <td style={{ padding: "10px", textAlign: "center" }}>
                  {request.loanPeriod}
                </td>
                <td style={{ padding: "10px", textAlign: "center" }}>
                  {request.loanAmount * 0.1} PKR
                </td>
                <td style={{ padding: "10px", textAlign: "center" }}>
                  {request.status}
                </td>
                <td style={{ padding: "10px", textAlign: "center" }}>
                  <button
                    style={{
                      padding: "6px 12px",
                      backgroundColor: "#4F46E5",
                      color: "#fff",
                      border: "none",
                      borderRadius: "4px",
                      cursor: "pointer",
                    }}
                    onClick={() => openModal(request)} // Open modal with selected request details
                  >
                    View Details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Modal for loan details */}
        {modalVisible && selectedRequest && (
          <div
            style={{
              position: "fixed",
              top: "0",
              left: "0",
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(0,0,0,0.5)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              style={{
                backgroundColor: "#fff",
                padding: "20px",
                borderRadius: "8px",
                width: "500px",
                boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
              }}
            >
              <h2>Loan Details</h2>
              <table style={{ width: "100%", marginBottom: "20px" }}>
                <tbody>
                  <tr>
                    <td>
                      <strong>Name:</strong>
                    </td>
                    <td>{selectedRequest.applicant}</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>CNIC:</strong>
                    </td>
                    <td>{selectedRequest.cnic}</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Subcategory:</strong>
                    </td>
                    <td>{selectedRequest.subcategory}</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Loan Amount (PKR):</strong>
                    </td>
                    <td>{selectedRequest.loanAmount}</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Loan Period:</strong>
                    </td>
                    <td>{selectedRequest.loanPeriod}</td>
                  </tr>
                </tbody>
              </table>

              <div style={{ marginBottom: "20px" }}>
                <button
                  style={{
                    padding: "6px 12px",
                    backgroundColor: "#34D399",
                    color: "#fff",
                    border: "none",
                    borderRadius: "4px",
                    cursor: "pointer",
                    marginRight: "10px",
                  }}
                  onClick={() => handleAction("Accepted")}
                >
                  Accept Loan
                </button>
                <button
                  style={{
                    padding: "6px 12px",
                    backgroundColor: "#F87171",
                    color: "#fff",
                    border: "none",
                    borderRadius: "4px",
                    cursor: "pointer",
                  }}
                  onClick={() => handleAction("Rejected")}
                >
                  Reject Loan
                </button>
              </div>

              <div>
                {actionStatus && (
                  <div style={{ marginBottom: "20px", fontWeight: "bold" }}>
                    You have {actionStatus} the loan.
                  </div>
                )}
                <button
                  style={{
                    padding: "6px 12px",
                    backgroundColor: "#10B981",
                    color: "#fff",
                    border: "none",
                    borderRadius: "4px",
                    cursor: "pointer",
                  }}
                  onClick={handleSend}
                >
                  Send Token
                </button>
                <button
                  style={{
                    padding: "6px 12px",
                    backgroundColor: "#9CA3AF",
                    color: "#fff",
                    border: "none",
                    borderRadius: "4px",
                    cursor: "pointer",
                    marginLeft: "10px",
                  }}
                  onClick={closeModal}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Footer Section */}
        <div
          style={{
            position: "fixed",
            bottom: "0",
            left: "0",
            width: "100%",
            backgroundColor: "#1F2937",
            padding: "20px",
            textAlign: "center",
            color: "white",
            marginTop: "30px",
          }}
        >
          <p>
            Saylani Microfinance - Empowering communities through financial
            assistance
          </p>
          <Link
            to="/contact"
            style={{
              color: "#10B981",
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LoanRequestsTable;
