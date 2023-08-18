export default function MenuItem(props: any) {
  return (
    <div className="flex gap-2 py-3 cursor-pointer px-4 rounded-lg w-full hover:bg-zinc-700"> 
      <div className="icon">
        <div dangerouslySetInnerHTML={{__html:props.icon}} />
      </div>
      <div className="hidden md:block name capitalize">{props.name}</div>
    </div>
  );
}