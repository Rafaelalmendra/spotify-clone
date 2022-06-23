import { useEffect, useState } from 'react';

//hooks
import useAxiosFetch from 'src/hooks/useAxiosFetch';

//components
import Card from 'src/components/Card';

//styles
import * as S from './styles';

interface EpisodiesProps {
  name: string;
  id: string;
  images: [
    {
      url: string;
    }
  ];
  publisher: string;
}

const Episodies = () => {
  const { data } = useAxiosFetch('episodes', 7);
  const [episodies, setEpisodies] = useState<EpisodiesProps[]>([]);

  useEffect(() => {
    setEpisodies(data.episodes);
  }, [data]);

  return (
    <S.EpisodiesContainer>
      {episodies?.map((item) => (
        <Card key={item?.id} title={item?.name} image={item?.images[0]?.url} />
      ))}
    </S.EpisodiesContainer>
  );
};

export default Episodies;
