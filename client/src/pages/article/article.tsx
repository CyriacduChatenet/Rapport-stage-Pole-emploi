import "./article.css";
import { Layout } from "../../common/components/layout/layout";
import { ArticlePart } from "./components/articlePart/articlePart";
import { StackBlock } from "../../common/components/stack/stack";
import { ThinksBlock } from "./components/thinks/thinks";
import IArticle from "../../common/types/articleInterface";
import { useState } from "react";
import { UseFetch } from "../../common/hooks/useFetch";
import { IArticlePart } from "./components/articlePart/types/articlePart";
import { IStack } from "../../common/components/stack/types/stack";

export const ArticlePage = () => {
  const [data, setData] = useState<IArticle[]>([]);

  const getUrl = () => {
    return window.location.pathname;
  };

  console.log(getUrl());
  

  UseFetch(data, setData, `/api${getUrl()}`);

  return (
    <Layout>
      <>
        {data.map((article: IArticle) => (
          <div id="article" key={article._id}>
            <div className="articleHeader">
              <h1 className="articleTitle">{article.title}</h1>
              <div
                className="articleImagePreview"
                style={{
                  backgroundImage: `url(${article.preview_image_src})`,
                }}
              ></div>
            </div>
            <ul className="articleList">
              {article.content.map((article_part: IArticlePart) => (
                <ArticlePart
                  key={article_part._id}
                  title={article_part.subtitle}
                  subtitle=""
                  content={article_part.content}
                  image_middle_src={article_part.image_middle_src}
                  first_image_src={article_part.first_image_src}
                  second_image_src={article_part.second_image_src}
                  image_middle_right_src={article_part.image_middle_right_src}
                />
              ))}
            </ul>
            {article.stack.stack_status === true ? <div className="articleStack">
              <h2 className="articlePartTitle">Stack</h2>
              <ul className="stackList">
                {article.stack.stack.map((tools: IStack) => (
                  <StackBlock
                    key={tools._id}
                    stack_name={tools.stack_name}
                    technologies={tools.technologies}
                  />
                ))}
              </ul>
            </div> : null}
            <div className="articleThinks">
              {article.thinks.thinks_status === true ? (
                <ThinksBlock
                  thinks_content={article.thinks.thinks_content}
                  thinks_people_List={article.thinks.thinks_people_List}
                />
              ) : null}
            </div>
          </div>
        ))}
      </>
    </Layout>
  );
};
