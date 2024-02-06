// src/components/Form.js
import React, { useState } from "react";
import "./Form.css";

const Form = () => {
  // State for form fields
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [district, setDistrict] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [email, setEmail] = useState("");
  const [selectedIssue, setSelectedIssue] = useState("");
  const [subIssue, setSubIssue] = useState("");
  const [sso, setSso] = useState(""); // New state for SSO

  // Form submission handler
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", {
      name,
      mobile,
      district,
      whatsapp,
      email,
      selectedIssue,
      subIssue,
      sso,
    });
  };

  return (
    <div className="container mt-4 ">
      <div className="row justify-content-end ">
        <div className="col-md-6">
          <div className="form-container">
            <form onSubmit={handleSubmit}>
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="form-control"
              />

              <label htmlFor="mobile">Mobile Number:</label>
              <input
                type="tel"
                id="mobile"
                value={mobile}
                pattern="[0-9]{10}"
                onChange={(e) => setMobile(e.target.value)}
                required
                className="form-control"
              />

              <label htmlFor="district">District:</label>
              <input
                type="text"
                id="district"
                value={district}
                onChange={(e) => setDistrict(e.target.value)}
                required
                className="form-control"
              />

              <label htmlFor="whatsapp">Whatsapp Number:</label>
              <input
                type="tel"
                id="whatsapp"
                value={whatsapp}
                pattern="[0-9]{10}"
                onChange={(e) => setWhatsapp(e.target.value)}
                required
                className="form-control"
              />

              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="form-control"
              />

              <label htmlFor="issue">Select Issue Type:</label>
              <select
                id="issue"
                value={selectedIssue}
                onChange={(e) => setSelectedIssue(e.target.value)}
                required
                className="form-select"
              >
                <option value="">Select an issue type</option>
                <option value="general">General Issue</option>
                <option value="emitra">E-mitra Issue</option>
              </select>

              {selectedIssue === "general" && (
                <div className="mb-3">
                  <label htmlFor="subIssue" className="form-label">
                    Select Sub-Issue:
                  </label>
                  <select
                    id="subIssue"
                    value={subIssue}
                    onChange={(e) => setSubIssue(e.target.value)}
                    required
                    className="form-select"
                  >
                    <option value="">Select a sub-issue</option>
                    <option value="portalLogin">Portal Login</option>
                    <option value="productIssue">Product Issue</option>
                    <option value="kycIssue">Partner Portal KYC Issue</option>
                    <option value="CertIssue">
                      Certificate download issues
                    </option>
                    <option value="TokenIssue">
                      Token in certificate issues
                    </option>
                    <option value="DscIssue">DSC not working in portal</option>
                  </select>
                </div>
              )}

              {selectedIssue === "emitra" && (
                <div className="mb-3">
                  <label htmlFor="sso" className="form-label">
                    Enter SSO:
                  </label>
                  <input
                    type="text"
                    id="sso"
                    value={sso}
                    onChange={(e) => setSso(e.target.value)}
                    required
                    className="form-control"
                  />

                  <label htmlFor="subIssue" className="form-label">
                    Select Sub-Issue:
                  </label>
                  <select
                    id="subIssue"
                    value={subIssue}
                    onChange={(e) => setSubIssue(e.target.value)}
                    required
                    className="form-select"
                  >
                    <option value="">Select a sub-issue</option>
                    <option value="mappingIssue">
                      E-Mitra service issue - Mapping issue/OTP not getting
                      (form in department)
                    </option>
                    <option value="otherIssue">
                      Other Issue-WhatsApp number not add in district E-Mitra
                      group and Mewar group
                    </option>
                  </select>
                </div>
              )}

              {/* ... (unchanged code) */}
              <button
                type="submit"
                className="btn btn-primary mt-3"
                style={{ borderRadius: "5px" }}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
