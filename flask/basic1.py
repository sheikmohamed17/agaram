from flask import Flask,render_template

app=Flask(__name__)


@app.route('/welcome')
def welcome():
    return "Welcome"
@app.route('/about')
def about():
    return "Hi i am  ameen"
@app.route('/home/<sheik>')
def home(sheik):
    return sheik
@app.route('/linkhtml/<name>')
def html(name):
    return render_template('basic.html',name=name)
@app.route('/namelist')
def namelist():
    name=['ajay','abde','ajil']
    return render_template('basic.html',namelist=name)
