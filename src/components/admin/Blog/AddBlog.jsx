import React, { useState } from 'react'
import { db } from '../../../firebase'
import { collection, addDoc } from 'firebase/firestore'
import './blog.style.css'

function AddPost() {
  const [title, setTitle] = useState('')
  const [excerpt, setExcerpt] = useState('')
  const [post, setPost] = useState('')
  const [isFixed, setIsFixed] = useState(false)
  const [author, setAuthor] = useState('')

  async function addPostbd() {
    await addDoc(collection(db, 'posts'), {
      title,
      excerpt,
      post,
      author,
      fixed: isFixed,
    })
  }

  return (
    <div className='m-[30px] w-full'>
      <p className='text-xl'>Title</p>
      <input
        type='text'
        className=' w-4/5 rounded-md border-solid border h-[30px] text-base'
        value={title}
        onChange={e => setTitle(e.target.value)}
      ></input>
      <p className='text-xl'>Excerpt</p>
      <input
        type='text'
        className='w-4/5 rounded-md border-solid border h-[30px] text-base'
        value={excerpt}
        onChange={e => setExcerpt(e.target.value)}
      ></input>
      <p className='text-xl'>Author</p>
      <input
        type='text'
        className='w-4/5 rounded-md border-solid border h-[30px] text-base'
        value={author}
        onChange={e => setAuthor(e.target.value)}
      ></input>
      <p className='text-xl'>Post</p>
      <textarea
        value={post}
        className=' w-4/5 rounded-md border border-solid h-[150px] text-base'
        onChange={e => setPost(e.target.value)}
      ></textarea>
      <div className='flex'>
        <p>Fixed</p>
        <input
          type='checkbox'
          value={isFixed}
          onChange={() => setIsFixed(!isFixed)}
        ></input>
      </div>
      <button onClick={() => addPostbd()}>Add Post</button>
    </div>
  )
}

export default AddPost
