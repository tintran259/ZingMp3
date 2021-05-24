// libs
import React, { memo, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// hooks
import { useKeyPress } from "../../../../hooks";
// components
import ListAlbumItems from "../ListAlbumItems";
// actions
import { asyncGetListAlbumHot } from "../../../../actions/Home/ListVideoAction";
// styles
import "./style.scss";

const ListAlbum = () => {
  const dispatch = useDispatch();
  const albumList = useSelector((state) => state.ListVideoReducer.listAlbumHot);
  const [page, setPage] = useState(1);
  const [isHovered, setIsHovered] = useState(false);
  console.log(page);
  // keyPress
  const resultPageUp = useKeyPress(33, page, isHovered);
  const resultPageDown = useKeyPress(34, page, isHovered);
  // update page when use event Key
  useEffect(() => {
    if (resultPageDown < 0) {
      setPage(0);
    }
    setPage(resultPageDown);
  }, [resultPageDown]);
  useEffect(() => {
    if (resultPageUp > 3) {
      setPage(3);
    }
    setPage(resultPageUp);
  }, [resultPageUp]);
  // fetch api
  useEffect(() => {
    dispatch(asyncGetListAlbumHot({ page }));
  }, [dispatch, page]);

  // handle Pre and Next pages
  const handleNextPage = () => {
    setPage(page + 1);
  };
  const handlePrePage = () => {
    setPage(page - 1);
  };
  // hover
  const handleHover = () => {
    setIsHovered(true);
  };
  const handleUnHover = () => {
    setIsHovered(false);
  };
  return (
    <section
      className="list-album-wapper"
      onMouseLeave={handleUnHover}
      onFocus={handleHover}
      onMouseEnter={handleHover}
    >
      <h1 className="list-album_title">
        ALBUM HOT <i className="fas fa-chevron-right icon-right"></i>
      </h1>
      <div className="list-album-main-wapper">
        {albumList && albumList.map((item) => <ListAlbumItems key={item.id} item={item} />)}
      </div>
      <div className="btn-next-and-pre">
        <button disabled={page === 0 && true} onClick={handlePrePage} type="button" className="btn-inner">
          Pre
        </button>
        <button disabled={page === 3 && true} onClick={handleNextPage} type="button" className="btn-inner">
          Next
        </button>
      </div>
    </section>
  );
};

export default memo(ListAlbum);
