import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

    > main {
        padding: 52px 114px;
      
    }

    h1 {
        margin-top: 24px;
        margin-bottom: 40px;
    }
    
    p {
        font-size: 20px;
        color: ${({ theme}) => theme.COLORS.GRAY_100};
    }

    .tags {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        padding: 16px;
        gap: 24px;

        width: 100%;
        height: 88px;

        background-color: ${({ theme}) => theme.COLORS.BLACK_100};

    }

    .button {
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    .delete {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        padding: 16px;
        gap: 8px;

        width: 100%;
        height: 48px;

        background-color: ${({ theme}) => theme.COLORS.BLACK_100};
        color: ${({ theme}) => theme.COLORS.PINK};

        border: none;
        border-radius: 10px;
            
    }

   

    a {
        justify-content: start;
    }

    svg{
        margin-right: 8px;
    }
    
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 40px;
    margin-right: 10px;
    margin-left: 5px;

    > div {
     display: flex;
     flex-direction: row;
     gap: 40px;
    }

`;

export const Content = styled.div`
    max-height: 700px;

    overflow-y: scroll;
    

    ::-webkit-scrollbar {
        width: 8px;
        background: transparent;
    }

    ::-webkit-scrollbar-thumb {
        background-color: ${({ theme }) => theme.COLORS.PINK};
        border-radius: 8px;      
        border: 3px solid ${({ theme }) => theme.COLORS.PINK}; 
    }
    
`;
