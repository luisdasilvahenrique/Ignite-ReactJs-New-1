import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { Post } from './components/Post';
 
import styles from './App.module.css';

import './global.css'

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>

        <Sidebar />

        <main>
          <Post
            author="Luis Henrique"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum quisquam nam eaque molestiae consectetur esse maiores placeat? Officia dignissimos, voluptates nostrum quos, vero recusandae harum quod sed libero alias deleniti!"
          />

          <Post
            author="João Gabriel"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum quisquam nam eaque molestiae consectetur esse maiores placeat? Officia dignissimos, voluptates nostrum quos, vero recusandae harum quod sed libero alias deleniti!"
          />
        </main>
      </div>
    </div>

  )
}


