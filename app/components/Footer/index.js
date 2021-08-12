import React from 'react';

export default function Footer() {
  return (
    <footer>
      <div className="footer__content_1">
        <div className="footer__list">
          <div className="row">
            <div className="col-3 list">
              <div className="footer__items">
                <ul>
                  <li>
                    <a className="business" href="#randomrandom">
                      Udemy for Business
                    </a>
                  </li>
                  <li>
                    <a className="teach" href="#random">
                      Teach on Udemy
                    </a>
                  </li>
                  <li>
                    <a href="#random">Udemy app</a>
                  </li>
                  <li>
                    <a href="#random">About us</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-3 list">
              <div className="footer__items">
                <ul>
                  <li>
                    <a href="#random">Contact us</a>
                  </li>
                  <li>
                    <a href="#random">Careers</a>
                  </li>
                  <li>
                    <a href="#random">Blog</a>
                  </li>
                  <li>
                    <a href="#random">Help and Support</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-3 list">
              <div className="footer__items">
                <ul>
                  <li>
                    <a href="#random">affiliate</a>
                  </li>
                  <li>
                    <a href="#random">Sitemap</a>
                  </li>
                  <li>
                    <a href="#random">Featured courses</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-3 change_langue">
              <div className="dropdown">
                <a
                  className="btn btn-light dropdown-toggle"
                  href="#random"
                  role="button"
                  id="dropdownMenuLink"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i className="fa fa-globe-asia" />
                  English
                </a>
                <div
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuLink"
                >
                  <a className="dropdown-item" href="#random">
                    English
                  </a>
                  <a className="dropdown-item" href="#random">
                    Deutsch
                  </a>
                  <a className="dropdown-item" href="#random">
                    Español
                  </a>
                  <a className="dropdown-item" href="#random">
                    Français
                  </a>
                  <a className="dropdown-item" href="#random">
                    Bahasa Indonesia
                  </a>
                  <a className="dropdown-item" href="#random">
                    Italiano
                  </a>
                  <a className="dropdown-item" href="#random">
                    日本語
                  </a>
                  <a className="dropdown-item" href="#random">
                    한국어
                  </a>
                  <a className="dropdown-item" href="#random">
                    Nederlands
                  </a>
                  <a className="dropdown-item" href="#random">
                    Polski
                  </a>
                  <a className="dropdown-item" href="#random">
                    Português
                  </a>
                  <a className="dropdown-item" href="#random">
                    Română
                  </a>
                  <a className="dropdown-item" href="#random">
                    Русский
                  </a>
                  <a className="dropdown-item" href="#random">
                    {' '}
                    ภาษาไทย
                  </a>
                  <a className="dropdown-item" href="#random">
                    {' '}
                    Türkçe
                  </a>
                  <a className="dropdown-item" href="#random">
                    {' '}
                    中文(简体)
                  </a>
                  <a className="dropdown-item" href="#random">
                    {' '}
                    中文(繁體)
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="footer__content_2">
        <div className="row">
          <div className="col-12 col-md-6">
            <a className="navbar-brand text-center" href="#random">
              <img src="./img/logo-coral.svg" alt="" />
            </a>
            <span>Copyright © 2020 Udemy, Inc.</span>
          </div>
          <div className="col-12 col-md-6">
            <div className="footer__rule">
              <ul>
                <li>
                  <a className="terms" href="#random">
                    Terms
                  </a>
                </li>
                <li>
                  <a className="policy" href="#random">
                    Privacy Policy and Cookie Policy
                  </a>
                </li>
                <li>
                  <a className="items-rule d-none" href="#random">
                    Sitemap
                  </a>
                </li>
                <li>
                  <a className="items-rule d-none" href="#random">
                    Featured courses
                  </a>
                </li>
                <li>
                  <a className="items-rule d-none" href="#random">
                    About us
                  </a>
                </li>
                <li>
                  <a className="items-rule d-none" href="#random">
                    About us
                  </a>
                </li>
                <li>
                  <a className="items-rule d-none" href="#random">
                    Blog
                  </a>
                </li>
                <li>
                  <a className="items-rule d-none" href="#random">
                    Get the app
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <hr className="footer__hr" />
    </footer>
  );
}
