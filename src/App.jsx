import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { Post } from './components/Post';

import styles from './App.module.css';

import './global.css'

// author: { avatar_url:"", name: "", rule: ""}
// publishedAt : Date
// content: String

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/luisdasilvahenrique.png',
      name: 'Luis Henrique',
      rule: 'Web Developer'
    },
    content: [

      { type: 'paragraph', content: 'Fala galeraa,' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare' },
      { type: 'link', content: 'jane.design/doctorcare' },

    ],
    publishedAt: new Date('2022-06-29 10:19:42'),
  },

  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/maykbrito.png',
      name: 'Mayk Brito',
      rule: 'Sênior Web Dev & Instructor'
    },
    content: [

      { type: 'paragraph', content: 'Fala galeraa,' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare' },
      { type: 'link', content: 'jane.design/doctorcare' },

    ],
    publishedAt: new Date('2022-05-10 01:19:42'),
  },
];

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>

        <Sidebar />

        <main>
          {posts.map(post => {
            return (
              <Post
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </div>

  )
}


