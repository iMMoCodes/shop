import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
`;
export const Wrapper = styled.div`
  flex: 4;
  padding: 20px;
`;
export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const Title = styled.h1``;
export const AddButton = styled.button`
  width: 80px;
  border: none;
  padding: 5px;
  background-color: teal;
  border-radius: 7px;
  cursor: pointer;
  color: white;
  font-size: 16px;
`;
export const Top = styled.div`
  display: flex;
`;
export const TopLeft = styled.div`
  width: 50%;
`;
export const TopRight = styled.div`
  flex: 1;
  padding: 20px;
  margin: 20px;
  -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
`;
export const InfoTop = styled.div`
  display: flex;
  align-items: center;
`;
export const Image = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 20px;
`;
export const Name = styled.span`
  font-weight: 600;
`;
export const InfoBottom = styled.div`
  margin-top: 10px;
`;
export const InfoItem = styled.div`
  width: 150px;
  display: flex;
  justify-content: space-between;
`;
export const InfoKey = styled.span`
  font-weight: 600;
`;
export const InfoValue = styled.span`
  font-weight: 300;
`;
export const Bottom = styled.div`
  padding: 20px;
  margin: 20px;
  -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
`;
export const Form = styled.form`
  display: flex;
  justify-content: space-between;
`;
export const FormLeft = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Label = styled.label`
  margin-bottom: 10px;
  color: gray;
`;
export const Input = styled.input`
  margin-bottom: 10px;
  border: none;
  padding: 5px;
  border-bottom: 1px solid gray;
`;
export const Select = styled.select`
  margin-bottom: 10px;
`;
export const Option = styled.option``;
export const FormRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
export const Upload = styled.div`
  display: flex;
  align-items: center;
`;
export const UploadImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 10px;
  object-fit: cover;
  margin-right: 20px;
`;
export const Button = styled.button`
  border: none;
  padding: 5px;
  border-radius: 7px;
  background-color: darkblue;
  color: white;
  font-weight: 600;
  cursor: pointer;
`;
