import { MenuItem } from "./MenuItem";

export function Menu() {
  return (
    <>
      <div className="menu w-full flex">
        <ul className="md:gap-10 flex justify-between w-full px-8 pt-10 md:pt-0">
          <MenuItem item="docs"></MenuItem>
          <MenuItem item="features"></MenuItem>
          <MenuItem item="pricing"></MenuItem>
          <MenuItem item="contact"></MenuItem>
        </ul>
      </div>
    </>
  );
}
