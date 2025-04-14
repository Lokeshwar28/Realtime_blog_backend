import Blog from '../models/Blog.js';

export const getPosts = async (req, res) => {
  try {
    console.log('📥 GET /api/blogs called');
    const posts = await Blog.findAll({
      order: [['created_at', 'DESC']],
      include: {
        association: 'author',
        attributes: ['username', 'email']
      }
    });
    res.json(posts);
  } catch (err) {
    console.error('❌ Failed to load posts:', err.message);
    res.status(500).json({ message: 'Failed to load posts', error: err.message });
  }
};

export const getBlogById = async (req, res) => {
    const { id } = req.params;
    try {
      const blog = await Blog.findByPk(id);
      if (!blog) {
        return res.status(404).json({ message: 'Blog not found' });
      }
      res.json(blog);
    } catch (error) {
      res.status(500).json({ message: 'Server error', error: error.message });
    }
  };

export const addPost = async (req, res) => {
  try {
    const { title, content } = req.body;
    const userId = req.user.id;
    const imageUrl = req.file ? `/uploads/${req.file.filename}` : null;

    if (!title || !content) {
      return res.status(400).json({ message: 'Title and content are required' });
    }

    const post = await Blog.create({ title, content, user_id: userId, image_url: imageUrl });
    req.app.get('io').emit('new_post_created');
    res.status(201).json(post);
  } catch (err) {
    console.error("❌ POST ERROR:", err);
    res.status(500).json({ message: 'Something went wrong', error: err.message });
  }
};

export const editPost = async (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;
  const userId = req.user.id;
  const imageUrl = req.file ? `/uploads/${req.file.filename}` : null;

  if (!title || !content) {
    return res.status(400).json({ message: 'Title and content are required' });
  }

  try {
    const [updated] = await Blog.update(
      { title, content, image_url: imageUrl },
      { where: { id, user_id: userId } }
    );
    if (!updated) return res.status(403).json({ message: 'Not allowed' });

    const updatedPost = await Blog.findByPk(id);
    req.app.get('io').emit('post_updated', updatedPost);
    res.json(updatedPost);
  } catch (error) {
    res.status(500).json({ message: 'Update failed', error: error.message });
  }
};

export const removePost = async (req, res) => {
  const { id } = req.params;
  const userId = req.user.id;

  try {
    const deleted = await Blog.destroy({ where: { id, user_id: userId } });
    if (!deleted) return res.status(403).json({ message: 'Not allowed' });

    req.app.get('io').emit('post_deleted', id);
    res.json({ message: 'Post deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Delete failed', error: error.message });
  }
};