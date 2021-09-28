import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import sanityClient from '../client.js'

export default function Post() {
  const [postData, setPost] = useState(null)

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type=="post"]{
        title,
        slug,
        mainImage{
          asset->{
            _id,
            url,
          },
          alt
        }
      }`)
      .then((data) => setPost(data))
      .catch(console.error)
  }, [])

  return (
    <main className="p-4">
      <section className="container mx-auto">
        <h1 className="text-5xl flex justify-center cursive text-gray-900">
          Blog Post Page
        </h1>
        <h2 className="text-lg flex justify-center mb-12 text-gray-900">
          Welcome to my page of blog posts!
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {postData &&
            postData.map((post, index) => (
              <article key={post.slug.current}>
                <Link to={'/post/' + post.slug.current}>
                  <span
                    className="block h-64 relative rounded shedow leading-snug bg-white border-2 border-gray-600"
                  >
                    <img
                      src={post.mainImage.asset.url}
                      alt={post.mainImage.alt}
                      className="w-full h-full rounded-r object-cover absolute"
                    />
                    <span className="block relative h-full flex justify-end items-end pr-4 pb-4">
                      <h3 className="text-lg font-blog px-3 py-4  text-red-100 bg-gray-800 bg-opacity-70 rounded">
                        {post.title}
                      </h3>
                    </span>
                  </span>
                </Link>
              </article>
            ))}
        </div>
      </section>
    </main>
  )
}
