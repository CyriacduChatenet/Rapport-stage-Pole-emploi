import "./article.css";
import { Layout } from "../../common/components/layout/layout";
import { ArticlePart } from "./components/articlePart/articlePart";
import { StackBlock } from "../../common/components/stack/stack";
import { ThinksBlock } from "./components/thinks/thinks";
import IArticle from "../../common/types/articleInterface";
import { useState } from "react";
import { UseFetch } from "../../common/hooks/useFetch";

export const ArticlePage = () => {
  const [data, setData] = useState<IArticle[] | any>([]);

  const getUrl = () => {
    return window.location.pathname;
  };

  UseFetch(data, setData, `/api${getUrl()}`);

  return (
    <Layout>
      {data.map((article: IArticle) => (
        <div id="article">
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
            {article.content.map((article_part: any) => (
              <ArticlePart
                key={article_part._id}
                title={article_part.first_title}
                subtitle={article_part.first_part_first_subtitle}
                content={article_part.first_part_first_content}
                image_middle_src=""
                image_first_src={article_part.first_part_first_image_src}
                image_second_src={article_part.first_part_second_image_src}
                image_middle_right_src=""
              />
            ))}
          </ul>
          {data.stack === true ? (
            <div className="articleStack">
              <h2 className="articlePartTitle">Stack</h2>
              <ul className="stackList">
                {/* <StackBlock tools={tools} title="Backend" />
              <StackBlock tools={tools} title="Frontend" />
              <StackBlock tools={tools} title="Devops" />
              <StackBlock tools={tools} title="Design" />
              <StackBlock tools={tools} title="Product Management" /> */}
              </ul>
            </div>
          ) : null}
          {data.thinks === true ? (
            <div className="articleThinks">
              <ThinksBlock />
            </div>
          ) : null}
        </div>
      ))}
    </Layout>
  );
};
