export const excerpt = (description, length, delim, appendix) => {
  if (description.length <= length) return description

  let trimmedStr = description.substr(0, length)

  //   let lastDelimIndex = trimmedStr.lastIndexOf(delim)
  //   if (lastDelimIndex >= 0) trimmedStr = trimmedStr.substr(0, lastDelimIndex)

  //   if (trimmedStr) trimmedStr += appendix

  return trimmedStr + "..."
}
