const Header = ({ headerTitles, step }) => {
    return (
      <div>
        <h1>{headerTitles[step].title}</h1>
        <p style={{textAlign:"center"}}>{headerTitles[step].subtitle}</p>
      </div>
    );
  };
  export { Header };