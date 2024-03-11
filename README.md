
# EZlynk - URL Shortener Flask App

EZlynk is a URL shortener Flask application that allows users to shorten long URLs into more manageable and shareable links. This application is powered by Flask, with Firebase serving as the backend data storage.

## Features

- Shorten long URLs with ease.
- Customize shortened URLs according to your preferences.
- Choose between random or custom short URL types.
- Real-time availability check for custom short URLs.
- Securely store and manage URLs using Firebase.

## Installation

To run EZlynk locally, follow these steps:

1. Clone this repository to your local machine.
   
   ```
   git clone https://github.com/arycodes/ezlynk.git
   ```

2. Install the required dependencies listed in `requirements.txt` using pip.
   
   ```
   pip install -r requirements.txt
   ```

3. Set up a Firebase project and obtain the necessary credentials (service account key).

4. Configure your Firebase credentials in the Flask application.

5. Run the Flask application.
   
   ```
   python app.py
   ```

6. Access EZlynk in your web browser at `http://localhost:5000`.

## Firebase Setup

To set up Firebase for EZlynk:

1. Create a Firebase project on the Firebase Console.

2. Go to Project Settings and select the Service accounts tab.

3. Generate a new private key for your Firebase service account and download the JSON file containing the credentials.

4. Place the downloaded JSON file in your Flask application directory and configure the path in the Flask app.

## Usage

To use EZlynk, follow these steps:

1. Navigate to the [EZlynk web interface](https://ezlynk.vercel.app) in your browser.
2. Enter the long URL you want to shorten in the provided input field.
3. Optionally, choose the type of short URL you prefer (random or custom).
4. If custom URL is selected, customize your short URL according to availability.
5. Click the "Shorten" button to generate your shortened URL.
6. Copy the generated URL and share it wherever you need.

## Contributing

Contributions to EZlynk are welcome! If you encounter any issues or have suggestions for improvement, please open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the LICENSE file for details.

## Contact

For any inquiries or feedback, feel free to contact us at arycodes501@gmail.com.

---