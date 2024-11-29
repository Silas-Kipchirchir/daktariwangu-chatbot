document.addEventListener("DOMContentLoaded", function () {
    const chatBox = document.getElementById("chat-box");
    const userInput = document.getElementById("user-input");
    const sendButton = document.getElementById("send-button");

    function addMessage(sender, text) {
        const message = document.createElement("div");
        message.className = "message " + sender;
        message.textContent = text;
        chatBox.appendChild(message);
        chatBox.scrollTop = chatBox.scrollHeight;
    }

    function handleKeyPress(event) {
        if (event.key === "Enter") {
            sendMessage();
        }
    }

    function sendMessage() {
        const userText = userInput.value;
        if (userText.trim()) {
            addMessage("user", userText);
            userInput.value = "";
            getResponse(userText);
        }
    }

    function getResponse(userText) {
        const responses = {
            "hello": "Hello! How can I assist you today?",
            "hi": "Hi there! What can I do for you?",
            "headache": "For headaches, try resting in a dark room and staying hydrated. If the pain persists, consider taking a pain reliever and consulting a doctor. If you need further assistance, you can contact Dr. Wendy at 0715312450.",
            "head": "For headaches, try resting in a dark room and staying hydrated. If the pain persists, consider taking a pain reliever and consulting a doctor. If you need further assistance, you can contact Dr. Wendy at 0715312450.",
            "fever": "For a fever, it's essential to rest, stay hydrated, and monitor your temperature. If your fever is high or persists, seek medical advice. For further assistance, you can contact Dr. Wendy at 0715312450.",
            "cough": "For a cough, stay hydrated and try using honey or lozenges to soothe your throat. If the cough is severe or persistent, consult a healthcare professional. If you need further assistance, you can contact Dr. Wendy at 0715312450.",
            "flu": "For flu symptoms, get plenty of rest, stay hydrated, and consider over-the-counter medications to relieve symptoms. If your symptoms persist or worsen, contact a healthcare professional.",
            "diarrhea": "For diarrhea, stay hydrated and avoid dairy, fatty, and high-fiber foods. If it persists for more than a couple of days, consult a doctor. For further assistance, you can contact Dr. Wendy at 0715312450.",
            "nausea": "For nausea, try to stay hydrated and eat small, bland meals. If your symptoms persist or worsen, seek medical advice. If you need further assistance, you can contact Dr. Wendy at 0715312450.",
            "sore throat": "For a sore throat, stay hydrated, use throat lozenges, and try warm saltwater gargles. If symptoms persist or worsen, consult a healthcare professional. For further assistance, you can contact Dr. Wendy at 0715312450.",
            "rash": "For a rash, avoid scratching and try over-the-counter creams to relieve itching. If the rash persists or is accompanied by other symptoms, seek medical advice. If you need further assistance, you can contact Dr. Wendy at 0715312450.",
            "back pain": "For back pain, rest, use ice or heat packs, and consider over-the-counter pain relievers. If the pain persists or worsens, consult a healthcare professional. For further assistance, you can contact Dr. Wendy at 0715312450.",
            "allergies": "For allergies, try to avoid the allergens causing symptoms, and consider using antihistamines. If symptoms persist, consult a healthcare professional.",
            "asthma": "For asthma, ensure you follow your asthma action plan, use your inhaler as prescribed, and avoid triggers. If symptoms worsen, seek medical advice immediately.",
            "stomachache": "For stomachaches, rest, stay hydrated, and avoid spicy or fatty foods. If the pain persists or is severe, consult a healthcare professional.",
            "constipation": "For constipation, increase your fiber intake, stay hydrated, and consider using a mild laxative. If symptoms persist, seek medical advice.",
            "anxiety": "For anxiety, practice relaxation techniques such as deep breathing or meditation. If symptoms are persistent or severe, consider speaking with a mental health professional.",
            // Add more diseases and responses here
        };

        const response = responses[userText.toLowerCase()] || "I'm sorry, I don't have information on that symptom. Please consult a healthcare professional. If you need further assistance, you can contact Dr. Wendy at 0715312450.";
        setTimeout(() => addMessage("bot", response), 1000);
    }

    // Add default welcome message on page load
    addMessage("bot", "Welcome to Daktari Wangu! I'm here to help with any medical concerns you have. Type your symptoms or questions below, and I'll do my best to assist you.");

    sendButton.addEventListener("click", sendMessage);
    userInput.addEventListener("keypress", handleKeyPress);
});
