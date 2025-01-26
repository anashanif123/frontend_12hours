  import { useState } from "react";
  import wedding from "../../public/images/download.jpeg";
  import construction from "../../public/images/images.jpeg";
  import Bussiness from "../../public/images/images (1).jpeg";
  import education from "../../public/images/images (2).jpeg";
  import HomeCard from "../components/homeCards";
  import Modal from "../components/modal";
import Footer from "../components/footer";
import Navbar from "../components/header";

  export default function Dashboard() {
    const [isMenuOpen, setMenuOpen] = useState(false);

    // Toggle the menu for small screens
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState("");
    const [formData, setFormData] = useState({
      subCategory: "",
      deposit: "",
      loanPeriod: "",
    });

    const handleClick = (category) => {
      setSelectedCategory(category);
      setIsModalOpen(true);
    };

    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    };

    const calculateLoan = () => {
      const { deposit, loanPeriod } = formData;
      if (!deposit || !loanPeriod) {
        alert("Please fill all fields!");
        return;
      }

      const estimatedBreakdown = (parseFloat(deposit) * 1.1) / loanPeriod;
      alert(`Estimated Monthly Payment: ${estimatedBreakdown.toFixed(2)}`);
    };

    return (
      <>
       <Navbar/>
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap -m-4">
              <HomeCard
                title={"Wedding Loan"}
                description={""}
                image={wedding}
                text={"See more"}
                onClick={() => handleClick("Wedding Loan")}
              />
              <HomeCard
                title={"Construction Loan"}
                description={""}
                image={construction}
                text={"See more"}
                onClick={() => handleClick("Construction Loan")}
              />
              <HomeCard
                title={"Business Loan"}
                description={""}
                image={Bussiness}
                text={"See more"}
                onClick={() => handleClick("Business Loan")}
              />
              <HomeCard
                title={"Education Loan"}
                description={""}
                image={education}
                text={"See more"}
                onClick={() => handleClick("Education Loan")}
              />
            </div>
          </div>
        </section>

        {isModalOpen && (
          <Modal onClose={() => setIsModalOpen(false)}>
            <h2 className="text-xl font-bold">{selectedCategory}</h2>
            <form className="space-y-4">
              <div>
                <label className="block mb-2">Subcategory:</label>
                <input
                  type="text"
                  name="subCategory"
                  value={formData.subCategory}
                  onChange={handleInputChange}
                  className="border rounded p-2 w-full"
                />
              </div>
              <div>
                <label className="block mb-2">Initial Deposit:</label>
                <input
                  type="number"
                  name="deposit"
                  value={formData.deposit}
                  onChange={handleInputChange}
                  className="border rounded p-2 w-full"
                />
              </div>
              <div>
                <label className="block mb-2">Loan Period (months):</label>
                <input
                  type="number"
                  name="loanPeriod"
                  value={formData.loanPeriod}
                  onChange={handleInputChange}
                  className="border rounded p-2 w-full"
                />
              </div>
            </form>
            <button
              onClick={calculateLoan}
              className="bg-blue-500 text-white rounded px-4 py-2 mt-4"
            >
              Calculate Loan
            </button>
          </Modal>
        )}
        <Footer/>
      </>
    );
  }

