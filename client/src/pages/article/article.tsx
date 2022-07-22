import "./article.css";
import { Layout } from "../../common/components/layout/layout";
import { ArticlePart } from "./components/articlePart/articlePart";
import { StackBlock } from './components/stack/stack';
import { ThinksBlock } from "./components/thinks/thinks";

export const ArticlePage = () => {
  return (
    <Layout>
      <div id="article">
        <header className="article-herobanner">
          <h1 className="articleTitle">Pole emploi</h1>
          <img src="" alt="" />
        </header>
        <section className="articlesPart">
          <ArticlePart
            title=""
            subtitle=""
            content=""
            image_middle_src=""
            image_middle_left_src=""
            image_first_src=""
            image_second_src=""
          />
        </section>
        <StackBlock />
        <ThinksBlock />
      </div>
    </Layout>
  );
};
