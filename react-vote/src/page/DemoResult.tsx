import React, {useEffect} from 'react';
import styled from 'styled-components';
import axios, { AxiosError } from 'axios';
import {teamList} from '../recoil';
import { useRecoilState } from 'recoil';
import { ITeam } from '../interface';

interface ErrorResponse {
    message: string;
}

function DemoResult(){
    const [teams, setTeams] = useRecoilState<ITeam[]>(teamList);
    const maxVotes = Math.max(...teams.map(team => team.count));
    useEffect(() => {
        demoResult();
    }, []);
    const demoResult = async () =>{
        try{
            const accessToken = localStorage?.getItem('access')?.replace(/"/g, "");
            const response = await axios.get(`https://ceos-vote.kro.kr/votes/team/`, {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                }, 
            });
            const voteCount = response.data.vote_count;
            let updatedTeams = teams.map(team => {
                const matchingVote = voteCount.find((vote: { team: string; total: number; }) => team.name===vote.team);
                if(matchingVote){
                    return{
                        ...team,
                        count: matchingVote.total,
                    };
                }
                return team;
            });
            console.log(response.data);

            updatedTeams = [...updatedTeams].sort((a, b) => b.count - a.count);
            const maxVotes = Math.max(...updatedTeams.map(team => team.count));
            updatedTeams = updatedTeams.map(team => ({
                ...team,
                highest: team.count === maxVotes,
            }));

            setTeams(updatedTeams);

        } catch(error){
            const axiosError = error as AxiosError<ErrorResponse>; // Use the custom error response type

            if (axiosError.response) {
                const errorMessage = axiosError.response.data.message; // Now TypeScript knows that `data` has a `message` property
                console.log(axiosError.response.data);
                console.log(axiosError.response.status);
                console.log(axiosError.response.headers);
            } else if (axiosError.request) {
                console.log(axiosError.request);
            } else {
                console.log('Error', axiosError.message);
            }
        }
        
    }

    
    return(
        <Container>
            {teams.map((team, index) => (
                <RankingBox key={index}>
                <p>{index}</p>
                <p style={{width: "80%"}}>{team.name}</p>
                <p>{team.count}</p>
                </RankingBox>
            ))}
        </Container>
    );
}

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const RankingBox = styled.div`
    display: flex;
    width: 455px;
    height: 54px;
    align-items: center;
    justify-content: center;
    text-align: center;
    margin-bottom: 1rem;
    background-color: white;
`

export default DemoResult;