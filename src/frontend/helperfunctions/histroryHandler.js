import toast from "react-hot-toast";
import { actionTypes } from "../reducers/actionTypes";
import {
  clearHistoryService,
  deletHistoryService,
  getHistoryService,
  postHistoryService,
} from "../services/historyService";

export const getHistoryHandler = async (token, dataStoreDispatch) => {
  try {
    const res = await getHistoryService(token);
    if (res.status === 200) {
      dataStoreDispatch({
        type: actionTypes.HISTORY_VIDEO,
        payload: res.data.history,
      });
    }
  } catch (error) {
    dataStoreDispatch({
      type: actionTypes.API_ERROR,
      payload: "API is not working",
    });
  }
};

export const postHistoryHandler = async (token, video, dataStoreDispatch) => {
  try {
    const res = await postHistoryService(token, video);
    if (res.status === 201) {
      dataStoreDispatch({
        type: actionTypes.HISTORY_VIDEO,
        payload: res.data.history,
      });
    }
  } catch (error) {
    dataStoreDispatch({
      type: actionTypes.API_ERROR,
      payload: "API is not working",
    });
  }
};

export const deleteHistoryHandler = async (
  token,
  videoId,
  dataStoreDispatch,
  skip1,
  skip2,
  toastProps
) => {
  try {
    const res = await deletHistoryService(token, videoId);
    if (res.status === 200) {
      dataStoreDispatch({
        type: actionTypes.HISTORY_VIDEO,
        payload: res.data.history,
      });
      toast("Removed from History", toastProps);
    }
  } catch (error) {
    dataStoreDispatch({
      type: actionTypes.API_ERROR,
      payload: "API is not working",
    });
  }
};

export const clearHistoryHandler = async (
  token,
  dataStoreDispatch,
  toastProps
) => {
  try {
    const res = await clearHistoryService(token);
    if (res.status === 200) {
      dataStoreDispatch({
        type: actionTypes.HISTORY_VIDEO,
        payload: res.data.history,
      });
      toast.success("Cleared history", toastProps);
    }
  } catch (error) {
    dataStoreDispatch({
      type: actionTypes.API_ERROR,
      payload: "API is not working",
    });
  }
};