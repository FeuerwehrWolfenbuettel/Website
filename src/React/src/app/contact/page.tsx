import Head from "next/head";
import styles from "../app/page.module.css";
import AnimatedText from "@/components/Animatedtext/AnimatedText";
import "./contact.scss";

export default function Contact() {
  return (
    <main className="fullscreen-container">
      <div className="background-image">
        <AnimatedText />
      </div>
      <section className="additional-content">
        <h1 id="title">Kontakt</h1>
      </section>
    </main>
  );
}
