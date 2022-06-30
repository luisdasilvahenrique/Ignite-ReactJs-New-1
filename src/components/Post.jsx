import { format, formatDistanceToNow } from 'date-fns';
import { pt } from 'date-fns/locale';

import styles from './Post.module.css';
import { Comment } from './Comment';
import { Avatar } from './Avatar';

export function Post({author, publishedAt ,content}){

    const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'ás' HH:mm'h'",{
        locale: pt,
    })

    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: pt,
        addSuffix: true,
    })

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
                            return <p>{line.content}</p>
                        } else if(line.type === 'link'){
                            return <a href="#"><p>{line.content}</p></a>
                        }
                    })}
                </div>

                <form className={styles.commentForm}>
                    <strong>Deixe seu feedback</strong>

                    <textarea 
                    placeholder='Deixe um comentário'
                    />

                    <footer>
                        <button type='submit'>
                            Publicar
                        </button>
                    </footer>
                </form>

                <div className={styles.commentList}>
                    <Comment />
                    <Comment />
                    <Comment />
                </div>
        </article>
    );
}