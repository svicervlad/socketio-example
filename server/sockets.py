from flask_socketio import SocketIO

socketio = SocketIO(cors_allowed_origins='*')

@socketio.on('message')
def handle_message(data):
    print('received message: ' + data)
