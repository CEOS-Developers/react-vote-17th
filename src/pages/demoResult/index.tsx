import styles from '../../styles/Demo.module.css';
import Header from '@/components/Header';
import groupData from '../../jsons/groupData.json';

export default function demoResult(){
    const groups = groupData.groups;

    groups.sort(function compare(a,b){
        return b.score-a.score;
    });
    
    return(
        <div className={styles.demoPage}> 
            <Header/>
            <div className={styles.titleText}>데모데이 투표결과</div>
            {groups.map((group, number) => (
                <div className={styles.longBox}>
                    <div className={styles.numberBox}>{number = number + 1}</div>
                    <div className={styles.resultNameText}>{group.name}</div>
                    <div className={styles.resultDetailText}>{group.detail}</div>
                    <div className={styles.scoreText}>{group.score}</div>
                </div>
            ))}
        </div>
    )
}