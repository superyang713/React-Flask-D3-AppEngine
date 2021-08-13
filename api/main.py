import flask
from flask import jsonify, request


app = flask.Flask(__name__)


@app.route('/api/user', methods=["GET"])
def user():
    email = request.headers.get(
        'X-Goog-Authenticated-User-Email',
        "google.accounts:yang.dai@mightyhive.com"
    )

    email = email.split(":")[1]
    name = email.split("@")[0]
    name = name.split(".")[0] if "." in name else name
    response = {
        "email": email,
        "name": name
    }
    response = jsonify(response)
    response.headers["Access-Control-Allow-Origin"] = "*"

    return response


if __name__ == '__main__':
    app.run(debug=True)
