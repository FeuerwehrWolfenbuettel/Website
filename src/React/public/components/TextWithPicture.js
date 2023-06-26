import styles from '../css_for_components/TextWithPicture.css'
import Image from 'next/image';

const TextWithPicture = () => {
    return (
        <div className='content'>
            <div className='spacer-before'></div>
            <div className='content-with-picture'>
                <Image
                    src="/images/Gesamtbild-Feuerwehr-Wolfenbüttel.jpg"
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
                            <span>150 jähriges</span>
                            <span>Jubiläum</span>
                        </div>
                    </div>
                    <div className='flowing-text'>
                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                            diam nonumy eirmod tempor invidunt ut labore et dolore
                            magna aliquyam erat, sed diam voluptua. At vero eos et
                            accusam et justo duo dolores et ea rebum. Stet clita kasd
                            gubergren, <br /> <br />
                            
                            
                            no sea takimata sanctus est Lorem ipsum dolor sit amet.
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                            diam nonumy eirmod tempor invidunt ut labore et </p>
                    </div>
                    <button className='continue-button'>Weiter lesen</button>
                </div>
            </div>
            <div className='spacer-after'></div>
        </div>
    );
};

export default TextWithPicture;
