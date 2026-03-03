import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <img className="awning"src="https://heroic-pixie-6d7f91.netlify.app/awning.png"></img>
      <h1>Food Truck Favorites</h1>
      <div className="container">
        {/* Card 1 */}
        <Card 
          img={"https://pyxis.nymag.com/v1/imgs/38c/2ac/b02a093f6b846ebd1aca78b0d59c7e427a-birria-1.rsocial.w1200.jpg"}
          businessTitle={"Birria-Landia"}
          type={"Mexican"}
          menusrc={"https://thebirrialandia.com/menu/"}
        />
        {/* Card 2 */}
        <Card 
          img={"https://pyxis.nymag.com/v1/imgs/38c/2ac/b02a093f6b846ebd1aca78b0d59c7e427a-birria-1.rsocial.w1200.jpg"}
          businessTitle={"Birria-Landia"}
          type={"Mexican"}
          menusrc={"https://thebirrialandia.com/menu/"}
        />
        {/* Card 3 */}
        <Card 
          img={"https://pyxis.nymag.com/v1/imgs/38c/2ac/b02a093f6b846ebd1aca78b0d59c7e427a-birria-1.rsocial.w1200.jpg"}
          businessTitle={"Birria-Landia"}
          type={"Mexican"}
          menusrc={"https://thebirrialandia.com/menu/"}
        />
        {/* Card 4 */}
        <Card 
          img={"https://pyxis.nymag.com/v1/imgs/38c/2ac/b02a093f6b846ebd1aca78b0d59c7e427a-birria-1.rsocial.w1200.jpg"}
          businessTitle={"Birria-Landia"}
          type={"Mexican"}
          menusrc={"https://thebirrialandia.com/menu/"}
        />
        {/* Card 5 */}
        <Card 
          img={"https://pyxis.nymag.com/v1/imgs/38c/2ac/b02a093f6b846ebd1aca78b0d59c7e427a-birria-1.rsocial.w1200.jpg"}
          businessTitle={"Birria-Landia"}
          type={"Mexican"}
          menusrc={"https://thebirrialandia.com/menu/"}
        />
        {/* Card 6 */}
        <Card 
          img={"https://pyxis.nymag.com/v1/imgs/38c/2ac/b02a093f6b846ebd1aca78b0d59c7e427a-birria-1.rsocial.w1200.jpg"}
          businessTitle={"Birria-Landia"}
          type={"Mexican"}
          menusrc={"https://thebirrialandia.com/menu/"}
        />
        {/* Card 7 */}
        <Card 
          img={"https://pyxis.nymag.com/v1/imgs/38c/2ac/b02a093f6b846ebd1aca78b0d59c7e427a-birria-1.rsocial.w1200.jpg"}
          businessTitle={"Birria-Landia"}
          type={"Mexican"}
          menusrc={"https://thebirrialandia.com/menu/"}
        />
        {/* Card 8 */}
        <Card 
          img={"https://pyxis.nymag.com/v1/imgs/38c/2ac/b02a093f6b846ebd1aca78b0d59c7e427a-birria-1.rsocial.w1200.jpg"}
          businessTitle={"Birria-Landia"}
          type={"Mexican"}
          menusrc={"https://thebirrialandia.com/menu/"}
        />
        {/* Card 9 */}
        <Card 
          img={"https://pyxis.nymag.com/v1/imgs/38c/2ac/b02a093f6b846ebd1aca78b0d59c7e427a-birria-1.rsocial.w1200.jpg"}
          businessTitle={"Birria-Landia"}
          type={"Mexican"}
          menusrc={"https://thebirrialandia.com/menu/"}
        />
        {/* Card 10 */}
        <Card 
          img={"https://pyxis.nymag.com/v1/imgs/38c/2ac/b02a093f6b846ebd1aca78b0d59c7e427a-birria-1.rsocial.w1200.jpg"}
          businessTitle={"Birria-Landia"}
          type={"Mexican"}
          menusrc={"https://thebirrialandia.com/menu/"}
        />
        {/* Card 11 */}
        <Card 
          img={"https://pyxis.nymag.com/v1/imgs/38c/2ac/b02a093f6b846ebd1aca78b0d59c7e427a-birria-1.rsocial.w1200.jpg"}
          businessTitle={"Birria-Landia"}
          type={"Mexican"}
          menusrc={"https://thebirrialandia.com/menu/"}
        />
        {/* Card 12 */}
        <Card 
          img={"https://pyxis.nymag.com/v1/imgs/38c/2ac/b02a093f6b846ebd1aca78b0d59c7e427a-birria-1.rsocial.w1200.jpg"}
          businessTitle={"Birria-Landia"}
          type={"Mexican"}
          menusrc={"https://thebirrialandia.com/menu/"}
        />
      </div>
    </>
  )
}

function Card({img, businessTitle, type, menusrc}){
  return(
    <div className={"card"}>
      <img src={img}></img>
      <h3>{businessTitle}</h3>
      <h4>{type}</h4>
      <a href={menusrc}>View Menu</a>
    </div>
  )
}

export default App
