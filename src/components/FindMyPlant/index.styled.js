import styled from 'styled-components';

export const CategoryBlock = styled.div`
	//display: flex;
	margin: 0 auto;
	margin-top: 50px;
	border-radius: 20px;
	background-color: rgb(238, 238, 238);
	width: 60%;
	height: 200px;
`;
export const CategoryLine = styled.div`
	display: flex;
	//justify-content: space-around;
`;
export const CategoryName = styled.div`
	margin-left: 10px;
	margin-right: 10px;
	font-weight: bolder;
`;
export const Categoryitems = styled.div`
	display: flex;
	//justify-content: space-around;
`;
export const InputS = styled.input`
	appearance: none;
	text-align: left;
`;

export const Item = styled.div`
	cursor: pointer;
	margin-right: 8px;

	:hover {
		font-weight: bolder;
		border: 1px solid;
	}
`;

export const Categorys = styled.div`
	//이걸로 카테고리 클릭 되는 애들 일정 간격으로 벌리고 싶었는데 div가 끝까지 안감.
	//display: block;
`;
