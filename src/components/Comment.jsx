import styles from './Comment.module.css';
import {Trash, ThumbsUp} from 'phosphor-react';
import { Avatar } from './Avatar';
import { useState } from 'react';

export function Comment({ content, onDeleteComment }){
    const [likeCount, setLikeCount] = useState(0);

    function handleDeleteComment(){
        onDeleteComment(content);
    }

    function handleLikeComment(){
        setLikeCount((state) => {
            return state + 1;
        });
    }

    return(
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/luisdasilvahenrique.png" alt="" />
        
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                <header>
                    <div className={styles.authorAndTime}>
                        <strong>Luís Henrique</strong>
                        <time title='20 de Junho às 11:47' dateTime='2022-05-20 11:47:33'>Cerca de 2h atrás</time>
                    </div>

                    <button onClick={handleDeleteComment} title='Deletar comentário'>
                        <Trash size={24}/>
                    </button>
                </header>

                    <p>{content}</p>
                </div>

                    <footer>
                        <button onClick={handleLikeComment}>
                            <ThumbsUp/>
                            Aplaudir 
                            <span>{likeCount}</span>
                        </button>
                    </footer>
                </div>
            </div>
      );
}