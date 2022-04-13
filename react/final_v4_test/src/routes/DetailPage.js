import React from 'react';

const DetailPage = () => {
    return (
        <div>
            <main>
                <div className="container margin_60_40" id="wrapper">
                    <div className="row">
                        <div
                            className="col-xl-7 col-lg-7"
                            style={{display: "flex", justifyContent: "center"}}
                        >
                            <figure>
                                <img
                                    src="img/poster/breaking_bad.jpeg"
                                    alt=""
                                    className="img-fluid rounded"
                                    height="700"
                                    width="400"
                                />
                            </figure>
                        </div>
                        {/* /col */}

                        <div className="col-xl-5 col-lg-5">
                            <div className="detail_col">
                                <div className="main_info clearfix mb-1" style={{display: "flex"}}>
                                    <div className="item_desc">
                                        <div className="mb-3">
                                            <a href="author.html" className="author">
                                                <div className="author_thumb veryfied" style={{display: "flex"}}>
                                                    <figure style={{height: 30, width: 30}}>
                                                        <img
                                                            src="img/netflix_logo.png"
                                                            alt=""
                                                            className="lazy loaded"
                                                            width="10"
                                                            height="100"
                                                            data-was-processed="true"
                                                        />
                                                    </figure>
                                                    <figure style={{height: 30, width: 30}}>
                                                        <img
                                                            src="img/tving_logo.jpeg"
                                                            alt=""
                                                            className="lazy loaded"
                                                            width="100"
                                                            height="100"
                                                            data-was-processed="true"
                                                        />
                                                    </figure>
                                                    <figure style={{height: 30, width: 30}}>
                                                        <img
                                                            src="img/wavve_logo.png"
                                                            alt=""
                                                            className="lazy loaded"
                                                            width="100"
                                                            height="100"
                                                            data-was-processed="true"
                                                        />
                                                    </figure>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="age">
                                        <figure>
                                            <img
                                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Republic_Of_Korea_Broadcasting-TV_Rating_System%2815%29.svg/1024px-Republic_Of_Korea_Broadcasting-TV_Rating_System%2815%29.svg.png"
                                                style={{width: 25}}
                                            />
                                        </figure>
                                    </div>
                                </div>
                                <hr/>
                                <h1 className="mb-md-2">브레이킹 배드</h1>
                                <p>
                                    연기 부문 9회, 최우수 드라마 시리즈 2회 등 에미상을 16회
                                    수상하고, 크리틱 초이스상을 6회 수상한 전설적인 안티히어로 명작.
                                </p>
                                <br/>
                                <br/>
                                <p
                                    className="item_price clearfix"
                                    style={{display: "flex", justifyContent: "end"}}
                                >
                                    <a href="" className="btn_1 modal_popup">보러 가기</a>
                                </p>

                                <div className="tabs_detail">
                                    <ul className="nav nav-tabs" role="tablist">
                                        <li className="nav-item">
                                            <a
                                                id="tab-A"
                                                href="#pane-A"
                                                className="nav-link active"
                                                data-bs-toggle="tab"
                                                role="tab"
                                            >서비스</a
                                            >
                                        </li>
                                        <li className="nav-item">
                                            <a
                                                id="tab-B"
                                                href="#pane-B"
                                                className="nav-link"
                                                data-bs-toggle="tab"
                                                role="tab"
                                            >출연진</a
                                            >
                                        </li>
                                        <li className="nav-item">
                                            <a
                                                id="tab-C"
                                                href="#pane-C"
                                                className="nav-link"
                                                data-bs-toggle="tab"
                                                role="tab"
                                            >장르</a
                                            >
                                        </li>
                                    </ul>
                                    <div className="tab-content" role="tablist">
                                        <div
                                            id="pane-A"
                                            className="card tab-pane fade show active"
                                            role="tabpanel"
                                            aria-labelledby="tab-A"
                                        >
                                            <div className="card-header" role="tab" id="heading-A">
                                                <h5>
                                                    <a
                                                        className="collapsed"
                                                        data-bs-toggle="collapse"
                                                        href="#collapse-A"
                                                    >
                                                        서비스
                                                    </a>
                                                </h5>
                                            </div>
                                            <div
                                                id="collapse-A"
                                                className="collapse"
                                                role="tabpanel"
                                                aria-labelledby="heading-A"
                                            >
                                                <div className="pt-4">
                                                    <div className="author_list">
                                                        <a href="author.html" className="author">
                                                            <div className="author_thumb veryfied">
                                                                <figure>
                                                                    <img
                                                                        src="img/netflix_logo.jpeg"
                                                                        data-src="img/netflix_logo.jpeg"
                                                                        alt=""
                                                                        className="lazy"
                                                                        width="100"
                                                                        height="100"
                                                                    />
                                                                </figure>
                                                            </div>
                                                            <div>
                                                                <h6>넷플릭스</h6>
                                                            </div>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* /tab */}
                                        <div
                                            id="pane-B"
                                            className="card tab-pane fade"
                                            role="tabpanel"
                                            aria-labelledby="tab-B"
                                        >
                                            <div className="card-header" role="tab" id="heading-B">
                                                <h5>
                                                    <a
                                                        className="collapsed"
                                                        data-bs-toggle="collapse"
                                                        href="#collapse-B"
                                                    >
                                                        시즌
                                                    </a>
                                                </h5>
                                            </div>
                                            <div
                                                id="collapse-B"
                                                className="collapse"
                                                role="tabpanel"
                                                aria-labelledby="heading-B"
                                            >
                                                <div className="pt-4">
                                                    <div className="row author_list">
                                                        <div className="col-lg-12">
                                                            <a href="" className="author">
                                                                <div className="author_thumb veryfied"></div>
                                                                <div>
                                                                    <span>완결</span>
                                                                    <h6>시즌 5</h6>
                                                                </div>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* /tab */}
                                        <div
                                            id="pane-C"
                                            className="card tab-pane fade"
                                            role="tabpanel"
                                            aria-labelledby="tab-C"
                                        >
                                            <div className="card-header" role="tab" id="heading-C">
                                                <h5>
                                                    <a
                                                        className="collapsed"
                                                        data-bs-toggle="collapse"
                                                        href="#collapse-C"
                                                    >
                                                        출연진/감독
                                                    </a>
                                                </h5>
                                            </div>
                                            <div
                                                id="collapse-C"
                                                className="collapse"
                                                role="tabpanel"
                                                aria-labelledby="heading-C"
                                            >
                                                <div className="pt-4">
                                                    <div className="row">
                                                        <div className="col-lg-12">
                                                            <ul className="bullets">
                                                                <li>감독 <span>빈스 길리건</span></li>
                                                                <li>
                                                                    출연
                                                                    <span
                                                                    >브라이언 크랜스턴, 아론 폴, 안나 건 외</span
                                                                    >
                                                                </li>
                                                                <li>장르 <span>범죄, 스릴러</span></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* /tab */}
                                    </div>
                                    {/* /tab-content */}
                                </div>
                                {/* /tabs_detail */}
                            </div>
                            {/* /detail_col */}
                        </div>
                        {/* /col */}
                    </div>
                    {/* /row */}
                </div>

                <div className="container margin_60_40_second" style={{marginTop: 20}}>
                    <h4>비슷한 콘텐츠</h4>
                    <hr/>
                    <div className="row">
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                            <div className="strip">
                                <figure>
                                    <img
                                        src="https://images.justwatch.com/poster/262548358/s592/sanae-majseon"
                                        data-src="https://images.justwatch.com/poster/262548358/s592/sanae-majseon"
                                        className="lazy"
                                        alt=""
                                        width="533"
                                        height="400"
                                    />
                                    <a href="detail-page.html" className="strip_info">
                                        <div className="item_title">
                                            <h3>사내 맞선</h3>
                                        </div>
                                    </a>
                                </figure>
                                <ul>
                                    <li>
                                        <a href="author.html" className="author">
                                            <div className="author_thumb veryfied">
                                                <figure>
                                                    <img
                                                        src="img/tving_logo.jpeg"
                                                        data-src="img/tving_logo.jpeg"
                                                        alt=""
                                                        className="lazy"
                                                        width="100"
                                                        height="100"
                                                    />
                                                </figure>
                                            </div>
                                            <h6>Tving</h6>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#0" className="wish_bt"
                                        ><i className="bi bi-heart-fill"></i
                                        ></a>
                                        129
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                            <div className="strip">
                                <figure>
                                    <img
                                        src="img/items/item-1-placeholder.png"
                                        data-src="img/poster/오징어게임.jpeg"
                                        className="lazy"
                                        alt=""
                                        width="533"
                                        height="400"
                                    />
                                    <a href="detail-page.html" className="strip_info">
                                        <div className="item_title">
                                            <h3>오징어게임</h3>
                                        </div>
                                    </a>
                                </figure>
                                <ul>
                                    <li>
                                        <a href="author.html" className="author">
                                            <div className="author_thumb">
                                                <figure>
                                                    <img
                                                        src="img/netflix_logo.png"
                                                        data-src="img/netflix_logo.jpeg"
                                                        alt=""
                                                        className="lazy"
                                                        width="100"
                                                        height="100"
                                                    />
                                                </figure>
                                            </div>
                                            <h6>Netflix</h6>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#0" className="wish_bt"
                                        ><i className="bi bi-heart-fill"></i
                                        ></a>
                                        50
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                            <div className="strip">
                                <figure>
                                    <img
                                        src="https://image.tving.com/upload/cms/caip/CAIP0900/P001565742.jpg/dims/resize/F_webp,400"
                                        data-src="https://image.tving.com/upload/cms/caip/CAIP0900/P001565742.jpg/dims/resize/F_webp,400"
                                        className="lazy"
                                        alt=""
                                        width="533"
                                        height="400"
                                    />
                                    <a href="detail-page.html" className="strip_info">
                                        <div className="item_title">
                                            <h3>돼지의 왕</h3>
                                        </div>
                                    </a>
                                </figure>
                                <ul>
                                    <li>
                                        <a href="author.html" className="author">
                                            <div className="author_thumb veryfied">
                                                <figure>
                                                    <img
                                                        src="img/tving_logo.jpeg"
                                                        data-src="img/tving_logo.jpeg"
                                                        alt=""
                                                        className="lazy"
                                                        width="100"
                                                        height="100"
                                                    />
                                                </figure>
                                            </div>
                                            <h6>Tving</h6>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#0" className="wish_bt"
                                        ><i className="bi bi-heart-fill"></i
                                        ></a>
                                        159
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* /row */}
                </div>
                {/* /container */}
            </main>

            {/* COMMON SCRIPTS */}
            <script src="js/common_scripts.min.js"></script>
            <script src="js/bootstrap.bundle.min.js"></script>
            <script src="js/common_func.js"></script>
        </div>
    );
};

export default DetailPage;