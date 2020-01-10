import {
  APPEND_TO_HEAD_IMAGE_LIST,
  REMOVE_TO_HEAD_IMAGE_LIST,
  CLEAR_TO_HEAD_IMAGE_LIST
} from '../constants/counter'

const INITIAL_LIST = {
  url: []
}

export default function counter (state = INITIAL_LIST, action) {
    switch (action.type) {
      case APPEND_TO_HEAD_IMAGE_LIST:
        return {
          ...state,
          url: [...INITIAL_LIST, action.url]
        }
        case REMOVE_TO_HEAD_IMAGE_LIST:
         return {
           ...state,
          url: INITIAL_LIST.filter(url => url !== action.url)
         }
        case CLEAR_TO_HEAD_IMAGE_LIST:
         return state
       default:
         return state
    }
  }
