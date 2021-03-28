import styled from 'styled-components';


interface SearchDivProps {
  isSearchEnabled: boolean;
}

const SearchDiv = styled.div<SearchDivProps>`
  transition: all 500ms;
  margin: 0;
  position: absolute;
  top: ${(props) => props.isSearchEnabled ? '5%' : '50%'};
  left: ${(props) => props.isSearchEnabled ? '5%' : '50%'};
  transform: ${(props) => props.isSearchEnabled ? 'translate(-5%, -5%)' : 'translate(-50%, -50%)'};
`;

const GridRow = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const GridColumn = styled.div`
 flex: 33.3%;
 width: 33.3%;
 /* padding: 20px; */
 @media screen and (max-width: 768px) {
    flex: 50%;
    width: 50%;
  }
`
// .wrapper {
  
// }

export {
  SearchDiv,
  GridColumn,
  GridRow
};