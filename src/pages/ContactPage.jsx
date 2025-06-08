import { useState } from "react";

function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    subject: "",
    email: "",
    body: "",
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  const validateForm = () => {
    let newErrors = {};
    if (formData.fullName.trim().length < 3) {
      newErrors.fullName = "Full name must be at least 3 characters.";
    }
    if (formData.subject.trim().length < 3) {
      newErrors.subject = "Subject must be at least 3 characters.";
    }
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Enter a valid email address.";
    }
    if (formData.body.trim().length < 3) {
      newErrors.body = "Message must be at least 3 characters.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      setSuccessMessage("Your message has been sent successfully!");
      setFormData({ fullName: "", subject: "", email: "", body: "" });
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold text-center mb-4">Contact Us</h2>

      {successMessage && (
        <p className="text-green-600 text-center mb-4">{successMessage}</p>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-semibold">Full Name</label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />
          {errors.fullName && (
            <p className="text-red-500 text-sm">{errors.fullName}</p>
          )}
        </div>

        <div>
          <label className="block font-semibold">Subject</label>
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />
          {errors.subject && (
            <p className="text-red-500 text-sm">{errors.subject}</p>
          )}
        </div>

        <div>
          <label className="block font-semibold">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email}</p>
          )}
        </div>

        <div>
          <label className="block font-semibold">Message</label>
          <textarea
            name="body"
            value={formData.body}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            rows="4"
          />
          {errors.body && <p className="text-red-500 text-sm">{errors.body}</p>}
        </div>

        <button
          type="submit"
          className="w-full bg-black text-white py-2 rounded hover:bg-gray-800"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default ContactPage;
