import { Layout } from "../../common/components/layout/layout";
import { ArticleCard } from "./components/articleCard/articleCard";
import { Herobanner } from "./components/herobanner/herobanner";
import "./home.css";

export const HomePage = () => {
  return (
    <Layout>
      <div id="home">
        <Herobanner />
        <section className="articlesList" id="articles">
          <div className="articlesListHeader">
            <h2 className="homeSubtitle">Articles</h2>
            <ArticleCard
              title=""
              description=""
              date=""
              image_src="https://images.unsplash.com/photo-1531168556467-80aace0d0144?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
              card_size="large"
            />
          </div>
          <div className="otherArticles">
          <ArticleCard
              title=""
              description=""
              date=""
              image_src="https://images.unsplash.com/photo-1531168556467-80aace0d0144?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
              card_size="normal"
            />
          <ArticleCard
              title=""
              description=""
              date=""
              image_src="https://images.unsplash.com/photo-1531168556467-80aace0d0144?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
              card_size="normal"
            />
          <ArticleCard
              title=""
              description=""
              date=""
              image_src="https://images.unsplash.com/photo-1531168556467-80aace0d0144?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
              card_size="normal"
            />
          <ArticleCard
              title=""
              description=""
              date=""
              image_src="https://images.unsplash.com/photo-1531168556467-80aace0d0144?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
              card_size="normal"
            />
          </div>
        </section>
      </div>
    </Layout>
  );
};
