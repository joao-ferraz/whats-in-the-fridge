import styled from 'styled-components';

export const Container = styled.div`

    display: flex;
    align-items: center;
    
    .image {
        margin-right: 5px;
        font-size: 30px
    }

    input {
        border: 0px;
        background-color: grey;
        outline: 0;
        color: #FFF;
        font-size: 18px;
        flex: 1;
    }

    ::placeholder {
        color: white;
    }
`;