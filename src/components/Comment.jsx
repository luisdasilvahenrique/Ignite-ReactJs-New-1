import styles from './Comment.module.css';
import {Trash, ThumbsUp} from 'phosphor-react';

export function Comment(){
    return(
        <div className={styles.comment}>
            <img src="https://github.com/luisdasilvahenrique.png" alt="" />
        
            <div className={styles.commentBox}>
                <header>
                    <div className={styles.authorAndTime}>
                        <strong>Luís Henrique</strong>
                        <time title='20 de Junho às 11:47' dateTime='2022-05-20 11:47:33'>Cerca de 2h atrás</time>
                    </div>

                    <button title='Deletar comentário'>
                        <Trash size={20}/>
                    </button>
                </header>
                <p>Muito bom Devon, parabéns!! 👏👏</p>

                <div className={styles.commentContent}>
                    <footer>
                        <button>
                            <ThumbsUp/>
                            Aplaudir <span>20</span>
                        </button>
                    </footer>
                </div>
            </div>
        </div>
    );
}