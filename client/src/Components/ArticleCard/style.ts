import styled from "@emotion/styled";
import { IconButton } from "../Button";

export const ArticleCardWrapper = styled('div')`
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    gap:8px;
    position:relative ;
    box-shadow: rgba(17, 17, 26, 0.05) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px;
    padding: 20px;
`;

export const IconButtonStyled = styled(IconButton)`
    position:absolute;
    right:4%;
    top:2%;
`