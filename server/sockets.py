from flask_socketio import SocketIO, send, emit
from database import db, User
import json

socketio = SocketIO(cors_allowed_origins='*',logger=True, engineio_logger=True)

@socketio.on('user create')
def user_create(user_name):
    user = User(username=user_name)
    db.session.add(user)
    db.session.commit()

@socketio.on('get users')
def user_list():
  users = User.query.order_by(User.id).all()
  users = [(dict(row.serialize)) for row in users]
  emit('users list', users, json=True, broadcast=True)
