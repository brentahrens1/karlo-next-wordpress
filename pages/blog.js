import { useState, useEffect } from 'react'
import fetcher from '../lib/fetcher'
import { ALL_POSTS } from '../lib/wordpress/api'
import styles from '../styles/Blog.module.scss'

const blog = ({allPosts}) => {
    const [isTop, setIsTop] = useState([])
    const posts = allPosts

    function topCheck() {
        posts.map(p => {
            p.scrollY 
        }) 
    }

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.textDiv}>
                    <p>Juan Karlo Muro is a graphic designer and artist based in Fresno, California.</p>
                    <p>He is the founder of Studio Mala a collaborative design studio.</p>
                </div>
                <div className={styles.textDiv}>
                    <p>For freelance opportunities, collaborations, and availability</p>
                    <p>please email info@juankarlomuro.com</p>
                </div>
            </div>
            {
                posts.map((post) => {
                    return (
                        <div className={styles.postContainer} key={post.id}>
                            <div>
                                {
                                    post.featuredImage ?
                                    <div className={styles.img}>
                                        <img src={post.featuredImage.node.sourceUrl} alt={post.featuredImage.node.altText} />
                                    </div>
                                    :
                                    null
                                }
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default blog

export async function getStaticProps() {
    const response = await fetcher(ALL_POSTS)
    const allPosts = response.data.posts.nodes

    return {
        props: {allPosts},
        revalidate: 1,
    }
}