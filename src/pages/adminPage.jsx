import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import AdminCard from "../components/admincards";

const AdminPage = () => {
  return (
    <section style={{ color: "#4B5563", fontFamily: "sans-serif" }}>
      {/* Admin Heading Section */}
      <header
  style={{
    backgroundColor: "#1F2937",
    padding: "20px",
    textAlign: "center",
    color: "white",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", // Adds shadow for better visual
    position: "fixed", // Changed from sticky to fixed
    top: 0,
    left: 0,
    width: "100%", // Ensures it spans full screen
    zIndex: 1000, // Stays above other content
    color: "#4B5563",
    fontFamily: "sans-serif",
  }}
>
  <h1 style={{marginTop : "10px", fontSize: "24px" }} className="flex justify-start text-white">Admin Dashboard</h1>
  <nav style={{ marginTop: "10px" }}>
  </nav>
</header>


     

      {/* Loan Categories Section */}
      <div style={{ maxWidth: "1200px", margin: "auto", padding: "96px 20px" }}>
        <h2>Loan Categories</h2>
        <p>Choose from the following categories to learn more:</p>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            gap: "16px",
          }}
        >
          <Link to="/adminwedding" style={{ textDecoration: "none" }}>
            <AdminCard
              imgSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRvc98LKZkGdr3pOL8iaCo6dici7OQoxmKog&s"
              altText="Wedding Loans"
              title="Wedding Loans"
              description="Valima, Furniture, Valima Food, Jahez"
            />
          </Link>

          <Link to="/adminconstruction" style={{ textDecoration: "none" }}>
            <AdminCard
              imgSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_HIdH7y7vm4sVSywUgu5o5JEzR2OC9AoR4Q&s"
              altText="Home Construction Loans"
              title="Home Construction Loans"
              description="Structure, Finishing, Loan"
            />
          </Link>

          <Link to="/adminbusiness" style={{ textDecoration: "none" }}>
            <AdminCard
              imgSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvVSTt2S5_BaAgcKctd5bHIAKpr50C7xKQJd1hZAFYbm-1iaoa23odTMdyN9dmCcHe3wM&usqp=CAU"
              altText="Business Startup Loans"
              title="Business Startup Loans"
              description="Buy Stall, Shop Machinery"
            />
          </Link>

          <Link to="/admineducation" style={{ textDecoration: "none" }}>
            <AdminCard
              imgSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDp8YPQ-PWqLzPXaLbQeQ2f7ydiQTsJMVyww&s"
              altText="Education Loans"
              title="Education Loans"
              description="University Fees, Child Fees Loan"
            />
          </Link>
        </div>
      </div>
      {/* <footer
        style={{
          backgroundColor: "#1F2937",
          color: "white",
          padding: "20px 0",
          textAlign: "center",
          marginTop: "40px",
        }}
      >
        <p>
          &copy; 2025 Saylani Welfare International Trust. All Rights Reserved.
        </p>
        <p>
          <Link
            to="/privacy-policy"
            style={{ color: "white", textDecoration: "none" }}
          >
            Privacy Policy
          </Link>{" "}
          |
          <Link
            to="/terms-of-service"
            style={{ color: "white", textDecoration: "none" }}
          >
            Terms of Service
          </Link>
        </p>
      </footer> */}

    </section>
  );
};

export default AdminPage;
