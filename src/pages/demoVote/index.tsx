import groupData from '../../jsons/groupData.json';
import VoteBox from '../../components/demoVote';
import styles from '../../styles/Demo.module.css';
import Header from '@/components/Header';

export default function demoVote(){
    const group = groupData.groups;

    return(
        <div className={styles.demoVotePage}>
            <Header/>
            <div className={styles.boldText}>데모데이 투표</div>
            <VoteBox groups={group}/>
            <button className={styles.voteBtn}>투표하기</button>
        </div>
    )
}