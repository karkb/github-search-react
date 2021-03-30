import React from 'react';
import styled from 'styled-components';
import StarIcon from '../assets/images/star.png';
import RepositoryIcon from '../assets/images/repository.png';
import ForkIcon from '../assets/images/fork.jpg';
import { UserCardProps } from './UserCard';

interface RepositoryCardProps {
  id?: number;
  url: string;
  name: string;
  description: string;
  language?: string;
  forks_count: number;
  stargazers_count: number;
  owner: UserCardProps;
}

const StyledCard = styled.div`
  border: 1px solid #dfe5f1;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1);
  padding: 14px;
  color: #18273a;
  font-size: 14px;
  font-weight: 700;
  height: 120px;
  margin: 8px 8px 0 0;
  overflow: hidden;
`;

const RepositoryCard = (props: RepositoryCardProps) => {
  return (
    <StyledCard>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyItems: 'center',
        }}
      >
        <div style={{ display: 'flex' }}>
          <div style={{ paddingTop: 4 }}>
            <img
              alt={'repositoryIcon'}
              style={{ width: 20, height: 20 }}
              src={RepositoryIcon}
            />
          </div>
          <div style={{ paddingLeft: 12 }}>
            <div style={{ color: '#000', fontWeight: 'bold' }}>
              {props.name}
            </div>
            <div style={{ color: '#808080', fontSize: 12 }}>
              {props.owner.name}
            </div>
            <div
              style={{
                color: '#808080',
                fontSize: 12,
                fontWeight: 'normal',
                paddingTop: 4,
                height: 60,
              }}
            >
              {props.description?.length > 120
                ? `${props.description?.slice(0, 120)}...`
                : props.description}
            </div>
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            paddingTop: 8,
          }}
        >
          <div style={{ color: 'blue', fontSize: 11 }}>
            {props.language ? props.language : 'Unknown'}
          </div>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <img
              alt={'userIcon'}
              style={{ width: 15, height: 15 }}
              src={StarIcon}
            />
            <div style={{ color: '#808080', fontSize: 11 }}>
              {props.stargazers_count}
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <img
              alt={'forkIcon'}
              style={{ width: 15, height: 15 }}
              src={ForkIcon}
            />
            <div style={{ color: '#808080', fontSize: 11 }}>
              {props.forks_count}
            </div>
          </div>
        </div>
      </div>
    </StyledCard>
  );
};

export default RepositoryCard;
