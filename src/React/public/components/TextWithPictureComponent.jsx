// TextWithPictureComponent.jsx
import React, { useState, useEffect } from 'react';

const TextWithPictureComponent = () => {
    const [articleData, setArticleData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://localhost:3002/article/1');
                const data = await response.json();
                setArticleData(data);
            } catch (error) {
                console.log('Error:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            {articleData ? (
                <div>
                    <h1>{articleData.title}</h1>
                    <p>{articleData.summary}</p>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

// Marking TextWithPictureComponent as a Client Component
TextWithPictureComponent.useClient = true;

export default TextWithPictureComponent;




