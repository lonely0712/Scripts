from flask import Flask, render_template, send_from_directory, make_response

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/modules/<path:filename>')
def serve_module(filename):
    response = make_response(send_from_directory('static/modules', filename))
    response.headers['Content-Type'] = 'application/octet-stream'
    response.headers['Content-Disposition'] = f'attachment; filename="{filename}"'
    return response
