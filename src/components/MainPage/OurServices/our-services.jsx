import React from 'react'
import { Link } from 'react-router-dom'
import './our-services.scss'

import box from '../../../content-constants/images/the_main.gif'
import cardboard from '../../../content-constants/images/cardboard.png'
import reusable from '../../../content-constants/images/reusable.png'
import plastic from '../../../content-constants/images/plastic.png'
import reuserail from '../../../content-constants/images/reuserail.png'
import onetimeboxes from '../../../content-constants/images/onetimeboxes.png'
import lists from '../../../content-constants/images/lists.png'
import boxes from '../../../content-constants/images/boxes.png'

const OurServices = () => {
  return (
    <div className="our-services-container">
      <div className="services-only-text-container">
        <h2 className="services-h2">Instant Services</h2>
        <p>
          As a part of our services that encourage collective consumption,
          Instant Pickup offers a number of revolutionary services such as free
          removal boxes and many others
        </p>
        <h3>How card boxes help the environment</h3>
        <p>
          Our moving boxes are Coronavirus free, tough, water-resistant & close
          securely and can be used over and over again, unlike the cardboard
          boxes which need to be discarded more often. Although cardboard is
          recyclable but if one simply throws them away, they will be more
          harmful to the environment than anything else. With this approach, we
          aim to move towards a sustainable and better environment.  No packing
          tape needed!
        </p>
      </div>
      <div className="services-examples-container">
        <div>
          <h3>Rent Removal Boxes</h3>
          <h6>SAVE CASH {'&'} CARDBOARD</h6>
          <p>
            We steam clean our reusable moving boxes and quarantine them for a
            minimum of 7-days between use so they are Coronavirus free
            (COVID-19). Meticulously developed for maximum convenience, our
            durable, water-resistant moving boxes are delivered to your door and
            picked up when you're done. These boxes also come with comfortable
            hand-grips which the traditional boxes lack. You can pack, stack and
            move without all the hassle.
          </p>
        </div>
        <div>
          <div className="services-images-container">
            <div className="services-images-container__item">
              <img src={box} alt="" height="200px" />
              <h4>INSTANT PICKUP BOX</h4>
              <div className="services-price-container">
                <p>£ 100</p>
              </div>
            </div>
            <div>
              <h5 className="vs-text">VS</h5>
            </div>
            <div className="services-images-container__item">
              <img src={cardboard} alt="" />
              <h4>CARDBOARD</h4>
              <div className="services-price-container">
                <p>£ 180 </p>
              </div>
            </div>
          </div>
          <div>
            <Link>Read more</Link>
          </div>
        </div>
        <div>
          <h3>Free Reusable covers</h3>
          <p>
            Instead of plastic, Instant Pickup uses makes use of environmentally
            friendly materials for moving and storage such as protective
            heavy-duty sofa bags, reusable mattress bags, and handles for moving
            and storage.  
          </p>
        </div>
        <div>
          <div className="services-images-container">
            <div className="services-images-container__item">
              <img src={reusable} alt="" />
              <h4>Reusable Bed cover</h4>
              <div className="services-price-container">
                <p>Free</p>
              </div>
            </div>
            <div className="vs-container">
              <h5 className="vs-text">VS</h5>
            </div>
            <div className="services-images-container__item">
              <img src={plastic} alt="" />
              <h4>Onetime use plastic Bed cover</h4>
              <div className="services-price-container">
                <p>£</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h3>Free reusable rail hangers</h3>
          <p>
            Clothes are something very common when it comes to removals but they
            also require a bit of special care. We provide rail hangers that
            come with their own covers that can come in handy to avoid dust and
            moisture ruin your clothes. This is much better than the single-use
            wardrobe boxes that are very expensive and non-durable
          </p>
        </div>
        <div>
          <div className="services-images-container">
            <div className="services-images-container__item">
              <img src={reuserail} alt="" />
              <h4>Reusable Rail hangers with covers</h4>
              <div className="services-price-container">
                <p>Free</p>
              </div>
            </div>
            <div>
              <h5 className="vs-text">VS</h5>
            </div>
            <div className="services-images-container__item">
              <img src={onetimeboxes} alt="" />
              <h4>Onetime Use Wardrobe Boxes</h4>
              <div className="services-price-container">
                <p>£</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h3>Recycled removal boxes</h3>
          <p>
            Here at Instant Pickup, we strongly believe in caring for the
            environment and following the 3R principle which stands for REDUCE,
            REUSE and RECYCLE. We use recycled removal boxes rather than
            purchasing new ones because they can be reused, if maintained
            properly and this can reduce a lot of waste that would have
            accumulated as a reason for thepurchasing a new.
          </p>
        </div>
        <div>
          <div className="services-images-container">
            <div className="services-images-container__item">
              <img src={lists} alt="" />
              <h4>Recycled Removal boxes</h4>
              <div className="services-price-container">
                <p>Free</p>
              </div>
            </div>
            <div>
              <h5 className="vs-text">VS</h5>
            </div>
            <div className="services-images-container__item">
              <img src={boxes} alt="" />
              <h4>Brand new removal boxes</h4>
              <div className="services-price-container">
                <p>£</p>
              </div>
            </div>
          </div>
          <div>
            <Link>Read more</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OurServices
