import { Request, Response } from "express";
import { Article } from "../../models/article/articleModel";

export const ArticlePostController = async (
  request: Request,
  response: Response
) => {
  const newArticle = await new Article({
    title: request.body.title,
    description: request.body.description,
    author: request.body.author,
    date: request.body.date,
    preview_image_src: request.body.preview_image_src,
    article_link: request.body.article_link,
    content : request.body.content,
    stack: {
      stack_status : request.body.stack.stack_status,
      stack : request.body.stack.stack,
    },
    thinks : {
        thinks_status : request.body.thinks.thinks_status,
        thinks_content : request.body.thinks.thinks_content,
        thinks_people_List : request.body.thinks.thinks_people_List,
    }
  });
  try {
    const savedArticle = await newArticle.save();
    response.status(200).json(savedArticle);
  } catch (err) {
    response.status(500).json({ message: err });
  }
};
