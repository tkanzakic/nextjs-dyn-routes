import { getContent } from '../lib/getContent';
import { Page } from '../src/page';

const getSlug = (path) => (Array.isArray(path) ? path.join('/') : path);

export const getServerSideProps = async ({ params }) => {
  const content = await getContent(getSlug(params.slug));
  return {
    props: { content },
  };
};

export default Page;
