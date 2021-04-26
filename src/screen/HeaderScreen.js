import avatarImg from './../img/smiling-girl.svg';


const HeaderScreen = () => {
  return (
    <div className="masthead bg-primary text-white text-center">
      <div className="container d-flex align-items-center flex-column">
          <img className="masthead-avatar mt-3 mb-5" src={avatarImg} alt="would you rather" />
          <h1 className="masthead-heading text-uppercase mb-0">Would You Rather...</h1>
          <p>A Game For All Of The Family Members</p>
      </div>
    </div>
  )
}

export default HeaderScreen;