import React from "react";
import { Link } from "react-router-dom";

import { recentPosts } from "@/data/blogs";
export default function Sidebar() {
  return (
    <div className="blog-sidebar d-xl-flex d-none sidebar-content-wrap">
      <div className="sidebar-item style-2">
        <h6 className="sb-title fw-semibold">Categories</h6>
        <div className="sb-content sb-category">
          <ul>
            <li>
              <a href="#" className="link">
                <span className="body-text-3">Apparel</span>
                <i className="icon-arrow-right" />
              </a>
            </li>
            <li>
              <a href="#" className="link">
                <span className="body-text-3">
                  Automotive parts &amp; accessories
                </span>
                <i className="icon-arrow-right" />
              </a>
            </li>
            <li>
              <a href="#" className="link">
                <span className="body-text-3">Beauty &amp; personal care</span>
                <i className="icon-arrow-right" />
              </a>
            </li>
            <li>
              <a href="#" className="link">
                <span className="body-text-3">Consumer Electronics</span>
                <i className="icon-arrow-right" />
              </a>
            </li>
            <li>
              <a href="#" className="link">
                <span className="body-text-3">Fumiture</span>
                <i className="icon-arrow-right" />
              </a>
            </li>
            <li>
              <a href="#" className="link">
                <span className="body-text-3">Home products</span>
                <i className="icon-arrow-right" />
              </a>
            </li>
            <li>
              <a href="#" className="link">
                <span className="body-text-3">Machinery</span>
                <i className="icon-arrow-right" />
              </a>
            </li>
            <li>
              <a href="#" className="link">
                <span className="body-text-3">
                  Timepieces, jewelry &amp; eyewear
                </span>
                <i className="icon-arrow-right" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="sidebar-item has-line-bt">
        <h6 className="sb-title fw-semibold">Recent posts</h6>
        <ul className="sb-content sb-recent">
          {recentPosts.map((post, index) => (
            <li className="hover-img" key={index}>
              <Link to={`/blog-detail`} className="image img-style">
                <img
                  src={post.imgSrc}
                  alt=""
                  className="lazyload"
                  width={224}
                  height={148}
                />
              </Link>
              <div className="content">
                <Link
                  to={`/blog-detail`}
                  className="body-md-2 fw-semibold link"
                >
                  {post.title}
                </Link>
                <p className="date">
                  <img alt="" src="/images/clock.svg" width={16} height={17} />
                  <span className="body-small"> {post.date} </span>
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="sidebar-item type-space-2">
        <h6 className="sb-title fw-semibold">Tags</h6>
        <ul className="sb-content sb-tags">
          <li>
            <a href="#" className="body-text-3">
              ThemeMu
            </a>
          </li>
          <li>
            <a href="#" className="body-text-3">
              Busines plans
            </a>
          </li>
          <li>
            <a href="#" className="body-text-3">
              Middle
            </a>
          </li>
          <li>
            <a href="#" className="body-text-3">
              Web design
            </a>
          </li>
          <li>
            <a href="#" className="body-text-3">
              App
            </a>
          </li>
          <li>
            <a href="#" className="body-text-3">
              Case study
            </a>
          </li>
          <li>
            <a href="#" className="body-text-3">
              Psychological
            </a>
          </li>
          <li>
            <a href="#" className="body-text-3">
              Pricing
            </a>
          </li>
          <li>
            <a href="#" className="body-text-3">
              Methods
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
