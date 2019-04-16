import React from 'react';

const styles = {
  navbar: {
    borderBottom: '2px solid #f01616',
    fontWeight: 'bold',
    listStyle: 'none',
    display: 'flex',
    justifyContent: 'space-around',
    paddingTop: 15,
    paddingBottom: 15
  }
}

const headers = ['restaurants', 'orders'];

const Navbar = () => (
  <div className='row'>
    <div className='col-12'>
      <ul style={styles.navbar}>
        {headers.map(header =>
          <li key={header}>
            {header.charAt(0).toUpperCase() + header.slice(1)}
            <i className={header === 'restaurants'
              ? 'fas fa-utensils fa-fw'
                : 'fas fa-pencil-alt fa-fw'} />
          </li>
        )}
      </ul>
    </div>
  </div>
);

export default Navbar;
