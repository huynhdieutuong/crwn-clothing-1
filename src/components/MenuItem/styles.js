import styled from 'styled-components';

export const MenuItemContainer = styled.div`
  display: flex;
  flex: 1 1 30%;
  height: ${({ size }) => (size === 'large' ? '380px' : '240px')};
  margin: 0 7.5px 15px;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;

  &:hover {
    cursor: pointer;

    .background-image {
      transform: scale(1.1);
    }

    .content {
      opacity: 0.9;
    }
  }
`;

export const BackgroundImageContainer = styled.div`
  width: 100%;
  height: 100%;
  background-position: center;
  background-size: cover;
  transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 15px 25px;
  background-color: white;
  opacity: 0.7;
  position: absolute;
`;

export const ContentTitle = styled.h1`
  margin-top: 0;
  margin-bottom: 6px;
  font-size: 22px;
  color: #4a4a4a;
`;

export const ContentSubtitle = styled.span`
  font-size: 16px;
`;
