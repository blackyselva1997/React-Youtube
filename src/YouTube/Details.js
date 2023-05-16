import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import Button from '@mui/material/Button';
import ReplyIcon from '@mui/icons-material/Reply';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import SortIcon from '@mui/icons-material/Sort';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Stack from '@mui/material/Stack';
import SentimentSatisfiedAltSharpIcon from '@mui/icons-material/SentimentSatisfiedAltSharp';
import { useDispatch, useSelector } from 'react-redux';
import { comment } from './DataSlice';
import Objects from './All-Objects';
import './Details.scss';
import '../home.scss';



let sum = 0;
let array = [];
const Details = () => {
  const [value, setValue] = React.useState(0);
  const login = useSelector(({ data }) => data.login);
  const Video = useSelector(({ data }) => data.files);
  const users = useSelector(({ data }) => data.users);
  const commentData = useSelector(({ data }) => data.comment);
  const dispatch = useDispatch();
  const body = document.querySelector('body');
  const [videoState, setVideoState] = useState([Video]);
  const [like, setLike] = useState(0);
  const [state, setState] = useState(Objects);
  const ObjectsVideo = state.filter(e => e.type === Video.type);
  const [valueCheck, setValueCheck] = useState(1);
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const oneVideo = (e) => {
    setVideoState([e]);
  };

  const incress = () => {
    setLike(++sum);
  };

  const decress = () => {
    if (sum > 0) return setLike(--sum);
  };

  const commentsChange = (e) => {
    setInputValue(e.target.value);
  };

  const [timeShow, setTimeShow] = useState();

  const comments = () => {
    let commentObject;
    if (!(inputValue === "")) {
      commentObject = {
        para: inputValue
      };
      if (commentData.length > 0) {
        dispatch(comment([...commentData, commentObject]));
        setInputValue("");
      } else {
        array.push(commentObject);
        dispatch(comment(array));
        setInputValue("");
      }
      let date = new Date(0);
      let sum = date.getSeconds();
      setInterval(() => {
        ++sum;
        setTimeShow(sum);
      }, 1000);
    }
  };

  const commentLike = () => {
    body.classList.toggle('color-red');
  };

  const commentLike1 = () => {
    body.classList.toggle('color-reds');
  }

  return (
    <>
      <div id='details-sec'>
        <div className='details-container'>
          <div className='details-row-1'>
            {videoState.map((val, i) => {
              return <div key={i} id='playVideo'>
                <div className='videodiv'>
                  <video
                    className='details-video'
                    src={val.url}
                    poster={val.thump}
                    // autoPlay='true'
                    controls
                  />
                </div>
                <div className='details-col-2'>
                  <h4>{val.name}</h4>
                </div>
                <div className='details-col-3'>
                  <div className='details-description-1'>
                    <div className='details-channel-icon'>
                      <img className='details-channel' src={(val.logo)} />
                    </div>
                    <div className='details-channel-name'>
                      <h4>{val.channel}</h4>
                      <p>Subscribers</p>
                    </div>
                    <div className='details-channel-subscribe'>
                      <button id='subscribe'>subscribe</button>
                    </div>
                  </div>
                  <div className='details-description-2'>
                    {login ? (<div className='details-like'>
                      <button id='thumbsup' onClick={() => incress()}><ThumbUpOffAltIcon /></button>
                      <input id='like-count' value={like} />
                      <button id='thumbsdown' onClick={() => decress()}><ThumbDownOffAltIcon /></button>
                    </div>) : (<div className='details-like'>
                      <button id='thumbsup'><ThumbUpOffAltIcon /></button>
                      <input id='like-count' value='' />
                      <button id='thumbsdown'><ThumbDownOffAltIcon /></button>
                    </div>)}
                    <div className='details-share'>
                      <button id='share'>
                        <ReplyIcon />Share
                      </button>
                    </div>
                    <div className='details-extra'>
                      <button id='extra'>
                        <MoreHorizIcon />
                      </button>
                    </div>
                  </div>
                </div>
                <div className='details-col-4'>
                  <div className='details-video-description'>
                    <p>52,808,527 views  Jan 10, 2015{val.name}</p>
                  </div>
                </div>
                <div className='details-col-5'>
                  <div className='details-comment-count'>
                    <div className='comment-count'>
                      <p>50 Comments</p>
                    </div>
                    <div className='comment-sort'>
                      <SortIcon />Sort
                    </div>
                  </div>
                  <div className='details-comment'>
                    <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                      {[users].length > 0 ? ([users].map((v, i) => (<img className='user' style={{ width: "30px", marginRight: "10px" }} src={v.image} alt='my image' />))) : (<AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />)}
                      {login ? (<TextField style={{ width: "100%" }} value={inputValue} onChange={commentsChange} id="input-with-sx" className='D-comment-input' label="Add a Comment" variant="standard" />
                      ) : (<TextField style={{ width: "100%" }} value={inputValue} id="input-with-sx" className='D-comment-input' label="Add a Comment" variant="standard" />
                      )}
                    </Box>
                  </div>
                  <div className='comment-btn-row' tabIndex={0}>
                    <div className='comment-icon'>
                      <div className='comment-smile'>
                        <SentimentSatisfiedAltSharpIcon className='smile' />
                      </div>
                    </div>
                    <div className='comment-btn'>
                      <div className='comment-cancel'>
                        <Button
                          color="secondary"
                          disabled={false}
                          size="small"
                          variant="filledTonal"
                          value="cancel"
                          onClick={() => setInputValue("")}
                        >cancel</Button>
                      </div>
                      <div className='comment-ok'>
                        {login ? (<Button
                          color="secondary"
                          disabled={false}
                          size="small"
                          variant="filledTonal"
                          value="cancel"
                          onClick={() => comments()}
                        >Comment</Button>) : (<Button
                          color="secondary"
                          disabled={false}
                          size="small"
                          variant="filledTonal"
                          value="cancel"
                        >Comment</Button>)}
                      </div>
                    </div>
                  </div>
                  <div>
                    {commentData.length > 0 ? (commentData?.map((e, i) => (
                      <div key={i} className='comment-Head'>
                        <div>
                          {[users].length > 0 ? ([users].map(v => (<img className='user' style={{ width: "30px", marginRight: "10px" }} src={v.image} alt='my image' />))) : (<AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />)}
                        </div>
                        <div>
                          {[users].length > 0 ? ([users].map(e => (<p className='comment-paras'>{e.userName} <span><input id='like-count' value={timeShow} />Seconds</span></p>))) : (null)}
                          <p className='comment-paras1'>{e.para}</p>
                          <div className='comment-thump'>
                            <ThumbUpOffAltIcon onClick={commentLike} className='comment-color' />
                            <ThumbDownOffAltIcon onClick={commentLike1} className='comment-color1' />
                            <p>Replay</p>
                          </div>
                        </div>
                      </div>
                    ))) : ("")}

                  </div>
                </div>
              </div>
            })}
          </div>
          <div className='details-row-2'>
            <div id='details-filterbar'>
              <Stack className='filterbar-row' spacing={2} direction="row">
                <Tabs
                  value={value}
                  onChange={handleChange}
                  variant="scrollable"
                  scrollButtons
                  allowScrollButtonsMobile
                  aria-label="scrollable force tabs example">
                  <Tab label="All" onClick={() => setState(Objects)} className={`${valueCheck == 1 ? 'filter-tab' : ""}`} />
                  <Tab label="Mixes" onClick={() => setState(Objects.filter(e => e.mix === "mix"))} className={`${valueCheck == 2 ? 'filter-tab' : ""}`} />
                  <Tab label="Music" onClick={() => setState(Objects.filter(e => e.type === "music"))} className={`${valueCheck == 3 ? 'filter-tab' : ""}`} />
                  <Tab label="Gadgets" onClick={() => setState(Objects.filter(e => e.type === "gadgets"))} className={`${valueCheck == 4 ? 'filter-tab' : ""}`} />
                  <Tab label="Animated films" onClick={() => setState(Objects.filter(e => e.type === "animated"))} className={`${valueCheck == 5 ? 'filter-tab' : ""}`} />
                  <Tab label="Bikes" onClick={() => setState(Objects.filter(e => e.type === "bike"))} className={`${valueCheck == 6 ? 'filter-tab' : ""}`} />
                  <Tab label="Cars" onClick={() => setState(Objects.filter(e => e.type === "cars"))} className={`${valueCheck == 7 ? 'filter-tab' : ""}`} />
                  <Tab label="Cartoons" onClick={() => setState(Objects.filter(e => e.type === "cartoons"))} className={`${valueCheck == 8 ? 'filter-tab' : ""}`} />
                  <Tab label="Cooking" onClick={() => setState(Objects.filter(e => e.type === "cooking"))} className={`${valueCheck == 9 ? 'filter-tab' : ""}`} />
                  <Tab label="Games" onClick={() => setState(Objects.filter(e => e.type === "gaming"))} className={`${valueCheck == 10 ? 'filter-tab' : ""}`} />
                  <Tab label="News" onClick={() => setState(Objects.filter(e => e.type === "news"))} className={`${valueCheck == 11 ? 'filter-tab' : ""}`} />
                  <Tab label="Smart phones" onClick={() => setState(Objects.filter(e => e.type === "mobiles"))} className={`${valueCheck == 12 ? 'filter-tab' : ""}`} />
                  <Tab label="TNPSC" onClick={() => setState(Objects.filter(e => e.type === "tnpsc"))} className={`${valueCheck == 13 ? 'filter-tab' : ""}`} />
                </Tabs>
              </Stack>
            </div>
            {ObjectsVideo?.map((value, i) => {
              return <div key={i} className='details-card-2' onClick={() => oneVideo(value)}>
                <div className='details-right-video'>
                  <img className='details-right-image' src={(value.thump)} />
                </div>
                <div className='details-right-description'>
                  <div className='details-name'>
                    <h4>{value.name}</h4>
                  </div>
                  <div className='details-channel'>
                    <h3>{value.channel}</h3>
                  </div>
                  <div className='details-content'>
                    <div className='details-ago'>
                      <h5>52,808,527 views  Jan 10, 2015</h5>
                    </div>
                  </div>
                </div>
              </div>
            }
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default Details
