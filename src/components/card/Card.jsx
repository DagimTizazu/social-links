import Buttons from "./buttons/Buttons"

function Card({ avatar, name, country, profession }) {
  return (
      <div className="wrapper">
          <img className="avatar" src={avatar} alt="avatar" />
          <h1 className="name">{name}</h1>
          <h2 className="country">{country}</h2>
          <p className="profession">{profession}</p>
          <Buttons
              link="https://github.com/" 
              linkName="GitHub"
          />
          <Buttons
              link="https://www.frontendmentor.io/" 
              linkName="Frontend Mentor"
          />
          <Buttons
              link="https://www.linkedin.com/" 
              linkName="LinkedIn"
          />
          <Buttons
              link="twitter.com" 
              linkName="Twitter"
          />
          <Buttons
              link="instagram.com" 
              linkName="Instagram"
          />
    </div>
  )
}

export default Card
