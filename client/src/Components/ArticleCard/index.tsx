import { Heart, HeartFill } from '@emotion-icons/bootstrap'
import React, { useState } from 'react'
import { TypeKeys } from '../../Context/actions.constants'
import { useAppContext } from '../../hooks/useAppContext'
import { Article } from '../../types'
import { formatter } from '../../utils/utils'
import { Button } from '../Button'
import LazyImage from '../LazyImage'
import { ArticleCardWrapper, IconButtonStyled } from './style'

const ArticleCard = ({ article }: { article: Article }) => {

  const [state, setState] = useState({
    isWishListed:false,
    isAddedToCart: false,
  });
  const { isAddedToCart,  isWishListed} = state
  const { appContext } = useAppContext();

  const onAddToCartClick = () => {
    if(!isAddedToCart) {
      appContext.dispatch({type: TypeKeys.ADD_TO_CART, payload: article});
    } else {
      appContext.dispatch({type: TypeKeys.REMOVE_FROM_CART, payload: article});
    }
    setState({
      ...state,
      isAddedToCart: !isAddedToCart
    })
  }

  const onAddToWishlistClick = () => {
    if(!isWishListed) {
      appContext.dispatch({type: TypeKeys.ADD_TO_WISHLIST, payload: article});
    } else {
      appContext.dispatch({type: TypeKeys.REMOVE_FROM_WISHLIST, payload: article});
    }
    setState({
      ...state,
      isWishListed: !isWishListed
    })
  }

  return (
    <ArticleCardWrapper>
      <IconButtonStyled onClick={onAddToWishlistClick}>
        {isWishListed ? <HeartFill width={20} height={20} color={'red'} /> : <Heart width={20} height={20} />}
      </IconButtonStyled>
      <LazyImage src={article.images[0].path} alt="productImage" />
      <div>{article.name}</div>
      <div>{formatter.format(article.prices.regular.value / 100)}</div>
      <Button onClick={onAddToCartClick}>{isAddedToCart ? 'Remove from Cart' : 'Add to Cart'}</Button>
    </ArticleCardWrapper>
  )
}

export default ArticleCard;