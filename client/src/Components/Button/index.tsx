import React from 'react';
import { StyledButton, StyledIconButton } from './style'

type Props = {
  children: React.ReactNode,
  disabled?: boolean,
  isLoading?: boolean,
  size?: 'small',
};
const handleLinkWrapping = (Component: React.ElementType, props: Props) => (
  <Component {...props}>
        {props.children}
      </Component>
)

export const Button = (props: any) => handleLinkWrapping(
    StyledButton, props
  )
;


export const IconButton = (props: any) => handleLinkWrapping(StyledIconButton, props);
