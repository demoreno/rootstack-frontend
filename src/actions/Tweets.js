export const ACTIONS = {
  FILTER_TWEET: 'FILTER_TWEET'
};

export function filterTweets(type) {
  return (dispatch) => {
    dispatch({
      type: ACTIONS.FILTER_TWEET,
      payload: type
    });
  };
}
