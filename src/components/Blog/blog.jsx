import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './blog.scss'

import blogHead from '../../content-constants/images/blog_head.png'

import rect from '../../content-constants/images/rectangle.png'

import arrow from '../../content-constants/images/arrow.png'
export default class Blog extends Component {
  showBlogs() {
    return (
      <div class="card blogcard ml-4 mr-4">
        <img class="card-img-top blogcardimg" src={rect} alt="Card cap" />
        <div class="card-body">
          <p class="card-text">
            <div className="category">Lorem ipsum</div>
            <h3>Lorem ipsum</h3>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
            dolore sint est, provident laboriosam iste reprehenderit, at laborum
            fugiat voluptas debitis repellat soluta harum beatae!
          </p>
          <div className="">
            <Link to={'#'}>
              <span className="read-more">Read More</span>
              <img
                src={arrow}
                alt=""
                width="16"
                height="16"
                className="indentation"
              />
            </Link>
          </div>
        </div>
      </div>
    )
  }

  render() {
    return (
      <div className="blog-container text-left container">
        <div className="row">
          <div className="col-md-6 col-sm-12">
            <h2 className="blog-heading">Blog</h2>
            <h3 className="together-text">
              <span className="together-green">Together </span>we can restore
              the planet
            </h3>
            <p className="text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
              voluptas porro sit voluptatibus ex. Cum, necessitatibus ullam!
              Delectus nostrum veritatis ipsa voluptas tempore non
              necessitatibus aliquam autem, voluptate nulla omnis?
            </p>
          </div>
          <div className="blog-head col-md-6">
            <img src={blogHead} alt="" />
          </div>
          <h3 className="mx-auto">Featured Articles</h3>
          {/* load featured ones from backend */}
          <div className="d-flex flex-wrap justify-content-around mb-6 blog-flex">
            {this.showBlogs()}
            {this.showBlogs()}
            {this.showBlogs()}
            {this.showBlogs()}
            {this.showBlogs()}
            {this.showBlogs()}
          </div>
          <h3 className="mx-auto">Latest Articles</h3>
          {/* load featured ones from backend */}
          <div className="d-flex flex-wrap justify-content-around mb-6 blog-flex">
            {this.showBlogs()}
            {this.showBlogs()}
            {this.showBlogs()}
          </div>
        </div>
        <div className="applcn-btn pt-3  mx-auto view-all-btn">
          <Link to="/">VIEW ALL</Link>
        </div>
      </div>
    )
  }
}
