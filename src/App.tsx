import { useState } from 'react'
import logo from './logo.svg'
import fetch from 'cross-fetch'

import './App.css'
interface Post {
  userId: number
  id: number
  title: string
  body: string
}


function App() {
  const [posts, setPosts] = useState<Post[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [count, setCount] = useState(0)

  const fetchPosts = async() => {
    setIsLoading(true)
    await fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(posts => setPosts(posts as Post[]))

    setIsLoading(false)
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <div>
          <button type="button" id="countButton" onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
          <button type="button" id="fetchButton" onClick={() => fetchPosts()}>
            Fetch Posts
          </button>
          {isLoading && <span id="loading">Loading...</span>}

          <ul role="posts">
          { posts.map((post) => <li>{post.title}</li>)}
          </ul>
        </div>
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
      </header>
    </div>
  )
}

export default App
