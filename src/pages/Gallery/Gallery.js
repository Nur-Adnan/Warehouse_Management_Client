import React from 'react';
import './Gallery.css';

const Gallery = () => {
    return (
      <div style={{ marginTop: 50, marginBottom: 40 }}>
        <section className="gallery" id="gallery">
          <h1 style={{textAlign: 'center', marginTop:'80px'}}>Gallery</h1>
          <hr />
        <div className="box-container">
          <div className="box">
            <img src="https://images.wallpaperscraft.com/image/single/ferrari_veyron_bugatti_black_italy_red_90595_800x600.jpg" alt="" />
            <div className="content">
              <h2>Aston Martin.</h2>
              <p>Oh, he's just a little bit shy, and he hates ya for . . .</p>
            <button className="button-62">See More!</button>
            </div>
          </div>
          <div className="box">
            <img src="https://images.wallpaperscraft.com/image/single/auto_front_view_rain_drops_119570_800x600.jpg" alt="" />
            <div className="content">
              <h2>Audi</h2>
              <p>Oh, he's just a little bit shy, and he hates ya for . . .</p>
              <button className="button-62">See More!</button>
            </div>
          </div>
          <div className="box">
            <img src="https://images.wallpaperscraft.com/image/single/ford_mustang_headlight_front_view_123766_800x600.jpg" alt="" />
            <div className="content">
              <h2>BMW</h2>
              <p>Oh, he's just a little bit shy, and he hates ya for . . .</p>
            <button className="button-62">See More!</button>
            </div>
          </div>
          <div className="box">
            <img src="https://images.wallpaperscraft.com/image/single/auto_rear_view_lights_evening_118168_800x600.jpg" alt="" />
            <div className="content">
              <h2>Cadillac</h2>
              <p>Oh, he's just a little bit shy, and he hates ya for . . .</p>
              <button className="button-62">See More!</button>
            </div>
          </div>
          <div className="box">
            <img src="https://images.wallpaperscraft.com/image/single/audi_tt_audi_front_view_124808_800x600.jpg" alt="" />
            <div className="content">
              <h2>Datsun</h2>
              <p>Oh, he's just a little bit shy, and he hates ya for . . .</p>
              <button className="button-62">See More!</button>
            </div>
          </div>
          <div className="box">
            <img src="https://images.wallpaperscraft.com/image/single/lamborghini_yellow_rain_121351_800x600.jpg" alt="" />
            <div className="content">
              <h2>Ferrari</h2>
              <p>Oh, he's just a little bit shy, and he hates ya for . . .</p>
              <button className="button-62">See More!</button>
            </div>
          </div>
          <div className="box">
            <img src="https://images.wallpaperscraft.com/image/single/bmw_car_front_view_189156_800x600.jpg" alt="" />
            <div className="content">
              <h2>Honda</h2>
              <p>Oh, he's just a little bit shy, and he hates ya for . . .</p>
              <button className="button-62">See More!</button>
            </div>
          </div>
          <div className="box">
            <img src="https://images.wallpaperscraft.com/image/single/ford_mustang_fastback_1967_bumper_104533_800x600.jpg" alt="" />
            <div className="content">
              <h2>Volkswagen</h2>
              <p>Oh, he's just a little bit shy, and he hates ya for . . .</p>
              <button className="button-62">See More!</button>
            </div>
          </div>
          <div className="box">
            <img src="https://images.wallpaperscraft.com/image/single/audi_r8_gt_rear_bumper_headlights_96448_800x600.jpg" alt="" />
            <div className="content">
              <h2>Audi</h2>
              <p>Oh, he's just a little bit shy, and he hates ya for . . .</p>
              <button className="button-62">See More!</button>
            </div>
          </div>
        </div>
      </section>
    </div>
    );
};

export default Gallery;