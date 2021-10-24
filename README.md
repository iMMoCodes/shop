# ImmoStore

![Loogo](https://user-images.githubusercontent.com/74028194/138579470-22b9ae45-96ec-4da4-8205-18932e8f074e.png)

An E-commerce website


## 🔨 Tech Stack

**Client:** React

**Styling:** Styled Components, Material UI

**Others:** Redux,Axios,Firebase,Stripe

**Server:** Node, Express, MongoDB


  
## 📂 Installation

### 💻 Front-End

1. Clone the repository
```bash
  git clone https://github.com/iMMoCodes/shop.git
```

2. Go to client folder and install packages

```bash
  npm install
```

3. Create an .env file and paste following variables

- REACT_APP_STRIPE_KEY=Your Stripe API key

You can get your API key from https://stripe.com/

4. Inside client/src you can find firebase.js. Create your firebase account at https://firebase.google.com/ and paste your configurations settings there into firebaseConfig variable.

5. Inside client/src replace BASE_URL with your backend endpoint.

6. Good to go 🥳

### 📀 Back-End

1. Clone the repository

```bash
  git clone https://github.com/iMMoCodes/shop.git
```

2. Go to server folder and install packages

```bash
  npm install
```

3. Create an .env file and paste following variables
- Port= (if you don't add this, default is set to 8000)
- MONGO_URL=Your mongo URL (https://www.mongodb.com/)
- CRYPTO_SECRET=(Add your own secret)
- STRIPE_KEY=(https://stripe.com/)
- JWT_SECRET=(Add your own secret)
- JWT_COOKIE_EXPIRES_IN=(As a number of days you want cookie to last)
- EMAIL_FROM=Your email address that you want to send emails from
- SENDGRID_USERNAME=Your SendGrid username (https://sendgrid.com/)
- SENDGRID_PASSWORD=Your SendGrid password (https://sendgrid.com/)
- MY_WEBSITE=Your website address (http://localhost:PORT if you running on your computer)

4. Good to go 🥳

## Screenshots

### Shop
![Frontpage](https://user-images.githubusercontent.com/74028194/138579003-1dc68d65-b600-436a-9263-6045cede767b.jpg) ![Products](https://user-images.githubusercontent.com/74028194/138579007-8bec5fde-b179-4ccf-9d70-42e346469ec9.jpg)
![Newsletter](https://user-images.githubusercontent.com/74028194/138579012-8547593f-6839-4bce-a6f9-f864ca431a0a.jpg) ![Singleproduct](https://user-images.githubusercontent.com/74028194/138579015-9d1203e1-00b0-46db-9f1f-5f71e3ae15cd.jpg)
### Register & Login
![Register](https://user-images.githubusercontent.com/74028194/138579020-b36bc1b7-a59c-4687-8b34-5f04efcd616a.jpg) ![Login](https://user-images.githubusercontent.com/74028194/138579024-5ef37b8c-9d89-4892-b720-5e95ed0ab82f.jpg)
### Cart & Wishlist
![Cart](https://user-images.githubusercontent.com/74028194/138579038-99bf8040-678c-43c6-9440-3825df328ff0.jpg) ![Wishlist](https://user-images.githubusercontent.com/74028194/138579041-217e8d01-5133-4505-b166-70b76dfa19ac.jpg)
### Account
![Accdetails](https://user-images.githubusercontent.com/74028194/138579049-68cd54e3-18e7-4d1e-8f79-8932d5e46b9f.jpg) ![Accorders](https://user-images.githubusercontent.com/74028194/138579053-852c40c0-fc89-400f-a879-93f6e0b0f6c4.jpg)





