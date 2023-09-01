export const Footer = () => {
  return (
    <footer className='footer bg-extra text-white text-center p-5'>
      <div class='flex justify-between items-center'>
        <div className='text-left'>
          <h3>Mermelada.tech 🌈💜</h3>
          <p>Creando comunidades de mujeres en tecnología</p>
        </div>
        <div className='text-left'>
          <h3 className='mb-2.5'>Links</h3>
          <ul className='list-none'>
            <li>
              <a href='/' className='text-white no-underline hover:underline'>
                Home
              </a>
            </li>
            <li>
              <a
                href='/comunidad'
                className='text-white no-underline hover:underline'
              >
                Comunidad
              </a>
            </li>
            <li>
              <a
                href='/blog'
                className='text-white no-underline hover:underline'
              >
                Blog
              </a>
            </li>
          </ul>
        </div>
        <div className='sm:flex gap-2'>
          <a href='https://instagram.com/mermelada.tech_'>
            <img src='../../instagram.png' />
          </a>
          <a href='https://discord.gg/jEV7cc4t'>
            <img src='../../discord.png' />
          </a>
          <a href='https://twitter.com/MermeladaTech'>
            <img src='../../twitter.png' />
          </a>
          <a href='https://www.linkedin.com/company/mermelada-tech'>
            <img src='../../linkedin.png' />
          </a>
        </div>
      </div>
    </footer>
  )
}
