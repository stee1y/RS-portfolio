import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"
import sanityClient from '../client.js'
import imageUrlBuilder from "@sanity/image-url"
import BlockContent from "@sanity/block-content-to-react"


const builder = imageUrlBuilder(sanityClient)


function urlFor(source) {
  return builder.image(source)
}

export default function SinglePost() {

  const [singlePost, setSinglePost] = useState(null)
  
  const { slug } =  useParams()

  useEffect(() => {
    sanityClient.fetch(`*[slug.current=="${slug}"]{
      title,
      _id,
      slug,
      mainImage{
        asset->{
          _id,
          url,
        }
      },
      body,
      "name": author->name,
      "authorImage": author->image,
    }`).then((data) => setSinglePost(data[0]))
    .catch(console.error);
  }, [slug]);


    if (!singlePost) return <div className="flex text-2xl my-12 justify-center">Loading...</div>

  return (
      <main className="bd-blue-200 pt-8 p-1 min-h-screen">
        <article className="container shedow-lg mx-auto bg-blue-100 rounded-lg">
          <header className="relative">  
            <div className="absolute h-full w-full flex item-center justify-center p-8">
              <div className="bg-white bg-opacity-75 rounded p-12">
                <h1 className="cursive text-3xl lg:text-6xl mb-4">{singlePost.title}</h1>
                <div className="flex justify-center text-gray-800">
                  <img src={urlFor(singlePost.authorImage).url()}
                  alt={singlePost.name}
                  className="w-10 h-10 rounded-full"
                  />
                  <p className="cursive flex items-center pl-2 text-2xl">{singlePost.name}</p>
                </div>
              </div>
            </div>
            <img 
              src={urlFor(singlePost.mainImage.asset.url)}
              alt={singlePost.name}
              className="w-full object-cover rounded-t"
              style={{height: "400px"}}
            />
          </header>
          <div className="px-16 lg:px-48 py-12 lg:py-20 prose lg:prose-xl max-w-full">
            <BlockContent 
              blocks={singlePost.body}
              projectId="vbq4md98"
              dataset="prodaction"
              />
          </div>
        </article>
      </main>
    )
  
}
