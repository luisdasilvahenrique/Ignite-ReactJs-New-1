import { useState } from 'react'

import { Post } from './Post'

export function App() {
  return (
    <div>
      <Post
        author="Luis Henrique"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum quisquam nam eaque molestiae consectetur esse maiores placeat? Officia dignissimos, voluptates nostrum quos, vero recusandae harum quod sed libero alias deleniti!" 
        />

      <Post
        author="João Gabriel"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum quisquam nam eaque molestiae consectetur esse maiores placeat? Officia dignissimos, voluptates nostrum quos, vero recusandae harum quod sed libero alias deleniti!"
      />
    </div>

  )
}


