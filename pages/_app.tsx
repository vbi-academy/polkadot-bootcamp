import "../styles.css";

export const config = {
  runtime: "experimental-edge"
}

export default function App({Component, pageProps}) {
  return (
    <>
      <Component {...pageProps}/>
    </>
  )
}
