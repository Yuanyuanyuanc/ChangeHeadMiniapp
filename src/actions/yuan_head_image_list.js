import {
  APPEND_TO_HEAD_IMAGE_LIST,
  REMOVE_TO_HEAD_IMAGE_LIST,
  CLEAR_TO_HEAD_IMAGE_LIST
} from '../constants/counter'
  
export const appendImageUrl = url => {
  return {
    type: APPEND_TO_HEAD_IMAGE_LIST,
    url
  }
}

export const removeImageUrl = url => {
  return {
    type: REMOVE_TO_HEAD_IMAGE_LIST,
    url
  }
}

export const clearImageList = () => {
  return {
    type: CLEAR_TO_HEAD_IMAGE_LIST
  }
}
  