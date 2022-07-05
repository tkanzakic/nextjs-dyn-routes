import { getContent, getStaticRoutes } from '../lib/getContent';
import { Page } from '../src/page';

export const getStaticPaths = async () => {
  const routes = await getStaticRoutes();
  console.log(routes);
  return {
    paths: routes.map((slug) => ({ params: { slug } })),
    fallback: false,
  };
};

const getSlug = (path) => (Array.isArray(path) ? path.join('/') : path);

export const getStaticProps = async ({ params }) => {
  const content = await getContent(getSlug(params.slug));
  return {
    props: { content },
  };
};

export default Page;
