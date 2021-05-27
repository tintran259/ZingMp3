// libs
import React, { memo, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
// hooks
import { useKeyPress, useHover, useSetting } from "../../../../hooks";
// components
import ListVideoItems from "../ListVideoItems";
// actions
import { asyncGetListVideo } from "../../../../actions/Home/ListVideoAction";
// orthers
import "./style.scss";

const ListVideo = () => {
  const { currentColor } = useSetting();
  const dispatch = useDispatch();
  const videoSongList = useSelector((state) => state.ListVideoReducer.listVideo);
  const [page, setPage] = useState(8);
  const [hoverRef, isHovered] = useHover();
  const resultPage = useKeyPress(page, isHovered);
  // update page when use event Key
  useEffect(() => {
    setPage(resultPage);
  }, [resultPage]);
  // fetch API
  useEffect(() => {
    dispatch(asyncGetListVideo({ page }));
  }, [dispatch, page]);

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
    <section className="list-video-wapper" ref={hoverRef}>
      <h1 className="list-video_title" style={{ color: currentColor }}>
        VIDEO HOT <i className="fas fa-chevron-right icon-right"></i>
      </h1>
      <div className="list-video-panigation">
        <button
          disabled={page === 1 && true}
          onClick={debounceNextAndPrePage(handlePrePage, 500)}
          className="btn-panigation"
          type="button"
        >
          Pre
        </button>
        <button onClick={debounceNextAndPrePage(handleNextPage, 500)} className="btn-panigation" type="button">
          Next
        </button>
      </div>
      <div className="list-video-main-wapper">
        {videoSongList && videoSongList.map((item) => <ListVideoItems key={item.id} item={item} />)}
      </div>
    </section>
  );
};

export default memo(ListVideo);
