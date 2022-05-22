import React from 'react'
import ArticleCard from '../ArticleCard';
import { v4 as uuidv4 } from 'uuid';
import { Article } from '../../types';
import Spinner from '../Spinner';
import { ArticlesContainer, ArticlesWrapper, CategoryHeading } from './style';

type ArticlesProps = {
  articlesData: {
    totalArticles: number,
    categoryName: string,
    articles: Article[],
    isCategoryLoading: boolean
  }
}

const Articles = ({ articlesData }: ArticlesProps) => {

  let { totalArticles, categoryName, articles, isCategoryLoading } = articlesData;

  const getArticles = () => {
    return articles.map((article: Article) => {
      return <ArticleCard key={uuidv4()} article={article} />;
    });
  }


  return (
    <ArticlesWrapper>
      {isCategoryLoading ? <Spinner /> :
        <>
          <CategoryHeading>
            {categoryName.toUpperCase()}
            <small> ({totalArticles})</small>
          </CategoryHeading>
          <ArticlesContainer>{getArticles()}</ArticlesContainer>
        </>
      }

    </ArticlesWrapper>
  )
}

export default React.memo(Articles);