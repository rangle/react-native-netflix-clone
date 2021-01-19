import {useEffect, useState} from 'react';
import {getListUrl, getMedia} from './api';
import {ListOption, Movie} from './types';

export function useMediaList(option: ListOption): [Movie[], any] {
  const [list, setList] = useState<Movie[]>([]);
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
