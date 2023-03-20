import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    
    
    main {
        padding: 0 114px 13px;
    
    }

    .content {
        margin-right: 16px;
    }

    .header {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 24px;

        margin: 24px 0 40px;

    }
    
    h1 {
        font-size: 36px;
        border-radius: 50%;
        color: ${({ theme }) => theme.COLORS.WHITE_100};
    }

    .avatar {
        width: 16px;
        height: 16px;
        border-radius: 50%;
        border: 1px solid ${({ theme }) => theme.COLORS.GRAY_200}
    }

    .tags {
        display: flex;
        margin: 40px 0;


        > span {
            background-color: ${({ theme }) => theme.COLORS.BACKGROUND_600};
        }
    }

    section {
        display: flex;
        align-items: center;
        gap: 8px;

    }

    svg{
        color: ${({ theme }) => theme.COLORS.PINK};
        font-size: 40;
    }

    p {
        text-align: justify;
        color: ${({ theme }) => theme.COLORS.WHITE_100};
        
    }

    a {
     
        justify-content: flex-start;
    }

    
    

`;

export const Content = styled.div`
    max-height: 500px;
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