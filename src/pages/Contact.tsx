import { useState } from "react";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { db } from "../firebase";
import AnimatedBackground from "../components/AnimatedBackground";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      await addDoc(collection(db, "messages"), {
        ...formData,
        timestamp: Timestamp.now()
      });
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error sending message:", error);
      setStatus("error");
    }
  };

  return (
    <>
      <AnimatedBackground />
      <div className="max-w-xl mx-auto py-12 relative z-10">
        <h2 className="text-3xl font-bold text-blue-600 mb-4 text-center">Contact Me</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="p-2 border rounded"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="p-2 border rounded"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows={5}
            value={formData.message}
            onChange={handleChange}
            required
            className="p-2 border rounded"
          ></textarea>
          <button
            type="submit"
            disabled={status === "sending"}
            className="bg-blue-600 text-black px-4 py-2 rounded hover:bg-blue-700"
          >
            {status === "sending" ? "Sending..." : "Send"}
          </button>
        </form>

        {status === "success" && (
          <p className="mt-4 text-green-600 text-center">✅ Message sent successfully!</p>
        )}
        {status === "error" && (
          <p className="mt-4 text-red-600 text-center">❌ Something went wrong. Try again.</p>
        )}
      </div>
    </>
  );
};

export default Contact;
