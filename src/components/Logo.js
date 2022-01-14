const Logo = (props) => {
  const animatedLetters = [props.name.split("")];

  const animatedText = animatedLetters[0].map((item, index) => (
    <span key={index}>{item}</span>
  ));

  return (
    <div className="logo">
      <div className="logo-animation">{animatedText}</div>
    </div>
  );
};

export default Logo;
