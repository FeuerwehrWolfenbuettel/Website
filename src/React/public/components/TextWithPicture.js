import styles from '../css_for_components/TextWithPicture.css'
import React, { useEffect, useState } from 'react';
import styles from '../css_for_components/TextWithPicture.css';
import Image from 'next/image';

const TextWithPicture = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch('https://api.example.com/data'); // Replace with your API endpoint
            const jsonData = await response.json();
            setData(jsonData);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    if (!data) {
        return <div>Loading...</div>; // Add a loading state while data is being fetched
    }

    return (
        <div className='content'>
            <div className='spacer-before'></div>
            <div className='content-with-picture'>
                <Image
                    src={data.image} // Replace with the attribute from your API response for the image URL
                    width={500}
                    height={300}
                    alt='Logo'
                    priority={true}
                />
                <div className='text-content'>
                    <div className='header-stripe-with-text'>
                        <div className='header-stripe-container'>
                            <div className='header-stripe'></div>
                        </div>
                        <div className='header'>
                            <span>{data.title}</span> {/* Replace with the attribute from your API response for the title */}
                            <span>{data.subtitle}</span> {/* Replace with the attribute from your API response for the subtitle */}
                        </div>
                    </div>
                    <div className='flowing-text'>
                        <p>{data.content}</p> {/* Replace with the attribute from your API response for the content */}
                    </div>
                    <button className='continue-button'>Weiter lesen</button>
                </div>
            </div>
            <div className='spacer-after'></div>
        </div>
    );
};

export default TextWithPicture;