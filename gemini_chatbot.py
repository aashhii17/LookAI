import google.generativeai as genai

# Configure the API key
genai.configure(api_key="AIzaSyChyBt3BRLHFo_mao-FpXMPaFyYuXp3IsY")

# Set up the model
generation_config = {
    "temperature": 0.9,
    "top_p": 1,
    "top_k": 1,
    "max_output_tokens": 2048,
}

model = genai.GenerativeModel(
    model_name="gemini-1.0-pro",
    generation_config=generation_config,
)

# Start a chat session
chat = model.start_chat(history=[])

print("Gemini Chatbot initialized. Type 'quit' to exit.\n")

while True:
    user_input = input("You: ")
    if user_input.lower() == 'quit':
        break
    
    try:
        response = chat.send_message(user_input)
        print("Bot:", response.text)
    except Exception as e:
        print("Error:", str(e))