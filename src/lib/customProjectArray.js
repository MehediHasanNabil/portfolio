const expectedProject = [436482404, 414427072, 414078903, 270569650, 343770107];

export default function customProjectArray(project, limit) {
  const projectArray = [];

  for (let i of expectedProject) {
    project &&
      project.filter((proj) => proj.id === i && projectArray.push(proj));
  }

  if (limit) {
    return projectArray.slice(0, limit);
  } else {
    return projectArray;
  }
}
