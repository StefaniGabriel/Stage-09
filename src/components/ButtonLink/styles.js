import styled from "styled-components";

export const Container = styled.a`
    

    a {
        display: flex;
        justify-content: flex-start;
        gap: 8px;
        margin-top: 42px;
        color: ${({ theme }) => theme.COLORS.PINK}
    }
    
     a:hover {
        opacity: 0.5;
    }

    
    svg{
        color: ${({ theme }) => theme.COLORS.PINK};
        font-size: 40;
    }




`;