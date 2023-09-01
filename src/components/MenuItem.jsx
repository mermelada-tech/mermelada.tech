export function MenuItem({ name }) {
  const nameCapitalized = name[0].toUpperCase() + name.slice(1)
  return (
    <li className='py-0 px-2.5 list-none'>
      <a
        className='
          flex
          flex-col
          items-center
          justify-center
          shadow-[1px_1px_4px_rgba(0,0,0,0.25)]
          rounded-[24px]
          text-black
          font-bold 
          text-2xl 
          no-underline
          py-0
          px-2.5
          transition-all
          hover:shadow-[0_4px_4px_rgba(0,0,0,0.25)]
          hover:underline
        '
        href={`/${name}`}
      >
        {nameCapitalized}
      </a>
    </li>
  )
}
