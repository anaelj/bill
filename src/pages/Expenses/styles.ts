import styled from "styled-components";

interface CardProps {
  total?: boolean;
}

export const Container = styled.div`
  width: 100%;
  padding: 40px 20px;
  height: 100%;
  flex: 2;
`;
export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: space-between;
  height: 100vh;
`;

export const Title = styled.h1`
  font-size: 48px;
  color: #3a3a3a;
`;

export const CardContainer = styled.section`
  display: flex;
  gap: 5px;
  margin-top: -60px;
  align-items: center;
  justify-content: center;
`;

export const Card = styled.div`
  background: ${({ total }: CardProps): string => (total ? "#FF872C" : "#fff")};
  border-radius: 5px;
  color: ${({ total }: CardProps): string => (total ? "#fff" : "#363F5F")};
  transition: transform 0.2s;
  width: 7rem;

  padding: 0px 10px 0px 10px;

  &:hover {
    transform: translateY(-8px);
  }

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    p {
      font-size: 16px;
    }
  }

  h1 {
    margin-top: 14px;
    font-size: 36px;
    font-weight: normal;
    line-height: 54px;
  }
`;

export const TableContainer = styled.section`
  margin-top: 64px;

  table {
    width: 100%;
    border-spacing: 0 8px;

    th {
      color: #969cb3;
      font-weight: normal;
      padding: 20px 32px;
      text-align: left;
      font-size: 16px;
      line-height: 24px;
    }

    td {
      padding: 20px 32px;
      border: 0;
      background: #fff;
      font-size: 16px;
      font-weight: normal;
      color: #969cb3;

      &.title {
        color: #363f5f;
      }

      &.income {
        color: #12a454;
      }

      &.outcome {
        color: #e83f5b;
      }
    }

    td:first-child {
      border-radius: 8px 0 0 8px;
    }

    td:last-child {
      border-radius: 0 8px 8px 0;
    }
  }
`;
