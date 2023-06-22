import './globals.css'
import { Inter } from 'next/font/google'
import React, { ReactNode } from 'react';
import Image from 'next/image';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="shape-container">
            <div className="shape">
                <div className="logo_nav">
                    <Image
                      id="logo"
                      src="/images/logo.png"
                      width={75}
                      height={72}
                      alt='Logo'
                      priority={true}
                    />
                    <nav className="menu">
                        <ul>
                          <li><a href="/">Home</a></li>
                          <li><a href="/about">Über uns</a></li>
                          <li><a href="/firestation">Feuerwache</a></li>
                          <li><a href="/vehicles">Fahrzeuge</a></li>
                          <li><a href="/contact">Kontakt</a></li>
                        </ul>
                        <button className="join-button">Mitglied werden</button>
                    </nav>
                </div>
                <div className="text-container-landing">
                    <span>Für dich im</span><br />
                    <span className="sub-text-landing">Einsatz</span>
                </div>
            </div>
        </div>
        {children}
      </body>

      <footer>
        <div className="name-and-social-media">
          <div className="text-container-footer">
            <span>Schwerpunktfeuerwehr</span><br />
            <span className="sub-text-footer">Wolfenbüttel</span>
          </div>
          <div className="social-media-icon">
            <a href="https://www.instagram.com/ortsfeuerwehr_wolfenbuettel/" target="_blank" rel="noopener noreferrer">
              <Image
                className="not-last-image"
                src="/icons/icons8-instagram.svg"
                height={40}
                width={40}
                alt='instagram'
              />
            </a>
            <a href="" target="_blank" rel="noopener noreferrer">
              <Image
                className="not-last-image"
                src="/icons/icons8-youtube-play.svg"
                height={40}
                width={40}
                alt='youtube'
              />
            </a>
            <a href="https://www.facebook.com/ortsfeuerwehrwolfenbuettel/" target="_blank" rel="noopener noreferrer">
              <Image
                src="/icons/icons8-facebook.svg"
                width={40}
                height={40}
                alt="facebook"
              />
            </a>
          </div>
        </div>
        <div className="email-and-policy">
          <div className="email">
            <img src="/icons/icons8-email.svg" alt="email" />
            <span>info@Schwerpunktfeuerwehrwf.de</span>
          </div>
          <div className="privacy-policy">
            <span className="first-span">Privacy policy</span>
            <span>Terms & Condition</span>
          </div>
        </div>
      </footer>

    </html>
  )
}