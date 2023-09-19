import './App.scss'
import Cabecalho from './components/Cabecalho'
import Rodape from './components/Rodape'


function App() {


  return (
    <>
      <Cabecalho/>
      <main className='main-app'>
        <section className='section1'>
          <h2>Exemplo de uso de SASS</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          <p>Eum dolor consectetur sapiente repudiandae fugit at est.</p>
        </section>
        <section className='section2'>
          <ul>
              <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas, eveniet.</li>
              <li>Est, mollitia. Nisi animi itaque sapiente ab eius sunt ipsa.</li>
              <li>Voluptate architecto itaque sint quia hic repellendus, asperiores vero deserunt.</li>
              <li>Natus ipsa unde voluptatem maiores sunt animi asperiores maxime quibusdam.</li>
              <li>Fugit iusto fuga dolor, velit dignissimos eum nobis porro. Neque.</li>
              <li>Quos perspiciatis tenetur alias illum? Labore iste aperiam obcaecati aliquam!</li>
            </ul>
        </section>
      </main>
      <Rodape/>
    </>
  )
}

export default App
