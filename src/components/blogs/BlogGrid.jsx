import React from "react";
import Sidebar from "./Sidebar";
import { Link } from "react-router-dom";

import { blogPosts } from "@/data/blogs";
export default function BlogGrid() {
  return (
    <>
      {/* Blog Grid */}
      <section>
        <div className="container">
          <div className="d-flex gap-36">
            <div className="tf-grid-layout sm-col-2 md-col-3">
              {blogPosts.map((post, index) => (
                <div className="news-item hover-img" key={index}>
                  <Link to={`/blog-detail`} className="entry_image img-style">
                    <img
                      src={post.imgSrc}
                      alt=""
                      className="lazyload"
                      width={555}
                      height={312}
                    />
                  </Link>
                  <div className="content">
                    <div className="entry_meta">
                      <div className="tags">
                        <img
                          alt=""
                          src="/images/folder.svg"
                          width={16}
                          height={16}
                        />
                        <p className="caption fw-medium text-secondary font-2">
                          Houseware
                        </p>
                      </div>
                      <div className="date">
                        <p className="caption font-2">28 Apr 0222</p>
                      </div>
                    </div>
                    <div className="entry_infor_news">
                      <h6>
                        <a href="#" className="link fw-semibold">
                          {post.title}
                        </a>
                      </h6>
                      <p className="subs body-text-3">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Vestibulum pharetra nec nisi at varius. Praesent...
                      </p>
                    </div>
                  </div>
                </div>
              ))}
              {/* Navigation */}
              <ul className="wg-pagination wd-load mt-xl--10">
                <li>
                  <a href="#" className="link">
                    <i className="icon-arrow-left-lg" />
                  </a>
                </li>
                <li className="active">
                  <p className="title-normal link">1</p>
                </li>
                <li>
                  <a href="#" className="title-normal link">
                    2
                  </a>
                </li>
                <li className="d-none d-sm-flex">
                  <a href="#" className="title-normal link">
                    3
                  </a>
                </li>
                <li className="d-none d-sm-flex">
                  <a href="#" className="title-normal link">
                    4
                  </a>
                </li>
                <li>
                  <p className="title-normal">...</p>
                </li>
                <li>
                  <a href="#" className="title-normal link">
                    10
                  </a>
                </li>
                <li>
                  <a href="#" className="link">
                    <i className="icon-arrow-right-lg" />
                  </a>
                </li>
              </ul>
            </div>
            <Sidebar />
          </div>
        </div>
      </section>
      {/* Blog Grid */}
      <div className="btn-sidebar-mb d-xl-none right">
        <button data-bs-toggle="offcanvas" data-bs-target="#mbSidebar">
          <i className="icon icon-sidebar" />
        </button>
      </div>
    </>
  );
}
