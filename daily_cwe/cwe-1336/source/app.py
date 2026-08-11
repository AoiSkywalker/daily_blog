from flask import Flask, request, render_template_string

app = Flask(__name__)

os.environ['FLAG'] = 'AoiCTF{S3rv3r_S1d3_T3mpl4t3_Inj3ct10n_M4st3r}'

class FlagHolder:
    def __init__(self):
        self.flag = os.environ.get('FLAG', 'AoiCTF{REDACTED}')
    
    def get_flag(self):
        return self.flag

flag_keeper = FlagHolder()

@app.route('/')
def index():
    name = request.args.get('name', 'Guest')
    template = f"<h1>Hello, {name}!</h1>"
    return render_template_string(template)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)