function Header() {
  return (
    <header>
      <nav className="nav">
        <img className="nav__logo" src="./react-logo.png" />
        <ul className="nav__items">
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <small>&copy; 2021 Ziroll development. All rights reserved.</small>
    </footer>
  )
}

function MainContent() {
  return (
    <div className="container">
      <h1>Reasons I'm excited to learn React</h1>
      <ol>
        <li>It's a popular library, so I'll be able to fit in with the cool kids!</li>
        <li>I'm more likely to get a job as a developer if I know React</li>
      </ol>
    </div>
  )
}

function Page() {
  return (
    <>
      <Header />
      <MainContent />
      <Footer />
    </>
  )
}

ReactDOM.render(<Page />, document.getElementById("root"))
