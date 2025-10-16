import useSWR from 'swr'; // this is for your code

const fetcher = (url) => fetch(url).then(res => res.json());

export default function MyComponent() {
  const { data, error } = useSWR('/api/data', fetcher);

  if (error) return <div>Error</div>;
  if (!data) return <div>Loading...</div>;

  return <div>{data.message}</div>;
}
