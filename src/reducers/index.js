import { combineReducers } from "@reduxjs/toolkit";
import PageName from "./PageName";
import NewsFeed from "./NewsFeed";
import user from "./user";
import loading from "./loading";
import userPost from "./userPost";

const allReducer = combineReducers({
   PageName,
   NewsFeed,
   user,
   loading,
   userPost
});

export default allReducer;