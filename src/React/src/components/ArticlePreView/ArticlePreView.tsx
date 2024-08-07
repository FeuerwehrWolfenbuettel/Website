"use client";

import styles from './ArticlePreView.module.scss';

const ArticlePreView = () => {
    return (
        <div className='body'>
            <div className={styles.blogPreview}>
                <img src="https://images.unsplash.com/photo-1720712738661-9c0dcb92f06d?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjI3ODY5OTV8&ixlib=rb-4.0.3&q=85" alt="Blog Image" className={styles.blogImage} />
                <div className={styles.blogContent}>
                    <h2 className={styles.blogTitle}>Titel des Blogeintrags</h2>
                    <p className={styles.blogExcerpt} id="blogExcerpt">Das ist der Anfang des Blogartikels. Dieser Text wird je nach Größe des Containers abgeschnitten Das ist der Anfang des Blogartikels. Dieser Text wird je nach Größe des Containers abgeschnitten</p>
                </div>
            </div>
        </div>
    );
}

export default ArticlePreView;