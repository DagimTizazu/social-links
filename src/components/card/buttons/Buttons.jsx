function Buttons({ link, linkName }) {
  return (
    <>
      <a onMouseOver={(e) => {
        e.target.style.backgroundColor = 'hsl(75, 94%, 57%)';
        e.target.style.color = 'hsl(0, 0%, 20%)'
      }} onMouseLeave={(e) => {
        e.target.style.backgroundColor = 'hsl(0, 0%, 20%)';
        e.target.style.color = 'hsl(0, 0%, 100%)';
      }}
        className="link" href={link}>{linkName}</a>
    </>
  )
}

export default Buttons
