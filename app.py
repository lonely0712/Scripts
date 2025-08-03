from flask import Flask, send_from_directory, render_template, make_response

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

if __name__ == '__main__':
    app.run(debug=True)
