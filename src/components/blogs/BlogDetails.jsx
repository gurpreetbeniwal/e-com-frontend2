import React from "react";

import { recentPosts } from "@/data/blogs";
import { Link } from "react-router-dom";
export default function BlogDetails() {
  return (
    <>
      {/* Parallax Image */}
      <div className="parallax-image">
        <img
          src="/images/section/parallax-1.jpg"
          alt=""
          className="lazyload effect-paralax"
          width={1920}
          height={1080}
        />
      </div>
      {/* /Parallax Image */}
      {/* Blog Detail */}
      <section className="tf-sp-2">
        <div className="container">
          <div className="s-blog-detail">
            <div className="box-direction sticky content-left">
              <a href="#" className="btn-direc btn-prev">
                <span className="icon">
                  <i className="icon-arrow-left-lg" />
                </span>
                <p className="body-text">
                  QLED vs. OLED TVs: Which TV Technology Is Better in 2022?
                </p>
              </a>
              <div className="bottom">
                <p className="caption font-2 text-main-2">Share this post:</p>
                <span className="br-line bg-gray-5" />
                <ul className="social-list style-2 justify-content-start flex-wrap">
                  <li>
                    <a href="https://www.facebook.com">
                      <i className="icon-facebook" />
                    </a>
                  </li>
                  <li>
                    <a href="https://x.com/">
                      <i className="icon-x" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/">
                      <i className="icon-instagram" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/">
                      <i className="icon-linkin" />
                    </a>
                  </li>
                  <li>
                    <a href="https://web.whatsapp.com/">
                      <i className="icon-whatapp" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="content-blog">
              <div className="main-content">
                <div className="box-title">
                  <h2 className="fw-semibold">
                    Apple AR, VR Headset Rumors:
                    <br className="d-none d-xxl-block" />
                    2022 Release, M1 Chip and More
                  </h2>
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
                </div>
                <h6 className="subs fw-semibold">
                  Apple's board of directors got a preview of the long-rumored
                  headset, according to a new
                  <br className="d-none d-xxl-block" />
                  report.
                </h6>
                <div className="entry_image has-sub">
                  <img
                    src="/images/blog/detail-1.jpg"
                    alt=""
                    className="lazyload"
                    width={874}
                    height={492}
                  />
                  <p className="sub-image caption text-main-2 font-2">
                    Taking a look at Apple's other wearable devices could point
                    to where Apple's rumored glasses are heading.
                  </p>
                </div>
                <p className="text">
                  Apple has been integrating augmented reality into its devices
                  for years, but a new report from Bloomberg suggests the tech
                  giant will soon make its biggest AR/VR stride yet: producing a
                  mixed-reality headset. In a meeting last week, the company's
                  board of directors observed a demonstration of the headset,
                  according to the report.
                </p>
                <p className="text">
                  This could indicate that the long-rumored headset is nearing
                  completion. It lines up with a previous prediction from
                  analyst Ming-Chi Kuo: that Apple's VR/AR headset is arriving
                  in the fourth quarter of 2022 with Wi-Fi 6 and 6E support.
                  Kuo's prediction is corroborated by earlier reports that
                  Apple's headset might be coming in 2022, with smart glasses
                  around 2025, and maybe AR contact lenses after that.
                </p>
                <p className="text">
                  Apple could blend AR and VR with two headsets in the near
                  future, leading the way with some sort of high-end AR/VR
                  headset more like an advanced Quest 2, according to
                  Bloomberg's Mark Gurman. Gurman also suggests a focus on
                  gaming, media and communication. In terms of communication,
                  Gurman believes FaceTime using the rumored headset could rely
                  on Memojis and SharePlay, meaning instead of seeing the person
                  you're talking to, you would see a 3D version of their
                  personalized Memoji avatar.
                </p>
                <p className="text">
                  And Apple may have large plans for the headset. The company's
                  "goal is to replace the ‌iPhone‌ with AR in 10 years," Kuo
                  explains in a note to investors, seen by MacRumors. The device
                  could be relatively lightweight, about 300-400 grams (roughly
                  10.5-14 ounces), according to Kuo. That's lighter than Meta's
                  Oculus Quest 2.
                </p>
                <p className="text-read-more">
                  <span className="fw-bold">Read more:</span>
                  <a href="#" className="link text-decoration-underline">
                    The Metaverse is Just Getting Started: Here's What You Need
                    to Know
                  </a>
                </p>
                <p className="text">
                  The headset could be expensive, maybe as much as $3,000 or
                  more, with 8K displays, eye tracking and cameras that can scan
                  the world and blend AR and VR together, according to a report
                  from The Information last year.
                </p>
                <p className="text">
                  It's expected to feature Apple's M1 processor and work as a
                  stand-alone device. But it could also connect with Apple's
                  other devices. That's not a surprising move. In fact, most of
                  the reports on Apple's headset seem to line right up with how
                  VR is evolving: lighter-weight, with added mixed reality
                  features via more advanced passthrough cameras. In that sense,
                  Apple's first headset will probably be a stepping stone to
                  future lighter AR glasses, in the same way that Meta's next
                  headset, called Project Cambria, might be used.
                </p>
                <p className="text">
                  Last year, reports on Apple's AR/VR roadmap suggested internal
                  disagreements, or a split strategy that could mean a VR
                  headset first, and more normal-looking augmented reality smart
                  glasses later. But recent reports seem to be settling down to
                  tell the story of a particular type of advanced VR product
                  leading the way.
                </p>
                <p className="text">
                  These reports have been going around for several years,
                  including a story broken by CNET's Shara Tibken in 2018. But
                  the question is: When will this happen, exactly? 2022 or even
                  later? Apple's been building more advanced AR tools into its
                  iPhones and iPads, setting the stage for something more. But
                  we still don't know what that thing (or things) is. What's
                  increasingly clear is that the rest of the AR/VR landscape is
                  facing a slower-than-expected road to AR glasses, too.
                </p>
                <div className="entry_image">
                  <img
                    src="/images/blog/detail-2.jpg"
                    alt=""
                    className="lazyload"
                    width={874}
                    height={492}
                  />
                </div>
                <p className="text">
                  VR, however, is a more easily reachable goal in the short
                  term.
                </p>
                <p className="text">
                  Apple has been in the wings all this time without any headset
                  at all, although the company's aspirations in AR have been
                  clear and well-telegraphed on iPhones and iPads for years.
                  Each year, Apple's made significant strides on iOS with its AR
                  tools. It's been debated how soon this hardware will emerge:
                  this year, the year after or even further down the road. Or
                  whether Apple proceeds with just glasses, or with a
                  mixed-reality VR/AR headset, too.
                </p>
                <p className="text">
                  I've worn more AR and VR headsets than I can even recall, and
                  been tracking the whole landscape for years. In a lot of ways,
                  a future Apple AR headset's logical flight path should be
                  clear from just studying the pieces already laid out. Apple
                  acquired VR media-streaming company NextVR in 2020, and
                  previously purchased AR headset lens-maker Akonia Holographics
                  in 2018.
                </p>
                <p className="text">
                  I've had my own thoughts on what the long-rumored headset
                  might be, and so far, the reports feel well-aligned to be just
                  that. Much like the Apple Watch, which emerged among many
                  other smartwatches and had a lot of features I'd seen in other
                  forms before, Apple's glasses will probably not be a massive
                  surprise if you've been following the beats of the AR/VR
                  landscape lately.
                </p>
                <p className="text">
                  Remember Google Glass? How about Snapchat's Spectacles? Or the
                  HoloLens or Magic Leap? Meta is working on AR glasses too, and
                  Snap... and also Niantic. The landscape could get crowded
                  fast.
                </p>
                <p className="text">
                  Here's where Apple is likely to go based on what's been
                  reported, and how the company could avoid the pitfalls of
                  those earlier platforms.
                </p>
                <p className="text">Apple declined to comment on this story.</p>
              </div>
              <div className="main-content">
                <h5 className="fw-semibold">
                  Launch date: 2022, 2023... or later?
                </h5>
                <p className="text">
                  New Apple products tend to be announced months before they
                  arrive, maybe even more. The iPhone, Apple Watch, HomePod and
                  iPad all followed this path.
                </p>
                <p className="text">
                  A report from The Information from 2019, based on purported
                  leaked Apple presentational material, suggested 2022 for an
                  Oculus Quest-like AR/VR headset, and 2023 for glasses. Maybe
                  Apple takes a staggered strategy with AR, and releases several
                  devices: one for creators first, with a higher price; and one
                  for everyday wearers later. TrendForce doubts any AR/VR
                  headset could overtake Microsoft's or Oculus' until 2023 or
                  later.
                </p>
                <p className="text">
                  A 2022 launch would line up with a new report from DigiTimes,
                  spotted by MacRumors, which says Apple could start
                  mass-producing the headset in August or September and launch
                  later within the year.
                </p>
                <p className="text">
                  Either way, developers would need a long head start to get
                  used to developing for Apple's glasses, and making apps work
                  and flow with whatever Apple's design guidance will be. That's
                  going to require Apple giving a heads-up on its hardware well
                  in advance of its actual arrival. Maybe at WWDC.
                </p>
              </div>
              <div className="main-preview">
                <div className="comment-wrap">
                  <h5 className="fw-semibold">3 Comment</h5>
                  <div className="comment-list">
                    <div className="author-wrap">
                      <div className="avt">
                        <img
                          alt=""
                          src="/images/avatar/review-1.jpg"
                          width={100}
                          height={100}
                        />
                      </div>
                      <div className="wrap">
                        <div className="box-comment">
                          <div className="entry_meta">
                            <h6 className="name fw-semibold">
                              Cameron Williamson
                            </h6>
                            <p className="body-small">16:05 | May 24, 2022</p>
                          </div>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Maecenas tempus ultrices metus a egestas.
                            Quisque ac vestibulum augue. Fusce vestibulum ante
                            ac nulla malesuada, sit amet vulputate ante
                            vulputate. Nullam volutpat feugiat convallis.
                            Integer venenatis in justo quis egestas. Vivamus
                            suscipit nisi ex, eu posuere dui lobortis ac.
                          </p>
                        </div>
                        <div className="rep-comment">
                          <div className="author-wrap">
                            <div className="avt">
                              <img
                                alt=""
                                src="/images/avatar/review-2.jpg"
                                width={100}
                                height={100}
                              />
                            </div>
                            <div className="box-comment">
                              <div className="entry_meta">
                                <h6 className="name fw-semibold">
                                  Cameron Williamson
                                </h6>
                                <p className="body-small">
                                  16:05 | May 24, 2022
                                </p>
                              </div>
                              <p>
                                Ut iaculis metus malesuada dolor feugiat, ac
                                efficitur diam efficitur. Curabitur elementum
                                sollicitudin blandit. Cras venenatis vestibulum
                                purus
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="author-wrap">
                      <div className="avt">
                        <img
                          alt=""
                          src="/images/avatar/review-4.jpg"
                          width={50}
                          height={50}
                        />
                      </div>
                      <div className="box-comment">
                        <div className="entry_meta">
                          <h6 className="name fw-semibold">
                            Cameron Williamson
                          </h6>
                          <p className="body-small">16:05 | May 24, 2022</p>
                        </div>
                        <p>
                          Proin fermentum pellentesque elementum. Curabitur
                          pretium bibendum purus, nec vulputate nisl aliquet sit
                          amet. Nulla sit amet tincidunt eros. Nulla condimentum
                          odio quam, vel imperdiet dui porta eget. Sed nec nisi
                          et ante ornare ultricies. Morbi convallis ipsum in
                          fringilla sodales. Cras in molestie urna.
                        </p>
                      </div>
                    </div>
                    <div className="author-wrap">
                      <div className="avt">
                        <img
                          alt=""
                          src="/images/avatar/review-3.jpg"
                          width={100}
                          height={100}
                        />
                      </div>
                      <div className="box-comment">
                        <div className="entry_meta">
                          <h6 className="name fw-semibold">
                            Cameron Williamson
                          </h6>
                          <p className="body-small">16:05 | May 24, 2022</p>
                        </div>
                        <p>
                          Etiam nibh metus, tempus quis tempor in, fringilla id
                          mi. Vestibulum ante ipsum primis in faucibus orci
                          luctus et ultrices posuere cubilia curae
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="add-comment-wrap">
                  <h5 className="fw-semibold">Add Your Comment</h5>
                  <div>
                    <form action="#" className="form-add-comment">
                      <fieldset>
                        <label>Name:</label>
                        <input
                          type="text"
                          placeholder="Your name"
                          required=""
                        />
                      </fieldset>
                      <fieldset>
                        <label>Email:</label>
                        <input
                          type="text"
                          placeholder="Your email"
                          required=""
                        />
                      </fieldset>
                      <fieldset className="align-items-sm-start">
                        <label>Comment:</label>
                        <textarea placeholder="Message" defaultValue={""} />
                      </fieldset>
                      <div className="btn-submit">
                        <button
                          type="submit"
                          className="tf-btn btn-gray btn-large-2"
                        >
                          <span className="text-white">Submit</span>
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="box-direction content-right">
              <a
                href="#"
                className="btn-direc btn-prev text-end justify-content-end"
              >
                <p className="body-text">
                  Best Laptop for 2022: Here Are 14 Laptops We Recommend
                </p>
                <span className="icon">
                  <i className="icon-arrow-right-lg" />
                </span>
              </a>
              <div className="bottom d-xxl-block d-none">
                <div className="blog-sidebar sidebar-content-wrap">
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
                            <span className="body-text-3">
                              Beauty &amp; personal care
                            </span>
                            <i className="icon-arrow-right" />
                          </a>
                        </li>
                        <li>
                          <a href="#" className="link">
                            <span className="body-text-3">
                              Consumer Electronics
                            </span>
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
                              <img
                                alt=""
                                src="/images/clock.svg"
                                width={16}
                                height={17}
                              />
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
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* /Blog Detail */}
    </>
  );
}
