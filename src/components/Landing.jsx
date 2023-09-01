export const Landing = () => {
  const onSumateOnClick = () => {
    window.open('https://linktr.ee/mermeladatech', '_blank')
  }
  return (
    <section>
      <h1
        className='
          text-black
          text-[5rem]
          font-bold
          pl-10
          whitespace-nowrap
          border-r-4
          border-solid
          border-black
          w-[28ch]
          overflow-hidden
          animate-typing
        '
      >
        ¡Hola! Somos MERMELADA.TECH
      </h1>
      <h2 className='text-black text-[3rem] font-bold mt-8 pl-10'>
        Una comunidad de mujeres en tecnología
      </h2>
      <div className='flex flex-col justify-center items-center w-1/2 h-3/4 pt-8 pl-20'>
        <iframe
          src='https://www.youtube.com/embed/eBJNT8KV0ps'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          allowFullScreen
          className='rounded-[34px] shadow-md w-full h-[582px] z-[1]'
        ></iframe>
        <button
          type='button'
          className='
            shadow-[7px_4px_6px_rgba(0,0,0,0.25)]
            rounded-[35px]
            py-3
            px-8
            font-normal
            text-white
            text-2xl
            mt-8
            bg-gradient-to-b
            from-primary
            via-secondary
            to-tertiary
            hover:from-secondary
            hover:via-primary
            hover:to-tertiary
          '
          onClick={() => onSumateOnClick()}
        >
          Sumate a la comu
        </button>
      </div>
    </section>
  )
}
