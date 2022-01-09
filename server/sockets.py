from flask_socketio import SocketIO
from database import db, User

socketio = SocketIO(cors_allowed_origins='*')

@socketio.on('user create')
def handle_message(data):
    user = User(username=data)
    db.session.add(user)
    db.session.commit()
    print('User created: ' + data)
