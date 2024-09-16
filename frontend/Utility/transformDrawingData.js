export const transformDrawingData = (title, description, elements) => {
  return {
    title,
    description,
    elements: elements.map((element) => ({
      type: element.type,
      color: element.properties.color,
      thickness: element.properties.thickness,
      content: element.properties.content || " null",
      coordinates: element.properties.coordinates.map((coordPair) =>
        coordPair.map((coord) => ({
          x: coord.x,
          y: coord.y,
        }))
      ),
    })),
  };
};
