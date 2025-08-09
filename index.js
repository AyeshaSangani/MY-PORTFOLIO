// Firebase import (used in <script type="module"> in HTML)
import { getDatabase, ref, push, set } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-database.js";

// Initialize database 
const database = getDatabase();

// // Google Apps Script Web App URL 
// const GOOGLE_SHEET_WEB_APP_URL = "https://script.google.com/macros/s/AKfycbz7sBAPPqDz3tRH5a6PlBlsnJUWva5hyv_nniAblPZ5nEflYFLb2f-G7x0-vsG0xi8KWQ/exec";

// Submit function
function submitData() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let msg = document.getElementById("msg").value;
  const messageBox = document.getElementById("formMessage");

  // Validation
  if (!name || !email || !msg) {
    messageBox.innerHTML = "⚠️ Please fill in all fields!";
    messageBox.style.color = "orange";
    return;
  }

  // ===================== 🔥 1. SEND TO FIREBASE =====================
  const feedbackRef = ref(database, "feedbackForm");
  const newFeedback = push(feedbackRef);

  set(newFeedback, {
    name: name,
    email: email,
    msg: msg,
    timestamp: new Date().toISOString()
  })
    .then(() => {
      // ===================== 📄 2. SEND TO GOOGLE SHEETS =====================
      // fetch(GOOGLE_SHEET_WEB_APP_URL, {
      //   method: "POST",
      //   mode: "no-cors", // Prevents CORS issues
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify({
      //     name: name,
      //     email: email,
      //     msg: msg,
      //     timestamp: new Date().toISOString()
      //   }),
      // });

      messageBox.innerHTML = "✅ Your message has been sent successfully!";
      messageBox.style.color = "lightblue";

      // Clear form fields
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("msg").value = "";
    })
    .catch((error) => {
      console.error("❌ Error:", error);
      messageBox.innerHTML = "❌ Failed to send message. Try again.";
      messageBox.style.color = "red";
    });
}

// Expose the function to HTML
window.submitData = submitData;
