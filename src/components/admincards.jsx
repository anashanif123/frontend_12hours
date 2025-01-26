import React from "react";

const AdminCard = ({ imgSrc, title, description, altText }) => {
  return (
    <div
      style={{
        flex: "1 1 22%",
        backgroundColor: "#F3F4F6",
        padding: "16px",
        borderRadius: "8px",
        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
        textAlign: "center",
        marginBottom: "16px",
      }}
    >
      <img
        src={imgSrc}
        alt={altText}
        style={{
          height: "120px",
          borderRadius: "8px",
          width: "100%",
          objectFit: "contain",
          marginBottom: "16px",
        }}
      />
      <h2
        style={{
          fontSize: "20px",
          fontWeight: "700",
          marginBottom: "12px",
        }}
      >
        {title}
      </h2>
      <p style={{ lineHeight: "1.4", fontSize: "14px", color: "#6B7280" }}>
        {description}
      </p>
    </div>
  );
};

export default AdminCard;
