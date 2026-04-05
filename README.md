🛠️ Admin Panel (Node.js + Express + MongoDB)

A full-featured Admin Panel System built with Node.js, Express, MongoDB, and EJS to manage Categories, Subcategories, Extra Categories, and Products with image uploads.

🚀 Features
🔐 Authentication (JWT + Bcrypt)
📂 Category Management (CRUD)
📁 Subcategory Management
🏷️ Extra Category (Filters like Brand, RAM, Storage)
🛒 Product Management
🖼️ Multiple Image Upload (Multer)
✏️ Edit / Delete Functionality
📊 Admin Dashboard UI
⚡ MVC Architecture
📸 Screenshots

📌 Add your project screenshots in /public/screenshots/ and link here

🔐 Login Page

![Login](/images/login.png)


📊 Dashboard

![Home](/images/home.png)


📂 Category Page
 
![category](/images/view-table.png)
![category](/images/add-cat.png)


📂  Extra Category Page
 
![Extra category](/images/ex-table.png)
![Extra category](/images/add-ex-cat.png)


🛒 Product Page

![add-category](/images/view-pro.png)
![add-category](/images/add-pro.png)




🧩 Project Structure
├── controllers/
├── models/
├── routes/
├── middlewares/
├── views/            # EJS Templates
├── public/           # Static files (CSS, JS, Images)
├── uploads/          # Uploaded images
├── config/
├── .env
├── server.js
⚙️ Tech Stack
Backend: Node.js, Express.js
Database: MongoDB (Mongoose)
Frontend: EJS, Bootstrap
Auth: JWT, Bcrypt
File Upload: Multer
📦 Installation
git clone https://github.com/dev-dhamandadiya/Make-Admin-Panel-On-Reqiured-node.js.git
cd Make-Admin-Panel-On-Reqiured-node.js
npm install
🔑 Environment Variables

Create .env file:

PORT=8081
MONGO_URI=your_mongodb_url
JWT_SECRET=your_secret
▶️ Run Project
npm start
🌐 API Documentation (Basic)
🔐 Auth APIs
Method	Route	Description
POST	/login	Admin login
POST	/register	Admin register
📂 Category APIs
Method	Route	Description
GET	/category/view	Get all categories
POST	/category/create	Create category
GET	/category/edit/	Edit page
POST	/category/update/	Update category
GET	/category/delete/	Delete category
📁 Subcategory APIs
Method	Route	Description
GET	/subcategory/view	Get all
POST	/subcategory/create	Create
🏷️ Extra Category APIs
Method	Route	Description
GET	/extracategory/view	Get all
POST	/extracategory/create	Create
🛒 Product APIs
Method	Route	Description
GET	/product/view	Get all products
POST	/product/create	Create product
GET	/product/edit/	Edit product
POST	/product/update/	Update product
GET	/product/delete/	Delete product
🖼️ Image Upload
Uses Multer
Supports multiple images
upload.array("images", 5)
🔥 Future Improvements
🔍 Search & Filtering
📄 Pagination
☁️ Cloudinary Image Upload
👥 Role-based Authentication
📱 REST API + React Frontend
👨‍💻 Author

Dhamanda Diya Hoshiyarsingh

GitHub: https://github.com/dev-dhamandadiya

⭐ Support

If you like this project, give it a ⭐ on GitHub 🚀

