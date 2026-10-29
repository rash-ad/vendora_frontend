# Vendora — Multi-Vendor E-Commerce Marketplace

**Vendora** is a multi-vendor e-commerce marketplace designed to connect customers with local shops and independent online sellers across Sri Lanka. Customers can browse products from different sellers, add items to their cart, and place orders through a simple, user-friendly shopping experience.

The project aims to help small businesses and independent sellers reach more customers through a single online marketplace.

## 🚀 Project Status

**Current status:** In Development

Vendora is currently being developed as a working demo. Features such as secure authentication, order management, seller approval, and online payment integration will be implemented and tested as development progresses.

## ✨ Features

### Customer Features
- Browse products from multiple sellers.
- View product details and prices.
- Explore product categories.
- Search for products.
- Add products to a shopping cart.
- Register and log in to an account.
- Place and manage orders (planned).
- View order history (planned).

### Seller Features
- Register as a seller.
- Submit shop information and business address.
- Select a district in Sri Lanka.
- Add, update, and delete products (planned).
- Manage customer orders (planned).
- Handle product delivery.
- Track sales and earnings (planned).

### Admin Features (Planned)
- Manage customer and seller accounts.
- Review and approve seller registrations.
- Manage products and categories.
- Monitor orders and marketplace activity.

## 🛠️ Tech Stack

### Frontend
- React.js
- JavaScript (ES6+)
- Tailwind CSS
- React Router
- React Icons

### Backend
- Node.js
- Express.js
- JavaScript

### Database
- MongoDB
- Mongoose

### Development Tools
- Visual Studio Code
- Git and GitHub
- Postman or another API testing tool
- npm



### 2. Set Up the Frontend

```bash
cd vendora-frontend
npm install
npm run dev
```

Open the local URL displayed in your terminal, usually:

```text
http://localhost:5173
```

### 3. Set Up the Backend

Open a separate terminal:

```bash
cd vendora-backend
npm install
```




Replace the example values with your actual configuration. Never commit real secrets to GitHub.

Start the backend using the script configured in your `package.json`. For example:

```bash
npm run dev
```

If your backend does not have a `dev` script yet, add one that runs your actual entry file.




## 🔐 Security Considerations

Vendora is intended to follow standard web application security practices:

- Hash passwords using bcrypt or an equivalent secure password-hashing algorithm.
- Use properly configured authentication and authorization.
- Validate and sanitize incoming request data.
- Store secrets in environment variables.
- Restrict seller operations to authorized sellers.
- Verify product prices and order totals on the server.
- Protect against unauthorized access to customer and order information.
- Integrate online payments through a trusted payment provider.
- Never store raw card details or expose secret API keys.

Security controls must be implemented and tested before production launch.

## 🚚 Delivery and Business Model

Vendora is initially planned for the Sri Lankan market.

- **Marketplace type:** Multi-vendor e-commerce.
- **Initial product range:** Mixed product categories.
- **Delivery model:** Sellers handle their own delivery.
- **Revenue model:** A commission on eligible completed orders may be introduced.
- **Seller onboarding:** Local shops and independent online sellers.
- **Deployment goal:** Start with suitable free hosting tiers, then upgrade as traffic and revenue grow.

Commission rates, payment handling, seller verification, and delivery policies will be finalized before launch.

## 🗺️ Development Roadmap

- [x] Create the initial frontend project.
- [x] Begin developing the navigation and shopping interface.
- [x] Start the product listing and seller registration pages.
- [ ] Complete responsive frontend pages.
- [ ] Connect frontend pages to backend APIs.
- [ ] Implement customer registration and login.
- [ ] Implement seller registration and authentication.
- [ ] Implement seller approval and authorization.
- [ ] Complete product management and category APIs.
- [ ] Implement cart and order management.
- [ ] Add delivery and payment workflows.
- [ ] Test API validation and application security.
- [ ] Deploy the frontend and backend.
- [ ] Onboard the first sellers and launch a controlled trial.

## 🤝 Contributing

Vendora is currently a solo development project. Suggestions, bug reports, and contributions are welcome as the project evolves.

For code changes, use feature branches and test your changes before submitting them.

## 📄 License

No open-source license has been selected yet. Unless a license is added, the project should be treated as proprietary. Add a license file if you decide to permit reuse or redistribution.

---

**Vendora — Bringing Sri Lankan sellers and customers together.**
