import styled from "styled-components";

export const Rows = styled.div``;
export const Row = styled.div``;

export const Label = styled.span`
  display: block;
  font-size: 0.95rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: rgba(0, 0, 0, 0.7);
`;

export const Section = styled.section`
  width: 100%;
`;

export const Wrapper = styled.div`
  display: flex;
  width: 100vw;
  padding: 3rem 8rem;
  gap: 6rem;
`;
export const Left = styled.article`
  width: 60%;
`;
export const Right = styled.aside`
  width: 40%;
  display: flex;
  flex-direction: column;
  position: relative;
  background-color: #fff;
`;

export const Inner = styled.div`
  /* position: sticky; */
  top: 10px;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 2rem;
`;

export const BasicChecks = styled.ul`
  list-style: none;
  row-gap: 1rem;
  display: flex;
  flex-direction: column;
  padding: 16px;
  color: rgba(0, 0, 0, 0.7);

  li {
    display: flex;
    align-items: center;

    svg {
      width: 18px;
      height: 18px;
      margin-right: 0.5rem;

      &.success {
        color: #79c979;
      }

      &.fail {
        color: #f29c96;
      }

      &.exlamation {
        color: #ffbe5f;
      }
    }

    span {
      width: 90%;
    }
  }
`;
