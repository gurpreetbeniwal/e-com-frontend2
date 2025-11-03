import React from "react";
import Sidebar from "./Sidebar";
import { Link } from "react-router-dom";

import { blogPosts2, blogPosts3 } from "@/data/blogs";
export default function BlogList() {
  return (
    <>
      {/* Blog List */}
      <section className="s-blog-list">
        <div className="container">
          <div className="d-flex gap-36">
            <div className="blog-list-content">
              {/* item 1 */}
              <div className="news-item style-large hover-img">
                <Link to={`/blog-detail`} className="entry_image img-style">
                  <img
                    src="/images/blog/blog-item-large.jpg"
                    alt="Blog"
                    className="lazyload"
                    width={1170}
                    height={658}
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
                    <h5>
                      <Link to={`/blog-detail`} className="link fw-semibold">
                        5W Digital Announces Expansion of Dedicated Houseware
                        and Appliances...
                      </Link>
                    </h5>
                    <p className="subs body-text-3">
                      Maecenas vitae risus id purus bibendum consectetur. Nullam
                      porttitor mauris sit amet venenatis fringilla. Integer
                      hendrerit dictum purus, eget euismod quam elementum vitae.
                      Morbi euismod vitae ipsum ut vehicula. Duis ullamcorper at
                      magna fringilla sollicitudin. Suspendisse felis dui,
                      convallis in consectetur quis, consequat vel purus. Cras
                      convallis mauris non fringilla mattis. Aenean ornare
                      turpis lacus, in feugiat ipsum auctor in.
                    </p>
                  </div>
                </div>
              </div>
              <div className="tf-grid-layout sm-col-2 md-col-3">
                {blogPosts3.map((post, index) => (
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
                            {post.category}
                          </p>
                        </div>
                        <div className="date">
                          <p className="caption font-2">{post.date}</p>
                        </div>
                      </div>
                      <div className="entry_infor_news">
                        <h6>
                          <Link
                            to={`/blog-detail`}
                            className="link fw-semibold"
                          >
                            {post.title}
                          </Link>
                        </h6>
                        <p className="subs body-text-3">{post.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              {/* Break */}
              <img alt="" src="/images/line-br.jpg" width={1167} height={7} />
              {/* item 2 */}
              {blogPosts2.map((post, index) => (
                <div className="news-item style-row hover-img" key={index}>
                  <Link to={`/blog-detail`} className="entry_image img-style">
                    <img
                      src={post.imgSrc}
                      alt="Blog"
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
                        <Link to={`/blog-detail`} className="link fw-semibold">
                          {post.title}
                        </Link>
                      </h6>
                      <p className="subs body-text-3">{post.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
              {/* Navigation */}
              <ul className="wg-pagination wd-load">
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
      {/* Blog List */}
      <div className="btn-sidebar-mb d-xl-none right">
        <button data-bs-toggle="offcanvas" data-bs-target="#mbSidebar">
          <i className="icon icon-sidebar" />
        </button>
      </div>
    </>
  );
}
