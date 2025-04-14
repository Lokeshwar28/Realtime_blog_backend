import express from 'express';
import multer from 'multer';
import path from 'path';
import authenticate from '../middleware/authMiddleware.js';
import {
  getPosts,
  getBlogById,
  addPost,
  editPost,
  removePost
} from '../controllers/blogController.js';

const router = express.Router();

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
      const ext = path.extname(file.originalname);
      const name = Date.now() + ext;
      cb(null, name);
    },
  });

const upload = multer({
  storage,
  fileFilter: (req, file, cb) => {
    const allowed = /jpeg|jpg|png|webp/;
    const isValid = allowed.test(file.mimetype);
    cb(null, isValid);
  }
});

router.get('/', getPosts);
router.get('/:id', getBlogById);
router.put('/:id', authenticate, upload.single('image'), editPost);
router.delete('/:id', authenticate, removePost);
router.post('/', authenticate, upload.single('image'), addPost);

export default router;