import { MenuItem } from './MenuItem'

export const Header = () => {
  return (
    <header className='header'>
      <div className='h-full flex items-center justify-between p-5'>
        <div className='logo'>
          <a href='/'>
            <img src='/mermelada-logo.svg' alt='Mermelada.tech logo' />
          </a>
        </div>
        <nav className='menu'>
          <ul className='flex'>
            <MenuItem name='nosotras' />
            <MenuItem name='blog' />
            <MenuItem name='proyectos' />
            <MenuItem name='eventos' />
          </ul>
        </nav>
        <div className='patreon-link'>
          <a
            href='https://www.patreon.com/mermelada.tech'
            target='_blank'
            rel='noreferrer'
            className='text-black font-bold text-2xl no-underline'
          >
            Patreon
          </a>
        </div>
      </div>
    </header>
  )
}
