import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="mainContainer">

      <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
        <div className='container'>
          <a className='navbar-brand' href="#">Start Bootstrap</a>
          <button className='navbar-toggler' type='button' data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"> <span className='navbar-toggler-icon'></span></button>
       <div className='collapse navbar-collapse' id='navbarSupportedContent'>

          <ul className='navbar-nav ms-auto mb-2 mb-lg-0'>
            <li className='nav-item'>
              <a className='nav-link' href="#">Home</a>

            </li>
            <li className='nav-item'>
              <a className='nav-link' href="#">About</a>

            </li>
            <li className='nav-item'>
              <a className='nav-link' href="#">Contact</a>

            </li>
            <li className='nav-item'>
              <a className='nav-link active' href="#">Blog</a>

            </li>

          </ul>


       </div>
        </div>
      </nav>
      <header className='py-5 bg-light border-bottom mb-4'>
        <div className='container'>
          <div className='text-center my-5'>
            <h1 className='fw-bolder'>
            Welcome to Blog Home!
            </h1>
            <p className='lead mb-0'>
              
 A Bootstrap 5 starter layout for your next blog homepage
            </p>

          </div>
        </div>
      </header>

      <div className='container'>
        <div className='row'>
          <div className=' col-lg-8'>
            <div className='card mb-4'>
              <a href="#">
                <img src="https://dummyimage.com/850x350/dee2e6/6c757d.jpg" className='card-img-top' />
              </a>
              <div className='card-body'>
                <div className='small text-muted'>May 17 ,2024</div>
                <div className='card-title'>Featured Post Title</div>
                <div className='card-text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla? Quos cum ex quis soluta, a laboriosam. Dicta expedita corporis animi vero voluptate voluptatibus possimus, veniam magni quis!</div>
                 <a className='btn btn-primary mt-2' href="#">Read more →</a>
              </div>
            </div>
            <div className='row'>
              <div className='col-lg-6'>
              <div className='card mb-4'>
              <a href="#">
                <img src="https://dummyimage.com/700x350/dee2e6/6c757d.jpg" className='card-img-top' />
              </a>
              <div className='card-body'>
                <div className='small text-muted'>May 17 ,2024</div>
                <div className='card-title'>Featured Post Title</div>
                <div className='card-text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla? Quos cum ex quis soluta, a laboriosam. Dicta expedita corporis animi vero voluptate voluptatibus possimus, veniam magni quis!</div>
                 <a className='btn btn-primary mt-2' href="#">Read more →</a>
              </div>
            </div>
              <div className='card mb-4'>
              <a href="#">
                <img src="https://dummyimage.com/700x350/dee2e6/6c757d.jpg" className='card-img-top' />
              </a>
              <div className='card-body'>
                <div className='small text-muted'>May 17 ,2024</div>
                <div className='card-title'>Featured Post Title</div>
                <div className='card-text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla? Quos cum ex quis soluta, a laboriosam. Dicta expedita corporis animi vero voluptate voluptatibus possimus, veniam magni quis!</div>
                 <a className='btn btn-primary mt-2' href="#">Read more →</a>
              </div>
            </div>
              </div>
              <div className='col-lg-6'>
              <div className='card mb-4'>
              <a href="#">
                <img src="https://dummyimage.com/700x350/dee2e6/6c757d.jpg" className='card-img-top' />
              </a>
              <div className='card-body'>
                <div className='small text-muted'>May 17 ,2024</div>
                <div className='card-title'>Featured Post Title</div>
                <div className='card-text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla? Quos cum ex quis soluta, a laboriosam. Dicta expedita corporis animi vero voluptate voluptatibus possimus, veniam magni quis!</div>
                 <a className='btn btn-primary mt-2' href="#">Read more →</a>
              </div>
            </div>
              <div className='card mb-4'>
              <a href="#">
                <img src="https://dummyimage.com/700x350/dee2e6/6c757d.jpg" className='card-img-top' />
              </a>
              <div className='card-body'>
                <div className='small text-muted'>May 17 ,2024</div>
                <div className='card-title'>Featured Post Title</div>
                <div className='card-text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla? Quos cum ex quis soluta, a laboriosam. Dicta expedita corporis animi vero voluptate voluptatibus possimus, veniam magni quis!</div>
                 <a className='btn btn-primary mt-2' href="#">Read more →</a>
              </div>
            </div>
              </div>
            </div>
         
            <nav aria-label="Pagination">
            <hr className='my-0'/>
            <ul className='pagination justify-content-center my-4'>
              <li className='class="page-item disabled"'>
                 <a href="#" className='page-link ' tabindex="-1" aria-disabled="true">Newer</a>
              </li>
              <li className='page-item active' aria-current="page" >
                <a href="#" className='page-link'>1</a>
              </li>
              <li className='page-item' >
                <a href="#" className='page-link'>2</a>
              </li>
              <li className='page-item' >
                <a href="#" className='page-link'>3</a>
              </li>
              <li className='page-item  disabled' >
                <a href="#" className='page-link'>...</a>
              </li>
              <li className='page-item' >
                <a href="#" className='page-link'>15</a>

              </li>
              <li className='page-item' >
                <a href="#" className='page-link'>Older</a>
              </li>
            </ul>
          </nav>

        
          </div>

          <div className=' col-lg-4'>
            <div className='card mb-4'>
              <div className='card-header'>Search</div>
              <div children='card-body'>
                <div className='input-group'>
                  <input className='form-control' type="text" pattern='Search'  aria-label="Enter search term..." aria-describedby="button-search" />
                <button className='btn btn-primary' id="button-search " type='button'>Go!</button>
                </div>
              </div>
            </div>
            <div className='card mb-4'>
              <div className='card-header'>Categories</div>
              <div className='card-body'>
                <div className='row'>
                  <div className='col-sm-6'>
                    <ul className='list-unstyled mb-0'>
                      <li><a href="#">Web Design</a></li>
                      <li><a href="#">HTML</a></li>
                      <li><a href="#">Freebies</a></li>
                    </ul>
                  </div>
                  <div className='col-sm-6'>
                    <ul className='list-unstyled mb-0'>
                      <li><a href="#">JavaScript</a></li>
                      <li><a href="#">Css</a></li>
                      <li><a href="#">Tutorials</a></li>
                    </ul>
                  </div>
                  
                </div>
              </div>
            </div>
            <div className='card mb-4'>
               <div className='card-header'>Side Widget</div>
               <div className='card-body'>You can put anything you want inside of these side widgets. They are easy to use, and feature the Bootstrap 5 card component!</div>
            </div>
          </div>
        </div>
      </div>
      <footer className='py-5 bg-dark'>
        <div className='container'>
          <p className='m-0 text-center text-white'>
          Copyright © Ali Sayfiddinov 2024
          </p>
        </div>
      </footer>
        </div>
  );
}

export default App;
