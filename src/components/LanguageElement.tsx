export default function LanguageElement ({ src, info, size }) {

  return ( 
      <a className={`rounded-full h-${ size.bubble } w-auto`} href={ info }>
          <img
              src={ src }
              className={$`h-${ size.img } w-auto`}
          />
      </a>
  )

}
