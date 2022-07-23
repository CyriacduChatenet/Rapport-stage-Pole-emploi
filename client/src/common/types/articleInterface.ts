import { IArticlePart } from '../../pages/article/components/articlePart/types/articlePart';
import { IStack } from '../components/stack/types/stack';
import { IThinks } from '../../pages/article/components/thinks/types/thinks';

interface IArticle {
  _id: string;
  title: string;
  description: string;
  author: string;
  date: string;
  preview_image_src: string;
  article_link: string;
  content: IArticlePart [];
  stack: {
    stack_status: boolean;
    stack: IStack[]
  };
  thinks: IThinks;
}

export default IArticle;
