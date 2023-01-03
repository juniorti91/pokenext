import Image from 'next/image';
import styles from '../styles/About.module.css';

export default function About() {
    return (
        <div className={styles.about}>
            <h1>Sobre o projeto</h1>
            <p>O Lorem Ipsum é um texto modelo da indústria tipográfica e de impressão. O Lorem Ipsum tem vindo a ser o texto padrão usado por estas indústrias desde o ano de 1500?</p>
            <Image src='/images/charizard.png' width={300} height={300} alt='Charizard' />
        </div>
    )
}