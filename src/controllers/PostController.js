import { knex } from '../database/knex/index.js';
import { AppError } from '../utils/AppError.js';

export class PostController {
  async create(request, response) {
    const { title, content } = request.body;

    if (!title || !content) {
      throw new AppError('Title and content are mandatory (o_ _)ﾉ彡');
    }

    await knex('posts').insert({
      title,
      content,
    });

    response.status(201).json({
      status: 'success',
      message: 'Your post has been created ＼(￣▽￣)／',
    });
  }

  async index(request, response) {
    const posts = await knex('posts').select('*');
    response.status(200).json(posts);
  }
}
