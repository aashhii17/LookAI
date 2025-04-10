from flask import Flask
from dotenv import load_dotenv

# Optionally load manually, if you want. Otherwise skip it.
# load_dotenv()

app = Flask(__name__)

@app.route('/')
def home():
    return "Hello, World!"

if __name__ == '__main__':
    # Run the app with debug mode and prevent auto-load .env
    app.run(debug=True, load_dotenv=False)