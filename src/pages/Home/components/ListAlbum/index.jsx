// libs
import React, { memo, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// hooks
import { useKeyPress, useHover } from "../../../../hooks";
// components
import ListAlbumItems from "../ListAlbumItems";
// actions
import { asyncGetListAlbumHot } from "../../../../actions/Home/ListVideoAction";
// Constants
import CONSTANTS from "../../../../contants";
// styles
import "./style.scss";

const ListAlbum = () => {
  // Constants
  const { KEY_CODE } = CONSTANTS;
  // react-redux
  const dispatch = useDispatch();
  const albumList = useSelector((state) => state.ListVideoReducer.listAlbumHot);
  // Contructor
  const [page, setPage] = useState(1);
  // keyPress
  const [hoverRef, isHovered] = useHover();
  const result = useKeyPress(KEY_CODE, page, isHovered);
  // fetch api
  useEffect(() => {
    dispatch(asyncGetListAlbumHot({ page }));
  }, [dispatch, page]);
  // update page when use event Key
  useEffect(() => {
    setPage(result);
  }, [result]);
  // handle Pre and Next pages
  const handleNextPage = () => {
    setPage(page + 1);
  };
  const handlePrePage = () => {
    setPage(page - 1);
  };
  return (
    <section className="list-album-wapper" ref={hoverRef}>
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
