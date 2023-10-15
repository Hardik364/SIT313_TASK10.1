import React from 'react'
import './Footer.css'


function FooterBanner() {

    return(
        <div class="footer-dark">
            <footer>
              <div class="container">
                  <div class="row">
                      <div class="col-md-1_item">
                          <pre> <h3>Explore</h3> </pre>
                          <ul>
                              <li><a href="#">Home</a></li>
                              <li><a href="#">Questions</a></li>
                              <li><a href="#">Articles</a></li>
                              <li><a href="#">Tutorials</a></li>
                          </ul>
                      </div>
                      <div class="col-md-2_item">
                         <pre> <h3>Support</h3> </pre> 
                          <ul>
                              <li><a href="#">FAQ's</a></li>
                              <li><a href="#">Help</a></li>
                              <li><a href="#">Contact Us</a></li>
                          </ul>
                      </div>
                      <div class="col-md-3_item">
                        <pre> <h3>Stay Connected</h3> </pre>                          
                          <ul>
                          <div class="col_item_social">
                              <a href="#"><i class="fa fa-facebook icon"><img src = {require("./Images/Facebook.png")} alt="logo" width={35} height={35} /></i></a>
                              <a href="#"><i class="fa fa-twitter icon"><img src = {require("./Images/twitter.png")} alt="logo" width={35} height={35} /></i></a>
                              <a href="#"><i class="fa fa-instagram icon"><img src = {require("./Images/instagram.png")} alt="logo" width={35} height={35} /></i></a>
                          </div>
                          </ul>
                      </div>
                  </div>
              </div>
          </footer>
      </div>

    )
}

export default FooterBanner