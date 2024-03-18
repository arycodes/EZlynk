from flask import Flask , render_template , request , jsonify , redirect , send_from_directory
import manager

app = Flask(__name__)




@app.route('/assets/logo.png')
def get_logo():
    return send_from_directory('static', 'logo_trans.png')

@app.route("/")
def index():
    return render_template("index.html")






@app.route('/check_route', methods=['POST'])
def check_route():
    route = request.form.get('route')
    existing_routes = manager.access_all_links()

    if route in existing_routes:
        return jsonify({'available': False})
    else:
        return jsonify({'available': True})


@app.route("/<string:route>/")
def redirect_to_external(route):
    link = manager.access_link_by_route(route)
    if link:
        external_url = link
        return redirect(external_url)
    else:
        return "URL is not found"

@app.route("/" , methods = ["POST"])
def indexsubmit():
    url = request.form["url"].strip().lower()
    customroute = request.form["editableInput"].split("/")[-1].lower()
    if customroute:
        route = customroute
    else:
        existing_routes = manager.access_all_links()
        route = manager.shortest_unused_string(existing_routes)

    try:
        manager.append_data(route=route ,link=url)
        return render_template("success.html" , original_link = url , shortened_link = f"https://ezlynk.vercel.app/{route}")
    except:
        return "Something went wrong"


if __name__ == '__main__':
    app.run(debug=True , host="0.0.0.0")