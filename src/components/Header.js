const Header = ({ headerTitles, step }) => {
    return (
      <div>
        <h1>{headerTitles[step].title}</h1>
        <p className="header-subtitle">{headerTitles[step].subtitle}</p>
      </div>
    );
  };
  export { Header };