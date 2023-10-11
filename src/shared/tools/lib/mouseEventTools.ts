export function calcMouseCoordinates(event: MouseEvent): { x: number; y: number } {
  const { target } = event;
  if (
    target
    && "offsetLeft" in target
    && typeof target.offsetLeft === "number"
    && "offsetTop" in target
    && typeof target.offsetTop === "number"
  ) {
    return {
      x: event.pageX - target.offsetLeft,
      y: event.pageY - target.offsetTop
    };
  }

  return {
    x: 0,
    y: 0
  };
}
