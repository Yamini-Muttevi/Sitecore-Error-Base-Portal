import './App.css'
import { getPostsData } from './algolia-client'
import {Post } from './Post'
import React, { useState, useEffect } from 'react'


function App() {
  const [searchValue, setSearchValue] = useState('')
  const onSearchChange = (e) => {
    setSearchValue(e.target.value)
  }

  const [loading, setLoading] = useState(false)
  const [posts, setPosts] = useState()
  useEffect(() => {
    const handler = async () => {
      setLoading(true)
      const data = await getPostsData(searchValue)
      if (data) setPosts(data.posts)
      setLoading(false)
    }
    handler()
  }, [searchValue])



  return (
    <main>
      <h1 className="page-title">Exceptions</h1>
      <input
        type="text"
        className="posts-search"
        placeholder="Type your search here"
        value={searchValue}
        onChange={onSearchChange}
    
      />
      <section className="posts">
        {!posts?.length && <p className="state-message">{loading ? 'Fetching posts...' : 'No results!'}</p>}
        {!!posts?.length && posts.map((post) =>  <div className="how-section1"><Post post={post} key={post.objectID} ></Post> </div>  )}
      </section>
    </main>
  )
}

export default App