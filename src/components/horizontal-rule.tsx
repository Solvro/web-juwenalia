/**
 * A `<hr>` element that spans the entire width of the viewport, even if the
 * parent has a margin/padding, while retaining vertical margins.
 */
export function HorizontalRule() {
  return <hr className="my-5 h-[1.5px] w-full bg-gray-300" />;
}
