import React from "react";
import articleNews from "../article";
import Article from "./Article";

class Actualite extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      articleNews: [],
    };
  }

  componentDidMount() {
    this.setState({
      articleNews,
    });
  }

  render() {
    return (
      <section className="section-actu component-full-height center">
        <div className="component-conteneur cols-space col-text center">
          <div className="col-text-section center">
            <h1 className="title">Actualités</h1>
          </div>

          <div className="colonnes-actu cols col-text-content">
            {this.state.articleNews.map((article) => (
              <Article
                key={article.id}
                articleId={article.id}
                articleImg={article.img}
                articleTitle={article.title}
                articleContent={article.content}
              />
            ))}
          </div>
        </div>
      </section>
    );
  }
}

export default Actualite;
