import './Navbar.css';

function Navbar(props) {
  const { setPage, total, page } = props;
  return (
    <nav className="nav-container">
      <i className="material-icons arrow-icon" onClick={() => setPage((prevPage) => prevPage - 1)} disabled={page === 1}>
        chevron_left
      </i>
      <span>
        Página {page} de {Math.ceil(total / 10)}
      </span>
      <i className="material-icons arrow-icon" onClick={() => setPage((prevPage) => prevPage + 1)} disabled={page * 10 >= total}>
        chevron_right
      </i>
    </nav>
  );
}

export default Navbar;
