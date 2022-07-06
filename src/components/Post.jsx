import { format, formatDistanceToNow } from 'date-fns';
import { pt } from 'date-fns/locale';

import styles from './Post.module.css';
import { Comment } from './Comment';
import { Avatar } from './Avatar';
import { useState } from 'react';

export function Post({author, publishedAt ,content}){
    const [commets, setComments] = useState([
        'Post muito bacana, hein?!'
    ]);

    const [newCommentText, setNewCommentText] = useState('');

    const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'ás' HH:mm'h'",{
        locale: pt,
    })

    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: pt,
        addSuffix: true,
    })

    function handleCreateNewComment(){
        event.preventDefault();

        setComments([...commets, newCommentText]);

        setNewCommentText('');
    }

    function handleNewCommentChange(){
        event.target.setCustomValidity('');
        setNewCommentText(event.target.value);
    }

    function handleNewCommentInvalid(){
        event.target.setCustomValidity('Este Campo é obrigatório!');
    }

    // Deletar comentários
    function deleteComment(commentToDelete){
        const commentsWithoutDeleteOne = commets.filter(comment => {
            return comment !== commentToDelete;
        })

        setComments(commentsWithoutDeleteOne);
    }

    const isNewCommentEmpty = newCommentText.length == 0;

    return(
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src={author.avatarUrl} />
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.rule}</span>
                    </div>
                </div>

                <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>
                    {publishedDateRelativeToNow}
                </time>
            </header>

                <div className={styles.content}>
                    {content.map(line => {
                        if(line.type === 'paragraph'){
                            return <p key={line.content}>{line.content}</p>
                        } else if(line.type === 'link'){
                            return <p key={line.content}><a href="#">{line.content}</a></p>
                        }
                    })}
                </div>

                <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                    <strong>Deixe seu feedback</strong>

                    <textarea 
                    placeholder='Deixe um comentário'
                    onChange={handleNewCommentChange}
                    value={newCommentText}
                    onInvalid={handleNewCommentInvalid}
                    required
                    />

                    <footer>
                        <button type='submit' disabled={isNewCommentEmpty}>
                            Publicar
                        </button>
                    </footer>
                </form>

            <div className={styles.commentList}>
                {commets.map(comment => {
                    return (
                        <Comment
                            key={comment}
                            content={comment}
                            onDeleteComment={deleteComment}
                        />
                    )
                })}
            </div>
        </article>
    );
}