import toast from "react-hot-toast";
import { actionTypes } from "../reducers/actionTypes";
import {
  deletePlayListService,
  deletePlayListVideoService,
  getPlaylistService,
  getPlayListVideosService,
  postPlaylistService,
  postPlayListVideoService,
} from "../services/playlistService";

export const getPlaylistHandler = async (token, playListDispatch) => {
  try {
    const res = await getPlaylistService(token);
    playListDispatch({
      type: actionTypes.PLAYLIST_UPDATE,
      res: res.data.playlists,
    });
  } catch (error) {
    playListDispatch({
      type: actionTypes.PLAYLIST_ERROR,
      payload: "API is not working",
    });
  }
};

export const postPlaylistHandler = async (
  e,
  token,
  playListTitle,
  setPlayListTitle,
  playListDispatch
) => {
  e.preventDefault();
  try {
    const res = await postPlaylistService(token, playListTitle);
    if (res.status === 201) {
      playListDispatch({
        type: actionTypes.PLAYLIST_UPDATE,
        payload: res.data.playlists,
      });
      setPlayListTitle({ title: "" });
    }
  } catch (error) {
    playListDispatch({
      type: actionTypes.PLAYLIST_ERROR,
      payload: "API is not working",
    });
  }
};

export const deletePlayListHandler = async (
  token,
  playlistId,
  playListDispatch,
  toastProps
) => {
  try {
    const res = await deletePlayListService(token, playlistId);
    if (res.status === 200) {
      playListDispatch({
        type: actionTypes.PLAYLIST_UPDATE,
        payload: res.data.playlists,
      });
      toast("Removed playlist", toastProps);
    }
  } catch (error) {
    playListDispatch({
      type: "PLAYLIST_ERROR",
      payload: "API is not working",
    });
  }
};

export const getPlaylistVideosHandler = async (
  token,
  playListId,
  playListDispatch
) => {
  try {
    const res = await getPlayListVideosService(token, playListId);
    playListDispatch({
      type: actionTypes.PLAYLIST_VIDEO_UPDATE,
      payload: res.data.playlist,
    });
  } catch (error) {
    playListDispatch({
      type: actionTypes.PLAYLIST_ERROR,
      payload: "API is not working",
    });
  }
};

export const postPlayListVideoHandler = async (
  token,
  playListId,
  playListVideo,
  playListDispatch,
  toastProps
) => {
  try {
    const res = await postPlayListVideoService(
      token,
      playListId,
      playListVideo
    );
    if (res.status === 201) {
      playListDispatch({
        type: actionTypes.PLAYLIST_VIDEO_UPDATE,
        payload: res.data.playlist,
      });
      toast.success("Video added to playlist", toastProps);
    }
  } catch (error) {
    playListDispatch({
      type: actionTypes.PLAYLIST_ERROR,
      payload: "API is not working",
    });
  }
};

export const deletePlayListVideoHandler = async (
  token,
  videoId,
  undefined,
  playListId,
  playListDispatch,
  toastProps
) => {
  console.log(token, videoId, playListId);
  try {
    const res = await deletePlayListVideoService(token, videoId, playListId);
    if (res.status === 200) {
      playListDispatch({
        type: actionTypes.PLAYLIST_VIDEO_UPDATE,
        payload: res.data.playlist,
      });
      toast("Removed video from playlist", toastProps);
    }
  } catch (error) {
    playListDispatch({
      type: actionTypes.PLAYLIST_ERROR,
      payload: "API is not working",
    });
  }
};