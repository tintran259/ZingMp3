// libs
import React, { memo, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// hooks
import { useKeyPress, useHover, useSetting } from "../../../../hooks";
// components
import ListAlbumItems from "../ListAlbumItems";
// actions
import { asyncGetListAlbumHot } from "../../../../actions/Home/ListVideoAction";

// styles
import "./style.scss";

const ListAlbum = () => {
  const { currentColor } = useSetting();
  const dispatch = useDispatch();
  const albumList = useSelector((state) => state.ListVideoReducer.listAlbumHot);
  const [page, setPage] = useState(1);
  const [hoverRef, isHovered] = useHover();
  const resultPage = useKeyPress(page, isHovered);
  // fetch api
  useEffect(() => {
    dispatch(asyncGetListAlbumHot({ page }));
  }, [dispatch, page]);
  // update page when use event Key
  useEffect(() => {
    setPage(resultPage);
  }, [resultPage]);
  const handleNextPage = () => {
    setPage(page + 1);
  };
  const handlePrePage = () => {
    setPage(page - 1);
  };
  // debouncing
  const debounceNextAndPrePage = (func, delay) => {
    let timer;
    return () => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        func();
      }, delay);
    };
  };
  return (
    <section className="list-album-wapper" ref={hoverRef}>
      <h1 className="list-album_title" style={{ color: currentColor }}>
        ALBUM HOT <i className="fas fa-chevron-right icon-right"></i>
      </h1>
      <div className="list-album-main-wapper">
        {albumList && albumList.map((item) => <ListAlbumItems key={item.id} item={item} />)}
      </div>
      <div className="btn-next-and-pre">
        <button
          disabled={page === 0 && true}
          onClick={debounceNextAndPrePage(handlePrePage, 500)}
          type="button"
          className="btn-inner"
        >
          Pre
        </button>
        <button
          disabled={page === 3 && true}
          onClick={debounceNextAndPrePage(handleNextPage, 500)}
          type="button"
          className="btn-inner"
        >
          Next
        </button>
      </div>
    </section>
  );
};

export default memo(ListAlbum);
