import React from 'react';
import './Footer1.css'
import { MDBFooter } from 'mdb-react-ui-kit';

export default function App() {
  return (
    <MDBFooter bgColor='dark' className='text-center text-lg-start text-muted'>
      <br/>
      <section className='footer-section'>
        <div className='container text-center text-md-start mt-5'>
          <div className='row mt-3'>
            <div className='col-md-3 col-lg-4 col-xl-3 mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold fst-italic mb-4'>
                <i className='fas fa-gem'></i>Matnaysis
              </h6>
              <p>
              Matanaysis aims to provide investors from various fields with an online tool to facilitate in making decisions without having to invest time in researching about how one factors affect a certain market.
              </p>
            </div>
            <div className='col-md-3 col-lg-2 col-xl-2 mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
              <p>
                <a href='https://www.investing.com/indices/karachi-100' className='text-reset'>
                  KSE-PRICE
                </a>
              </p>
              <p>
                <a href='https://www.investing.com/equities/pak-state-oil' className='text-reset'>
                  Oil-Price
                </a>
              </p>
              <p>
                <a href='https://easydata.sbp.org.pk/apex/f?p=10:210:0::NO:::' className='text-reset'>
                  Interest-Rate
                </a>
              </p>
              <p>
                <a href='http://goldpricez.com/gold/history/pkr/years-3' className='text-reset'>
                  Gold-Price
                </a>
              </p>
            </div>

            <div className='col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <i className='fas fa-home '></i> Systems Limited,Karachi,Pakistan
              </p>
              <p>
                <i className='fas fa-envelope'></i>
                faaiz.asif@systemsltd.com
              </p>
              <p>
                <i className='fas fa-phone'></i> + 92 331 247 0377
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2022 Copyright@  
        <a className='text-reset fw-bold' href='http://localhost:3000/'>
           Matnaysis
        </a>
      </div>
    </MDBFooter>
  );
}