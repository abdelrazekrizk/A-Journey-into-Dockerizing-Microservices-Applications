from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/hello', methods=['GET'])
def hello():
    name = request.args.get('name')
    if name is None:
        name = 'World'
    return jsonify({'message': 'Hello, {}!'.format(name)})

if __name__ == '__main__':
    app.run()