type Props = {
  title: string;
  image: string;
  count: number | undefined;
};

export function CardDashboard({ title, image, count }: Props) {
  return (
    <div className="w-48 h-48 flex flex-col items-center justify-around dark:bg-zinc-900 bg-zinc-100 rounded-lg">
      <h2 className="dark:text-zinc-100 text-zinc-900 text-2xl">{title}</h2>
      <img className="w-12 h-12" src={image} alt={title} />
      <span className="dark:text-zinc-100 text-zinc-900 text-2xl">{count}</span>
    </div>
  );
}
