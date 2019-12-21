import styled from "styled-components";
export const Container = styled.div`
  max-height: 100vh;
  min-height: 100vh;
`;
export const MenuUl = styled.ul`
  list-style: none;
  justify-content: center;
  display: flex;
  justify-content: space-between;
  text-decoration: none;
  padding: 1em;
  padding-bottom: 0;
  margin: 0;
`;
export const UlContainer = styled.div``;
export const IlContainer = styled.div`
  clip-path: polygon(8% 0%, 92% 0%, 100% 100%, 0 100%);
`;
export const Home = styled.div`
  background-color: #91b2ef82;
  height: 100%;
`;
export const User = styled.div`
  background-color: #f9f195;
  height: 100%;
`;
export const UserFolder = styled.div`
  background-color: #f9f195;
  display: flex;
  justify-content: space-evenly;
  height: 100%;
`;
export const RepoFolder = styled.div`
  background-color: #f9f195;
  height: 100%;
`;
export const UserImage = styled.img`
  width: 150px;
  border: 1px solid #ccc;
  padding: 5px;
`;

export const Input = styled.input`
  margin: 1em;
  border: 1px;
  border-radius: 10px;
`;
export const Button = styled.button`
  margin: 1em;
  border: 1px;
  border-radius: 10px;
  font-size: 1em;
`;
