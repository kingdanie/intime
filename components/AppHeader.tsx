export default function AppHeader({ name, color }: {name: string, color?: string}) {
  return (
    <>
      <h2 className={`${color ? `text-${color}` : ''} capitalize font-bold text-2xl`}>{name}</h2>
    </>
  );
}
