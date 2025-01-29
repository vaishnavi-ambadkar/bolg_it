
// const express = require('express');
// const mongoose = require('mongoose');
// const fileUpload = require('express-fileupload');
// const cloudinary = require('cloudinary').v2;
// const cors = require('cors');
// const Post = require('./models/Post'); // Import the Post model

// const app = express();
// const port = 5000;

// // Middleware
// app.use(cors(
//     {
//     origin:[""],
//     methods:["POST","GET"],
//     credentials:true
//     }
// )); 
// app.use(express.json());
// app.use(fileUpload({ useTempFiles: true, tempFileDir: '/tmp/' }));

// // Cloudinary configuration
// cloudinary.config({
//   cloud_name: 'dar0bjrax',
//   api_key: '176993643569666',
//   api_secret: '_2IWSycsEs6u6qUIwGgVEsdc6Q0',
// });

// // MongoDB connection
// mongoose.connect('mongodb+srv://ambadkarvaishnavi667:Sunitaambadkar@signup.q9zwd.mongodb.net/blog?retryWrites=true&w=majority&appName=signup', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })
//   .then(() => console.log('MongoDB connected'))
//   .catch((err) => console.error('Error connecting to MongoDB:', err));

// app.get("/",(req,res)=>{
//     res.json("Hi");
// })

// // Route to handle adding new post
// app.post('/api/posts', async (req, res) => {
//   const { title, description } = req.body;
//   let imageUrl = null;

  // Check if file is present
  // if (req.files && req.files.image) {
  //   try {
  //     const file = req.files.image;
  //     const uploadResult = await cloudinary.uploader.upload(file.tempFilePath);
  //     imageUrl = uploadResult.secure_url; // Cloudinary image URL
  //   } catch (err) {
  //     console.error('Error uploading image:', err);
  //     return res.status(500).json({ message: 'Error uploading image', error: err });
  //   }
  // }

  // try {
  //   // Create a new post in MongoDB
  //   const newPost = await Post.create({
  //     title,
  //     description,
  //     imageUrl,
  //   });

//     res.status(200).json({ message: 'Post created successfully!', post: newPost });
//   } catch (err) {
//     console.error('Error creating post:', err);
//     res.status(500).json({ message: 'Error creating post', error: err });
//   }
// });


// // Add this route to fetch all posts
// app.get('/api/posts', async (req, res) => {
//   try {
//     const posts = await Post.find(); // Fetch all posts from MongoDB
//     res.status(200).json(posts);
//   } catch (err) {
//     console.error('Error fetching posts:', err);
//     res.status(500).json({ message: 'Error fetching posts', error: err });
//   }
// });


// app.listen(port, () => {
//   console.log(`Server running at http://localhost:${port}`);
// });
require('dotenv').config();  // Load environment variables from .env file
const express = require('express');
const mongoose = require('mongoose');
const fileUpload = require('express-fileupload');
const cloudinary = require('cloudinary').v2;
const cors = require('cors');
const Post = require('./models/Post'); // Import the Post model

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin: ["*"], // Replace with your frontend URL
  methods: ["POST", "GET"],
  credentials: true
}));
app.use(express.json());
app.use(fileUpload({ useTempFiles: true, tempFileDir: '/tmp/' }));

// Cloudinary configuration using environment variables
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// MongoDB connection using environment variables
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('Error connecting to MongoDB:', err));

// Test route
app.get("/", (req, res) => {
  res.json("Hi, your backend is running!");
});

// Route to handle adding new post
app.post('/api/posts', async (req, res) => {
  const { title, description } = req.body;
  let imageUrl = null;

  // Check if file is present
  if (req.files && req.files.image) {
    try {
      const file = req.files.image;
      const uploadResult = await cloudinary.uploader.upload(file.tempFilePath);
      imageUrl = uploadResult.secure_url; // Cloudinary image URL
    } catch (err) {
      console.error('Error uploading image:', err);
      return res.status(500).json({ message: 'Error uploading image', error: err });
    }
  }

  try {
    // Create a new post in MongoDB
    const newPost = await Post.create({
      title,
      description,
      imageUrl,
    });

    res.status(200).json({ message: 'Post created successfully!', post: newPost });
  } catch (err) {
    console.error('Error creating post:', err);
    res.status(500).json({ message: 'Error creating post', error: err });
  }
});

// Route to fetch all posts
app.get('/api/posts', async (req, res) => {
  try {
    const posts = await Post.find(); // Fetch all posts from MongoDB
    res.status(200).json(posts);
  } catch (err) {
    console.error('Error fetching posts:', err);
    res.status(500).json({ message: 'Error fetching posts', error: err });
  }
});

// Handle undefined routes
app.use((req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

