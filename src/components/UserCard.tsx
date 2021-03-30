import React from 'react';
import styled from 'styled-components';

export type UserCardProps = {
  id?: number;
  name: string;
  avatar_url: string;
  url: string;
  type: string;
};

const StyledCard = styled.div`
  border: 1px solid #dfe5f1;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1);
  padding: 14px;
  color: #18273a;
  font-size: 14px;
  font-weight: 700;
  height: 80px;
  margin: 8px 8px 0 0;
  overflow: hidden;
`;

const Avatar = styled.img`
  vertical-align: middle;
  width: 60px;
  height: 60px;
  border-radius: 50%;
`;

const UserCard = (props: UserCardProps) => {
  return (
    <StyledCard>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyItems: 'center',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Avatar src={props.avatar_url} alt="Avatar" />
          <div style={{ paddingLeft: 12 }}>
            <div style={{ color: '#000', fontWeight: 'bold' }}>
              {props.name}
            </div>
            <a target="_blank" href={props.url} rel="noreferrer">
              View Profile
            </a>
          </div>
        </div>
      </div>
    </StyledCard>
  );
};

export default UserCard;
