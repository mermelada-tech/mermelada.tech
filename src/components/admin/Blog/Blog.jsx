import React, { useState, useEffect } from 'react'
import { db } from '../../../firebase'
import { collection, addDoc, getDocs, query } from 'firebase/firestore'
import './blog.style.css'
import AddPost from './AddBlog'

function Blog() {
  const [posts, setPost] = useState([])
  const [isAddPost, setIsAddPost] = useState(false)

  useEffect(() => {
    async function getPosts() {
      const colRef = collection(db, 'posts')
      const getPostsbd = await getDocs(query(colRef))
      setPost(
        getPostsbd.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }))
      )
    }
    getPosts()
  }, [])

  return (
    <div className='m-[30px] w-full'>
      <h1>Blog</h1>

      <button onClick={() => setIsAddPost(!isAddPost)}>Add post</button>
      {!isAddPost ? (
        <div>
          <table className='border border-solid border-white w-full text-center border-collapse mt-[50px]'>
            <thead className='bg-[#ccc1be] border-b-[5px] border-solid border-white text-black'>
              <tr>
                <td className='border border-solid border-white p-[10px]'>
                  Titulo
                </td>
                <td className='border border-solid border-white p-[10px]'>
                  Autor
                </td>
              </tr>
            </thead>
            <tbody>
              {posts.map((post, index) => (
                <tr key={index} className='even:bg-[#fbf7f4]'>
                  <td className='border border-solid border-white p-[10px] text-sm'>
                    {post.title}
                  </td>
                  <td className='border border-solid border-white p-[10px] text-sm'>
                    {post.author}
                  </td>
                  <td className='border border-solid border-white p-[10px] text-sm'>
                    editar
                  </td>
                  <td className='border border-solid border-white p-[10px] text-sm'>
                    borrar
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <AddPost />
      )}
    </div>
  )
}

export default Blog
