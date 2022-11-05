import styled from 'styled-components';
const InputStyled = styled.input`
    all: unset;
    padding: 5px 2px;
    border-bottom: ${styleProps => styleProps.borderColor};
    border-radius:2px;
    background-color:#f5f5f5;
    margin:2px;
`
const Input = ({ inputType, inputName, ...styleProps }) => {
    return (
        <InputStyled type={inputType} name={inputName} {...styleProps}/>
    )
};
export default Input;