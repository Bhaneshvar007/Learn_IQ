# "Project home screen"

<img src="/overview.png">




---

## **Features**
### **User Authentication and Authorization**
- User roles: Student, Instructor, Admin.
- Login/Logout functionality.
- Password reset via email.



## **Setup and Installation**
1. Clone the repository:
   ```bash
   git clone https://github.com/Bhaneshvar007/UdamyClone.git
   cd UdamyClone
   npm install

2. Course Management
Instructors can create and manage courses.
Admins can approve or reject courses.
Search and filter options by category, level, and language.
Support for both free and paid courses.

3. User Dashboard
View enrolled courses and track progress.
Manage a wishlist of desired courses.

4. Admin Dashboard
Manage users and courses.
View revenue analytics and approve/reject courses.

5. Payment Integration
Purchase courses securely.
Generate invoices for payments.
Process refunds (if applicable).

6. Ratings and Reviews
Add and view reviews for courses.
Display average ratings for courses.

7. Course Content
Upload video lectures, quizzes, assignments, and downloadable resources.

8. Messaging System
Communication between instructors and students.
Raise support tickets for queries.

9. Analytics
Course performance analytics for instructors.
Revenue analytics for admins.

10. Notifications
Email notifications for important updates.
Push notifications for app users.


# **Project Structure**

backend/
```
├── config/
│   ├── db.js                # Database connection setup
│   └── cloudStorage.js      # Cloud upload configuration (e.g., AWS S3)
├── controllers/
│   ├── authController.js     # User authentication and authorization logic
│   ├── userController.js     # User dashboard logic
│   ├── courseController.js   # Course creation and management
│   ├── adminController.js    # Admin-specific logic
│   ├── paymentController.js  # Payment and invoice handling
│   ├── reviewController.js   # Ratings and reviews
├── models/
│   ├── userModel.js          # User schema
│   ├── courseModel.js        # Course schema
│   ├── reviewModel.js        # Ratings and reviews schema
│   ├── progressModel.js      # User progress tracking schema
│   ├── orderModel.js         # Payment/order schema
├── routes/
│   ├── authRoutes.js         # Authentication routes
│   ├── userRoutes.js         # User dashboard routes
│   ├── courseRoutes.js       # Course-related routes
│   ├── adminRoutes.js        # Admin management routes
│   ├── paymentRoutes.js      # Payment integration routes
│   ├── reviewRoutes.js       # Reviews routes
├── middlewares/
│   ├── authMiddleware.js     # Authentication and role-based access
│   ├── errorMiddleware.js    # Global error handler
├── utils/
│   ├── generateToken.js      # JWT utility
│   ├── sendEmail.js          # Email sending utility
│   ├── generateInvoice.js    # Invoice generation utility
├── .env                      # Environment variables
├── server.js                 # Application entry point
└── package.json              # Dependencies
```