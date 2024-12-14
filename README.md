# "Project home screen"

<img src="/overview.png">




---

## **Features**
### **User Authentication and Authorization**
- User roles: Student, Instructor, Admin.
- Login/Logout functionality.
- Password reset via email.

...

## **Setup and Installation**
1. Clone the repository:
   ```bash
   git clone https://github.com/Bhaneshvar007/UdamyClone.git
   cd UdamyClone


backend/
# ├── config/
# │   ├── db.js                # Database connection setup
# │   └── cloudStorage.js      # Cloud upload configuration (e.g., AWS S3)
# ├── controllers/
# │   ├── authController.js     # User authentication and authorization logic
# │   ├── userController.js     # User dashboard logic
# │   ├── courseController.js   # Course creation and management
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

