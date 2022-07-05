import { getContent } from '../lib/getContent';
import { Page } from '../src/page';

export const getStaticProps = async () => {
  const content = await getContent('/');
  return {
    props: { content },
  };
};

export default Page;
