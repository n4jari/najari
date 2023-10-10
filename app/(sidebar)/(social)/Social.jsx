import React from 'react'
import styles from './Social.module.css'
import Link from 'next/link'
import { items } from './data'

const Social = () => {
    return (
        <div className={styles.container}>
            {items.map((item, index) => (
                <Link className={styles.link} key={index} href={item.link} target='_blank'>{item.icon}</Link>
            ))}
        </div>
    )
}

export default Social