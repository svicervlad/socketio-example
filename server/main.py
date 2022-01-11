from flask import Flask
from sockets import socketio
from database import db

DATATABASE_PATH = 'sqlite:////tmp/test.db'

def create_app():
    app = Flask(__name__)
    app.config["SECRET_KEY"] = "secret!"
    app.config['SQLALCHEMY_DATABASE_URI'] = DATATABASE_PATH
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
    socketio.init_app(app)
    db.init_app(app)
    return app

if __name__ == "__main__":
    app = create_app()
    socketio.run(app, host='0.0.0.0')
