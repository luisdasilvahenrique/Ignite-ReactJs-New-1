import styles from './Post.module.css';

export function Post(){
    return(
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src="https://github.com/luisdasilvahenrique.png" />
                    <div className={styles.authorInfo}>
                        <strong>Luis Henrique</strong>
                        <span>Web Developer</span>
                    </div>
                </div>

                <time title='20 de Junho às 11:47' dateTime='2022-05-20 11:47:33'>Publicado há 1h</time>
            </header>

                <div className={styles.content}>
            <p>Fala galeraa 👋</p> 

            <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>

            <p>👉 <a href="#">jane.design/doctorcare</a> </p>

            <p> 
            {' '}<a>#novoprojeto</a> 
            {' '}<a>#nlw </a>
            {' '}<a>#rocketseat</a>
            </p>
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
        </article>
    );
}