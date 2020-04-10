import React from "react"

const IndexPage = () => (
  <div
    style={{
      display: `flex`,
      flexDirection: `column`,
      justifyContent: `center`,
      alignItems: `center`,
      minHeight: `100vh`,
      minHeight: `-webkit-fill-available`,
      width: `100%`,
      background: `#f0575d`,
    }}
  >
    <h1
      style={{
        color: `#ffffff`,
        fontSize: `72px`,
        fontFamily: `'Montserrat', sans-serif`,
        fontWeight: `400`,
        letterSpacing: `-4px`
      }}
    >
      Duomenis
    </h1>
    <p
      style={{
        color: `#ffffff`,
        fontSize: `24px`,
        fontFamily: `'Montserrat', sans-serif`,
        fontWeight: `300`,
        maxWidth: `800px`,
        textAlign: `center`,
        lineHeight: `32px`,
      }}
    >
      Reinventa tu negocio en la era digital con la ayuda de nuestro equipo de
      desarrollo de software combinado con nuestra consultoría estratégica de
      negocios e innovación.
    </p>
  </div>
)

export default IndexPage
