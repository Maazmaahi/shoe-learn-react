import React from 'react'

const NavigationBar = () => {
  return (
    <div>
        <nav className='container'>
        {/* // style={{padding: "20px", display: "flex", justifyContent: "space-between"}}> */}
            <div>
                <img alt='logo' src='images/brand_logo.png' width={76} />   
            </div>
            <ul>
              <li href="#">Menu</li>
              <li href="#">Location</li>
              <li href="#">About</li>
              <li href="#">Contact</li>
            </ul>

            <button>Login</button>
        </nav>
    </div>
  )
}

export default NavigationBar