function generateDummyTags(count: number) {
  const dummyTags = [];
  for (let i = 0; i < count; i++) {
    const id = `tag${i + 1}`;
    const content = `Tag ${i + 1}`;
    const count = Math.floor(Math.random() * 100)
    dummyTags.push({ id, content, count });
  }
  return dummyTags;
}

export { generateDummyTags };
