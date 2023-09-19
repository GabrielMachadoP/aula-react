import styles from './Cabecalho.module.css'

export default function Componente1(){

    return(
        <header className={styles.header}>
            <h1 className={styles.h1}>Teste  usando React + Sass e Module</h1>
            <p className={styles.p}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis, minima! Eum quidem facilis optio consequuntur hic reprehenderit odit voluptas atque, delectus laudantium distinctio dolorem quis sed beatae architecto velit ipsam fugit saepe adipisci explicabo ab cumque. Debitis optio sunt voluptatibus dignissimos totam, exercitationem a quo error sapiente natus adipisci? Corrupti?</p>
        </header>
    )
}