import {useEffect, useState} from 'react';
import {ListOption} from '../types/ListOption.type';
import {Media} from '../types/Media.type';
import {MediaDetail} from './../types/MediaDetail.type';
import {Recommendation} from './../types/Recommendations.type';
import {getDetails, getMediaList, getRecommendations} from './api';

export function useMediaList(option: ListOption): [Media[], any] {
  const [list, setList] = useState<Media[]>([]);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    getMediaList(option.mediaType, option.id)
      .then(({results}) => {
        const data = results.map((media) => ({
          ...media,
          mediaType: option.mediaType || null,
        }));
        setList(data);
        setError(null);
      })
      .catch(setError);
  }, [option]);
  return [list, error];
}

export function useItemDetail(item: Media): [MediaDetail, any] {
  const [detail, setDetail] = useState<MediaDetail>({} as any);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    getDetails(item)
      .then(([details, rating]) => {
        setDetail({...details, rating});
        setError(null);
      })
      .catch(setError);
  }, [item]);

  return [detail, error];
}

export function useRecommendations(item: Media): [Recommendation[], any] {
  const [recommendation, setRecommendation] = useState<Recommendation[]>([]);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    getRecommendations(item)
      .then((recommendations) => {
        setRecommendation(recommendations);
        setError(null);
      })
      .catch(setError);
  }, [item]);

  return [recommendation, error];
}
