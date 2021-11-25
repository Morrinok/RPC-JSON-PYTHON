from flask import Flask, render_template, request
from jsonrpclib import Server
import json

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('pagina_restaurant.html')

@app.route('/postmethod', methods = ['POST'])
def get_post_javascript_data():
    jsdata = request.form['javascript_data']
    if(conn.confirmar(jsdata)):
        print("Pedido confirmado!")
    return jsdata

if __name__ == '__main__':
    conn = Server('http://localhost:1006')
    app.run(debug=True)
