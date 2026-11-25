import { Icon, type IconName } from "./Icon";

/** 52 px bordered square holding a 28 px blue line icon. */
export function IconBox({ name }: { name: IconName }) {
  return (
    <div className="flex h-13 w-13 items-center justify-center border border-line-strong">
      <Icon name={name} size={28} className="block flex-none text-blue-text" />
    </div>
  );
}
