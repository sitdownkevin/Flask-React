from flask import Flask
from flask import render_template_string
from flask_cors import CORS

app = Flask(__name__)
CORS(app)


@app.route('/')
def home():
    return render_template_string('<h1>Hello, this is backend based on FLask</h1>')



if __name__ == '__main__':
    app.run()