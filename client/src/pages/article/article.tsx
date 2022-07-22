import "./article.css";
import { Layout } from "../../common/components/layout/layout";
import { ArticlePart } from "./components/articlePart/articlePart";
import { StackBlock } from "../../common/components/stack/stack";
import { ThinksBlock } from "./components/thinks/thinks";

export const ArticlePage = () => {
  const stack = true;
  const thinks = true;

  const tools: string[] = [];

  const title = "Test article";
  const preview_image =
    "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80";

  return (
    <Layout>
      <div id="article">
        <div className="articleHeader">
          <h1 className="articleTitle">{title}</h1>
          <div
            className="articleImagePreview"
            style={{
              backgroundImage: `url(${preview_image})`,
            }}
          ></div>
        </div>
        <ul className="articleList">
          <ArticlePart
            title=""
            subtitle=""
            content=""
            image_middle_src=""
            image_first_src=""
            image_second_src=""
            image_middle_right_src=""
          />
        </ul>
        {stack === true ? (
          <div className="articleStack">
            <h2 className="articlePartTitle">Stack</h2>
            <ul className="stackList">
              <StackBlock tools={tools} title="Backend" />
              <StackBlock tools={tools} title="Frontend" />
              <StackBlock tools={tools} title="Devops" />
              <StackBlock tools={tools} title="Design" />
              <StackBlock tools={tools} title="Product Management" />
            </ul>
          </div>
        ) : null}
        {thinks === true ? (
          <div className="articleThinks">
            <ThinksBlock />
          </div>
        ) : null}
      </div>
    </Layout>
  );
};
