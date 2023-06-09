import { useEffect, useRef } from 'react';
import { senReqAuth } from 'server/req-auth';
import { ActionLoad } from 'types/enums/actions';
import { LocalStorage } from 'types/enums/server';
import { ActionsReducer } from 'types/types/actions';

export const useSendAuth = (dispatch: React.Dispatch<ActionsReducer>) => {
  const ref = useRef(true);
  useEffect(() => {
    if (ref.current) {
      if (localStorage.getItem(LocalStorage.TOKEN)) {
        return;
      }
      dispatch({ type: ActionLoad.START, payload: 1 });
      senReqAuth()
        .then(() => {
          dispatch({ type: ActionLoad.END, payload: 1 });
        })
        .catch(() => {
          dispatch({ type: ActionLoad.ERROR, payload: true });
        });
    }
    ref.current = false;
  }, [dispatch]);
};
