from flask import Flask,render_template,request

app=Flask(__name__)

todolist=[]
@app.route('/todo',methods=['GET','POST'])
def todo():
    if request.method=='POST' and request.form['itemlist']!='':
        todolist.append(request.form['itemlist'])
    return render_template('todo.html',list=todolist)
@app.route('/deltodo/<itemdel>')
def deltodo(itemdel):
    todolist.remove(itemdel)
    return render_template('todo.html',list=todolist)
@app.route('/todoedit/<itemid>',methods=['GET','POST','PUT'])
def todoedit(itemid):
    itemindex=todolist[int(itemid)]
    if request.method=='POST':
        todolist[int(itemid)]=request.form['u_value']
        return render_template('todo.html',list=todolist)
    else:
        return render_template('todoupdate.html',index=itemindex)
if __name__=="__main__":
    app.run(debug=True)