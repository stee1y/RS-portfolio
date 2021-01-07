import React, { useEffect, useState } from 'react'
import sanityClient from '../client.js'
import about from '../about.jpg'
import imageUrlBuilder from "@sanity/image-url"
import BlockContent from "@sanity/block-content-to-react"

export default function About() {
  const [author, setAuthor] = useState()

  const builder = imageUrlBuilder(sanityClient)

  function urlFor(source) {
    return builder.image(source)
  }

  useEffect(() => {
    sanityClient.fetch(`*[_type=="author"]{
      name,
      bio,
      "authorImage": image.asset->url
    }`).then((data) => setAuthor(data[0])).catch(console.error)
  }, [])

  if (!author) return <div>Loading...</div>

  return (
    <main className="relative">
      <img src={about} alt="River" className="absolute w-full" />
      <div className="p-10 lg:pt-48 container mx-auto relative">
        <section className="bg-blue-500 rounded-lg shedow-2xl sm:flex p-20">
          <img src={urlFor(author.authorImage).url()}
          className="rounded w-32 lg:w-64 lg:h-64 mr-10"
          alt={author.name}
          />
          <div className="text-lg flex flex-col justify-center ">
            <h1 className="cursive text-4xl text-white mb-4 sm:text-6xl">I'm{' '}
              <span className="text-white">{author.name}</span>
            </h1>
            <div className="prose lg:prose-xl text-white">
              <BlockContent
                blocks={author.bio}
                projectId="vbq4md98"
                dataset="prodaction"/>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
