export async function onBeforePrerenderStart() {
  console.log('PRERENDER RUN');
  return [
    {
      url: '/star-wars',
    }
  ]
}
