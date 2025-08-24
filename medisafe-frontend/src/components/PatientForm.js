import React, { useState } from "react";

function PatientForm() {
  const [formData, setFormData] = useState({
    name: "",
    patient_id: "",
    aadhar: "",
    phone: "",
    emergency_contact: "",
    blood_group: "",
    allergies: "",
    insurance_details: "",
  });

  // handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://127.0.0.1:8000/api/patients/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("✅ Patient registered successfully!");
        // reset form after success
        setFormData({
          name: "",
          patient_id: "",
          aadhar: "",
          phone: "",
          emergency_contact: "",
          blood_group: "",
          allergies: "",
          insurance_details: "",
        });
      } else {
        alert("❌ Something went wrong while registering!");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("⚠️ Failed to connect to backend.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        padding: "20px",
        maxWidth: "400px",
        margin: "auto",
        border: "1px solid #ddd",
        borderRadius: "10px",
      }}
    >
      <h2>🩺 Patient Registration</h2>

      <input
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <br />
      <input
        name="patient_id"
        placeholder="Patient ID"
        value={formData.patient_id}
        onChange={handleChange}
        required
      />
      <br />
      <input
        name="aadhar"
        placeholder="Aadhar"
        value={formData.aadhar}
        onChange={handleChange}
      />
      <br />
      <input
        name="phone"
        placeholder="Phone"
        value={formData.phone}
        onChange={handleChange}
      />
      <br />
      <input
        name="emergency_contact"
        placeholder="Emergency Contact"
        value={formData.emergency_contact}
        onChange={handleChange}
      />
      <br />
      <input
        name="blood_group"
        placeholder="Blood Group"
        value={formData.blood_group}
        onChange={handleChange}
      />
      <br />
      <input
        name="allergies"
        placeholder="Allergies"
        value={formData.allergies}
        onChange={handleChange}
      />
      <br />
      <input
        name="insurance_details"
        placeholder="Insurance Details"
        value={formData.insurance_details}
        onChange={handleChange}
      />
      <br />

      <button type="submit" style={{ marginTop: "10px" }}>
        Register
      </button>
    </form>
  );
}

export default PatientForm;
