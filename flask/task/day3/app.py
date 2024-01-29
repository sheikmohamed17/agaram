from flask import Flask,render_template;
from config import Config
from extension import db
from flask_migrate import Migrate
from routes import main
def create_app():
    app=Flask(__name__)
    app.config.from_object(Config)
    register_resourses(app)
    register_extensions(app)
    return app

def register_extensions(app):
    db.init_app(app)
    migrate =Migrate(app,db)
def register_resourses(app):
    app.register_blueprint(main)
    #home page
    @app.route("/",methods=["GET"])
    def home_page():
        return render_template ("basic.html")
if __name__=="__main__":
    app=create_app()
    app.run(debug=True)