const Footer = () => {
  return (
    <footer className="wrapper">
      <div className="flex">
        <p className="text-xs">
          {new Date().getFullYear()} -{' '}
          <a href="https://sznm.dev" target="_blank" rel="noopener noreferrer">
            Stack
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
