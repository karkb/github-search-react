import styled from 'styled-components';

const CustomButtonDiv = styled.div`
	background: #2ECFBF;
	font-weight: 700;
	border-radius: 6px;
	color: #FFF;
	padding: 15px 0px;
	text-align: center;
	max-width: 325px;
	width: 100%;
	margin: 40px auto 20px;
	cursor: pointer;
	:hover {
		opacity: 0.8;
	}
`;

const PageTitleDiv = styled.div`
  font-size: 32px;
  font-weight: 900;
  color: #000;
  text-align: center;
  padding: 105px 0px 30px;
`;

const LabelDiv = styled.div`
  font-size: 12px;
  font-weight: 700;
  color: #6F8086;
  padding-bottom: 20px;
  text-align: left;
`;

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
  CustomButtonDiv,
  PageTitleDiv,
  SearchDiv,
  LabelDiv,
  GridColumn,
  GridRow
};