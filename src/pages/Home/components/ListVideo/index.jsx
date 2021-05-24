// libs
import React, { memo, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
// hooks
import { useKeyPress } from "../../../../hooks";
// components
import ListVideoItems from "../ListVideoItems";
// actions
import { asyncGetListVideo } from "../../../../actions/Home/ListVideoAction";
// styles
import "./style.scss";

const ListVideo = () => {
  const dispatch = useDispatch();
  const videoSongList = useSelector((state) => state.ListVideoReducer.listVideo);
  const [page, setPage] = useState(10);
  const [isHovered, setIsHovered] = useState(false);
  // custom hooks KeyDown
  const resultPageDown = useKeyPress(34, page, isHovered);
  const resultPageUp = useKeyPress(33, page, isHovered);
  // Event Key
  useEffect(() => {
    setPage(resultPageUp);
  }, [resultPageUp]);
  useEffect(() => {
    setPage(resultPageDown);
  }, [resultPageDown]);
  // fetch API
  useEffect(() => {
    dispatch(asyncGetListVideo({ page }));
  }, [dispatch, page]);
  // handle NextPage ;
  const handleNextPage = () => {
    setPage(page + 1);
  };
  const debounceNextPage = (func, delay) => {
    let timer;
    return () => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        func();
      }, delay);
    };
  };
  // handle PrePage
  const handlePrePage = () => {
    setPage(page - 1);
  };
  const debouncePrePage = (func, delay) => {
    let timer;
    return () => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        func();
      }, delay);
    };
  };
  // handle Hover.
  const handleHover = () => {
    setIsHovered(true);
  };
  const handleUnHover = () => {
    setIsHovered(false);
  };
  return (
    <section
      className="list-video-wapper"
      onMouseEnter={handleHover}
      onFocus={handleHover}
      onMouseLeave={handleUnHover}
    >
      <h1 className="list-video_title">
        VIDEO HOT <i className="fas fa-chevron-right icon-right"></i>
      </h1>
      <div className="list-video-panigation">
        <button
          disabled={page === 1 && true}
          onClick={debouncePrePage(handlePrePage, 500)}
          className="btn-panigation"
          type="button"
        >
          Pre
        </button>
        <button onClick={debounceNextPage(handleNextPage, 500)} className="btn-panigation" type="button">
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
