import { Layout } from "../../common/components/layout/layout";
import { ArticleCard } from "./components/articleCard/articleCard";
import { Herobanner } from "./components/herobanner/herobanner";
import "./home.css";
import { UseFetch } from "../../common/hooks/useFetch";
import { useState } from "react";
import IArticle from "../../common/types/articleInterface";

export const HomePage = () => {
  const [data, setData] = useState<IArticle[]>([]);

  UseFetch(data, setData, "/api/articles");
  return (
    <Layout>
      <div id="home">
        <Herobanner />
        <section className="articlesList" id="articles">
          <div className="articlesListHeader">
            <h2 className="homeSubtitle">Articles</h2>
          </div>
          <div className="otherArticles">
            {data.map((article) => (
              <ArticleCard
                key={article._id}
                link={article.article_url}
                title={article.title}
                description={article.description}
                date={article.date}
                image_src={article.preview_image_src}
                card_size="normal"
              />
            ))}
          </div>
        </section>
      </div>
    </Layout>
  );
};
