import styled from "styled-components";

export const HomeStyled = styled.div`
  padding: 0px 150px;
  .logo {
    margin-top: 20px;
  }
  .item-wrapper {
    display: grid;
    grid-template-columns: 30% 40% 30%;
    gap: 50px;
    .cta-items {
      margin-top: 20px;
      h1 {
        font-size: 50px;
      }
      p {
        font-size: 16px;
        line-height: 150%;
        width: 300px;
        margin-top: 30px;
      }
    }
    .cta-img {
      position: absolute;
      right: 30px;
      top: 0px;
    }
  }
`;
