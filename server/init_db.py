from main import create_app
from database import db, User

if __name__ == "__main__":
    app = create_app()
    app.app_context().push()

    db.create_all()
    admin = User(username="admin")
    db.session.add(admin)
    db.session.commit()
