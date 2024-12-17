/**
 * A `<hr>` element that spans the entire width of the viewport, even if the
 * parent has a margin/padding, while retaining vertical margins.
 */
export function HorizontalRule() {
  return (
    <hr className="my-5 -ml-[calc((100vw-100%)/2)] w-[100vw] border-b-2 border-gray-300" />
  );
}
