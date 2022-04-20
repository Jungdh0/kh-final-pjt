import React from 'react';

const SearchPage = () => {
  return (
    <div>
      <main>
        <div className="filters_full element_to_stick">
          <div className="container">
            <div className="add_top_10 clearfix row">
              <div className="col-md-5 row" style={{ alignContent: 'center' }}>
                <div className="custom_select">
                  <select name="sort" id="sort" className="col-md-3" style={{ marginRight: 10 }}>
                    <option defaultValue="popularity">인기순</option>
                    <option value="rating">최신순</option>
                  </select>

                  {/*</div>*/}
                </div>
              </div>
              <div className="col-md-5 search_bar" style={{ marginLeft: 'auto' }}>
                <input type="text" className="form-control" placeholder="무엇을 찾고 있나요?" name="searchText" />
                <input type="submit" value={'검색'} />
              </div>
            </div>
          </div>
          <div className="collapse filters_2" id="collapseFilters">
            <div className="container margin_detail">
              <div className="row"></div>
              {/* /row */}
            </div>
          </div>
          {/* /filters */}
          <div className="collapse" id="collapseSearch">
            <div className="search_bar_list">
              <input type="text" className="form-control" placeholder="Search..." />
            </div>
          </div>
          {/* /collapseSearch */}
        </div>
      </main>
    </div>
  );
};

export default SearchPage;
