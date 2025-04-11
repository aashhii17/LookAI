from flask import Flask, request, render_template
import google.generativeai as genai
from dotenv import load_dotenv
import os

load_dotenv()  # Load environment variables from .env file

app = Flask(__name__)

# Configure the API key - in production, use environment variables
genai.configure(api_key="AIzaSyChyBt3BRLHFo_mao-FpXMPaFyYuXp3IsY")

# Initialize the model
model = genai.GenerativeModel('gemini-1.0-pro')
chat = model.start_chat(history=[])

@app.route('/', methods=['GET', 'POST'])
def home():
    bot_response = ""
    if request.method == 'POST':
        user_input = request.form['user_input']
        try:
            response = chat.send_message(user_input)
            bot_response = response.text
        except Exception as e:
            bot_response = f"Error: {str(e)}"
    
    return render_template('index.html', response=bot_response)

if __name__ == '__main__':
    app.run(debug=True)