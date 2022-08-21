import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
`;

export const PosterImg = styled.img`
  width: 350px;
  margin-right: 32px;
`;

export const InfoCard = styled.div``;

export const Title = styled.h2`
  margin-bottom: 16px;
`;

export const Score = styled.p`
  margin-bottom: 16px;
`;

export const OverviewWraper = styled.h3`
  margin-bottom: 16px;
`;

export const OverviewTitle = styled.h3`
  margin-bottom: 8px;
`;

export const OverviewText = styled.p`
  font-size: 16px;
  font-weight: 400;
`;

export const Genres = styled.h3``;

export const GenresList = styled.ul`
  display: flex;

  font-size: 16px;
  font-weight: 400;
`;

export const GenresListItem = styled.li`
  :not(:last-child) {
    margin-right: 8px;
  }
`;
