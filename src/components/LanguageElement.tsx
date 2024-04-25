export default function LanguageElement ({src, info, size} : { src: string, info: string, size: any  }) {

  return ( 
      <a className={`rounded-full h-${ size.bubble } w-auto`} href={ info }>
          <img
              src={ src }
              className={`h-${ size.img } w-auto`}
          />
      </a>
  )

}
