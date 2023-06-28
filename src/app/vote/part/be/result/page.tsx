'use client';
import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import Line from '@/components/common/Line';
import Title from '@/components/common/Title';
import Button from '@/components/vote/Button';
import Link from 'next/link';
import Order from '@/components/common/Order';
import { BsCheckCircle } from 'react-icons/bs';
import Score from '@/components/vote/Score';
import { showBackResult } from '@/api/requests';
import confetti from 'canvas-confetti';
import crown from '@/assets/images/crown.png';

function page() {
  const [leaders, setLeaders] = useState<any[]>([]);
  const [highestScoreLeaders, setHighestScoreLeaders] = useState<any[]>([]);

  useEffect(() => {
    const getLists = async () => {
      const response = await showBackResult();
      const transformedLeaders = Object.values(response).map((data: any) => {
        return {
          key: data[0],
          name: data[0],
          team: data[1],
          score: data[2],
        };
      });
      transformedLeaders.sort((a, b) => b.score - a.score); // Sort by descending score
      setLeaders(transformedLeaders);

      // Find the highest score
      if (transformedLeaders.length > 0) {
        const highestScore = transformedLeaders[0].score;
        const highestScoreLeaders = transformedLeaders.filter(
          (leader) => leader.score === highestScore
        );
        setHighestScoreLeaders(highestScoreLeaders);
      }
    };
    const firework = async () => {
      var end = Date.now() + 2 * 1000;
      var colors = ['#bb0000', '#ffffff'];
      (function frame() {
        confetti({
          particleCount: 2,
          angle: 60,
          spread: 55,
          origin: { x: 0 },
          colors: colors,
        });
        confetti({
          particleCount: 2,
          angle: 120,
          spread: 55,
          origin: { x: 1 },
          colors: colors,
        });

        if (Date.now() < end) {
          requestAnimationFrame(frame);
        }
      })();
    };
    getLists();
    firework();
  }, []);

  return (
    <Container>
      <Order order={'3'} />
      <Title content="BE 파트장 투표 결과" />
      <Line />
      <SelectPersonWrapper>
        {leaders.map((leader) => (
          <FormWrapper key={leader.key}>
            <C>
              {highestScoreLeaders.includes(leader) && (
                <Crown src={crown.src} />
              )}
            </C>
            <LeaderInfoWrapper
              ishighestscore={
                highestScoreLeaders.includes(leader) ? 'include' : 'none'
              }
            >
              <VoteForm key={leader.key}>
                <VoteTeam>{leader.team}</VoteTeam>
                <VoteName>{leader.name}</VoteName>
              </VoteForm>

              <CoverTeam>
                <Score
                  score={leader.score}
                  win={highestScoreLeaders.includes(leader) ? 1 : 2}
                />
              </CoverTeam>
            </LeaderInfoWrapper>
          </FormWrapper>
        ))}
      </SelectPersonWrapper>
      <LinkWrapper>
        <Link href={'/vote'}>
          <Button content="돌아가기" />
        </Link>
      </LinkWrapper>
    </Container>
  );
}

export default page;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SelectPersonWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 280px;
  padding-right: 20px;

  overflow-y: scroll;
  overflow-x: hidden;
  height: 370px;
  &::-webkit-scrollbar {
    width: 8px;
    height: 8px;
    padding-left: 3px;

    border-radius: 6px;
    background-color: rgba(255, 255, 255, 0.4);
  }
  &::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.3);
    border-radius: 6px;
  }
`;
const VoteForm = styled.div`
  width: 120px;
  height: 55px;
  background-color: #f5f5f5;
  border: 3px solid #000000;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 13px;
`;
const VoteTeam = styled.div`
  color: #979797;
  font-size: 13px;
  font-weight: bold;
`;
const VoteName = styled.div`
  font-size: 19px;
  font-weight: bold;
`;

const FormWrapper = styled.div`
  position: relative;
`;
const CoverTeam = styled.div`
  position: absolute;
  margin-left: 110px;
  z-index: 1;
  //top: 0;
  bottom: 0;
`;

const LinkWrapper = styled.div`
  margin-top: 25px;
`;

const Crown = styled.img`
  width: 35px;
  height: 35px;
`;
const C = styled.div`
  position: absolute;
  top: 11px;
  z-index: 1;
  margin-left: 110px;
`;

const LeaderInfoWrapper = styled.div<{ ishighestscore: string }>`
  ${({ ishighestscore }) =>
    ishighestscore == 'none' &&
    css`
      opacity: 0.5; // 반투명 효과를 위한 투명도 조절
    `}
`;
