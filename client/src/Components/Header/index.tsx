import React, { useCallback, useState } from 'react'
import { useAppContext } from '../../hooks/useAppContext';
import Input from '../Input'
import { debounce } from "lodash";
import { HeaderRightLinksContainer, IconConatiner, ItemsCounter, StyledHeader, StyledLogo } from './style';
import { Cart, Heart } from '@emotion-icons/bootstrap';
import { IconButton } from '../Button';
import { useNavigate } from "react-router-dom";
import { logoUrl } from '../../utils/utils.constants';
import { TypeKeys } from '../../Context/actions.constants';

const Header = () => {

  const [inputValue, setInputValue] = useState('');
  const { appContext } = useAppContext();
  const { userState } = appContext.state;
  const navigate = useNavigate();


  const filterData = useCallback(debounce((value: string) => {
    appContext.dispatch({ type: TypeKeys.SEARCH_ARTICLES_DATA, searchString: value })
  }, 800), []) ;

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    filterData(event.target.value);
  }

  const logoClickHandler = () => {
    navigate('/')
  }

  return (
    <StyledHeader>
      <StyledLogo src={logoUrl} onClick={logoClickHandler} />

      <Input type={'text'} value={inputValue} onChange={handleInputChange} placeholder={'Quick Search'} />

      <HeaderRightLinksContainer>
        <IconButton>
          <IconConatiner>
            <Heart width={20} height={20} />
            Wishlist
          </IconConatiner>
          <ItemsCounter>{userState.wishList.count}</ItemsCounter>
        </IconButton>
        <IconButton>
          <IconConatiner>
            <Cart width={20} height={20} fill={'black'} />
            Your Cart
          </IconConatiner>
          <ItemsCounter>{userState.cart.count}</ItemsCounter>
        </IconButton>
      </HeaderRightLinksContainer>

    </StyledHeader>
  )
}

export default Header;