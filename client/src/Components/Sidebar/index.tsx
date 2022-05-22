import React from 'react'
import { useLocation } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { ListItem, SidebarHeading, SidebarWrapper, StyledLink } from './style';

type sidebarMapObject = {
  name: string,
  urlPath: string,
}

type sidebarProps = {
  childrenCategories: sidebarMapObject[],
  onMenuClick ?: () => void
}

const Sidebar = ({ childrenCategories, onMenuClick }: sidebarProps) => {
  let location = useLocation();

  return (
    <SidebarWrapper className={'sidebar'}>
      <SidebarHeading>Kategorien</SidebarHeading>

      <ul>
        {childrenCategories.map(({ name, urlPath }: sidebarMapObject) => (
            <ListItem className={`/${urlPath}` === location.pathname ? 'active' : 'inactive'} key={uuidv4()} onClick={onMenuClick}>
              <StyledLink to={urlPath}>{name}</StyledLink>
            </ListItem>
          )
        )}
      </ul>
    </SidebarWrapper>
  )
}

export default React.memo(Sidebar)