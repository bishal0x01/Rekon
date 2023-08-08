export function MenuItem(props) {
  return (
    <li className="capitalize text-[#d8d4d4] hover:text-white transition duration-400 cursor-pointer">
      <a href={props.link}>{props.item}</a>
    </li>
  );
}
