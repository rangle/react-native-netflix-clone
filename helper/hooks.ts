import {useEffect, useState} from 'react';
import {getListUrl, getMedia} from './api';
import {ListOption, Media} from './types';

export function useMediaList(option: ListOption): [Media[], any] {
  const [list, setList] = useState<Media[]>([]);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    const url: string = getListUrl(option.mediaType, option.id);
    getMedia(url)
      .then(({results}) => {
        setList(results);
        setError(null);
      })
      .catch(setError);
  }, [option]);
  return [list, error];
}
