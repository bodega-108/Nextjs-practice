import Link from 'next/link';
export const Navegacion = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link href="/"><a className="navbar-brand">Task-App</a></Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
           
            <li className="nav-item">
                <Link href="/about"><a className="nav-link" href="#">About</a></Link>
            </li>
            <li className="nav-item">
                <Link href="/services"><a className="nav-link" href="#">Services</a></Link>
            </li>
           
          </ul>
        </div>
      </nav>   
    );
};

export default Navegacion;