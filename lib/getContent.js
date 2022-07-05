const data = {
  '/': 'Home page',
  'static-1': 'Page with static content 1',
  'static-2': 'Page with static content 2',
  'static-3': 'Page with static content 3',
  'dynamic-1-a': 'Page with dynamic content 1-a',
  'dynamic-1-b': 'Page with dynamic content 1-b',
  'dynamic-2-a': 'Page with dynamic content 2-a',
  'dynamic-2-b': 'Page with dynamic content 2-b',
  'dynamic-3-a': 'Page with dynamic content 3-a',
  'dynamic-3-b': 'Page with dynamic content 3-b',
  'long/dynamic': 'Page with long dynamic route content. This works as expected.',
};

export const getContent = async (slug) => {
  if (slug.startsWith('dynamic')) {
    const suffix = Math.random() >= 0.5 ? '-a' : '-b';
    return Promise.resolve(data[slug + suffix]);
  }
  const result = data[slug];
  console.log(slug, result);
  return Promise.resolve(result);
};

export const getStaticRoutes = async () => Promise.resolve(Object.keys(data).filter((s) => s.startsWith('static')));
