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
import { showDemoResult } from '@/api/requests';
import crown from '@/assets/images/crown.png';
import confetti from 'canvas-confetti';

function page() {
  const [teams, setTeams] = useState<any[]>([]);
  const [highestScoreTeams, setHighestScoreTeams] = useState<any[]>([]);

  useEffect(() => {
    const getLists = async () => {
      const response = await showDemoResult();
      const transformedTeams = Object.values(response).map((data: any) => {
        return {
          key: data[0],
          team: data[0],
          score: data[1],
        };
      });
      transformedTeams.sort((a, b) => b.score - a.score); // Sort by descending score
      setTeams(transformedTeams);

      // Find the highest score
      if (transformedTeams.length > 0) {
        const highestScore = transformedTeams[0].score;
        const highestScoreTeams = transformedTeams.filter(
          (team) => team.score === highestScore
        );
        setHighestScoreTeams(highestScoreTeams);
      }
    };
    const firework = async () => {
      var end = Date.now() + 15 * 1000;
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
      <Title content="데모데이 투표 결과" />
      <Line />
      <SelectPersonWrapper>
        {teams.map((team) => (
          <FormWrapper key={team.key}>
            <C>
              {highestScoreTeams.includes(team) && <Crown src={crown.src} />}
            </C>
            <TeamInfoWrapper
              ishighestscore={
                highestScoreTeams.includes(team) ? 'include' : 'none'
              }
            >
              <VoteForm>
                <VoteTeam>{team.team}</VoteTeam>
              </VoteForm>

              <CoverTeam>
                <Score
                  score={team.score}
                  win={highestScoreTeams.includes(team) ? 1 : 2}
                />
              </CoverTeam>
            </TeamInfoWrapper>
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
`;
const VoteForm = styled.div`
width: 280px;
height: 55px;
border: 3px solid #000000;
display: flex;
align-items: center;
flex-direction: column;
justify-content: center;
margin-top: 13px;
background-color: #f5f5f5;
}
`;
const VoteTeam = styled.div`
  font-size: 19px;
  font-weight: bold;
`;

const FormWrapper = styled.div`
  position: relative;
`;
const CoverTeam = styled.div`
  position: absolute;
  margin-left: 265px;
  z-index: 1;
  bottom: 0;
`;

const LinkWrapper = styled.div`
  margin-top: 25px;
`;
const Crown = styled.img`
  width: 40px;
  height: 40px;
`;
const C = styled.div`
  position: absolute;
  top: -5px;
  z-index: 1;
  left: -10px;
`;

const TeamInfoWrapper = styled.div<{ ishighestscore: string }>`
  ${({ ishighestscore }) =>
    ishighestscore == 'none' &&
    css`
      opacity: 0.5; // 반투명 효과를 위한 투명도 조절
    `}
`;
