export default function AppHeader({ name, color }: {name: string, color?: string}) {
  return (
    <>
      <h2 className={`${color ? `text-${color}` : ''} font-bold text-2xl`}>{name}</h2>
    </>
  );
}
