import React from 'react';

import { Button } from '@mui/material';
import { CustomFont } from '../../styles/Typography';

interface PartVoteCardProps {
  memberInfo: { teamName: string; userName: string };
  isSelected: boolean;
  setSelectedMember: (value: { teamName: string; userName: string }) => void;
}

const PartVoteCard = ({
  memberInfo,
  isSelected,
  setSelectedMember,
}: PartVoteCardProps) => {
  const { teamName, userName } = memberInfo;

  const handleCardClick = () => {
    if (isSelected) {
      setSelectedMember({ teamName: '', userName: '' });
    } else {
      setSelectedMember(memberInfo);
    }
  };

  return (
    <Button
      variant="outlined"
      sx={{
        width: '180px',
        height: '100px',
        display: 'flex',
        flexDirection: 'column',
        border: '2px solid',
        borderRadius: '15px',
        borderColor: 'primary.main',
        color: `${isSelected ? 'white' : 'black'}`,
        backgroundColor: `${isSelected ? 'primary.main' : 'white'}`,
        '&:hover': {
          color: 'white',
        },
      }}
      onClick={handleCardClick}
    >
      <CustomFont inherit size="0.8rem">{`${teamName}\n`}</CustomFont>
      <CustomFont
        inherit
        weight={700}
        size="1.3rem"
      >{`${userName}`}</CustomFont>
    </Button>
  );
};

export default PartVoteCard;
